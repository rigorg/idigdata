# Re-apply the local publish fence. Safe to run more than once.
# Does not change user.name / user.email.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$hookSrc = Join-Path $root ".githooks\pre-push"
$hookDst = Join-Path $root ".git\hooks\pre-push"
if (-not (Test-Path $hookSrc)) { throw "missing $hookSrc" }
New-Item -ItemType Directory -Force -Path (Split-Path $hookDst) | Out-Null
Copy-Item $hookSrc $hookDst -Force

git remote set-url --push origin "no-push://idigdata-fenced-until-capo-ship"

Write-Host "idigdata fence on: local commits OK, push disabled."
Write-Host "Capo-eyes: http://localhost:3100"
git remote -v
