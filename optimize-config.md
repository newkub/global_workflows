---
title: Optimize Config
description: ปรับปรุง configuration files ตาม best practices รองรับ monorepo
auto_execution_mode: 3
---

## Goal

ปรับปรุง configuration files ตาม best practices รองรับทั้ง single project และ monorepo

## Execute

### Research Best Practices

ทำตาม `/deep-research` เพื่อค้นหา best practices

1. ระบุ tools และ configuration files ที่ต้อง optimize
2. รวบรวม best practices จากแหล่งข้อมูลหลายแหล่ง
3. ตรวจสอบความถูกต้องของข้อมูล
4. สรุป best practices ที่จะนำไปใช้

### Check Project Structure

ตรวจสอบโครงสร้างโปรเจกต์และ configuration files

1. ทำตาม `/check-architecture` เพื่อดู tree view ของโปรเจกต์
2. อ่าน `package.json` หรือ `Cargo.toml` เพื่อดู dependencies และ scripts
3. ระบุ configuration files ทั้งหมดในโปรเจกต์
4. ตรวจสอบว่าเป็น monorepo หรือ single project
5. ตรวจสอบ workspaces ทั้งหมดใน monorepo (ถ้ามี)

### Analyze Current Configs

ตรวจสอบ configuration files ทั้งหมด

1. ระบุ configs ที่ต้อง optimize
2. ตรวจสอบ dependencies และ versions
3. ตรวจสอบ deprecated settings
4. ตรวจสอบ duplicate configs ภายในแต่ละ workspace
5. ตรวจสอบ duplicate configs ระหว่าง workspaces (ถ้าเป็น monorepo)
6. ระบุ configs ที่ซ้ำกันระหว่าง workspaces ที่ควรย้ายไป root
7. ตรวจสอบ workspace configuration สำหรับ monorepo (ถ้ามี)

### Optimize Project Configs

ปรับปรุง configuration files ตาม best practices

1. แก้ไข hardcoded versions เป็น version ranges
2. ลบ config files ที่ว่างเปล่าหรือไม่จำเป็น
3. รวม configs ที่ซ้ำกันด้วย extends หรือ inheritance
4. อัพเดท deprecated configurations
5. เพิ่ม configs ที่ขาดหายตาม best practices

### Optimize Monorepo Configs

ปรับปรุง configuration สำหรับ monorepo (ถ้ามี)

1. สร้าง shared configs ที่ root
2. กำหนด workspace configuration
3. กำหนด shared tasks หรือ scripts ที่ reusable
4. กำหนด toolchain versions
5. ใช้ extends หรือ inheritance ใน project configs
6. ซิงค์ configuration ข้าม packages
7. ย้าย configs ที่ซ้ำกันระหว่าง workspaces ไป root
8. ลบ duplicate configs ระหว่าง packages
9. กำหนด project dependencies ใน dependency graph

### Add Schema And Types

เพิ่ม schema และ types จาก official sources

1. ค้นหา schema จาก official สำหรับ json config files
2. ค้นหา types จาก official สำหรับ ts config files
3. validate config ด้วย schema ถ้ามี
4. ใช้ type-safe config ถ้าเป็น TypeScript

### Optimize Performance

ปรับปรุงประสิทธิภาพการโหลดและประมวลผล configs

1. ลบ comments ที่ไม่จำเป็นออกจาก production configs
2. ใช้ lazy loading สำหรับ configs ที่ไม่จำเป็นต้องโหลดทันที
3. รวม configs ที่เกี่ยวข้องกันเพื่อลดจำนวนไฟล์
4. ใช้ caching สำหรับ configs ที่ไม่เปลี่ยนบ่อย
5. ลบ unused imports หรือ dependencies ใน config files
6. ใช้ `/optimize-bundle` เพื่อตรวจสอบ bundle size impact

### Harden Security

เพิ่มความปลอดภัยให้ configuration files

1. ย้าย secrets และ sensitive data ออกจาก config files
2. ใช้ environment variables สำหรับค่าที่เป็นความลับ
3. ตรวจสอบว่าไม่มี credentials หลุดใน config files
4. ใช้ `/phase-dev` เพื่อจัดการ secrets อย่างปลอดภัย
5. ตรวจสอบ file permissions ของ config files
6. ใช้ encryption สำหรับ sensitive configuration values

### Setup Environment Configs

จัดการ configs สำหรับหลาย environments

1. สร้าง base config ที่ใช้ร่วมกันทุก environment
2. สร้าง environment-specific overrides (dev, staging, prod)
3. ใช้ inheritance หรือ extends เพื่อ override เฉพาะส่วนที่จำเป็น
4. ตรวจสอบว่า production configs ไม่มี debugging settings
5. ใช้ naming convention ที่ชัดเจนสำหรับแต่ละ environment
6. ทำ `/no-hard-code` เพื่อลบ hardcoded environment values

### Integrate CI/CD

ปรับ configs ให้ทำงานร่วมกับ CI/CD pipeline

1. ตรวจสอบว่า configs ทำงานได้ในทุก CI/CD environment
2. ใช้ environment variables สำหรับ CI/CD-specific values
3. สร้าง configs สำหรับ testing ใน CI แยกต่างหาก
4. ใช้ `/github-actions` เพื่อตั้งค่า CI/CD workflows
5. ตรวจสอบว่า config validation ทำงานได้ใน CI
6. ใช้ caching สำหรับ dependencies ใน CI configs

### Plan Migration

วางแผนการ migrate configs ที่มี breaking changes

1. ระบุ breaking changes ระหว่าง config versions
2. สร้าง migration guide สำหรับทีม
3. ใช้ feature flags เพื่อค่อยๆ เปลี่ยน configs
4. ทดสอบ migration ใน staging environment ก่อน
5. สร้าง rollback plan ในกรณีที่ migration ไม่สำเร็จ
6. ใช้ `/run-verify` เพื่อตรวจสอบความถูกต้องหลัง migrate

### Update Dependencies

ทำตาม `/update-dependencies` เพื่ออัพเดท dependencies

### Validate Changes

ตรวจสอบและทดสอบ changes

1. รัน type checking
2. รัน linting
3. รัน formatting
4. รัน testing
5. ตรวจสอบ workspace configuration (ถ้าเป็น monorepo)
6. ตรวจสอบว่าทุกอย่างทำงานได้

## Rules

### Research Requirements

- ต้องทำตาม `/deep-research` ก่อนเสมอ
- ต้อง backup config files ก่อนแก้ไข
- ต้องทดสอบ changes ทุกครั้ง

### Version Management

- ใช้ version ranges แทน hardcoded versions
- ต้องทำตาม `/update-dependencies` สำหรับอัพเดท dependencies
- ต้องอัพเดท dependencies ที่ล้าสมัย

### Config Organization

- ลบ configs ที่ไม่จำเป็น
- รวม configs ที่ซ้ำกัน
- ไม่ระบุไฟล์เฉพาะเจาะจง ใช้ภาษาทั่วไป

### Monorepo Config

- ใช้ shared configs ที่ root
- ใช้ extends หรือ inheritance ใน project configs
- ซิงค์ configuration ข้าม packages
- กำหนด workspace configuration อย่างถูกต้อง
- กำหนด toolchain versions อย่างถูกต้อง
- ตรวจสอบ duplicate configs ระหว่าง workspaces
- ย้าย configs ที่ซ้ำกันไป root

### Schema And Types

- ถ้าเป็น json ต้องค้นหา schema จาก official มาเสมอ
- ถ้าเป็น ts ต้องค้นหา types จาก official มาใช้เสมอ
- validate config ด้วย schema ถ้ามี
- ใช้ type-safe config ถ้าเป็น TypeScript

### Performance

- ลบ comments ที่ไม่จำเป็นออกจาก production configs
- ใช้ lazy loading สำหรับ configs ที่ไม่จำเป็นต้องโหลดทันที
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

### Safety And Documentation

- ปลอดภัยและเชื่อถือได้ในทุกขั้นตอน
- อัพเดท documentation หลังจากเปลี่ยน

## Expected Outcome

- Configuration files ที่ optimize แล้วตาม best practices
- ไม่มี hardcoded versions
- ไม่มี empty config files
- ไม่มี duplicate configurations
- ไม่มี deprecated configurations
- Shared configs สำหรับ monorepo ที่ใช้ได้จริง
- Configuration inheritance ที่ชัดเจน
- Schema และ types จาก official sources
- Configs ที่ optimized สำหรับ performance
- Configs ที่ secure ไม่มี secrets หลุด
- Environment configs ที่จัดการอย่างถูกต้อง
- CI/CD configs ที่ทำงานร่วมกันได้
- Migration plan ที่ครบถ้วน
- ทุก config ทำงานได้อย่างถูกต้องและ safe

