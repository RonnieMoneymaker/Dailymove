Param(
  [int]$IntervalSec = $(if ($env:AUTOSYNC_INTERVAL_SEC) { [int]$env:AUTOSYNC_INTERVAL_SEC } else { 60 })
)

Write-Host "Auto-sync running every $IntervalSec seconds. Press Ctrl+C to stop."

while ($true) {
  try {
    $status = git status --porcelain 2>$null
    if ($LASTEXITCODE -ne 0) {
      Start-Sleep -Seconds $IntervalSec
      continue
    }

    if ($null -ne $status -and $status.Trim().Length -gt 0) {
      git add -A | Out-Null
      $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
      git commit -m "chore: autosync $timestamp" | Out-Null
    }

    git pull --rebase | Out-Null
    git push | Out-Null
  } catch {
    # ignore transient errors and keep looping
  }

  Start-Sleep -Seconds $IntervalSec
}


