---
title: Deep Analyze With Use Scripts
description: วิเคราะห์โปรเจกต์อย่างลึกซึ้งด้วย scripts automation
auto_execution_mode: 3
related_workflows:
  - /use-scripts
  - /analyze-project
---

## Goal

วิเคราะห์โปรเจกต์อย่างลึกซึ้งครบทุกมิติด้วย Bun scripts automation

## Scope

ใช้สำหรับ deep analysis ที่ต้องการ data processing ซับซ้อน หรือ metrics calculation ที่ต้อง aggregation

## Execute

### 1. Prepare And Run Script

สร้างและรัน analysis script

1. ทำ `/use-scripts` เพื่อสร้าง script ใน `scripts/` directory
2. Script รวบรวม metrics จาก knip, taze, biome, oxlint, vitest, madge, ast-grep
3. Script aggregate data และคำนวณ health score
4. Script output เป็น structured format (JSON หรือ markdown table)
5. รัน `bun run scripts/analyze-project.ts` และ process results

## Rules

### Script Structure

- Script อยู่ใน `scripts/` directory
- ใช้ Bun native APIs: `Bun.glob`, `Bun.file`, `Bun.$`
- ใช้ TypeScript สำหรับ type safety
- Handle errors อย่างเหมาะสม

### Data Collection

- ใช้ tools: knip, taze, biome, oxlint, vitest, madge, ast-grep
- รวบรวม metrics ใน script เดียว
- Cache results สำหรับ performance

### Output Format

- Output เป็น structured format (JSON หรือ markdown table)
- ระบุ metrics, values, status, severity, location, recommendation
- คำนวณ health score โดยรวม

### Performance

- ใช้ parallel execution สำหรับ independent tools
- Cache results ถ้า run ซ้ำ
- Timeout สำหรับ tools ที่อาจค้าง

## Expected Outcome

- Script analysis ที่รวบรวม metrics ครบถ้วน
- Structured report พร้อม health score
- Action items จัดลำดับตาม priority
- Fast analysis ด้วย parallel execution
