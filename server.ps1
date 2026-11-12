$port = 3000
$root = "D:\new website"

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".htm"   = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".gif"   = "image/gif"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
    ".xml"   = "application/xml; charset=utf-8"
    ".txt"   = "text/plain; charset=utf-8"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
    ".mp4"   = "video/mp4"
    ".webm"  = "video/webm"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Prefixes.Add("http://127.0.0.1:$port/")
} catch {}

try {
    $listener.Start()
} catch {
    # If 3000 is occupied, try 8080
    $port = 8080
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    try {
        $listener.Prefixes.Add("http://127.0.0.1:$port/")
    } catch {}
    $listener.Start()
}

Write-Host "=================================================="
Write-Host "Make Xora Local Server is RUNNING at:"
Write-Host "  -> http://localhost:$port/"
Write-Host "Serving files from: $root"
Write-Host "=================================================="

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")

        if ($request.HttpMethod -eq "OPTIONS") {
            $response.StatusCode = 200
            $response.Close()
            continue
        }

        # Clean URL path
        $rawUrl = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)
        if ($rawUrl -eq "/" -or [string]::IsNullOrWhiteSpace($rawUrl)) {
            $rawUrl = "/index.html"
        }

        $relPath = $rawUrl.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::Combine($root, $relPath)

        if (-not (Test-Path $filePath -PathType Leaf) -and (Test-Path ($filePath + ".html") -PathType Leaf)) {
            $filePath = $filePath + ".html"
        }

        if (Test-Path $filePath -PathType Container) {
            $indexPath = [System.IO.Path]::Combine($filePath, "index.html")
            if (Test-Path $indexPath -PathType Leaf) {
                $filePath = $indexPath
            }
        }

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("<html><body><h1>404 Not Found</h1><p>The requested file does not exist.</p></body></html>")
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    } catch {
        # Client disconnect or abort
    }
}

