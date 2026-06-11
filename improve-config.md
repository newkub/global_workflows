---
title: Improve Config
description: ปรับปรุง configuration files ตาม best practices รองรับ monorepo
auto_execution_mode: 3
---

## Goal

ปรับปรุง configuration files ตาม best practices รองรับทั้ง single project และ monorepo

## Execute

### Research And Analyze

วิจัยและวิเคราะห์ configuration files

1. ทำ `/deep-research` เพื่อค้นหา best practices
2. ทำ `/check-architecture` เพื่อดู project structure
3. ระบุ configuration files ทั้งหมดในโปรเจกต์
4. ตรวจสอบ dependencies, versions, และ deprecated settings
5. ตรวจสอบ duplicate configs ภายในและระหว่าง workspaces

### Optimize Configs

ปรับปรุง configuration files ตาม best practices

1. แก้ไข hardcoded versions เป็น version ranges
2. ลบ config files ที่ว่างเปล่าหรือไม่จำเป็น
3. รวม configs ที่ซ้ำกันด้วย extends หรือ inheritance
4. อัพเดท deprecated configurations
5. เพิ่ม configs ที่ขาดหายตาม best practices

### Setup Monorepo

ตั้งค่า configuration สำหรับ monorepo (ถ้ามี)

1. สร้าง shared configs ที่ root
2. กำหนด workspace configuration และ toolchain versions
3. ใช้ extends หรือ inheritance ใน project configs
4. ย้าย configs ที่ซ้ำกันระหว่าง workspaces ไป root
5. กำหนด project dependencies ใน dependency graph

### Add Schema And Types

เพิ่ม schema และ types จาก official sources

1. ค้นหา schema จาก official สำหรับ json config files
2. ค้นหา types จาก official สำหรับ ts config files
3. validate config ด้วย schema ถ้ามี
4. ใช้ type-safe config ถ้าเป็น TypeScript

### Optimize Performance

ปรับปรุงประสิทธิภาพการโหลดและประมวลผล configs

1. ลบ comments ที่ไม่จำเป็นออกจาก production configs
2. รวม configs ที่เกี่ยวข้องกันเพื่อลดจำนวนไฟล์
3. ลบ unused imports หรือ dependencies ใน config files
4. ใช้ caching สำหรับ configs ที่ไม่เปลี่ยนบ่อย

### Harden Security

เพิ่มความปลอดภัยให้ configuration files

1. ย้าย secrets และ sensitive data ออกจาก config files
2. ใช้ environment variables สำหรับค่าที่เป็นความลับ
3. ตรวจสอบว่าไม่มี credentials หลุดใน config files
4. ใช้ `/phase-dev` เพื่อจัดการ secrets อย่างปลอดภัย

### Setup Environment Configs

จัดการ configs สำหรับหลาย environments

1. สร้าง base config ที่ใช้ร่วมกันทุก environment
2. สร้าง environment-specific overrides (dev, staging, prod)
3. ใช้ inheritance หรือ extends เพื่อ override เฉพาะส่วนที่จำเป็น
4. ทำ `/no-hard-code` เพื่อลบ hardcoded environment values

### Integrate CI/CD

ปรับ configs ให้ทำงานร่วมกับ CI/CD pipeline

1. ตรวจสอบว่า configs ทำงานได้ในทุก CI/CD environment
2. ใช้ environment variables สำหรับ CI/CD-specific values
3. ใช้ `/github-actions` เพื่อตั้งค่า CI/CD workflows
4. ใช้ caching สำหรับ dependencies ใน CI configs

### Plan Migration

วางแผนการ migrate configs ที่มี breaking changes

1. ระบุ breaking changes ระหว่าง config versions
2. สร้าง migration guide สำหรับทีม
3. ทดสอบ migration ใน staging environment ก่อน
4. ใช้ `/run-verify` เพื่อตรวจสอบความถูกต้องหลัง migrate

### Update And Validate

อัพเดท dependencies และตรวจสอบ changes

1. ทำ `/update-dependencies` เพื่ออัพเดท dependencies
2. รัน type checking, linting, formatting, และ testing
3. ตรวจสอบ workspace configuration (ถ้าเป็น monorepo)
4. ตรวจสอบว่าทุกอย่างทำงานได้

## Rules

### Research And Safety

- ต้องทำ `/deep-research` ก่อนเสมอ
- ต้อง backup config files ก่อนแก้ไข
- ต้องทดสอบ changes ทุกครั้ง

### Version Management

- ใช้ version ranges แทน hardcoded versions
- ทำ `/update-dependencies` สำหรับอัพเดท dependencies
- อัพเดท dependencies ที่ล้าสมัย

### Config Organization

- ลบ configs ที่ไม่จำเป็น
- รวม configs ที่ซ้ำกัน
- ไม่ระบุไฟล์เฉพาะเจาะจง ใช้ภาษาทั่วไป

### Monorepo Config

- ใช้ shared configs ที่ root
- ใช้ extends หรือ inheritance ใน project configs
- ซิงค์ configuration ข้าม packages
- กำหนด workspace configuration และ toolchain versions อย่างถูกต้อง
- ย้าย configs ที่ซ้ำกันไป root

### Schema And Types

- ค้นหา schema จาก official สำหรับ json config files
- ค้นหา types จาก official สำหรับ ts config files
- validate config ด้วย schema ถ้ามี
- ใช้ type-safe config ถ้าเป็น TypeScript

### Performance

- ลบ comments ที่ไม่จำเป็นออกจาก production configs
- รวม configs ที่เกี่ยวข้องกันเพื่อลดจำนวนไฟล์
- ใช้ caching สำหรับ configs ที่ไม่เปลี่ยนบ่อย

### Security

- ย้าย secrets และ sensitive data ออกจาก config files
- ใช้ environment variables สำหรับค่าที่เป็นความลับ
- ตรวจสอบว่าไม่มี credentials หลุดใน config files
- ใช้ `/phase-dev` เพื่อจัดการ secrets อย่างปลอดภัย

### Environment Configs

- สร้าง base config ที่ใช้ร่วมกันทุก environment
- สร้าง environment-specific overrides (dev, staging, prod)
- ใช้ inheritance หรือ extends เพื่อ override เฉพาะส่วนที่จำเป็น
- ทำ `/no-hard-code` เพื่อลบ hardcoded environment values

### CI/CD Integration

- ตรวจสอบว่า configs ทำงานได้ในทุก CI/CD environment
- ใช้ environment variables สำหรับ CI/CD-specific values
- ใช้ `/github-actions` เพื่อตั้งค่า CI/CD workflows
- ใช้ caching สำหรับ dependencies ใน CI configs

### Migration

- ระบุ breaking changes ระหว่าง config versions
- สร้าง migration guide สำหรับทีม
- ใช้ feature flags เพื่อค่อยๆ เปลี่ยน configs
- ใช้ `/run-verify` เพื่อตรวจสอบความถูกต้องหลัง migrate

## Expected Outcome

- Configuration files ที่ optimize แล้วตาม best practices
- ไม่มี hardcoded versions, empty configs, duplicates, หรือ deprecated settings
- Shared configs สำหรับ monorepo ที่ใช้ได้จริง
- Configuration inheritance ที่ชัดเจน
- Schema และ types จาก official sources
- Configs ที่ optimized สำหรับ performance
- Configs ที่ secure ไม่มี secrets หลุด
- Environment configs ที่จัดการอย่างถูกต้อง
- CI/CD configs ที่ทำงานร่วมกันได้
- Migration plan ที่ครบถ้วน
- ทุก config ทำงานได้อย่างถูกต้องและ safe

