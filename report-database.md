---
title: Report Database
description: สรุป database schema: tables, relations, indexes, missing indexes, estimation size
auto_execution_mode: 3
related:
  - /report-format-table
  - /scan-codebase
  - /review-database
---

## Goal

รายงาน database schema ของโปรเจกต์: tables, relations, indexes, missing indexes และ estimation size

## Scope

ใช้สำหรับการรายงาน database schema จาก codebase — ไม่รวมการ review database quality (ใช้ `/review-database` สำหรับ review) และไม่รวมการรัน migrations (ใช้ `/follow-drizzle`)

## Execute

### 1. Discover Schema Files

ค้นหา schema definitions ทั้งหมดใน codebase

> Goal: มี schema files ครบสำหรับการรายงาน

1. ทำ `/scan-codebase` เพื่อค้นหา schema definitions (`pgTable`, `mysqlTable`, `sqliteTable`, `model`, `schema`)
2. ค้นหาใน directory: `src/modules/database/schema/`, `src/schema/`, `db/schema/`
3. ระบุไฟล์ schema ทั้งหมดและจำนวน tables
4. ระบุ ORM ที่ใช้: Drizzle, Prisma, TypeORM, Sequelize, raw SQL

### 2. Collect Table Metadata

รวบรวมข้อมูลของแต่ละ table

> Goal: มี metadata ครบสำหรับการรายงาน

1. ระบุ table name และ schema file
2. ระบุ columns: name, type, nullable, default, unique
3. ระบุ primary key: column name และ type (uuid, serial, etc.)
4. ระบุ foreign keys: column, references table, references column, onDelete behavior
5. ระบุ indexes: name, columns, unique, type
6. ระบุ constraints: check, not null, unique

### 3. Analyze Relations

วิเคราะห์ความสัมพันธ์ระหว่าง tables

> Goal: เข้าใจ relations และ referential integrity

1. จัดกลุ่ม relations ตาม type: one-to-one, one-to-many, many-to-many
2. ระบุ orphaned tables ที่ไม่มี relation กับ table อื่น
3. ระบุ cascade rules: `onDelete: cascade`, `onDelete: set null`, `onDelete: restrict`
4. ระบุ circular references ระหว่าง tables
5. สร้าง relation summary: table A → table B (FK column, cascade rule)

### 4. Analyze Indexes

วิเคราะห์ indexes ของทุก table

> Goal: รู้ index coverage และ missing indexes

1. ระบุ indexed columns ของแต่ละ table
2. ระบุ foreign key columns ที่ไม่มี index (missing indexes)
3. ระบุ query patterns ที่ควรมี index จาก code (WHERE, JOIN, ORDER BY)
4. ระบุ composite indexes ถ้ามี
5. ระบุ unused indexes ถ้าสามารถตรวจสอบได้

### 5. Estimate Size

ประเมินขนาดของ tables

> Goal: รู้ขนาดโดยประมาณของแต่ละ table

1. ระบุ columns ต่อ table และประเภทข้อมูล
2. ประเมิน row size โดยประมาณ (sum of column sizes)
3. ระบุ tables ที่น่าจะใหญ่ที่สุด (most columns, text/jsonb columns)
4. ระบุ tables ที่มี soft delete (deletedAt column) ซึ่งอาจสะสม rows
5. ระบุ tables ที่มี audit/log pattern ซึ่งเติบโตเร็ว

### 6. Format Report

จัดรูปแบบรายงานให้อ่านง่าย

> Goal: รายงานครบ อ่านง่าย มี insights

1. ทำ `/report-format-table` เพื่อจัดรูปแบบเป็นตาราง
2. แสดงผลตามลำดับ: Summary → Tables → Relations → Indexes → Size Estimation
3. กำหนด columns สำหรับตาราง tables:
   - **No.** ลำดับ
   - **Table** ชื่อ table
   - **Columns** จำนวน columns
   - **PK** primary key type
   - **FKs** จำนวน foreign keys
   - **Indexes** จำนวน indexes
   - **Relations** จำนวน relations
   - **Est. Size** small / medium / large
4. แยกตาราง: Tables, Relations, Missing Indexes

### 7. Provide Insights

ให้ insights และ recommendations

> Goal: ผู้อ่านรู้ว่าต้องปรับปรุงอะไร

1. สรุปจำนวน tables, relations, indexes ทั้งหมด
2. ระบุ missing indexes ที่ควรเพิ่ม (FK columns ที่ไม่มี index)
3. ระบุ tables ที่ใหญ่และอาจต้อง partitioning
4. ระบุ circular references ที่ควรแก้
5. แนะนำ next steps: `/review-database` สำหรับ review, `/follow-drizzle` สำหรับ migrations

## Rules

### Read-Only

- ไม่แก้ไข schema หรือรัน migrations — รายงานเท่านั้น
- ใช้ `/review-database` สำหรับ review database quality
- ใช้ `/follow-drizzle` สำหรับการจัดการ schema และ migrations

### Output Format

- ทำ `/report-format-table` สำหรับจัดรูปแบบผลลัพธ์
- แยกตาราง: Tables, Relations, Missing Indexes, Size Estimation
- ใช้ symbols: ✅ has index, ❌ missing index, ⚠️ potential issue

### High Impact Content

- ชี้เน้น missing indexes บน FK columns ก่อนเสมอ
- ชี้เน้น circular references ที่ควรแก้
- ชี้เน้น tables ที่ใหญ่และเติบโตเร็ว
- ถ้ามีมากกว่า 30 tables → แสดงเฉพาะที่มี issues และ top 10 ที่ใหญ่ที่สุด

### Non-Redundancy

- การ review database quality อยู่ใน `/review-database` แล้ว
- การจัดการ schema และ migrations อยู่ใน `/follow-drizzle` แล้ว
- การค้นหา code อยู่ใน `/scan-codebase` แล้ว

## Expected Outcome

- รายการ tables ทั้งหมดในตารางที่อ่านง่าย
- ข้อมูลครบ: columns, PK, FKs, indexes, relations, est. size
- ระบุ missing indexes และ circular references
- มี recommendations ชัดเจน
- ไม่มีการแก้ไข schema — read-only report
