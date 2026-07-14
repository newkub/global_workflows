---
title: Deep Follow Workflows
description: อ่านและทำตาม workflows อย่างละเอียด ทุกขั้นตอน แบบ recursive พร้อม verify
auto_execution_mode: 3
related:
  - /read-related-workflows
  - /check-reference
  - /follow-workflows
  - /loop-until-complete
  - /report-format-table
  - /suggest-next-action
---

## Goal

อ่านและทำตาม workflows อย่างละเอียดทุกขั้นตอน แบบ recursive ทุกระดับ พร้อม verify แต่ละ step เพื่อให้แน่ใจว่าทำครบถ้วน

## Scope

ใช้เมื่อต้องการ follow workflows อย่างละเอียด ทุก step ทุก sub-workflow ระดับลึก สำหรับงานที่ต้องการความสมบูรณ์สูง

สำหรับการ follow แบบปกติ ใช้ `/follow-workflows`, สำหรับอ่าน dependencies อย่างเดียว ใช้ `/read-related-workflows`

## Execute

Step dependencies: แต่ละ step ขึ้นกับ step ก่อนหน้าตามลำดับ (Step N ขึ้นกับ Step N-1)

### 1. Read All Related Workflows

อ่าน workflows ทั้งหมดที่เกี่ยวข้องแบบ recursive ทุกระดับ

- ทำ `/read-related-workflows` เพื่ออ่าน workflows ที่เกี่ยวข้องแบบ recursive ทุกระดับ
- อ่านทั้ง global workflows ใน `global_workflows/` และ project workflows ใน `.devin/workflows/` หรือ `.windsurf/workflows/`
- เก็บข้อมูล: title, description, execute steps, rules, expected outcome ของทุก workflow
- ถ้าอ่าน context ไม่ได้ ให้ stop และ report ไม่ฝืนทำ

### 2. Build Execution Plan

สร้าง execution plan จาก dependency graph ที่ได้จาก Step 1

- จัดเรียง workflows ตามลำดับ topological sort (parent ก่อน child)
- รวบรวม execute steps ทั้งหมดจากทุก workflow ทุกระดับ
- ระบุ tasks ที่ซ้ำซ้อนระหว่าง workflows เพื่อหลีกเลี่ยงการทำซ้ำ
- สร้าง ordered task list ที่ระบุ workflow ต้นทางของแต่ละ task
- ถ้าพบ circular dependency ให้ตัดวงจรและทำตามลำดับที่เป็นไปได้

### 3. Check References

ตรวจสอบ references ทั้งหมดก่อนเริ่ม execute

- ทำ `/check-reference` เพื่อตรวจสอบ workflows และ skills ที่อ้างอิงมีอยู่จริง
- ตรวจสอบ file paths, tool commands, และ external links ที่อ้างอิง
- ถ้า reference ขาดหายไป ให้ stop และ report ไม่ฝืนทำ

### 4. Execute Every Step

ทำตามทุก step ใน execution plan อย่างละเอียด

- ทำตามแต่ละ step ตามลำดับใน execution plan
- อ่าน workflow ต้นทางของ step นั้นก่อน execute เพื่อเข้าใจ context เต็มที่
- ใช้ reference แทนการ duplicate เนื้อหา
- ถ้า step อ้างอิง sub-workflow ให้ทำ sub-workflow นั้นให้ครบก่อนไป step ถัดไป
- ถ้า step fail ให้บันทึกสาเหตุ แก้ไข แล้ว retry ถ้าแก้ไม่ได้ให้ stop และ report

### 5. Verify Each Step

ตรวจสอบความสมบูรณ์ของแต่ละ step หลัง execute

- ตรวจสอบว่า output ของ step ตรงกับ expected outcome ที่ระบุใน workflow
- ตรวจสอบว่า rules ของ workflow นั้นถูกปฏิบัติครบถ้วน
- บันทึกผลลัพธ์ของแต่ละ step: pass, fail, หรือ skipped (พร้อมเหตุผล)
- ถ้า step ไม่ผ่าน ให้กลับไปแก้ที่ Step 4 แล้ว verify ใหม่

### 6. Loop Until Complete

ทำซ้ำจนกว่าทุก step จะผ่าน

- ทำ `/loop-until-complete` เพื่อวนลูป Step 4-5 จนกว่าทุก step จะ pass
- ตรวจสอบว่าไม่มี step ค้าง ไม่มี step fail
- ถ้าเกิน 3 รอบแล้วยังไม่ผ่าน ให้ stop และ report พร้อมรายละเอียด

### 7. Report Completion

รายงานผลการ execute ทั้งหมด

- ทำ `/report-format-table` เพื่อแสดงตารางสรุปผล: step, workflow, status, output
- แสดง dependency graph แบบ tree structure ที่ execute แล้ว
- สรุป expected outcomes ที่บรรลุ
- ทำ `/suggest-next-action` เพื่อแนะนำ workflows ที่ควรใช้ต่อ

## Rules

### 1. Thoroughness

- อ่านทุก workflow ที่เกี่ยวข้องแบบ recursive ทุกระดับ ไม่ข้ามขั้น
- ทำตามทุก step ในทุก workflow ไม่ข้าม step ใด
- ถ้า step อ้างอิง sub-workflow ให้ทำ sub-workflow นั้นให้ครบ
- ตรวจสอบว่า rules ของทุก workflow ถูกปฏิบัติครบ

### 2. Verification

- ตรวจสอบ output ของแต่ละ step หลัง execute เสมอ
- บันทึกผลลัพธ์ของแต่ละ step: pass, fail, หรือ skipped
- ถ้า step ไม่ผ่าน ให้แก้ไขแล้ว retry ไม่ข้ามไป step ถัดไป
- ใช้ `/loop-until-complete` เพื่อให้แน่ใจว่าทุก step ผ่าน

### 3. Order And Dependencies

- ทำตามลำดับ topological sort: parent workflows ก่อน child workflows
- อ่าน workflow ต้นทางก่อน execute เพื่อเข้าใจ context
- หลีกเลี่ยง circular dependencies โดยตัดวงจรและทำตามลำดับที่เป็นไปได้
- ระบุ tasks ที่ซ้ำซ้อนและทำเพียงครั้งเดียว

### 4. Error Handling

- ถ้าอ่าน context ไม่ได้ ให้ stop และ report
- ถ้า reference ขาดหายไป ให้ stop และ report
- ถ้า step fail ให้บันทึกสาเหตุ แก้ไข แล้ว retry
- ถ้าเกิน 3 รอบแล้วยังไม่ผ่าน ให้ stop และ report

### 5. Reporting

- ใช้ `/report-format-table` สำหรับตารางสรุปผล
- แสดง dependency graph แบบ tree structure
- สรุป expected outcomes ที่บรรลุ
- ทำ `/suggest-next-action` เพื่อแนะนำขั้นต่อไป

## Expected Outcome

- ทำตาม workflows ทุกขั้นตอนแบบ recursive ทุกระดับจนครบถ้วน
- แต่ละ step ผ่านการ verify แล้ว
- ตารางสรุปผล: step, workflow, status, output
- Dependency graph แบบ tree structure ที่ execute แล้ว
- Expected outcomes ที่บรรลุทั้งหมด
- แนะนำ workflows ที่ควรใช้ต่อ
