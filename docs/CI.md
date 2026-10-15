# GitHub builds

The [build workflow](../.github/workflows/build.yml) runs on pushes and pull requests to `main`, and can also be started from the repository's Actions tab. It uses the Node version in `.nvmrc`, locked npm dependencies, and the same preparation scripts used locally. Those scripts verify the speech model archives and native libraries against pinned checksums before installing them.

The job builds the app, runs the unit and native speech tests, and runs the browser suite using the matching Playwright Chromium. It then builds a Windows x64 portable executable on Linux and creates an editable source ZIP. Successful runs retain both files and `SHA256SUMS.txt` in the `Hanlin-windows-x64` workflow artifact for 14 days. Download that artifact from the completed run's page. Browser failure reports are retained for seven days.

The workflow needs no repository secrets and has read-only repository permissions. The source archive includes the workflow but excludes the uploaded PDFs, dependency folders, and model/native binaries; preparation scripts download verified assets when rebuilding. GitHub artifacts are build downloads, not permanent GitHub Releases. This workflow does not execute the Windows app on Windows hardware or check a physical microphone.
