---
title: Improve File Organization
description: ปรับปรุม file organization และ project structure
auto_execution_mode: 3
related_workflows:
  - /check-architecture
  - /review-architecture
  - /improve-config
---

## Goal

ปรับปรุม file organization ให้มีโครงสร้างที่ชัดเจนและ maintainability สูง

## Scope

ใช้สำหรับปรับปรุม project structure ทั้ง monorepo และ single project

## Execute

### 1. Analyze Current Structure

วิเคราะห์ project structure ปัจจุบัน

1. ทำ `/check-architecture` เพื่อดู tree view
2. วิเคราะห์ folder structure
3. ระบุ files ที่ไม่มีที่อยู่ที่ชัดเจน
4. ระบุ circular dependencies
5. ระบุ deep nesting
6. ระบุ inconsistent naming

### 2. Define Organization Standards

กำหนดมาตรฐาน organization

1. กำหนด folder structure มาตรฐาน
2. กำหนด naming conventions
3. กำหนด file grouping rules
4. กำหนด index file conventions
5. กำหนด barrel export conventions
6. กำหนด dependency rules

### 3. Reorganize by Feature

จัดระเบียบตาม feature

1. จัดกลุ่ม files ตาม feature/domain
2. สร้าง feature folders
3. ย้าย related files ไป feature folders
4. สร้าง feature index files
5. อัพเดท imports
6. อัพเดท exports

### 4. Improve Folder Structure

ปรับปรุม folder structure

1. ใช้ flat structure สำหรับ small projects
2. ใช้ nested structure สำหรับ large projects
3. ใช้ consistent folder names
4. ใช้ kebab-case สำหรับ folder names
5. ใช้ PascalCase สำหรับ component folders
6. ใช้ camelCase สำหรับ utility folders

### 5. Add Index Files

เพิ่ม index files

1. สร้าง index files สำหรับ exports
2. ใช้ barrel exports
3. Re-export จาก subdirectories
4. ใช้ named exports
5. ใช้ default exports อย่างเหมาะสม
6. Document exports

### 6. Improve Naming Conventions

ปรับปรุม naming conventions

1. ใช้ consistent file naming
2. ใช้ kebab-case สำหรับ utilities
3. ใช้ PascalCase สำหรับ components
4. ใช้ camelCase สำหรับ composables
5. ใช้ descriptive names
6. ไม่ใช้ abbreviations

### 7. Reduce Nesting

ลด deep nesting

1. ลบ folders ที่ไม่จำเป็น
2. Flatten structure ที่เป็นไปได้
3. ใช้ aliases สำหรับ deep paths
4. ใช้ path mapping
5. ใช้ barrel exports สำหรับ deep paths
6. จำกัด depth สูงสุด 3-4 levels

### 8. Document Structure

Document project structure

1. สร้าง architecture diagram
2. Document folder conventions
3. Document file conventions
4. Document import rules
5. Document export rules
6. Update README

## Rules

### 1. Organization Principles

จัดระเบียบตาม principles

- Group by feature/domain
- Keep related files together
- Minimize coupling
- Maximize cohesion
- หลีกเลี่ยย circular dependencies

### 2. Folder Structure

ใช้ folder structure อย่างเหมาะสม

- ใช้ consistent naming
- ใช้ kebab-case สำหรับ folders
- ไม่ deep nesting
- ใช้ index files
- ใช้ barrel exports

### 3. File Naming

ใช้ file naming อย่างเหมาะสม

- ใช้ descriptive names
- ใช้ consistent conventions
- ไม่ใช้ abbreviations
- ใช้ appropriate case
- ไม่ duplicate names

### 4. Imports/Exports

ใช้ imports/exports อย่างเหมาะสม

- ใช้ absolute imports
- ใช้ path aliases
- ใช้ barrel exports
- ไม่ use relative paths
- ไม่ circular imports

### 5. Documentation

Document structure อย่างเหมาะสม

- Document conventions
- Document structure
- Document rules
- Update README
- Keep docs updated

## Expected Outcome

- File organization ที่ clear
- Folder structure ที่ consistent
- Naming conventions ที่ standardized
- Index files ที่ added
- Nesting ที่ reduced
- Imports/exports ที่ optimized
- Documentation ที่ updated
