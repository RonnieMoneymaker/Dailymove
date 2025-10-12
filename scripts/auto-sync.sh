#!/usr/bin/env bash
set -euo pipefail

INTERVAL_SEC="${AUTOSYNC_INTERVAL_SEC:-60}"
echo "Auto-sync running every ${INTERVAL_SEC}s. Press Ctrl+C to stop."

while true; do
  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    sleep "${INTERVAL_SEC}"
    continue
  fi

  if [ -n "$(git status --porcelain)" ]; then
    git add -A >/dev/null 2>&1 || true
    ts=$(date '+%Y-%m-%d %H:%M:%S')
    git commit -m "chore: autosync ${ts}" >/dev/null 2>&1 || true
  fi

  git pull --rebase >/dev/null 2>&1 || true
  git push >/dev/null 2>&1 || true

  sleep "${INTERVAL_SEC}"
done


