param(
  [string]$Url = "https://jaei-web.vercel.app/api/guestbook-keepalive",
  [string]$LogDir = "$PSScriptRoot\..\.openclaw\logs"
)

$ErrorActionPreference = 'Stop'

New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
$logPath = Join-Path $LogDir 'jaei-guestbook-keepalive.log'

function Write-Log {
  param([string]$Message)
  $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
  Add-Content -Path $logPath -Value "[$timestamp] $Message"
}

try {
  Write-Log "Starting keepalive request: $Url"
  $response = Invoke-RestMethod -Method Get -Uri $Url -TimeoutSec 60
  $json = $response | ConvertTo-Json -Compress
  Write-Log "Success: $json"
  exit 0
} catch {
  Write-Log "Failure: $($_.Exception.Message)"
  exit 1
}
