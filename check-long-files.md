---
title: Check Long Files
description: ตรวจสอบไฟล์ที่ยาวกว่า threshold ที่กำหนดด้วย fd และ PowerShell
auto_execution_mode: 3
related:
  - /use-scripts
  - /follow-code-quality
---

## Goal

ตรวจสอบและรายงานไฟล์ที่ยาวกว่า threshold ที่กำหนด

## Scope

ใช้สำหรับตรวจสอบไฟล์ที่ยาวกว่า threshold ในทุกภาษา

## Execute

### Run Command

รันคำสั่งต่อไปนี้บน PowerShell เพื่อหาไฟล์ที่ยาวกว่า 250 บรรทัด:

```bash
pwsh -NoProfile -Command "
function loc {
    param([int]$threshold = 200, [string]$path = '.')
    $files = fd -t f --ignore-vcs $path
    $longFiles = @()
    foreach ($file in $files) {
        try {
            $lineCount = (Get-Content $file -ErrorAction SilentlyContinue).Count
            if ($lineCount -gt $threshold) {
                $longFiles += [PSCustomObject]@{
                    Filename = $file
                    Lines = $lineCount
                }
            }
        } catch {
        }
    }
    if ($longFiles.Count -eq 0) {
        Write-Host \"No files with more than $threshold lines found.\" -ForegroundColor Green
    } else {
        Write-Host \"Files with more than $threshold lines:\" -ForegroundColor Yellow
        $longFiles | Sort-Object Lines -Descending | Format-Table -AutoSize
    }
}
loc -threshold 250 -path '.'
"
```

### Parameters

- **threshold**: เปลี่ยนตัวเลข `250` เป็นค่าที่ต้องการ เช่น `200`, `300`
- **path**: เปลี่ยน `'.'` เป็น path ที่ต้องการ เช่น `'src/'`

## Rules

- ใช้ `fd -t f --ignore-vcs` สำหรับค้นหาไฟล์ (ต้องติดตั้ง `fd` ก่อน)
- ใช้ `Get-Content` สำหรับนับจำนวนบรรทัด
- กรองเฉพาะไฟล์ที่มากกว่า threshold ที่กำหนด (default 250)
- เรียงลำดับตาม lines จากมากไปน้อย
- ข้ามไฟล์ที่อ่านไม่ได้โดยใช้ `try/catch` กับ `ErrorAction SilentlyContinue`

## Expected Outcome

- รายงานไฟล์ที่ยาวกว่า threshold ที่กำหนด
- แสดงชื่อไฟล์และจำนวนบรรทัด
- เรียงลำดับตามจำนวนบรรทัดจากมากไปน้อย
