---
title: Create Thumbnail Readme
description: สร้าง image thumbnail 16:9 สำหรับ README ด้วย prompt ที่เหมาะสม
auto_execution_mode: 3
---


## Goal

สร้าง thumbnail image 16:9 สำหรับ README ด้วย AI image generation

## Scope

สร้าง thumbnail สำหรับ project README ที่มีขนาด 16:9 และสอดคล้องกับ context ของโปรเจกต์

## Execute

### 1. Analyze Project Context

วิเคราะห์โปรเจกต์เพื่อสร้าง prompt ที่เหมาะสม

1. ทำ `/analyze-project` เพื่อดูภาพรวมโปรเจกต์
2. อ่าน `README.md` เพื่อเข้าใจ purpose และ features ของโปรเจกต์
3. ตรวจสอบ tech stack และ framework ที่ใช้
4. ระบุ target audience และ use case หลัก

### 2. Determine Thumbnail Style

เลือก style ที่เหมาะสมกับโปรเจกต์

1. ดู Rules ส่วน Thumbnail Styles
2. เลือก style ที่ตรงกับประเภทโปรเจกต์ (web, mobile, backend, library, tool)
3. กำหนด color scheme ที่สอดคล้องกับ brand หรือ theme

### 3. Generate Prompt

สร้าง prompt สำหรับ AI image generation

1. ใช้ template จาก Rules ส่วน Prompt Template
2. เติมข้อมูลจากการวิเคราะห์โปรเจกต์
3. เพิ่ม technical details ที่เกี่ยวข้อง (framework, language, platform)
4. ระบุ aspect ratio เป็น 16:9
5. เพิ่ม style keywords ที่เหมาะสม

### 4. Generate Image

สร้าง image ด้วย AI image generation tool

1. ใช้ prompt ที่สร้างจากขั้นตอนที่ 3
2. ตั้งค่า aspect ratio เป็น 16:9
3. ตั้งค่า resolution ที่เหมาะสม (เช่น 1920x1080 หรือ 1280x720)
4. สร้าง image และดาวน์โหลด

### 5. Optimize Image

ปรับแต่ง image ให้เหมาะสมกับ README

1. ตรวจสอบว่า image มีขนาดไม่เกิน 2MB
2. ทำ compression ถ้าจำเป็น
3. บันทึกเป็น format ที่เหมาะสม (PNG, JPG, WebP)
4. ตั้งชื่อไฟล์ตามมาตรฐาน (เช่น `thumbnail.png`, `banner.png`)

### 6. Update README

เพิ่ม thumbnail ลงใน README

1. วาง image ไว้ที่ด้านบนสุดของ README
2. ใช้ markdown syntax สำหรับ image
3. เพิ่ม alt text ที่อธิบาย thumbnail
4. ทำ `/update-references` เพื่ออัปเดต references

## Rules

### Thumbnail Styles

เลือก style ตามประเภทโปรเจกต์

- **Web Application**: Modern UI mockup, clean interface, browser window frame
- **Mobile App**: Phone mockup, mobile interface, app screenshots
- **Backend/API**: Abstract tech visualization, server architecture, code snippets
- **Library/Framework**: Code editor view, documentation style, minimal design
- **Tool/CLI**: Terminal window, command line interface, dark theme
- **Game**: Game art style, character, environment, gameplay scene
- **Data/Analytics**: Charts, graphs, data visualization, dashboard

### Prompt Template

ใช้ template นี้สำหรับสร้าง prompt

```
A clean, minimal 16:9 thumbnail image for [project type] called [project name].

Project description: [brief description]

Key features: [main features - keep to 2-3 max]

Tech stack: [technologies used - keep to 2-3 main ones]

Style: [chosen style from Thumbnail Styles]

Color scheme: [primary colors - use 2-3 colors max]

Visual elements: [single focal point, clear and simple]

Background: [clean, solid or subtle gradient - no distractions]

Aspect ratio: 16:9

Requirements:
- Single clear focal point
- Minimal elements, maximum clarity
- Instantly understandable at first glance
- No clutter or unnecessary details
- Clean, modern, professional design
```

### Technical Details

เพิ่ม technical details ที่เกี่ยวข้องใน prompt

- ระบุ programming languages (TypeScript, Python, Rust, etc.)
- ระบุ frameworks (React, Vue, Next.js, etc.)
- ระบุ platforms (Web, Mobile, Desktop, Serverless)
- ระบุ cloud providers (AWS, Cloudflare, Vercel)
- ระบุ database types (PostgreSQL, MongoDB, Redis)

### Image Specifications

คุณสมบัติ image ที่ควรมี

- Aspect ratio: 16:9
- Resolution: 1920x1080 (recommended) หรือ 1280x720
- File size: ไม่เกิน 2MB
- Format: PNG (สำหรับ graphics), JPG (สำหรับ photos), WebP (สำหรับ web)
- Color depth: 24-bit หรือ 32-bit

### Naming Convention

ตั้งชื่อไฟล์ตามมาตรฐาน

- `thumbnail.png` - thumbnail หลัก
- `banner.png` - banner สำหรับ README
- `hero.png` - hero image
- ใช้ชื่อที่สั้น กระชับ และอธิบายได้

### README Integration

วิธีเพิ่ม thumbnail ลง README

```markdown
![Project Thumbnail](thumbnail.png)

# Project Name

Project description...
```

หรือใช้ HTML สำหรับ custom sizing:

```html
<img src="thumbnail.png" alt="Project Thumbnail" width="100%">
```

### Quality Guidelines

คุณภาพ image ที่ควรมี

- **Single Focal Point**: มีจุด focus เดียวที่ชัดเจน
- **Instant Clarity**: เห็นเข้าใจได้ทันทีใน 1-2 วินาที
- **Minimal Elements**: ใช้ elements น้อยที่สุดที่จำเป็น
- **No Clutter**: ไม่มีรายละเอียดที่ไม่จำเป็นหรือรบกวน
- **Clean Background**: พื้นหลังเรียบง่าย ไม่มี distractions
- **Consistent Colors**: ใช้ 2-3 สีหลักเท่านั้น
- **Readable Text**: ถ้ามี text ต้องอ่านง่าย ชัดเจน
- **High Resolution**: ความละเอียดสูง ไม่มี artifacts หรือ noise

## Expected Outcome

1. Thumbnail image 16:9 ที่สวยงามและเหมาะสมกับโปรเจกต์
2. README ที่มี thumbnail อยู่ด้านบนสุด
3. Image ที่มีขนาดเหมาะสมและโหลดเร็ว
4. Thumbnail ที่สะท้อนถึง tech stack และ purpose ของโปรเจกต์

