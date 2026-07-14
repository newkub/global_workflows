---
title: Validate Migration
description: ตรวจสอบ database migrations ว่า reversible ปลอดภัย และไม่ทำลายข้อมูล
auto_execution_mode: 3
related:
  - /follow-drizzle
  - /check-reference
  - /resolve-errors
  - /loop-until-complete
  - /run-test
---

## Goal

ตรวจสอบ database migrations ว่า reversible ปลอดภัย และไม่ทำลายข้อมูลก่อน apply จริง

## Scope

ใช้สำหรับ validate migrations ใน project ที่มี database (Drizzle ORM, Prisma, หรือ ORM อื่น)

## Execute

### 1. Check Schema Consistency

ตรวจสอบว่า migration files สอดคล้องกับ schema ปัจจุบัน

1. รัน `bun --filter website db:generate` เพื่อสร้าง migration ใหม่และเปรียบเทียบ
2. ตรวจสอบว่าไม่มี drift ระหว่าง schema และ migrations ที่มีอยู่
3. ถ้ามี drift ให้สร้าง migration ใหม่แทนการแก้ไข migration เดิม

### 2. Check Reversibility

ตรวจสอบว่า migration ทุกตัวมี down/revert path

1. ตรวจสอบว่าทุก `CREATE TABLE` มี `DROP TABLE` ใน down migration
2. ตรวจสอบว่าทุก `ALTER TABLE ADD COLUMN` มี `DROP COLUMN`
3. ตรวจสอบว่าทุก `CREATE INDEX` มี `DROP INDEX`
4. ถ้า migration ไม่ reversible ให้เพิ่ม down migration หรือทำเครื่องหมายว่า irreversible พร้อมเหตุผล

### 3. Check Data Safety

ตรวจสอบว่า migration ไม่ทำลายข้อมูลที่มีอยู่

1. ระบุ migrations ที่มี `DROP TABLE`, `DROP COLUMN`, หรือ `ALTER COLUMN` ที่เปลี่ยน type
2. สำหรับ destructive operations ให้ตรวจสอบว่ามี data backup หรือ data migration step
3. สำหรับ `ALTER COLUMN` type change ให้ตรวจสอบว่ามี intermediate step สำหรับ data conversion
4. ถ้า migration ทำลายข้อมูลโดยไม่จำเป็น ให้แก้ไขให้ปลอดภัยหรือแยกเป็นหลาย steps

### 4. Check Naming And Ordering

ตรวจสอบว่า migration files ใช้ naming convention ที่สม่ำเสมอและเรียงลำดับถูกต้อง

1. ตรวจสอบว่า migration files ใช้ format ที่สม่ำเสมอ (timestamp หรือ sequential)
2. ตรวจสอบว่า migrations เรียงลำดับตามเวลาที่สร้าง
3. ตรวจสอบว่าไม่มี migration ที่ข้ามหมายเลขหรือ timestamp
4. ตรวจสอบว่า migration metadata (เช่น `migration_lock.toml`) ถูกต้อง

### 5. Test Migration

ทดสอบ migration กับ database จริงหรือ test database

1. รัน migration บน test database ที่มีข้อมูลจริง
2. รัน down migration เพื่อยืนยันว่า reversible
3. รัน migration ซ้ำเพื่อยืนยัน idempotency
4. ทำ `/run-test` เพื่อตรวจสอบว่า tests ยังผ่านหลัง migration
5. ถ้ามี errors ให้ทำ `/resolve-errors` แล้วรันซ้ำ

### 6. Verify Production Readiness

ตรวจสอบความพร้อมก่อน deploy

1. ตรวจสอบว่า migration รันบน staging environment แล้ว
2. ตรวจสอบว่ามี rollback plan ถ้า migration fail ใน production
3. ตรวจสอบว่า migration ไม่ lock table นานเกินไปสำหรับ production data volume
4. ถ้า migration เสี่ยงสูง ให้แยกเป็นหลาย migrations เล็กๆ

## Rules

### Safety First

- ไม่แก้ไข migration ที่ deploy แล้ว ให้สร้าง migration ใหม่เสมอ
- Destructive operations ต้องมี data backup หรือ data migration step
- ทดสอบ down migration ทุกครั้ง ไม่ assume ว่า reversible

### Reversibility

- ทุก migration ต้องมี down path ยกเว้นกรณีจำเป็นพร้อมเหตุผล
- `ALTER COLUMN` type change ต้องมี intermediate step
- `DROP TABLE` ต้องมี data backup plan

### Naming And Ordering

- Migration files ใช้ naming convention ที่สม่ำเสมอ
- Migrations เรียงลำดับตามเวลาที่สร้าง ไม่ข้ามลำดับ
- ไม่ลบ migration ที่ deploy แล้ว

### Non-Duplication

- ใช้ `/follow-drizzle` สำหรับ Drizzle ORM specific operations
- ใช้ `/run-test` สำหรับ run tests หลัง migration
- Workflow นี้เน้นเฉพาะ validation ของ migrations

## Expected Outcome

- Migrations สอดคล้องกับ schema ปัจจุบัน
- ทุก migration reversible หรือมีเหตุผลว่าทำไมไม่ reversible
- Destructive operations มี data safety plan
- Migration files ใช้ naming convention ที่สม่ำเสมอ
- Migration ทดสอบบน test database และ tests ผ่าน
- Rollback plan พร้อมสำหรับ production
