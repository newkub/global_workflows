---
title: Improve Flow
description: ปรับปรุง flow ให้ถูกต้อง ไหลลื่น และรวดเร็วขึ้น
auto_execution_mode: 3
related_workflows:
  - /follow-content-quality
---

## Goal

ปรับปรุง flow ทั่วไปให้ถูกต้อง ไหลลื่น และรวดเร็วขึ้น

## Scope

ครอบคลุม flows ทั่วไปทุกประเภท:
- Program flows (logic, algorithms, data processing)
- Process flows (workflows, pipelines, operations)
- System flows (state management, event handling)
- Content flows (documentation, workflows)

## Execute

### 1. Analyze Current Flow

1. อ่าน flow ที่ต้องการปรับปรุง
2. วิเคราะห์โครงสร้างและขั้นตอนปัจจุบัน
3. ระบุ bottlenecks และ inefficiencies
4. ตรวจสอบความสอดคล้องกับ best practices
5. วัดผลลัพธ์ปัจจุบัน (speed, correctness, flow)

### 2. Fix Correctness Issues

แก้ไขความถูกต้องของ flows

1. ระบุ logic errors หรือ bugs ใน flows
2. แก้ไข sequence ที่ผิดพลาด
3. แก้ไข conditions ที่ไม่ถูกต้อง
4. แก้ไข error handling ที่ขาดหาย
5. แก้ไข edge cases ที่ไม่ครอบคลุม
6. ตรวจสอบว่า flow ทำงานได้จริง

### 3. Optimize Flow Structure

ทำให้ flows ไหลลื่น

1. จัดลำดับ Execute ตาม impact order (foundation ก่อน, high impact ก่อน)
2. จัดลำดับ steps ตาม dependencies ที่ถูกต้อง
3. ลบข้อความที่ซ้ำซ้อนระหว่าง Execute และ Rules
4. ตรวจสอบว่าไม่มี circular dependencies
5. ทำให้ transitions ระหว่าง steps ชัดเจน
6. ทำให้ flow เป็น linear และ predictable

### 4. Optimize For Efficiency

ทำให้ flows ทำงานได้เร็ว

1. ระบุ steps ที่ใช้เวลานาน (bottlenecks)
2. รวมขั้นตอนที่คล้ายกันเป็นขั้นตอนเดียว
3. ใช้ references แทนการ duplicate เนื้อหา
4. เพิ่ม automation หากเป็นไปได้ (เช่น ใช้ `/use-scripts`)
5. แยก steps ที่สามารถทำ parallel ได้
6. เพิ่ม shortcuts หรือ caching ถ้าเหมาะสม

### 5. Validate And Test

ตรวจสอบผลลัพธ์การปรับปรุง

1. ตรวจสอบว่าไม่เกิน 300 บรรทัด
2. ทำ `/follow-content-quality` เพื่อตรวจสอบคุณภาพ
3. ตรวจสอบว่า flows ที่อ้างอิงมีอยู่จริง
4. ทดสอบ flow ในสถานการณ์จริง
5. ทดสอบ edge cases และ error scenarios

## Rules

### 1. Correctness Standards

ต้องถูกต้องตาม logic เสมอ เพื่อให้ flows ทำงานได้ถูกต้องและเชื่อถือได้

- Logic ต้องถูกต้องไม่มี bugs
- Sequence ต้องเป็นไปตามลำดับที่ถูกต้อง
- Conditions ต้องครอบคลุมทุก cases
- Error handling ต้องครบถ้วน
- Edge cases ต้องถูกจัดการ

### 2. Impact Order

จัดลำดับ Execute ตามลำดับความสำคัญ:

- Foundation ก่อน (setup, config, dependencies)
- High impact items ก่อน
- Dependencies ของขั้นตอนถัดไปก่อน
- Critical path ก่อน
- Hard to change ก่อน
- High risk เพื่อ fail fast

### 3. Non-Redundancy

หลีกเลี่ยงความซ้ำซ้อน:

- ลบข้อความที่ซ้ำซ้อนระหว่าง Execute และ Rules
- รวบรวมรายละเอียดที่เหมือนกันไว้ที่เดียว
- ใช้ references แทนการ duplicate เนื้อหา
- เป็น single source of truth

### 4. Deterministic Behavior

flow ต้อง:

- ให้ผลลัพธ์เหมือนกันทุกครั้งที่ทำตาม
- ไม่ใช้คำสั่ง subjective หรือ ambiguous
- ระบุลำดับการทำงามชัดเจน
- ไม่ข้ามขั้นตอน

### 5. Automation

พิจารณา automation สำหรับ flows:

- ใช้ `/use-scripts` สำหรับ file operations จำนวนมาก
- ใช้ `/use-scripts` สำหรับ data processing ที่ซับซ้อน
- ใช้ `/use-scripts` สำหรับ pattern matching ที่ต้อง parser
- ลด manual steps ให้น้อยที่สุด

## Expected Outcome

- Flow ถูกต้องตาม logic
- Flow ไหลลื่นไม่สะดุด
- Flow ทำงานได้เร็วขึ้น
- ลดความซ้ำซ้อนและ bottlenecks
- ไม่มี circular dependencies
- ความสอดคล้องกับ best practices
