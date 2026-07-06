---
title: Improve Landing Pages
description: ปรับปรุง landing pages ให้ visual, ข้อมูลครบ, เข้าใจง่าย, กระชับ, เห็นภาพรวม
auto_execution_mode: 3
related_workflows:
  - improve-uxui
  - improve-ux-writing
  - improve-web-performance
  - improve-seo
  - improve-accessibility
  - improve-analytics
  - follow-web-design
  - idea-uxui
---

## Goal

ปรับปรุง landing pages ให้มี visual hierarchy ชัดเจน ข้อมูลครบถ้วน เข้าใจง่าย กระชับ เห็นภาพรวม และโน้มน้าวให้ convert

## Scope

ใช้สำหรับปรับปรุง landing pages ของ web apps, SaaS products, marketing pages, product pages, และ conversion-focused pages

## Execute

### 1. Analyze Landing Page Structure

วิเคราะห์โครงสร้าง landing page ปัจจุบัน

1. ทำ `/scan-codebase` เพื่อหา landing page components และ layouts
2. ทำ `/idea-uxui` เพื่อวิเคราะห์และสร้างไอเดีย landing page improvements
3. วิเคราะห์ section ordering: hero, features, social proof, pricing, FAQ, CTA
4. ตรวจสอบ information flow: ผู้ใช้เข้าใจเรื่องราวจากบนลงล่างหรือไม่
5. ระบุ missing sections ที่จำเป็นสำหรับ conversion
6. บันทึก issues ที่พบพร้อม priority

### 2. Improve Visual Hierarchy

ปรับปรุง visual hierarchy ให้เห็นภาพรวม

1. ออกแบบ above-the-fold ให้เห็น value proposition ใน 3 วินาทีแรก
2. ใช้ size, color, contrast เพื่อชี้นำสายตาจากสำคัญไปรอง
3. ใช้ whitespace แยก sections ชัดเจน ไม่แออัด
4. ใช้ scroll progression: แต่ละ section มี focus ชัดเจน 1 จุด
5. ใช้ visual anchors: ไอคอน, ภาพประกอบ, ตัวเลข ดึงความสนใจ
6. ตรวจสอบว่าผู้ใช้ scan หน้าได้ภายใน 5 วินาที

### 3. Improve Value Proposition

ปรับปรุง value proposition ให้ชัดเจน

1. เขียน headline ที่บอกผลลัพธ์ ไม่ใช่ฟีเจอร์ (เช่น "จองง่าย ได้เร็ว" ไม่ใช่ "ระบบจองออนไลน์")
2. เขียน subheadline อธิบายรายละเอียดเพิ่ม กระชับ 1-2 ประโยค
3. แสดง key benefits 3-5 ข้อ ใช้ไอคอนประกอบ
4. ทำ `/improve-ux-writing` สำหรับ copy ทุกส่วนใน landing page
5. ตรวจสอบว่า value proposition ตอบคำถาม "ทำไมต้องเลือกเรา"

### 4. Improve Information Architecture

ปรับปรุงการจัดเรียงข้อมูล

1. จัด sections ตาม user journey: awareness → interest → desire → action
2. วาง hero → key benefits → how it works → social proof → pricing → FAQ → CTA
3. แต่ละ section มีหัวข้อชัดเจน บอกว่าจะได้อะไรจากส่วนนั้น
4. ใช้ progressive disclosure: รายละเอียดเพิ่มเติมแสดงเมื่อผู้ใช้ต้องการ
5. ไม่ใส่ข้อมูลที่ไม่จำเป็นในเส้นทางการ scroll หลัก
6. แยกข้อมูลออกเป็น collapsible sections ถ้าเนื้อหายาว

### 5. Improve Social Proof

ปรับปรุง social proof ให้น่าเชื่อถือ

1. แสดง testimonials จริง พร้อมชื่อ รูป และตำแหน่ง
2. แสดง metrics ที่น่าประทับใจ (จำนวนผู้ใช้, คะแนน, อัตราการสำเร็จ)
3. แสดง logos ของลูกค้าหรือพันธมิตร
4. แสดง reviews หรือ ratings จากแหล่งภายนอก
5. แสดง case studies หรือ success stories แบบสั้น
6. วาง social proof ในตำแหน่งที่ผู้ใช้ลังเล เช่น ก่อน CTA

### 6. Improve Call-To-Action

ปรับปรุง call-to-action ให้โน้มน้าว

1. ใช้ CTA หลัก 1 อันต่อหน้า ชัดเจน โดดเด่น
2. ใช้ action-oriented copy (เช่น "เริ่มใช้ฟรี" ไม่ใช่ "สมัครสมาชิก")
3. วาง CTA หลายจุดตาม scroll path แต่ไม่รบกวน
4. ใช้ secondary CTA สำหรับผู้ใช้ที่ยังไม่พร้อม convert
5. ลด friction: บอกว่าไม่ต้องใส่บัตรเครดิต, ใช้ฟรี 14 วัน
6. ตรวจสอบ CTA visibility บนมือถือ

### 7. Improve Visual Design

ปรับปรุง visual design ให้สวยงามและน่าสนใจ

1. ทำ `/follow-web-design` สำหรับ design system principles
2. ใช้ภาพประกอบคุณภาพสูงที่สื่อสาร value proposition
3. ใช้ไอคอนที่สอดคล้องกันทั้งหน้า (เช่น `@iconify-json/mdi`)
4. ใช้ color psychology: primary color สำหรับ CTA, neutral สำหรับพื้นหลัง
5. ใช้ animations ที่ช่วยเล่าเรื่อง ไม่ใช่แค่ decoration
6. ใช้ micro-interactions ที่ให้ feedback และชี้นำ
7. ตรวจสอบว่า design สม่ำเสมอกับ brand identity

### 8. Improve Data Presentation

ปรับปรุงการนำเสนอข้อมูลให้เข้าใจง่าย

1. แสดงตัวเลขและ metrics ด้วย visual elements (charts, progress bars)
2. ใช้ comparison tables สำหรับ pricing plans
3. ใช้ before/after หรือ side-by-side comparison
4. ใช้ infographics สำหรับขั้นตอนการทำงาน
5. แสดง feature highlights ด้วยไอคอนและคำอธิบายสั้น
6. ใช้ visual counters หรือ animated numbers สำหรับสถิติ
7. จัดกลุ่มข้อมูลที่เกี่ยวข้องใน cards หรือ panels

### 9. Improve Mobile Experience

ปรับปรุงประสบการณ์บนมือถือ

1. ตรวจสอบ responsive design ทุก section
2. ปรับขนาด CTA ให้ touch-friendly (อย่างน้อย 44x44px)
3. ตรวจสอบว่า text อ่านง่ายบนหน้าจอเล็ก (font-size ไม่ต่ำกว่า 16px)
4. ลดจำนวน elements บนมือถือ เก็บเฉพาะสำคัญ
5. ตรวจสอบ image loading บนเครือข่ายช้า
6. ทำ sticky CTA สำหรับมือถือถ้าเหมาะสม

### 10. Improve Conversion Optimization

ปรับปรุง conversion rate

1. ทำ `/improve-analytics` สำหรับ tracking conversion funnel
2. ตั้งค่า A/B testing สำหรับ headline, CTA, layout
3. วิเคราะห์ heatmap และ scroll depth
4. ตรวจสอบ bounce rate และ exit points
5. ทำ `/improve-seo` สำหรับ organic traffic
6. ทำ `/improve-web-performance` สำหรับ loading speed
7. ทดสอบกับผู้ใช้จริง หรือใช้ `/run-test-browser` สำหรับ E2E

## Rules

### 1. Above-The-Fold First

- ผู้ใช้ตัดสินใจใน 3 วินาทีแรก
- Headline + subheadline + CTA ต้องอยู่ใน viewport แรก
- ไม่ใส่ navigation ที่รบกวน above-the-fold
- ใช้ hero image หรือ video ที่สื่อสาร value proposition

### 2. Clear Value Proposition

- บอก "ทำไมต้องเลือกเรา" ไม่ใช่ "เราคืออะไร"
- ใช้ผลลัพธ์ ไม่ใช่ฟีเจอร์ เป็นจุดขาย
- หลีกเลี่ยง jargon และคำว่างๆ

### 3. Visual Storytelling

- แต่ละ section เล่าเรื่องต่อเนื่อง
- ใช้ visuals ช่วยให้เข้าใจเร็วกว่าตัวหนังสือ
- ใช้ scroll-triggered animations ชี้นำความสนใจ
- ภาพประกอบต้องสื่อสารได้ด้วยตัวเอง

### 4. Data-Driven Decisions

- ใช้ analytics วัดผลทุกการเปลี่ยนแปลง
- A/B test สิ่งสำคัญเช่น headline และ CTA
- ดู heatmap เพื่อเข้าใจพฤติกรรมผู้ใช้
- ไม่ตัดสินใจจากความรู้สึกอย่างเดียว

### 5. Progressive Disclosure

- แสดงข้อมูลสำคัญก่อน รายละเอียดทีหลัง
- ใช้ FAQ สำหรับคำถามที่ลึกขึ้น
- ใช้ collapsible sections สำหรับเนื้อหายาว
- ไม่รวมทุกอย่างใน scroll path หลัก

### 6. Mobile-First

- ออกแบบสำหรับมือถือก่อน desktop
- ตรวจสอบทุก section บนหน้าจอเล็ก
- CTA ต้อง touch-friendly และมองเห็นง่าย
- ลดขนาด assets สำหรับเครือข่ายมือถือ

### 7. Performance Budget

- ทำ `/improve-web-performance` สำหรับ loading speed และ Core Web Vitals
- ลด JavaScript bundle สำหรับ initial load

## Expected Outcome

- Landing page มี visual hierarchy ชัดเจน
- Value proposition เข้าใจได้ใน 3 วินาที
- ข้อมูลครบถ้วน เข้าใจง่าย กระชับ
- Social proof น่าเชื่อถือ
- CTA โดดเด่น โน้มน้าวให้ convert
- ประสบการณ์มือถือราบรื่น
- Conversion rate สูงขึ้น
- Loading speed ผ่านเกณฑ์ Core Web Vitals
