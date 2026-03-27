param(
  [Parameter(Mandatory = $false)]
  [string]$Command,

  [Parameter(Mandatory = $false)]
  [ValidateSet("global", "project")]
  [string]$Scope,

  [Parameter(Mandatory = $false)]
  [string]$RepoPath,

  [switch]$WithScripts,

  [switch]$List
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeScript = Join-Path $scriptDir "install-slash-command.mjs"

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Error "Node.js is required to run install-slash-command.mjs"
  exit 1
}

$argsList = @()

if ($List) {
  $argsList += "--list"
}
else {
  if (-not $Command -or -not $Scope) {
    Write-Error "Please provide -Command and -Scope, or use -List."
    exit 1
  }

  $argsList += "--command"
  $argsList += $Command
  $argsList += "--scope"
  $argsList += $Scope

  if ($RepoPath) {
    $argsList += "--repo"
    $argsList += $RepoPath
  }

  if ($WithScripts) {
    $argsList += "--with-scripts"
  }
}

& node $nodeScript @argsList
exit $LASTEXITCODE
