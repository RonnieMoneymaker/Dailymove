#!/usr/bin/env node
const { execSync } = require('child_process')

function tryExec(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit' })
    return true
  } catch (e) {
    return false
  }
}

function detectGit() {
  if (tryExec('git --version')) return 'git'
  const winGit = '"C:/Program Files/Git/cmd/git.exe"'
  if (tryExec(`${winGit} --version`)) return winGit
  throw new Error('Git not found in PATH. Install Git or update PATH.')
}

const GIT = detectGit()

const args = process.argv.slice(2)
const message = args.length > 0 ? args.join(' ') : `update: ${new Date().toISOString()}`

// Stage changes
tryExec(`${GIT} add -A`)

// Commit (ignore if nothing to commit)
try {
  execSync(`${GIT} commit -m "${message.replace(/"/g, '\\"')}"`, { stdio: 'inherit' })
} catch (_) {}

// Rebase pull and push
tryExec(`${GIT} pull --rebase`)
tryExec(`${GIT} push`)

console.log('✅ Pushed to GitHub')


