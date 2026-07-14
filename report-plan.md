---
title: Report Plan
description: รายงานแผนงานในแชทก่อนลงมือทำ พร้อม task table และ file structure
auto_execution_mode: 3
related:
  - /plan
  - /report-format-table
  - /report-format-file-structure
  - /report-format-terminal
  - /suggest-next-action
---

## Goal

รายงานแผนงานในแชทก่อนลงมือ implement เพื่อให้ผู้ใช้เห็นภาพรวมและตัดสินใจได้

## Scope

ใช้หลังจาก `/plan` เสร็จ รายงานแผนเป็นตารางและ file structure ในแชท แล้วทำงานต่อได้เลย

## Execute

### 1. Summarize Plan

สรุปแผนงานเป็น bullet points สั้นๆ:

1. ระบุ goal และ scope ของงาน
2. ระบุจำนวน tasks และประเภท (create, modify, delete)
3. ระบุ library choices พร้อมเหตุผล
4. ระบุ milestones และ timeline

### 2. Report Task Table

แสดงตาราง tasks ตาม `/report-format-table`:

1. คอลัมน์ (21 คอลัมน์): # | Task | Solution | Type | Priority | Effort | Impact | Risk | Confidence | Phase | Estimate | Deps | Blocker | Test Type | Value | API | DB | UI | Breaking | Files | Status
2. Solution ระบุแนวทางแก้ปัญหา/วิธีการ สั้นๆ เช่น `DRY`, `New module`, `Refactor`, `Config`
3. Type ระบุ: Create, Modify, Delete
4. Priority ระบุ: P0 (critical), P1 (high), P2 (medium), P3 (low)
5. Effort ระบุ: S, M, L, XL
6. Impact ระบุ: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
7. Risk ระบุ: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
8. Confidence ระบุความมั่นใจในการประเมิน: 🔴 ต่ำ, 🟡 ปานกลาง, 🟢 สูง
9. Phase ระบุ: MVP, v2, v3
10. Estimate ระบุเวลาประเมิน เช่น `1d`, `3d`, `1w`
11. Deps ระบุ task dependencies เช่น `#1, #3` หรือ `-`
12. Blocker ระบุสิ่งที่อาจบล็อก task ที่ไม่ใช่ task dependency สั้นๆ หรือ `-`
13. Test Type ระบุประเภท test: Unit, Integration, E2E, Manual, หรือ `-`
14. Value ระบุมูลค่าทางธุรกิจ: 🔴 สูง, 🟡 ปานกลาง, 🟢 ต่ำ
15. API ระบุกระทบ API layer: `✓` กระทบ, `-` ไม่กระทบ หรือระบุ endpoint สั้นๆ เช่น `GET /solutions`
16. DB ระบุกระทบ Database: `✓` กระทบ, `migration` ต้อง migrate, `-` ไม่กระทบ
17. UI ระบุกระทบ UI: `✓` กระทบ, `-` ไม่กระทบ หรือระบุ component สั้นๆ
18. Breaking ระบุ breaking change: `✓` breaking, `-` ไม่ breaking
19. Files ระบุไฟล์ที่กระทบ สั้นๆ
20. Status ระบุ: ⬜ ยังไม่ทำ, 🔄 กำลังทำ, ✅ เสร็จแล้ว

### 3. Report Execution Order

ระบุลำดับการทำงาน:

1. จัดกลุ่ม tasks เป็น phases: Foundation → Core → Polish → Test
2. ระบุ critical path: tasks ที่ต้องทำตามลำดับ
3. ระบุ parallelizable tasks: tasks ที่ทำพร้อมกันได้
4. แสดง execution sequence เป็นลิสต์: Phase 1 → Phase 2 → Phase 3
5. ระบุ milestones และ deliverables แต่ละ phase

### 4. Report File Structure

แสดง file structure ตาม `/report-format-file-structure`:

1. แสดง tree diagram ของไฟล์ที่จะสร้าง/แก้ไข/ลบ
2. ระบุ file pattern และ naming convention
3. ระบุ module boundaries และ dependencies

### 5. Report Metrics

แสดง planning metrics สั้นๆ:

1. แสดงตาราง metrics ตาม `/plan` Metrics section
2. ระบุ critical path และ parallelizable tasks
3. ระบุ test coverage target

### 6. Continue Execution

หลัง report แล้วทำงานต่อเลย:

1. ทำ `/suggest-next-action` เพื่อแนะนำ action ถัดไป
2. เริ่ม implement ตาม execution order ได้เลย ไม่ต้องรอยืนยัน
3. ถ้ามีความเสี่ยงสูง ให้ใช้ `/ask-me` ก่อน implement

## Rules

### 1. Report Before Implement

- ต้อง report plan ในแชทก่อนลงมือทำเสมอ
- รายงานเป็นภาษาไทย กระชับ ตรงประเด็น
- ใช้ตารางสำหรับ tasks และ file structure

### 2. Auto Continue

- หลัง report แล้วทำงานต่อได้เลย ไม่ต้องรอยืนยัน
- ยกเว้นกรณีเสี่ยงสูง ให้ใช้ `/ask-me`
- ไม่หยุดถามถ้าไม่จำเป็น

### 3. Format

- ใช้ `/report-format-table` สำหรับ task table
- ใช้ `/report-format-file-structure` สำหรับ file tree
- ใช้ `/report-format-terminal` สำหรับ metrics ถ้าจำเป็น

## Expected Outcome

- สรุปแผนงานเป็น bullet points ในแชท
- ตาราง tasks 21 คอลัมน์ พร้อม solution, confidence, blocker, test type, value, api, db, ui, breaking, priority, phase, estimate, status
- Execution order แบ่งเป็น phases พร้อม critical path
- File structure tree diagram
- Planning metrics สรุป
- ทำงานต่อได้เลยหลัง report
