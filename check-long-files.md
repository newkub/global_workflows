---
title: Check Long Files
description: ตรวจสอบไฟล์ที่ยาวกว่า threshold ที่กำหนด
auto_execution_mode: 3
related_workflows:
  - /use-scripts
---

## Goal

ตรวจสอบและรายงานไฟล์ที่ยาวกว่า threshold ที่กำหนด

## Scope

ใช้สำหรับตรวจสอบไฟล์ที่ยาวกว่า threshold ในทุกภาษา

## Execute

### Check Prerequisites

ตรวจสอบว่ามี `fd` tool ติดตั้งหรือไม่

```bash
fd --version
```

ถ้าไม่มี `fd` ให้ติดตั้งด้วย:
- Windows: `scoop install fd` หรือ `winget install sharkdp.fd`
- macOS: `brew install fd`
- Linux: ดูที่ https://github.com/sharkdp/fd

### Run Command

รัน PowerShell function โดยตรงเพื่อตรวจสอบไฟล์ที่ยาว

```bash
pwsh -NoProfile -Command "
function loc {
    param([int]$threshold = 200, [string]$path = '.')
    \$files = fd -t f --ignore-vcs \$path
    \$longFiles = @()
    foreach (\$file in \$files) {
        try {
            \$lineCount = (Get-Content \$file -ErrorAction SilentlyContinue).Count
            if (\$lineCount -gt \$threshold) {
                \$longFiles += [PSCustomObject]@{
                    Filename = \$file
                    Lines = \$lineCount
                }
            }
        } catch {
            # Skip files that can't be read
        }
    }
    if (\$longFiles.Count -eq 0) {
        Write-Host \"No files with more than \$threshold lines found.\" -ForegroundColor Green
    } else {
        Write-Host \"Files with more than \$threshold lines:\" -ForegroundColor Yellow
        \$longFiles | Sort-Object Lines -Descending | Format-Table -AutoSize
    }
}
loc -threshold 250 -path '.'
"
```

## Rules

- รัน PowerShell function โดยตรงผ่าน `pwsh -NoProfile -Command`
- รองรับ parameters: `threshold` (default 200), `path` (default ".")
- ใช้ `fd -t f --ignore-vcs` สำหรับค้นหาไฟล์ (เว้นไฟล์ใน `.gitignore` อัตโนมัติ)
- ใช้ `try-catch` เพื่อ skip ไฟล์ที่อ่านไม่ได้
- แสดงผลด้วย `Format-Table -AutoSize` (columns: `Filename`, `Lines`)
- เรียงลำดับตาม lines (ใหญ่สุดก่อน)

## Expected Outcome

- รายงานไฟล์ที่ยาวกว่า threshold ที่กำหนด
- แสดงชื่อไฟล์และจำนวนบรรทัดในรูปแบบตาราง
- เรียงลำดับตามจำนวนบรรทัดจากมากไปน้อย
