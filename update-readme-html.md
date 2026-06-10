---
title: Update Readme HTML
description: อัปเดตไฟล์ README.html ด้วย tab system 7 tabs พร้อม search, sorting, grouping และ expand/collapse
auto_execution_mode: 3
related_workflows:
  - /html
---

## Goal

อัปเดตไฟล์ `README.html` ด้วย tab system 7 tabs พร้อม search, sorting, grouping และ expand/collapse

## Scope

สร้างไฟล์ README.html ที่มี tab system 7 tabs: Features, Dependencies, Architecture, API Endpoints, Database Schema, Environment Variables, Getting Started

## Execute

### 1. Setup HTML Structure

1. ทำตาม `/html` เพื่อ setup HTML structure พื้นฐาน
2. สร้างไฟล์ `README.html` ใน project root
3. ใช้ Vue 3 ผ่าน esm-browser module

### 2. Create Tab System

1. สร้าง 7 tabs: Features, Dependencies, Architecture, API Endpoints, Database Schema, Environment Variables, Getting Started
2. ใช้ Tailwind CSS สำหรับ tab navigation
3. เพิ่ม active state สำหรับ tab ที่เลือก
4. Center tab navigation

### 3. Add Features Tab

1. จัดกลุ่ม features ตาม category
2. สร้าง table พร้อม expand/collapse สำหรับแต่ละ category
3. แสดง 7 columns: feature (icon + name), status, category, description, benefit, priority, module
4. เพิ่ม sorting functionality สำหรับทุก columns
5. เพิ่ม search functionality
6. ใช้ row, subrow สำหรับแสดง features ละเอียด

### 4. Add Dependencies Tab

1. จัดกลุ่ม dependencies ตาม category
2. สร้าง table พร้อม equal column widths
3. แสดง 6 columns: library (link), version, license, type, security, source
4. เพิ่ม tags สำหรับ types พร้อม color coding
5. เพิ่ม search functionality
6. ลดขนาด table rows

### 5. Add Architecture Tab

1. แสดงโครงสร้างโปรเจกต์แบบ tree view
2. จัดกลุ่มตาม layers (apps, packages, modules)
3. เพิ่ม expand/collapse สำหรับแต่ละ layer
4. แสดง relationships ระหว่าง modules

### 6. Add API Endpoints Tab

1. จัดกลุ่ม API endpoints ตาม module
2. แสดง method, path, description, parameters
3. เพิ่ม search functionality
4. เพิ่ม color coding สำหรับ methods (GET, POST, PUT, DELETE)

### 7. Add Database Schema Tab

1. จัดกลุ่ม tables ตาม module
2. แสดง table name, columns, types, relationships
3. เพิ่ม expand/collapse สำหรับแต่ละ table
4. เพิ่ม search functionality

### 8. Add Environment Variables Tab

1. จัดกลุ่ม env vars ตาม category
2. แสดง variable name, description, default value, required
3. เพิ่ม search functionality
4. ใช้ tags สำหรับ required/optional

### 9. Add Getting Started Tab

1. แสดงขั้นตอนการติดตั้ง
2. แสดง commands สำหรับ setup
3. แสดง prerequisites
4. แสดง quick start guide

## Rules

### 1. Follow HTML Structure

ทำตาม `/html` สำหรับ HTML structure พื้นฐาน:
- Vue 3 ผ่าน esm-browser module: `https://unpkg.com/vue@3/dist/vue.esm-browser.js`
- Tailwind CSS CDN
- Dark mode ด้วย `<html class="dark">`
- ใช้ `<script type="module">` สำหรับ Vue imports

### 2. Tab System Pattern

```javascript
const activeTab = ref('features')

const tabs = [
  { id: 'features', label: 'Features' },
  { id: 'dependencies', label: 'Dependencies' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'api', label: 'API Endpoints' },
  { id: 'database', label: 'Database Schema' },
  { id: 'env', label: 'Environment Variables' },
  { id: 'getting-started', label: 'Getting Started' }
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
- แสดง 7 tabs: Features, Dependencies, Architecture, API Endpoints, Database Schema, Environment Variables, Getting Started
- Features table มี 7 columns: feature (icon + name), status, category, description, benefit, priority, module
- Features ถูก group ตาม category พร้อม expand/collapse, sorting, grouping
- Dependencies table มี 6 columns: library (clickable link), version, license, type, security, source พร้อม equal widths
- Dependencies ถูก group ตาม category
- Library names ใน dependencies table เป็น clickable links ที่เปิดใน tab ใหม่
- ทุก tabs มี search functionality
- Table rows มีขนาดเล็ก (p-2, text-xs)
- UI/UX มีความ Modern, Clean และ Simple
- Dark mode รองรับผ่าน `class="dark"`
