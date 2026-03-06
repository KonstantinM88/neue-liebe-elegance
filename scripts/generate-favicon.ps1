param(
  [string]$IcoPath = "",
  [string]$SvgPath = ""
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
if (-not $IcoPath) {
  $IcoPath = Join-Path $projectRoot "public\favicon.ico"
}
if (-not $SvgPath) {
  $SvgPath = Join-Path $projectRoot "public\favicon.svg"
}

function Get-Color([string]$hex) {
  return [System.Drawing.ColorTranslator]::FromHtml($hex)
}

function New-RoundedRectPath(
  [single]$x,
  [single]$y,
  [single]$width,
  [single]$height,
  [single]$radius
) {
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $diameter = [single]($radius * 2)

  $path.AddArc($x, $y, $diameter, $diameter, 180, 90)
  $path.AddArc($x + $width - $diameter, $y, $diameter, $diameter, 270, 90)
  $path.AddArc($x + $width - $diameter, $y + $height - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($x, $y + $height - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()

  return $path
}

function New-Rect(
  [single]$scale,
  [single]$x,
  [single]$y,
  [single]$width,
  [single]$height
) {
  return [System.Drawing.RectangleF]::new(
    [single]($x * $scale),
    [single]($y * $scale),
    [single]($width * $scale),
    [single]($height * $scale)
  )
}

function Get-DiagonalPoints(
  [single]$scale,
  [single]$offsetX,
  [single]$offsetY
) {
  return [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new([single](($offsetX + 96) * $scale), [single](($offsetY + 56) * $scale)),
    [System.Drawing.PointF]::new([single](($offsetX + 126) * $scale), [single](($offsetY + 56) * $scale)),
    [System.Drawing.PointF]::new([single](($offsetX + 176) * $scale), [single](($offsetY + 200) * $scale)),
    [System.Drawing.PointF]::new([single](($offsetX + 146) * $scale), [single](($offsetY + 200) * $scale))
  )
}

function Fill-RoundedRect(
  [System.Drawing.Graphics]$graphics,
  [System.Drawing.Brush]$brush,
  [System.Drawing.RectangleF]$rect,
  [single]$radius
) {
  $path = New-RoundedRectPath $rect.X $rect.Y $rect.Width $rect.Height $radius
  try {
    $graphics.FillPath($brush, $path)
  }
  finally {
    $path.Dispose()
  }
}

function New-IconBitmap([int]$size) {
  $bitmap = [System.Drawing.Bitmap]::new($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

  try {
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.Clear([System.Drawing.Color]::Transparent)

    $scale = [single]($size / 256.0)
    $cornerRadius = [single](54 * $scale)
    $frame = New-Rect $scale 18 18 220 220
    $framePath = New-RoundedRectPath $frame.X $frame.Y $frame.Width $frame.Height $cornerRadius
    $monogramRadius = [single](7 * $scale)

    $backgroundBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
      [System.Drawing.PointF]::new(0, 0),
      [System.Drawing.PointF]::new([single]$size, [single]$size),
      (Get-Color "#100b09"),
      (Get-Color "#251a15")
    )

    $glowRect = New-Rect $scale 114 18 106 86
    $glowPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $glowPath.AddEllipse($glowRect)
    $glowBrush = [System.Drawing.Drawing2D.PathGradientBrush]::new($glowPath)
    $glowBrush.CenterColor = [System.Drawing.Color]::FromArgb(86, 224, 188, 109)
    $glowBrush.SurroundColors = [System.Drawing.Color[]]@([System.Drawing.Color]::FromArgb(0, 224, 188, 109))

    $shadowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(72, 12, 8, 6))
    $goldBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
      [System.Drawing.PointF]::new(0, [single](52 * $scale)),
      [System.Drawing.PointF]::new(0, [single](204 * $scale)),
      (Get-Color "#f1ddb2"),
      (Get-Color "#b8833e")
    )
    $goldBrush.SetBlendTriangularShape(0.36, 1.0)

    $highlightPen = [System.Drawing.Pen]::new(
      [System.Drawing.Color]::FromArgb(70, 255, 245, 222),
      [single]([Math]::Max(1.0, 2.1 * $scale))
    )
    $highlightPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $highlightPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

    $borderPen = [System.Drawing.Pen]::new(
      [System.Drawing.Color]::FromArgb(160, 198, 150, 85),
      [single]([Math]::Max(1.25, 3 * $scale))
    )

    try {
      $graphics.FillPath($backgroundBrush, $framePath)
      $graphics.FillEllipse($glowBrush, $glowRect)

      Fill-RoundedRect $graphics $shadowBrush (New-Rect $scale 78 62 24 144) $monogramRadius
      Fill-RoundedRect $graphics $shadowBrush (New-Rect $scale 166 62 24 108) $monogramRadius
      Fill-RoundedRect $graphics $shadowBrush (New-Rect $scale 166 182 42 24) $monogramRadius
      $graphics.FillPolygon($shadowBrush, (Get-DiagonalPoints $scale 6 6))

      Fill-RoundedRect $graphics $goldBrush (New-Rect $scale 72 56 24 144) $monogramRadius
      Fill-RoundedRect $graphics $goldBrush (New-Rect $scale 160 56 24 108) $monogramRadius
      Fill-RoundedRect $graphics $goldBrush (New-Rect $scale 160 176 42 24) $monogramRadius
      $graphics.FillPolygon($goldBrush, (Get-DiagonalPoints $scale 0 0))

      $graphics.DrawLine($highlightPen, [single](78 * $scale), [single](62 * $scale), [single](78 * $scale), [single](194 * $scale))
      $graphics.DrawLine($highlightPen, [single](103 * $scale), [single](62 * $scale), [single](151 * $scale), [single](194 * $scale))
      $graphics.DrawLine($highlightPen, [single](166 * $scale), [single](62 * $scale), [single](166 * $scale), [single](158 * $scale))

      $graphics.DrawPath($borderPen, $framePath)
    }
    finally {
      $backgroundBrush.Dispose()
      $glowBrush.Dispose()
      $glowPath.Dispose()
      $shadowBrush.Dispose()
      $goldBrush.Dispose()
      $highlightPen.Dispose()
      $borderPen.Dispose()
      $framePath.Dispose()
    }

    return $bitmap
  }
  catch {
    $bitmap.Dispose()
    throw
  }
  finally {
    $graphics.Dispose()
  }
}

function Get-PngBytes([System.Drawing.Bitmap]$bitmap) {
  $memory = [System.IO.MemoryStream]::new()
  try {
    $bitmap.Save($memory, [System.Drawing.Imaging.ImageFormat]::Png)
    return $memory.ToArray()
  }
  finally {
    $memory.Dispose()
  }
}

function Save-Ico([string]$path, [int[]]$sizes) {
  $entries = @()

  foreach ($size in $sizes) {
    $bitmap = New-IconBitmap $size
    try {
      $entries += [pscustomobject]@{
        Size = $size
        Bytes = Get-PngBytes $bitmap
      }
    }
    finally {
      $bitmap.Dispose()
    }
  }

  $stream = [System.IO.MemoryStream]::new()
  $writer = [System.IO.BinaryWriter]::new($stream)
  $offset = 6 + (16 * $entries.Count)

  try {
    $writer.Write([UInt16]0)
    $writer.Write([UInt16]1)
    $writer.Write([UInt16]$entries.Count)

    foreach ($entry in $entries) {
      $dimension = if ($entry.Size -ge 256) { 0 } else { $entry.Size }
      $writer.Write([byte]$dimension)
      $writer.Write([byte]$dimension)
      $writer.Write([byte]0)
      $writer.Write([byte]0)
      $writer.Write([UInt16]1)
      $writer.Write([UInt16]32)
      $writer.Write([UInt32]$entry.Bytes.Length)
      $writer.Write([UInt32]$offset)
      $offset += $entry.Bytes.Length
    }

    foreach ($entry in $entries) {
      $writer.Write([byte[]]$entry.Bytes)
    }

    [System.IO.File]::WriteAllBytes($path, $stream.ToArray())
  }
  finally {
    $writer.Dispose()
    $stream.Dispose()
  }
}

$svg = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" role="img" aria-label="Neue Liebe favicon">
  <defs>
    <linearGradient id="bg" x1="28" y1="22" x2="228" y2="234" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#100b09" />
      <stop offset="1" stop-color="#251a15" />
    </linearGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(175 62) rotate(145) scale(84 60)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#e0bc6d" stop-opacity=".42" />
      <stop offset="1" stop-color="#e0bc6d" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="gold" x1="82" y1="56" x2="176" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f1ddb2" />
      <stop offset=".52" stop-color="#d1aa67" />
      <stop offset="1" stop-color="#b8833e" />
    </linearGradient>
  </defs>

  <rect x="18" y="18" width="220" height="220" rx="54" fill="url(#bg)" />
  <ellipse cx="168" cy="64" rx="72" ry="54" fill="url(#glow)" />
  <rect x="18" y="18" width="220" height="220" rx="54" fill="none" stroke="#c69655" stroke-opacity=".62" stroke-width="3" />

  <g fill="#0a0705" opacity=".28" transform="translate(6 6)">
    <rect x="72" y="56" width="24" height="144" rx="7" />
    <polygon points="96 56 126 56 176 200 146 200" />
    <rect x="160" y="56" width="24" height="108" rx="7" />
    <rect x="160" y="176" width="42" height="24" rx="7" />
  </g>

  <g fill="url(#gold)">
    <rect x="72" y="56" width="24" height="144" rx="7" />
    <polygon points="96 56 126 56 176 200 146 200" />
    <rect x="160" y="56" width="24" height="108" rx="7" />
    <rect x="160" y="176" width="42" height="24" rx="7" />
  </g>

  <g stroke="#fff5de" stroke-opacity=".26" stroke-width="2.2" stroke-linecap="round">
    <path d="M78 62v132" />
    <path d="M103 62l48 132" />
    <path d="M166 62v96" />
  </g>
</svg>
"@

$publicDir = Split-Path -Parent $IcoPath
if (-not (Test-Path $publicDir)) {
  New-Item -ItemType Directory -Path $publicDir | Out-Null
}

[System.IO.File]::WriteAllText($SvgPath, $svg, [System.Text.Encoding]::UTF8)
Save-Ico -Path $IcoPath -sizes @(16, 32, 48, 64, 128, 256)
Write-Host "Generated $SvgPath"
Write-Host "Generated $IcoPath"
