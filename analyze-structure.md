---
title: Analyze Structure
description: วิเคราะห์โครงสร้างไฟล์และ folders ของโปรเจกต์ด้วย tree view และ ast-grep outline
auto_execution_mode: 3
related_workflows:
  - /follow-ast-grep
  - /use-ast-grep
  - /edit-relative
  - /check-long-files
---

## Goal

วิเคราะห์โครงสร้างไฟล์และ folders ของโปรเจกต์เพื่อดูการจัดระเบียบและความสม่ำเสมอ

## Scope

ใช้สำหรับวิเคราะห์:
- โครงสร้างไฟล์และ folders (directory tree)
- โครงสร้างภายในไฟล์ (functions, classes, imports, exports)
- File patterns และ naming conventions
- Single Responsibility Principle violations (ผ่าน structure analysis)

## Execute

### 1. Run Tree Command

1. รัน `eza --tree --git-ignore` เพื่อแสดง directory tree
2. ทำ `/use-scripts` เพื่อ analyze directory patterns, check naming conventions, generate tree visualization, และ validate structure ใน script เดียว

### 2. Check Long Files

1. ทำ `/check-long-files` เพื่อตรวจสอบไฟล์ที่ยาวกว่า 250 บรรทัด
2. บันทึกรายชื่อไฟล์ที่ต้อง split สำหรับการวิเคราะห์ต่อไป

### 3. Run ast-grep Outline

1. รัน `sg outline <path> --items structure --view digest` เพื่อดูโครงสร้างภายในไฟล์
2. รัน `sg outline <path> --items exports --view names` เพื่อดู exports ทั้งหมด
3. วิเคราะห์ผลลัพธ์:
   - ไฟล์ที่มี functions/classes มากเกินไป (potential SRP violation)
   - ไฟล์ที่มี imports มากเกินไป (tight coupling)
   - ไฟล์ที่ไม่มี exports (potential dead code)
   - Naming consistency ของ functions/classes

### 4. Analyze Findings

1. ระบุไฟล์/folders ที่มีปัญหา:
   - ไฟล์ที่ยาวเกิน 250 บรรทัด (จากผลลัพธ์ `/check-long-files`)
   - Folders ที่มีไฟล์มากเกินไป
   - Naming ที่ไม่สม่ำเสมอ
   - Structure ที่ไม่ชัดเจน
2. จัดลำดับความสำคัญของปัญหา
3. แนะนำการแก้ไข

### 5. Update References

ทำ `/edit-relative` เพื่ออัปเดทไฟล์ที่เกี่ยวข้องหากมีการเปลี่ยนแปลง

## Rules

### 1. Tree Command

- ใช้ `eza --tree --git-ignore` เพื่อแสดง tree view
- ใช้ `--level <n>` เพื่อจำกัด depth ถ้า directory ใหญ่มาก

### 2. ast-grep Outline Usage

ทำตาม `/follow-ast-grep` สำหรับการใช้งาน ast-grep

**Common Commands:**
```bash
# ดู structure ภายในไฟล์/โฟลเดอร์
sg outline src/modules --items structure --view digest

# ดู exports ทั้งหมด
sg outline src/modules --items exports --view names

# ดู imports ทั้งหมด
sg outline src/modules --items imports --view names

# ดูทุกอย่าง (imports + exports + structure)
sg outline src/modules --items all --view expanded

# Filter ด้วย regex
sg outline src/modules --match "Provider|Service" --type class
```

**View Modes:**
- `names`: แสดงชื่อเท่านั้น (เหมาะสำหรับ directory scan)
- `digest`: แสดง signatures + member digests (default)
- `expanded`: แสดงทุกอย่างแบบละเอียด
- `signatures`: แสดง signatures เท่านั้น

### 3. Architecture Validation

- ตรวจสอบว่าโครงสร้างสอดคล้องกับ architecture ที่ตั้งไว้
- ตรวจสอบว่าไม่มีไฟล์ที่ไม่จำเป็น
- ตรวจสอบว่ามี barrel exports (index.ts) ใน subfolders

### 4. File Pattern Rules

สร้างกฎตาม file pattern สำหรับโปรเจกต์

- ตรวจสอบว่ามี file pattern rules สำหรับโปรเจกต์
- สร้าง file pattern rules ตามโครงสร้างจริงของโปรเจกต์
- ใช้ `glob` patterns สำหรับกำหนด file patterns
- แยก file patterns ตามประเภท (components, pages, utils, etc.)
- กำหนด naming conventions สำหรับแต่ละ file pattern

### 5. SRP Detection

ใช้ ast-grep outline เพื่อ detect potential SRP violations:

- Classes/Functions ที่มี methods มากกว่า 7
- Files ที่มี lines มากกว่า 200
- Files ที่มี imports มากกว่า 10
- Generic names ที่ไม่ชัดเจน (Manager, Handler, Processor, Utility, Helper)

## Expected Outcome

- แสดง tree view ของโครงสร้างโปรเจกต์
- แสดง structure ภายในไฟล์ด้วย ast-grep outline
- เข้าใจการจัดระเบียบไฟล์และ folders
- ระบุไฟล์/folders ที่มีปัญหา (SRP violations, tight coupling)
- ตรวจสอบโครงสร้างได้อย่างรวดเร็ว
