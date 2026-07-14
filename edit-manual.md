---
title: Edit Manual
description: แก้ไข configuration files ด้วยมืออย่างมีหลักการ ควบคุมการเปลี่ยนแปลงแบบ precise
auto_execution_mode: 3
related:
---

## Goal

แก้ไข configuration files ด้วยมืออย่างมีหลักการ ควบคุมการเปลี่ยนแปลงแบบ precise โดยเข้าใจผลกระทบของแต่ละการเปลี่ยนแปลง

## Scope

ใช้สำหรับการแก้ไข configuration files ด้วยมือ เช่น `vite.config.ts`, `turbo.json`, `package.json`, `tsconfig.json`, `biome.jsonc`, `lefthook.yml`, `uno.config.ts`, `drizzle.config.ts`, และ config files อื่นๆ

ไม่ใช้สำหรับการสร้าง configuration ใหม่ทั้งหมด (ใช้ `/follow-config` แทน)

## Execute

### 1. Read And Understand

1. อ่าน config file ที่ต้องการแก้ไขให้เข้าใจโครงสร้างและ settings ปัจจุบัน
2. ทำ `/learn-from-web` หรือ `/follow-best-practice` สำหรับ tool ที่ config เกี่ยวข้อง เพื่อเข้าใจ available options และผลกระทบ
3. ระบุว่าการเปลี่ยนแปลงนี้กระทบ workspace ใดบ้าง ถ้าเป็น monorepo ให้ทำ `/follow-monorepo`

### 2. Plan Changes

1. ระบุจุดที่ต้องแก้ไขและค่าใหม่ที่ต้องการ
2. ตรวจสอบ dependencies และ constraints ที่เกี่ยวข้อง (เช่น version compatibility, plugin requirements)
3. ทำ `/dont-over-engineer` เพื่อวางแผน minimal changes ที่จำเป็น
4. ถ้าเป็น monorepo ตรวจสอบว่าการเปลี่ยนแปลงต้อง sync ข้าม workspaces หรือไม่

### 3. Apply Edits

1. ใช้ `edit` หรือ `multi_edit` สำหรับการแก้ไข config file
2. แก้ไขเฉพาะจุดที่จำเป็น ไม่เปลี่ยน settings อื่นที่ไม่เกี่ยวข้อง
3. ถ้าเป็น monorepo และมีหลาย workspaces ที่ต้องแก้ ใช้ `/use-scripts` เมื่อเกิน 10 ไฟล์
4. ทำ `/edit-relative` เพื่ออัปเดต references ที่เกี่ยวข้อง

### 4. Validate

1. ทำ `/check-reference` เพื่อตรวจสอบไม่มี broken references
2. ถ้ามี errors ให้ทำ `/resolve-errors`
3. ทำ `/run-check` เพื่อตรวจสอบ lint, typecheck, และ scan
4. ถ้าเป็น build config ให้ทดสอบ build ว่าผ่าน

## Rules

### 1. Understand Before Edit

- อ่านและเข้าใจ config file ก่อนแก้ไขเสมอ
- ทำ `/follow-best-practice` หรือ `/learn-from-web` สำหรับ tool ที่ไม่คุ้นเคย
- ตรวจสอบ official documentation ของ tool นั้นๆ ก่อนเปลี่ยน settings
- ไม่เดาค่า config โดยไม่เข้าใจผลกระทบ

### 2. Minimal And Precise

- แก้ไขเฉพาะจุดที่จำเป็น ไม่เปลี่ยน settings อื่นที่ไม่เกี่ยวข้อง
- ทำ `/dont-over-engineer` เสมอ
- ห้าม auto-format หรือ restructure config file ทั้งหมดเพื่อแก้จุดเดียว
- รักษา indentation และ style เดิมของ config file

### 3. Consistency Across Workspaces

- ถ้าเป็น monorepo ตรวจสอบว่าการเปลี่ยนแปลงต้อง sync ข้าม workspaces หรือไม่
- Config ใน root ควรเป็น base สำหรับ workspaces
- Workspace-specific config ควร override เฉพาะที่จำเป็น
- ทำ `/follow-consistency` เพื่อรักษาความสม่ำเสมอ

### 4. Verify After Edit

- ทำ `/run-check` หลังแก้ไขเสมอ
- ถ้าเป็น build config ทดสอบ build ว่าผ่าน
- ถ้าเป็น lint config ทดสอบ lint ว่าผ่าน
- ถ้าเป็น typecheck config ทดสอบ typecheck ว่าผ่าน

## Expected Outcome

- Configuration files ถูกแก้ไขอย่าง precise และ minimal
- การเปลี่ยนแปลงผ่านการ validate ทั้ง lint, typecheck, และ build
- ไม่มี broken references หลังจากการแก้ไข
- Config สอดคล้องกันทั่ว monorepo ถ้ามีการ sync ข้าม workspaces
