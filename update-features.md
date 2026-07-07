---
title: Update Features
description: วิเคราะห์และสร้าง existing-features.json สำหรับ workspace
auto_execution_mode: 3
related_workflows:
  - /analyze-project
  - /idea-features
  - /use-scripts
  - /report-format-table
---

## Goal

วิเคราะห์ features ที่มีอยู่ใน project และสร้าง `existing-features.json` สำหรับใช้ใน `/idea-features`

## Scope

ครอบคลุมการวิเคราะห์ routes, modules, database schemas, API endpoints และ UI components เพื่อระบุ features ที่มีอยู่

## Execute

### 1. Analyze Project Structure

1. ทำ `/analyze-project` เพื่อวิเคราะห์ project structure
2. ระบุ workspace ที่ต้องวิเคราะห์ (ถ้าเป็น monorepo ให้ระบุทุก workspace)
3. บันทึก tech stack และ dependencies

### 2. Analyze Routes And Pages

1. อ่าน routes directory เพื่อระบุ pages และ features ที่ผู้ใช้เห็น
2. จัดกลุ่ม routes ตาม module: auth, booking, provider, admin, etc
3. ระบุ feature จากชื่อ route และไฟล์

### 3. Analyze Modules

1. อ่าน modules directory เพื่อระบุ business logic features
2. จัดกลุ่ม modules ตาม domain: booking, communication, provider, platform, user
3. ระบุ feature จาก module structure และ exports

### 4. Analyze Database Schemas

1. อ่าน database schema files เพื่อระบุ tables และ relationships
2. ระบุ feature จาก table names และ columns
3. จัดกลุ่ม schemas ตาม domain

### 5. Analyze API Endpoints

1. อ่าน server handlers และ API routes
2. ระบุ API endpoints และ methods
3. จัดกลุ่ม endpoints ตาม domain

### 6. Generate Output

1. สร้าง `.devin/features/<workspace>/existing-features.json`
2. โครงสร้าง JSON: `{ workspace, generatedAt, features: [{ id, name, description, module, route, api, db, topics, status }] }`
3. แสดง existing features ในแชทเป็นตาราง

## Rules

### 1. Feature Identification

- ระบุ feature จาก: routes, modules, schemas, API endpoints
- แต่ละ feature ต้องมี name, description, และ module
- ถ้าเป็น monorepo ให้วิเคราะห์ทุก workspace

### 2. JSON Structure

- ไฟล์: `.devin/features/<workspace>/existing-features.json`
- ฟิลด์บังคับ: `id`, `name`, `description`, `module`, `status`
- ฟิลด์ optional: `route`, `api`, `db`, `topics`
- `status` ระบุ: `active`, `partial`, `deprecated`

### 3. Output Format

- แสดง existing features ในแชทเป็นตาราง
- คอลัมน์: # | Feature | Description | Module | Route | API | DB | Topics | Status
- เรียงตาม module ก่อน แล้วตามชื่อ feature

## Expected Outcome

- `existing-features.json` ใน `.devin/features/<workspace>/`
- ตาราง existing features ในแชท
- Features ครอบคลุม routes, modules, schemas, และ API endpoints
