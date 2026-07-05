---
title: Improve Web Rendering
description: ปรับปรุง web rendering pipeline ให้ลื่นไหล 60fps
auto_execution_mode: 3
related_workflows:
  - /improve-web-performance
  - /check-performance
  - /run-profile
  - /follow-react
  - /follow-vue
---

## Goal

ปรับปรุง rendering pipeline ของ web application ให้ลื่นไหล 60fps โดยลด layout thrashing, paint storms, และ compositing overhead

## Scope

ครอบคลุมการวิเคราะห์และปรับปรุง rendering performance ระดับ browser rendering pipeline (style, layout, paint, composite)

## Execute

### 1. Analyze Rendering Performance

1. ทำ `/check-performance` เพื่อตรวจสอบ Core Web Vitals และ rendering metrics
2. ทำ `/run-profile` เพื่อ profile rendering pipeline ด้วย Chrome DevTools Performance tab
3. ตรวจสอบ frame rate (เป้าหมาย 60fps = 16.67ms ต่อ frame)
4. ระบุ bottlenecks: layout thrashing, paint storms, large layers, หรือ sync layout
5. บันทึก baseline metrics ก่อน optimize

### 2. Optimize Layout

1. ลด layout thrashing โดยอ่าน layout properties ก่อนเขียน
2. ใช้ `transform` และ `opacity` แทน properties ที่ trigger layout (`width`, `height`, `top`, `left`)
3. หลีกเลี่ยง forced synchronous layout โดยใช้ `requestAnimationFrame`
4. ลด DOM depth และ complexity
5. ใช้ `will-change` เพื่อ hint browser สำหรับ elements ที่จะ animate
6. ถ้า project มี framework (React, Vue) ให้ทำ `/follow-react` หรือ `/follow-vue` สำหรับ rendering best practices

### 3. Optimize Paint

1. ระบุ paint regions ที่ใหญ่เกินไปด้วย Paint Profiler
2. ลด paint areas โดยจำกัดการเปลี่ยนแปลงในเฉพาะ region ที่จำเป็น
3. หลีกเลี่ยง `box-shadow` และ `border-radius` ขนาดใหญ่ที่ทำให้ paint ช้า
4. ใช้ `contain: paint` สำหรับ isolated components
5. ลด complexity ของ CSS selectors
6. หลีกเลี่ยง `position: fixed` ที่ทำให้ paint ทั้งหน้า

### 4. Optimize Compositing

1. ย้าย animations ไป compositor thread โดยใช้ `transform` และ `opacity` เท่านั้น
2. ลดจำนวน layers ที่ไม่จำเป็น (ตรวจสอบใน Layers panel)
3. หลีกเลี่ยง large compositing layers ที่ใช้ memory มาก
4. ใช้ `transform: translateZ(0)` หรือ `will-change` เพื่อ promote layer เมื่อจำเป็น
5. ลด layer promotion ที่ไม่จำเป็นเพราะทำให้ memory สูง

### 5. Optimize Animations

1. ใช้ CSS animations แทน JavaScript animations เมื่อเป็นไปได้
2. ใช้ `transform` และ `opacity` สำหรับ animations เท่านั้น
3. ใช้ `requestAnimationFrame` สำหรับ JavaScript-driven animations
4. ลด animated properties ไปที่ compositor-only properties
5. ถ้า project ใช้ animation library ให้ตรวจสอบว่าใช้ compositor-friendly properties

### 6. Optimize Scrolling

1. ใช้ `overflow: auto` หรือ `overflow: scroll` อย่างระมัดระวัง
2. ใช้ `contain: layout` หรือ `content-visibility: auto` สำหรับ long lists
3. หลีกเลี่ยง scroll handlers ที่หนัก ใช้ `passive: true` สำหรับ scroll listeners
4. ใช้ virtual scrolling สำหรับ lists ที่มี items มากกว่า 100
5. ลด work ใน scroll event handlers โดยใชerequestAnimationFrame หรือ throttling

### 7. Verify And Report

1. ทำ `/run-profile` อีกครั้งเพื่อเปรียบเทียบกับ baseline
2. ตรวจสอบ frame rate กลับสู่ 60fps
3. รัน `/report-format-table` เพื่อแสดง before/after rendering metrics
4. รัน `/report-format-terminal` เพื่อแสดงสรุปการปรับปรุง

## Rules

### 1. Rendering Pipeline Order

- Style → Layout → Paint → Composite เป็นลำดับของ browser rendering
- เปลี่ยนแปลงเฉพาะ compositor properties (`transform`, `opacity`) เพื่อข้าม Layout และ Paint
- หลีกเลี่ยง properties ที่ trigger Layout: `width`, `height`, `padding`, `margin`, `top`, `left`, `right`, `bottom`
- หลีกเลี่ยง properties ที่ trigger Paint: `color`, `background`, `border-radius`, `box-shadow`

### 2. Frame Budget

- 60fps = 16.67ms ต่อ frame (เป้าหมายหลัก)
- 30fps = 33.33ms ต่อ frame (ขั้นต่ำที่ยอมรับได้)
- วัด frame duration ใน Chrome DevTools Performance tab
- หยุดเมื่อ frame rate ถึง 60fps อย่างสม่ำเสมอ

### 3. Conditional Execution

- ถ้า project ใช้ React ให้ทำ `/follow-react` สำหรับ rendering optimization
- ถ้า project ใช้ Vue ให้ทำ `/follow-vue` สำหรับ rendering optimization
- ขั้นตอน Optimize Scrolling ทำเฉพาะถ้า project มี scrollable content
- ขั้นตอน Optimize Animations ทำเฉพาะถ้า project มี animations

### 4. Non-Duplication

- ใช้ `/improve-web-performance` สำหรับ Core Web Vitals และ bundle size
- ใช้ `/check-performance` สำหรับ performance audit
- ใช้ `/run-profile` สำหรับ profiling
- Workflow นี้เน้นเฉพาะ rendering pipeline (layout, paint, composite)

### 5. Measurement

- บันทึก frame rate และ frame duration ก่อน optimize เป็น baseline
- เปรียบเทียบหลัง optimize เพื่อยืนยันการปรับปรุง
- ใช้ Chrome DevTools Performance tab และ Layers panel เป็น primary tools

## Expected Outcome

- Frame rate 60fps อย่างสม่ำเสมอ
- ไม่มี layout thrashing หรือ forced synchronous layout
- Paint regions เล็กและจำกัด
- Compositing layers น้อยและมีขนาดเหมาะสม
- Animations ลื่นไหลไม่มี jank
- Scrolling ลื่นไหลไม่มี stutter
