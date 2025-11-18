# Use the current directory as the project directory
$projectDir = Get-Location

# Use a fixed name for the output file in the current directory
$outputFile = Join-Path $projectDir "code_context.txt"

# Check if the output file exists and remove it if it does
if (Test-Path $outputFile) {
    Remove-Item $outputFile
}

# List of directories to look for
$directories = @("components", "pages", "app", "api", "styles", "utils", "hooks", "constants", "services", "types")

# List of file types to ignore
$ignoreFiles = @("*.ico", "*.png", "*.jpg", "*.jpeg", "*.gif", "*.svg")

# Function to read files and append their content
function Read-Files {
    param (
        [string]$path
    )

    Get-ChildItem -Path $path -Recurse | ForEach-Object {
        if ($_ -is [System.IO.DirectoryInfo]) {
            # If entry is a directory, call this function recursively
            Read-Files -path $_.FullName
        }
        elseif ($_ -is [System.IO.FileInfo]) {
            # Check if the file type should be ignored
            $shouldIgnore = $false
            foreach ($ignorePattern in $ignoreFiles) {
                if ($_ -like $ignorePattern) {
                    $shouldIgnore = $true
                    break
                }
            }

            # If the file type should not be ignored, append its relative path and content to the output file
            if (-not $shouldIgnore) {
                $relativePath = $_.FullName.Substring($projectDir.Length + 1)
                Add-Content -Path $outputFile -Value "// File: $relativePath"
                Get-Content $_.FullName | Add-Content -Path $outputFile
                Add-Content -Path $outputFile -Value ""
            }
        }
    }
}

# Call the function for each specified directory in the project directory
foreach ($dir in $directories) {
    $fullDir = Join-Path $projectDir $dir
    if (Test-Path $fullDir) {
        Read-Files -path $fullDir
    }
}
