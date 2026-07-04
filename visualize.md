---
title: Visualize
description: สร้าง visual ให้เข้าใจง่าย ทั้ง ANSI และ Web mode บน OS temp directory
auto_execution_mode: 3
related_workflows:
  - /sketch
  - /follow-html
  - /open-readme-html
  - /open-web
---

## Goal

สร้าง visual ให้เข้าใจข้อมูล โครงสร้าง หรือ concept ได้ง่าย โดยเลือก output เป็น ANSI (terminal) หรือ Web (browser)

## Scope

ใช้สำหรับ visualize ข้อมูล โครงสร้าง หรือ concept ที่ซับซ้อน โดยสร้างไฟล์ชั่วคราวใน OS temp directory

## Execute

### 1. Analyze Content

วิเคราะห์เนื้อหาที่จะ visualize:

1. ระบุประเภทเนื้อหา (data, structure, flow, concept, comparison)
2. ระบุความสัมพันธ์และ hierarchy
3. กำหนดว่า ANSI หรือ Web เหมาะสมกว่ากัน:
   - **ANSI**: ข้อมูลน้อย ต้องการดูใน terminal ไม่ต้อง interaction
   - **Web**: ข้อมูลเยอะ ต้องการ interaction, search, filter, tabs

### 2. Generate ANSI Mode

สร้าง visual แบบ ANSI/ASCII art:

1. ทำ `/sketch` สำหรับ ASCII art patterns และ symbols
2. ใช้ box characters สำหรับ containers (`┌─┐`, `│ │`, `└─┘`)
3. ใช้ arrows สำหรับ relationships (`→`, `↓`)
4. สร้างไฟล์ใน OS temp directory:
   - Windows: `$env:TEMP\visualize-<name>.txt`
   - macOS/Linux: `/tmp/visualize-<name>.txt`
5. แสดงผลใน terminal โดยตรง

### 3. Generate Web Mode

สร้าง visual แบบ HTML ใน browser:

1. ทำ `/follow-html` สำหรับ HTML structure พื้นฐาน
2. ใช้ Vue 3 ผ่าน unpkg CDN
3. ใช้ Tailwind CSS สำหรับ styling
4. ถ้าต้องการ tab system ให้อ้างอิง `/open-readme-html`
5. สร้างไฟล์ใน OS temp directory:
   - Windows: `$env:TEMP\visualize-<name>.html`
   - macOS/Linux: `/tmp/visualize-<name>.html`
6. ทำ `/open-web` เพื่อเปิดใน browser

### 4. Design Visual Layout

ออกแบบ layout ตามประเภทเนื้อหา:

1. **Data tables**: ใช้ `<el-table>` หรือ ASCII tables พร้อม sorting
2. **Hierarchies**: ใช้ tree structure หรือ nested boxes
3. **Flows**: ใช้ arrows และ decision points
4. **Comparisons**: ใช้ side-by-side layout
5. **Statistics**: ใช้ charts หรือ bar graphs
6. **Relationships**: ใช้ graph หรือ matrix

### 5. Add Interactivity (Web Mode Only)

เพิ่ม interaction สำหรับ Web mode:

1. เพิ่ม search ด้วย `<el-input>` หรือ `<input v-model>`
2. เพิ่ม filter ด้วย computed properties
3. เพิ่ม expand/collapse ด้วย `<el-collapse>`
4. เพิ่ม tabs สำหรับจัดกลุ่มข้อมูล
5. เพิ่ม dark mode ด้วย `<html class="dark">`

## Rules

### 1. Output Location

- สร้างไฟล์ใน OS temp directory เท่านั้น เป็นไฟล์ชั่วคราว
- Windows: ใช้ `$env:TEMP` environment variable
- macOS/Linux: ใช้ `/tmp` directory
- ตั้งชื่อไฟล์ `visualize-<descriptive-name>.<ext>`
- ไม่สร้างไฟล์ใน project directory

### 2. Mode Selection

- **ANSI**: เหมาะสำหรับข้อมูลน้อย ดูใน terminal ไม่ต้อง interaction
- **Web**: เหมาะสำหรับข้อมูลเยอะ ต้องการ interaction, search, filter
- ถ้าไม่แน่ใจ ให้เริ่มจาก ANSI ก่อน แล้วเปลี่ยนเป็น Web ถ้าข้อมูลเยอะ

### 3. ANSI Standards

- ทำตาม `/sketch` สำหรับ ASCII art patterns
- ใช้ box drawing characters มาตรฐาน
- เน้น structure มากกว่า aesthetics
- แสดง hierarchy ด้วย indentation

### 4. Web Standards

- ทำตาม `/follow-html` สำหรับ HTML structure
- ใช้ Vue 3 ผ่าน unpkg CDN
- ใช้ Tailwind CSS CDN
- รองรับ dark mode
- ถ้าต้องการ Element Plus components ให้อ้างอิง `/open-readme-html`

### 5. Content Clarity

- เน้นความเข้าใจง่ายกว่าความสวยงาม
- ใช้ labels และ annotations ชัดเจน
- จัดกลุ่มข้อมูลที่เกี่ยวข้อง
- ใช้ color/contrast สำหรับ emphasis

## Expected Outcome

- Visual ที่เข้าใจง่าย ทั้ง ANSI และ Web mode
- ไฟล์ชั่วคราวใน OS temp directory
- ANSI mode แสดงใน terminal ได้ทันที
- Web mode เปิดใน browser พร้อม interaction
- ข้อมูลที่ซับซ้อนกลายเป็น visual ที่เข้าใจได้ง่าย
