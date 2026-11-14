# Continuous Deployment to Cloudflare Pages

Every future modification to the Make Xora website must immediately be pushed to GitHub (`ataursearch/makexora`) and deployed live to Cloudflare Pages (`https://makexora.pages.dev/`) by executing:
```powershell
powershell -ExecutionPolicy Bypass -File "d:\new website\deploy.ps1" -CommitMessage "<change summary>"
```
Never leave any edits solely local. Always verify the live Cloudflare production endpoint returns HTTP 200.

