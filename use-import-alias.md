---

title: Use Import Alias

description: ใช้ import alias แทน relative paths ที่ซับซ้อน

auto_execution_mode: 3

---

## Goal

ตั้งค่าและใช้ import alias สำหรับโปรเจกต์เพื่อลดความซับซ้อนของ import paths

## Scope

ใช้สำหรับโปรเจกต์ที่มี import paths ซับซ้อน ทั้ง TypeScript, JavaScript, Python, Java และภาษาอื่นๆ

## Execute

### 1. Analyze Project Structure

ตรวจสอบ configuration และโครงสร้างโปรเจกต์

1. อ่าน configuration files หลัก (`package.json`, `tsconfig.json`, build config)
2. ตรวจสอบว่ามี module aliases อยู่แล้วหรือไม่
3. ระบุ build tool และ language runtime ที่ใช้
4. ตรวจสอบ configuration files ที่เกี่ยวข้องกับ import alias

### 2. Configure Import Alias

ตั้งค่า import alias ใน configuration files

1. ตั้งค่า module paths ใน configuration files (TypeScript: `paths`, Python: `sys.path`, Java: `classpath`)
2. ตั้งค่า build tool aliases (Vite: `resolve.alias`, Bun: `aliases`, Webpack: `alias`)
3. ตั้งค่า framework-specific aliases (`Next.js`, `Nuxt`, `Laravel`, `Spring`)
4. ตรวจสอบ consistency ระหว่าง configuration files

### 3. Replace Relative Imports

แทนที่ relative paths ด้วย import alias

1. ค้นหา relative imports ที่ซับซ้อน (`../../../`)
2. แทนที่ด้วย import alias ที่ตั้งค่าไว้ (ถ้าเป็น TypeScript ใช้ `#` สำหรับ root)
3. จัดเรียง imports ตามลำดับ: `external` → `internal` → `relative`
4. ใช้ type-only imports สำหรับ types (ถ้าภาษารองรับ)
5. สร้าง automation scripts ด้วย `/use-scripts` สำหรับการแทนที่ relative imports จำนวนมาก

### 4. Update Barrel Exports

ตรวจสอบและอัพเดท barrel exports

1. สร้าง barrel exports (`index.ts`, `__init__.py`, ไฟล์ index ตาม convention) สำหรับ folders ที่มี public API
2. export เฉพาะส่วนที่ต้องการให้โมดูลอื่นใช้งาน
3. อัพเดท imports ให้ใช้ barrel exports
4. ซ่อน implementation details

### 5. Verify

ตรวจสอบว่า import alias ทำงานได้ถูกต้อง

1. รัน type check หรือ linter ตรวจสอบว่าไม่มี errors
2. รัน build ตรวจสอบว่าไม่มี build errors
3. ตรวจสอบว่าไม่มี circular dependencies
4. ยืนยันว่า functionality ทั้งหมดยังทำงานได้ปกติ

## Rules

### 1. Import Alias Usage

ใช้ import alias เพื่อลดความซับซ้อนของ import paths

- ใช้ import alias เสมอเมื่อเป็นไปได้ แทน relative paths ที่ซับซ้อน (`../../../`)
- ถ้าเป็น TypeScript ใช้ `#` สำหรับ root alias (เช่น `#domain`, `#shared`)
- ตั้งค่า import alias ให้สอดคล้องกับโครงสร้างโปรเจกต์
- ใช้ naming conventions ที่สม่ำเสมอสำหรับ aliases

### 2. Import Organization

จัดระเบียบ imports ให้เป็นมาตรฐาน

- จัดเรียง imports ตามลำดับ: `external` → `internal` → `relative`
- ใช้ type-only imports สำหรับ types (ถ้าภาษารองรับ)
- หลีกเลี่ยงการ import ทั้ง folder โดยไม่จำเป็น
- จัดกลุ่ม imports ด้วย blank lines

### 3. Barrel Exports

จัดการ barrel exports อย่างเหมาะสม

- สร้าง barrel exports เฉพาะที่ public API เท่านั้น
- export เฉพาะส่วนที่ต้องการให้โมดูลอื่นใช้งาน (ซ่อน implementation details)
- รักษา consistency ในรูปแบบการ export
- ตรวจสอบว่าไม่มี circular dependencies เกิดขึ้น

## Expected Outcome

- import paths เป็นมาตรฐาน ใช้ alias ทั้งหมด
- ลดความซับซ้อนของ relative paths
- configuration files สอดคล้องกัน
- barrel exports ถูกต้อง
- type safety รักษาไว้ (ถ้าภาษารองรับ)
- functionality ทั้งหมดยังทำงานได้ปกติ

