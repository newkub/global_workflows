---
title: Update Readme HTML
description: อัปเดตไฟล์ README.html ด้วย tab system สำหรับ Features และ Dependencies
auto_execution_mode: 3
related_workflows:
  - /follow-html
---

## Goal

อัปเดตไฟล์ `README.html` ด้วย tab system สำหรับ Features และ Dependencies พร้อม search functionality และ grouping

## Scope

สร้างไฟล์ README.html ที่มี tab system 2 tabs พร้อม search และ grouping

## Execute

### 1. Setup HTML Structure

1. ทำตาม `/follow-html` เพื่อ setup HTML structure พื้นฐาน
2. สร้างไฟล์ `README.html` ใน project root
3. ใช้ Vue 3 ผ่าน esm-browser module

### 2. Create Tab System

1. สร้าง 2 tabs: Features, Dependencies
2. ใช้ Tailwind CSS สำหรับ tab navigation
3. เพิ่ม active state สำหรับ tab ที่เลือก
4. Center tab navigation

### 3. Add Features Tab

1. จัดกลุ่ม features ตาม category
2. สร้าง table โดยไม่มี expand/collapse (default state)
3. แสดง feature (พร้อม icon), description, benefit
4. เพิ่ม search functionality
5. ลดขนาด table rows

### 4. Add Dependencies Tab

1. จัดกลุ่ม dependencies ตาม category
2. สร้าง table พร้อม equal column widths
3. แสดง library (พร้อม link), version, type, source
4. เพิ่ม tags สำหรับ types พร้อม color coding
5. เพิ่ม search functionality
6. ลดขนาด table rows

## Rules

### 1. Follow HTML Structure

ทำตาม `/follow-html` สำหรับ HTML structure พื้นฐาน:
- Vue 3 ผ่าน esm-browser module: `https://unpkg.com/vue@3/dist/vue.esm-browser.js`
- Tailwind CSS CDN
- Dark mode ด้วย `<html class="dark">`
- ใช้ `<script type="module">` สำหรับ Vue imports

### 2. Tab System Pattern

```javascript
const activeTab = ref('features')

const tabs = [
  { id: 'features', label: 'Features' },
  { id: 'dependencies', label: 'Dependencies' }
]
```

### 3. Features Grouping

```javascript
const groupedFeatures = computed(() => {
  const groups = {}
  features.value.forEach(f => {
    if (!groups[f.category]) groups[f.category] = { category: f.category, items: [] }
    groups[f.category].items.push(f)
  })
  return Object.values(groups)
})
```

### 4. Dependencies Grouping

```javascript
const groupedDependencies = computed(() => {
  const groups = {}
  filteredDependencies.value.forEach(d => {
    if (!groups[d.category]) groups[d.category] = { category: d.category, items: [] }
    groups[d.category].items.push(d)
  })
  return Object.values(groups)
})
```

### 5. Search Functionality

```javascript
const searchQuery = ref('')
const filteredFeatures = computed(() => {
  if (!searchQuery.value) return features
  const query = searchQuery.value.toLowerCase()
  return features.filter(f => 
    f.name.toLowerCase().includes(query) ||
    f.description.toLowerCase().includes(query) ||
    f.benefit.toLowerCase().includes(query)
  )
})
```

### 6. Table Styling

- ใช้ `table-layout: fixed` สำหรับ equal column widths
- กำหนด `width: 25%` สำหรับแต่ละ column (4 columns)
- ใช้ `p-2` และ `text-xs` สำหรับ small row size
- ใช้ Tailwind classes สำหรับ tag colors

### 7. Library Links

- เพิ่ม `url` field ใน dependencies data
- ใช้ `v-if="dep.url"` เพื่อแสดง link เฉพาะเมื่อมี url
- เปิด link ใน tab ใหม่ด้วย `target="_blank"`
- เพิ่ม security attributes `rel="noopener noreferrer"`
- ใช้สี blue (`text-blue-400`) พร้อม hover effect

### 8. Tab Navigation

- ใช้ Tailwind classes สำหรับ tab styling
- Active tab ต้องมี visual feedback
- Center tab navigation ด้วย `flex justify-center`

## Expected Outcome

- ไฟล์ `README.html` สร้างด้วย Vue 3 (esm-browser) และ Tailwind CSS
- แสดง 2 tabs: Features (grouped table), Dependencies (grouped table)
- Features table มี 3 columns: feature (icon + name), description, benefit
- Features ถูก group ตาม category โดยไม่มี expand/collapse
- Dependencies table มี 4 columns: library (clickable link), version, type, source พร้อม equal widths
- Dependencies ถูก group ตาม category
- Library names ใน dependencies table เป็น clickable links ที่เปิดใน tab ใหม่
- ทั้ง 2 tabs มี search functionality
- Table rows มีขนาดเล็ก (p-2, text-xs)
- UI/UX มีความ Modern, Clean และ Simple
- Dark mode รองรับผ่าน `class="dark"`