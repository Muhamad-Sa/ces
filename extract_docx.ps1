Add-Type -AssemblyName System.IO.Compression.FileSystem
$docxPath = 'C:\Users\moham\OneDrive\Desktop\Max\CES Website Content and Sections.docx'
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
$entry = $zip.GetEntry('word/document.xml')
if ($entry -eq $null) {
    Write-Error "word/document.xml not found in DOCX archive"
    exit 1
}
$reader = New-Object System.IO.StreamReader($entry.Open())
$content = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()
Set-Content -Path extracted_document_xml.txt -Value $content -Encoding UTF8
Write-Host "Extracted document XML saved to extracted_document_xml.txt"
