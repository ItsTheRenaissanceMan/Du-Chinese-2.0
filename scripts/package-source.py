"""Create an editable source backup, excluding dependencies and speech binaries."""
from pathlib import Path
import json
import zipfile

root = Path(__file__).resolve().parent.parent
version = json.loads((root / "package.json").read_text(encoding="utf-8"))["version"]
target = root / "release" / f"Hanlin-{version}-source.zip"
target.parent.mkdir(exist_ok=True)
files = {
    ".gitignore", ".npmrc", ".nvmrc", "LICENSE", "README.md", "index.html",
    "package.json", "package-lock.json", "tsconfig.json", "vite.config.ts",
    "vitest.config.ts", "playwright.config.ts", "resources/icon.png", "resources/icon.ico",
}
for directory in (".github", "src", "electron", "scripts", "tests", "docs", "public"):
    for item in (root / directory).rglob("*"):
        if item.is_file() and not item.is_symlink() and "__pycache__" not in item.parts:
            files.add(item.relative_to(root).as_posix())

with zipfile.ZipFile(target, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    for relative in sorted(files):
        item = root / relative
        if not item.is_file() or item.is_symlink():
            raise RuntimeError(f"Source file missing or unsafe: {relative}")
        archive.write(item, f"Hanlin-{version}/{relative}")

with zipfile.ZipFile(target) as archive:
    if archive.testzip() is not None:
        raise RuntimeError("Source ZIP failed its CRC integrity check")
    assert all("node_modules/" not in item.filename and "/models/" not in item.filename
               for item in archive.infolist() if not item.filename.endswith(".gitkeep"))
print(f"Source backup: {target} ({target.stat().st_size:,} bytes)")
