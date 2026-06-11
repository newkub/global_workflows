---
title: Use Workflows
description: วิธีนำ global workflows มาใช้ใน workspace
auto_execution_mode: 3
---

## Goal

อธิบายวิธีนำ global workflows มาใช้ใน workspace และจัดการ workflows ที่จำเป็น

## Scope

ใช้สำหรับการจัดการ global workflows ใน workspace ต่างๆ

## Execute

### 1. Copy Global Workflows

คัดลอก global workflows มาใช้ใน workspace

1. คัดลอก workflows ที่จำเป็นจาก `global_workflows/` ไปยัง `.windsurf/workflows/`
2. ใช้ `/copy-workflows` หรือคัดลอกด้วยตนเอง
3. รักษาโครงสร้าง directory เดิม
4. ตรวจสอบว่า workflows ที่คัดลอกมาทำงานได้
5. ปรับแต่ง workflows ตามความต้องการของ workspace (project type, tech stack)

### 2. Use Global Workflows

ใช้ global workflows ใน workspace

1. เรียกใช้ workflows โดยใช้ `/workflow-name` ในแชท
2. Cascade จะค้นหา workflows จาก `global_workflows/` ก่อน
3. หากไม่พบใน global จะค้นใน `.windsurf/workflows/` ของ workspace
4. ใช้ workflows ที่เหมาะสมกับ task ปัจจุบัน (context และ purpose)
5. ตรวจสอบผลลัพธ์หลังใช้ workflows

### 3. Sync Global Workflows

ซิงค์ global workflows เมื่อมีการอัพเดท

1. ตรวจสอบ global workflows ที่มีการอัพเดท (git diff, timestamps)
2. รีวิว changes ใน global workflows (breaking changes, new features)
3. อัพเดท workspace workflows ตามความจำเป็น (manual sync หรือ git)
4. ทดสอบ workflows ที่อัพเดทว่ายังทำงานได้ (run tests, verify)
5. ปรับแต่ง workspace-specific overrides หากจำเป็น (merge conflicts, custom logic)

### 4. Override Global Workflows

Override global workflows ใน workspace

1. สร้าง workflow ชื่อเดียวกันใน `.windsurf/workflows/`
2. Workspace version จะ override global version (priority สูงกว่า)
3. ปรับแต่ง workflow ตามความต้องการเฉพาะของ workspace (domain logic, team conventions)
4. รักษา global workflow ไว้สำหรับ reference (baseline และ best practices)
5. ตรวจสอบว่า override ทำงานได้ตามที่คาดหวัง (test edge cases)

### 5. Disable Unwanted Workflows

ปิดใช้ global workflows ที่ไม่ต้องการ

1. สร้าง `.windsurf/workflows/.disabled` file (หรือใช้ `.gitignore` สำหรับ global)
2. เพิ่มชื่อ workflows ที่ไม่ต้องการลงในไฟล์ (one per line)
3. หรือสร้าง workflow ว่างเปล่าใน `.windsurf/workflows/` (minimal stub)
4. Cascade จะข้าม workflows ที่ถูก disable (skip discovery)
5. ตรวจสอบว่า workflows ที่ disable ไม่ถูกเรียกใช้ (verify list)

## Rules

### 1. Workflow Priority

ลำดับความสำคัญของ workflows

- Global workflows มี priority ต่ำกว่า workspace workflows (baseline)
- Workspace workflows override global workflows (customization)
- ใช้ global workflows เป็น baseline (single source of truth)
- Custom workflows มี priority สูงสุด (workspace-specific)
- Disabled workflows มี priority ต่ำสุด (skip execution)

### 2. Workflow Discovery

การค้นหา workflows

- Cascade ค้นหาใน `global_workflows/` ก่อน (fallback mechanism)
- หากไม่พบ ค้นใน `.windsurf/workflows/` ของ workspace (workspace override)
- ใช้ `/list-workflows` เพื่อดู workflows ที่มีอยู่ (discovery command)
- ใช้ `/help-workflows` เพื่อดูคำอธิบาย (documentation)
- ตรวจสอบ workflow path ที่ถูกใช้ (debugging)

### 3. Workspace Customization

การปรับแต่ง workflows ตาม workspace

- ปรับแต่ง workflows ให้เหมาะกับ project type (SaaS, mobile, desktop)
- ปรับแต่ง workflows ให้เหมาะกับ tech stack (Vue, React, Nuxt, Next.js)
- ปรับแต่ง workflows ให้เหมาะกับ team conventions (naming, structure)
- รักษา core logic จาก global workflows (don't reinvent)
- Document customizations ใน README (why, what, how)

### 4. Version Management

จัดการ version ของ workflows

- ติดตาม global workflow updates (periodic sync)
- รีวิว breaking changes ก่อน sync (compatibility check)
- ทดสอบ compatibility กับ workspace (test before apply)
- ใช้ git history สำหรับ rollback (version control)
- Maintain changelog สำหรับ customizations (documentation)

### 5. Best Practices

แนวทางการใช้ workflows

- ใช้ global workflows เป็น baseline เสมอ (avoid duplication)
- Override เฉพาะสิ่งที่จำเป็น custom (minimal changes)
- รักษา customizations น้อยที่สุด (maintainability)
- Document เหตุผลของ customizations (reasoning)
- Sync global updates เป็นระยะ (staying current)

## Expected Outcome

- รู้จักวิธีนำ global workflows มาใช้
- สามารถ custom workflows ตาม workspace
- สามารถ sync global workflows อย่างมีปัญหา
- สามารถ disable workflows ที่ไม่ต้องการ
- Workflows ทำงานได้อย่างถูกต้อง
