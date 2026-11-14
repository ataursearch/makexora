# Make Xora — Workspace Rules & Deployment Standard

## Continuous Cloudflare Deployment Rule (STRICT)

Whenever any edit, redesign, copy update, bug fix, or new asset is created in this project (`d:\new website\`):
1. **Always Deploy Live to Cloudflare Pages:**
   - Execute the automated deployer:
     ```powershell
     powershell -ExecutionPolicy Bypass -File "d:\new website\deploy.ps1" -CommitMessage "<Summary of changes>"
     ```
   - This pushes all updated files to GitHub (`https://github.com/ataursearch/makexora`) and triggers a production deployment to Cloudflare Pages (`https://makexora.pages.dev/`).
2. **Verify Live Production:**
   - Confirm that `https://makexora.pages.dev/` and any modified subpages return HTTP 200 OK.
3. **Local Dev Server:**
   - Ensure `server.ps1` remains active on `http://localhost:3000/` for immediate local inspection.

