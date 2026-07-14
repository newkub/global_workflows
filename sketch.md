---
title: Sketch
description: วาด UX/UI และ flows แบบเร็วๆ ด้วย ANSI/ASCII art
auto_execution_mode: 3
related:
  - /idea-uxui
  - /review-frontend
  - /follow-web-design
---

## Goal

วาด UX/UI และ flows แบบเร็วๆ ด้วย ANSI/ASCII art เพื่อ visualize layout, component structure, workflows, และ task dependencies

## Scope

ใช้สำหรับ visualize UX/UI (layouts, components, routing, responsive) และ flows (workflows, dependencies, decisions, state machines, data flows)

## Execute

### 1. วิเคราะห์ Structure

วิเคราะห์โครงสร้างที่จะวาด

1. ระบุ sections หลักและ components สำคัญ
2. ระบุ steps หลักใน flow และ decision points
3. กำหนด layout pattern และ flow direction
4. ระบุ responsive behavior และ dependencies

### 2. วาด Skeleton

วาดโครงสร้างด้วย ASCII art

1. ใช้ box characters (`┌─┐`, `│ │`, `└─┘`) สำหรับ containers
2. ใช้ arrows (`→`, `↓`) สำหรับ direction
3. ใช้ boxes (`[ ]`) สำหรับ actions/steps
4. ใช้ diamonds (`◇`) สำหรับ decisions
5. ใช้ circles (`○`) สำหรับ start/end

### 3. วาด Components และ Tasks

วาด components ภายใน layout และ tasks ใน flow

1. ใช้ symbols สำหรับ interactive elements: `[Button]`, `[Input]`, `[Text]`, `[Icon]`
2. ใช้ arrows (`→`) สำหรับ dependencies และ flows
3. ใช้ numbered steps (`1.`, `2.`, `3.`) สำหรับ sequence
4. ใช้ branches (`├─`, `└─`) สำหรับ decision trees
5. แสดง hierarchy ด้วย indentation

### 4. วาด Routing และ Flows

วาด routing structure และ flows

1. วาด nested routes ด้วย tree structure
2. ระบุ route parameters ด้วย `[param]`
3. แสดง route guards ด้วย `*`
4. วาด state transitions ด้วย arrows และ labels
5. แสดง parallel processing ด้วย parallel lines

### 5. ตรวจสอบ Project Type

ตรวจสอบว่าเป็น monorepo หรือ singlerepo

1. ตรวจสอบว่ามี `package.json` หลายไฟล์ (monorepo) หรือไฟล์เดียว (singlerepo)
2. ตรวจสอบว่ามี `apps/` หรือ `packages/` directories
3. ตรวจสอบ `turbo.json` หรือ `pnpm-workspace.yaml`
4. กำหนดชื่อไฟล์ output ตาม project type:
   - Monorepo: `.devin/sketch/<workspace>.md`
   - Singlerepo: `.devin/sketch/<project>.md`

### 6. เพิ่ม Annotations

เพิ่มข้อมูลเพิ่มเติม

1. ใช้ `//` สำหรับ comments
2. ใช้ `*` สำหรับ highlights
3. ใช้ time estimates เช่น `(5s)`, `(2m)`
4. ใช้ error handling ด้วย `⚠`
5. ใช้ labels สำหรับ breakpoints และ data types

## Rules

### 1. Use Standard ASCII Characters

ใช้ characters มาตรฐานที่ทุก terminal รองรับ

- Box drawing: `┌─┐│└┘├┤┬┴┼`
- Arrows: `→↓←↑↔`
- Symbols: `●○■□▲▼◆◇`
- Branches: `├─└─│`

### 2. Keep It Simple

ไม่ต้องละเอียดเกินไป

- ใช้ rectangles ง่ายๆ ไม่ต้อง complex shapes
- ไม่ต้อง exact proportions
- เน้น structure มากกว่า aesthetics
- ใช้ minimal details
- Focus บน hierarchy และ relationships

### 3. Clear Hierarchy

แสดง hierarchy อย่างชัดเจน

- ใช้ indentation สำหรับ nesting
- ใช้ box sizes สำหรับ importance
- ใช้ spacing สำหรับ grouping
- ใช้ labels สำหรับ identification

### 4. Consistent Spacing

ใช้ spacing ที่ consistent

- ใช้ 2 spaces สำหรับ indentation
- ใช้ 1 space ระหว่าง elements
- ใช้ consistent line heights
- ไม่ใช้ tabs

### 5. Label Everything

ระบุ labels ชัดเจน

- ใช้ `[NAME]` สำหรับ sections
- ใช้ `[TYPE]` สำหรับ components
- ใช้ `// comment` สำหรับ notes
- ใช้ `* highlight` สำหรับ emphasis

### 6. Show Flows

แสดง flows อย่างชัดเจน

- ใช้ arrows (`→`) สำหรับ direction
- ใช numbered steps สำหรับ sequence
- ใช decision points สำหรับ branches
- ใช start/end markers

### 7. Complete Coverage

วาดทั้งหมดใน application

- วาดทุก routes ไม่ว่าจะ public, protected, หรือ admin
- แสดง nested routes ทั้งหมดด้วย tree structure
- ระบุ route parameters ทั้งหมด
- แสดง route guards และ middleware

## Expected Outcome

- ASCII art layouts และ flows ที่เข้าใจง่าย
- Visual hierarchy ที่ชัดเจน
- Component structure ที่ visible
- User flows ที่ traceable
- Routing structure ที่ครบถ้วน
- Clear decision paths และ task dependencies

## Tools

- Terminal/IDE with monospace font
- ASCII art generators (optional)
