# Hanlin downloads

This folder contains the current Hanlin 2.1.0 release:

| File | Purpose |
| --- | --- |
| [Hanlin-2.1.0-windows-x64-portable.exe](Hanlin-2.1.0-windows-x64-portable.exe) | Ready-to-run app for Windows 10 or later, 64 bit; includes the dictionary and offline Mandarin recognition and narration models. |
| [Hanlin-2.1.0-source.zip](Hanlin-2.1.0-source.zip) | Editable app source, dictionary data, tests, licenses, and preparation scripts. |
| [SHA256SUMS.txt](SHA256SUMS.txt) | SHA-256 integrity values for both files. |

## Download and run

Open the executable's GitHub file page and choose **Download raw file**. The 275 MiB executable is stored with Git LFS. Run the downloaded executable directly; Node.js and development tools are only needed when rebuilding from source.

When cloning with Git, install [Git LFS](https://git-lfs.com/), then run these commands in the repository:

```sh
git lfs install
git lfs pull
```

The executable should be 288,094,508 bytes after retrieval. Progress is saved in the user's application data. Use Settings to export a backup when moving to another computer.

To verify a download on Windows, compare the result of the following PowerShell command with the matching line in `SHA256SUMS.txt`:

```powershell
Get-FileHash .\Hanlin-2.1.0-windows-x64-portable.exe -Algorithm SHA256
```

## Source and rebuilds

The source ZIP contains the editable application and dictionary, plus the `.gitattributes` configuration and this guide. Follow the root README to install dependencies and recreate the verified speech model/native files when rebuilding. The ready-to-run executable already contains those resources.

All application source, stories, grammar lessons, icons, dependency lockfiles, build/test configuration, and license notices are tracked in the repository. Dependency caches, test reports, unpacked build directories, debug logs, older local builds, and downloaded model binaries are reproducible build files and remain ignored. Uploaded textbook PDFs and extracted reference material are not part of the public project.

The [GitHub workflow](../.github/workflows/build.yml) can create fresh Windows builds and downloadable workflow artifacts. Publishing a newer version into this folder also requires adding its release filenames to `.gitignore` and committing its executable through Git LFS, source ZIP, and updated checksums.
