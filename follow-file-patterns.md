---
title: Follow File Patterns
description: จัดการและใช้งาน file patterns สำหรับการค้นหา จัดกลุ่ม และ organize ไฟล์
auto_execution_mode: 3
---


## Goal

สร้างและจัดการ file patterns ที่มีประสิทธิภาพสำหรับการค้นหา จัดกลุ่ม และ organize ไฟล์ในโปรเจกต์

## Execute

### 1. Analyze Project Structure

1. สำรวจ directory structure ของโปรเจกต์
2. หา common file types และ naming conventions
3. ระบุ file categories (source, test, config, docs)
4. วิเคราะห์ current organization

### 2. Define File Patterns

1. สร้าง glob patterns สำหรับแต่ละ file category
2. กำหนด include และ exclude patterns
3. ใช้ regex สำหรับ complex matching
4. Document pattern purposes

### 3. Organize by Category

1. แยก patterns ตาม file types (source, test, config)
2. กำหนด patterns สำหรับ generated files
3. ระบุ patterns สำหรับ temp/cache files
4. สร้าง pattern hierarchy

### 4. Implement Pattern Rules

1. ใช้ patterns ใน tooling configuration
2. Configure IDE file nesting
3. Setup build tool includes/excludes
4. กำหนด lint/format scopes

### 5. Document and Maintain

1. เขียน documentation สำหรับ patterns
2. ให้ examples ของ matches
3. ระบุ edge cases
4. Review และ update อย่างสม่ำเสมอ

## Rules

1. Pattern Clarity

- Patterns ต้องชัดเจนและเข้าใจง่าย
- ใช้ descriptive names
- หลีกเลี่ยง over-complex patterns
- Document assumptions

2. Consistency

- ใช้ consistent pattern syntax ทั้งโปรเจกต์
- Follow naming conventions
- Maintain pattern standards
- Reuse common patterns

3. Performance

- Optimize pattern matching
- หลีกเลี่ยง expensive wildcard patterns
- Cache pattern results เมื่อเป็นไปได้
- Monitor performance impact

4. Maintainability

- Keep patterns organized และ documented
- Version control pattern changes
- Review patterns อย่างสม่ำเสมอ
- Update ตาม project evolution

## Expected Outcome

- Defined file patterns สำหรับทุก categories
- Organized file structure
- Clear pattern documentation
- Efficient file matching
- Consistent organization ทั้งโปรเจกต์

