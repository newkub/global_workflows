---
title: Restructure
description: ปรับโครงสร้างไฟล์และโฟลเดอร์ให้มี single responsibility ตาม domain
auto_execution_mode: 3
related:
  - /deep-review
  - /check-long-files
  - /review-code-quality
  - /edit-relative
  - /refactor
  - /relocation
  - /follow-ordering
  - /follow-barrel-export
  - /use-import-alias
  - /dont-over-engineer
  - /use-scripts
---

## Goal

ปรับปรุง physical file/folder structure ให้ทุกไฟล์และโฟลเดอร์มี single responsibility

## Scope

ครอบคลุม naming, relocation, grouping ของ physical structure สำหรับ logical concern separation ให้ใช้ `/refactor`

## Execute

### 1. Analyze Current Structure

วิเคราะห์โครงสร้างปัจจุบันเพื่อระบุปัญหาก่อนเปลี่ยนแปลง

1. ทำ `/deep-review` เพื่อระบุ SRP, SoC, type safety, hard code, anti-patterns, code smells, dead code, side effects, naming conventions
2. ทำ `/check-long-files` เพื่อระบุไฟล์ที่ยาวกว่า 250 บรรทัด
3. ถ้าไม่พบปัญหา → stop และ report

### 2. Improve File Naming

ปรับปรุง naming ให้สะท้อน responsibility ของไฟล์

1. ทำ `/review-code-quality` เพื่อปรับปรุง naming
2. ทำ `/edit-relative` เพื่ออัปเดต import paths
3. ถ้า naming ไม่ต้องปรับ → skip ไป Step 3

### 3. Split Files With Multiple Responsibilities

แยกไฟล์ที่มีหลาย responsibility ออกเป็นไฟล์ย่อย

1. ทำ `/refactor` สำหรับไฟล์ที่ยาวกว่า 250 บรรทัด
2. ทำ `/edit-relative` เพื่ออัปเดต imports
3. ถ้าไม่มีไฟล์เกิน 250 บรรทัด → skip ไป Step 4

> Goal reminder: เป้าหมายคือทุกไฟล์มี single responsibility ไม่เกิน 250 บรรทัด

### 4. Relocate And Group By Domain

ย้ายไฟล์ไปยังโฟลเดอร์ที่สอดคล้องกับ domain — **high-risk action**

1. ทำ `/relocation` เพื่อย้ายไฟล์ไปยังโฟลเดอร์ที่สอดคล้องกับ responsibility
2. ก่อนย้ายจริง → แสดง dry run preview และขอ user confirmation
3. ทำ `/follow-ordering` เพื่อจัดกลุ่มไฟล์ตาม domain
4. ทำ `/edit-relative` เพื่ออัปเดต imports
5. ถ้าย้ายไม่สำเร็จ → rollback และ stop และ report

### 5. Refactor Barrel Files And Import Aliases

ปรับปรุง entry files และ import paths ให้ใช้ alias แทน relative paths ที่ซับซ้อน

1. ทำ `/follow-barrel-export` เพื่อ refactor entry files
2. ทำ `/use-import-alias` เพื่อแทนที่ relative paths ที่ซับซ้อน
3. ถ้า barrel files ไม่ต้องปรับ → skip ไป Step 6

### 6. Validate Single Responsibility

ตรวจสอบว่าผลลัพธ์เป็นไปตามเป้าหมาย

1. รัน build หรือ type check เพื่อยืนยัน import paths ถูกต้อง
2. ทำ `/check-long-files` เพื่อยืนยันไม่มีไฟล์ที่ยาวกว่า 250 บรรทัด
3. ถ้า validation ไม่ผ่าน → กลับไปแก้ที่ Step 3 และ re-validate
   - ถ้าไม่ผ่านหลังจาก 3 ครั้ง → stop และ report

## Rules

### 1. Execution Principles

- ทำ `/dont-over-engineer` เสมอเมื่อเริ่มทำงาน
- ใช้ minimal changes เสมอ
- ถ้า file operations มากกว่า 10 ไฟล์ → ใช้ `/use-scripts`
- สำหรับ logical concern separation ให้ใช้ `/refactor`

### 2. File And Folder Boundaries

- หนึ่งไฟล์ทำหนึ่งเรื่อง ไม่เกิน 250 บรรทัด
- หนึ่งโฟลเดอร์รวมไฟล์ที่เกี่ยวข้องกับ domain เดียว
- naming สะท้อน responsibility ของไฟล์

### 3. Import Safety

- ทำ `/edit-relative` ทุกครั้งหลังย้ายหรือเปลี่ยนชื่อไฟล์
- ตรวจสอบ import paths ถูกต้องหลังทุกการเปลี่ยนแปลง

### 4. High-Risk Governance

- การย้ายไฟล์ (Step 4) เป็น high-risk action → ต้องมี user confirmation และ dry run mode
- ถ้า validation ไม่ผ่าน → rollback การเปลี่ยนแปลง

## Expected Outcome

- ทุกไฟล์มี `single responsibility` ชัดเจน ไม่เกิน 250 บรรทัด
- ทุกโฟลเดอร์จัดกลุ่มตาม domain เดียว
- naming สะท้อน responsibility ทั่วทั้งโปรเจกต์
- import paths ถูกต้อง ใช้ alias แทน relative paths ที่ซับซ้อน
