# Capo Ship only. Agents must not run this.
# Restores GitHub push URL. Does not push.
$ErrorActionPreference = "Stop"
if ($env:CAPO_SHIP -ne "1") {
  Write-Host "REFUSED: agents do not unlock. Capo Ship sets CAPO_SHIP=1."
  exit 1
}
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root
git remote set-url --push origin "https://github.com/rigorg/idigdata.git"
Write-Host "Push URL restored. Publish still needs IDIGDATA_SHIP=1 git push."
git remote -v
