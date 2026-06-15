---
title: Follow Slidev
description: ตั้งค่าและพัฒนา presentation slides ด้วย Slidev framework
auto_execution_mode: 3
---

## Goal

สร้างและพัฒนา presentation slides ด้วย Slidev ใน drive D

## Scope

สร้าง Slidev project ใน `D:/newkub/slides` และรัน dev server พร้อม verify

## Execute

### 1. Create Project Directory

1. สร้าง directory `D:/newkub/slides` ถ้ายังไม่มี
2. เข้าไปใน directory นั้น

### 2. Initialize Slidev Project

1. รัน `bun create slidev` เพื่อสร้าง project ใหม่
2. ตั้งชื่อ project ตามต้องการ
3. ติดตั้ง dependencies ด้วย `bun install`

### 3. Configure Slides

1. แก้ไข `slides.md` ตามเนื้อหาที่ต้องการ
2. ตั้งค่า headmatter (theme, title, info, etc.)
3. เขียน content ด้วย Markdown syntax ของ Slidev

### 4. Run Verify

1. ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด
2. แก้ไข errors ที่เกิดขึ้นจนผ่าน

### 5. Run Dev Server

1. ทำ `/run-dev` เพื่อรัน development server
2. dev server จะรันที่ port 3030 (default)
3. เปิด browser เพื่อดู slides แบบ real-time

### 6. Export Slides (Optional)

1. ใช้ `bunx slidev export` เพื่อ export เป็น PDF
2. ใช้ `bunx slidev build` เพื่อ build เป็น static site

## Rules

### 1. Project Location

- สร้าง project ใน `D:/newkub/slides` เท่านั้น
- ใช้ Bun เป็น package manager ตาม global rules
- ใช้ Bun shell สำหรับ automation

### 2. Slidev CLI Usage

- ใช้ `bun create slidev` สำหรับสร้าง project ใหม่
- ใช้ `bunx slidev` สำหรับรัน dev server
- ใช้ `bunx slidev export` สำหรับ export slides
- ใช้ `bunx slidev build` สำหรับ build static site

### 3. Headmatter Configuration

- ตั้งค่า `theme` ตามที่ต้องการ (seriph, default, etc.)
- ตั้งค่า `title` และ `info` ให้ชัดเจน
- ใช้ `transition` สำหรับ slide transitions (slide-left, slide-right, fade-out, fade-in, slide-up, slide-down)
- เปิดใช้ `mdc: true` สำหรับ MDC syntax

### 4. Animation Transitions

#### Click Animations

- ใช้ `v-click` สำหรับ basic click animations
- ใช้ `v-after` สำหรับ show เมื่อ previous v-click triggered
- ใช้ `v-click.hide` หรือ `v-after.hide` สำหรับ hide after clicking
- ใช้ `v-clicks` component สำหรับ apply v-click ทั้งหมดใน children (รองรับ `depth`, `every` props)
- ใช้ `at` prop สำหรับ positioning (relative '+1', '-1' หรือ absolute 1, 2)
- ใช้ array value `[2, 4]` สำหรับ enter/leave indices
- ใช้ `v-switch` สำหรับ switch content ตาม click count
- ใช้ `clicks` frontmatter สำหรับ custom total clicks count
- ใช้ `clickAnimation` frontmatter สำหรับ default animation preset
- ใช้ directive modifiers เช่น `v-click.scale`, `v-click.fade.right`, `v-click.none`
- Built-in presets: fade, fade-in, up, down, left, right, scale, none
- สร้าง custom presets ด้วย CSS rules สำหรับ `.slidev-vclick-anim-{presetName}`

#### Motion Animations

- ใช้ `v-motion` สำหรับ motion effects (powered by @vueuse/motion)
- กำหนด states: `initial`, `enter`, `leave`, `click-N`, `click-N-M`
- ใช้ร่วมกับ `v-click` บน element เดียวกันเพื่อ trigger motion ตาม click states
- ใช้ `preload: false` ใน frontmatter สำหรับเปิดใช้ motion (ก่อน v0.48.9)

#### Slide Transitions

- ใช้ `transition` ใน frontmatter สำหรับ slide transitions
- Built-in transitions: fade, fade-out, slide-left, slide-right, slide-up, slide-down, view-transition
- ใช้ `view-transition-name` CSS property สำหรับ View Transitions API
- สร้าง custom transitions ด้วย CSS classes (`.my-transition-enter-active`, `.my-transition-leave-to`)
- ใช้ `|` separator สำหรับ forward/backward transitions (เช่น `go-forward | go-backward`)
- ใช้ object format สำหรับ advanced options (name, enterFromClass, enterActiveClass, duration)

### 5. Markdown Syntax

- ใช้ `---` สำหรับแบ่ง slides
- ใช้ `v-click` สำหรับ click animations
- ใช้ `layout` สำหรับ custom layouts
- ใช้ Vue components ใน Markdown ได้

### 6. Development Workflow

- ต้องรัน `/run-verify` ก่อน `/run-dev`
- ติดตามและแก้ไข errors ทันที
- ตรวจสอบว่า dev server ทำงานได้
- Export slides เมื่อพร้อมแชร์

## Expected Outcome

- Slidev project สร้างใน `D:/newkub/slides`
- Dev server ทำงานได้ที่ port 3030
- Slides แสดงผลได้ถูกต้องใน browser
- สามารถ export เป็น PDF หรือ build เป็น static site
