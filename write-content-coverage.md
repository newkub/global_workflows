---
title: Write Content Coverage
description: เขียน content ครอบคลุมทุก features, APIs, และ use cases
auto_execution_mode: 3
related_workflows:
  - /write-windsurf-global-workflows
  - /write-skills
  - /learn-from-web
  - /follow-content-quality
---

## Goal

ทำ `/write-content-coverage` เพื่อเขียน content ครอบคลุมทุก features, APIs, และ use cases ของ skill หรือ project โดยใช้ข้อมูลจากเว็บไซต์หลักและเอกสารอย่างเป็นระบบ

## Scope

ใช้สำหรับเขียน content ที่ครอบคลุมทุก aspects ของ skill หรือ project รวมถึง documentation, examples, guides โดย research จาก DeepWiki, Context7, Web Search และ Official Documentation

## Execute

### 1. Research Strategy

กำหนดลำดับความสำคัญของแหล่งข้อมูล

1. กำหนดลำดับความสำคัญของแหล่งข้อมูล
2. ใช้ DeepWiki สำหรับ GitHub repositories
3. ใช้ Context7 สำหรับ libraries และ frameworks
4. ใช้ Web Search เป็น fallback
5. เข้าถึง Official Documentation เสมอ

### 2. DeepWiki Research

ใช้ DeepWiki สำหรับ GitHub repositories

1. ใช้ `read_wiki_structure` เพื่อดู topics ทั้งหมด
2. ใช้ `read_wiki_contents` เพื่ออ่านเนื้อหาของ topic ที่เลือก
3. ใช้ `ask_question` สำหรับคำถามเฉพาะเจาะจง
4. เริ่มด้วย structure เพื่อดู topics ทั้งหมดก่อน
5. เลือก topics ที่เกี่ยวข้องกับงานปัจจุบัน
6. อ่าน getting started ก่อน advanced topics
7. บันทึก code examples และ configuration examples

### 3. Context7 Research

ใช้ Context7 สำหรับ libraries และ frameworks

1. ใช้ `resolve-library-id` เพื่อหา library ID ที่ถูกต้อง
2. ใช้ `query-docs` สำหรับ documentation ที่ต้องการ
3. Query ให้เฉพาะเจาะจง เช่น "How to setup authentication with JWT in Express.js"
4. ตรวจสอบ source reputation และ benchmark scores
5. เลือก library ที่มี source reputation High หรือ Medium
6. อ่าน examples และ code snippets ที่ Context7 ให้มา
7. ตรวจสอบ version ที่เข้ากันได้กับ project
8. ไม่เรียก Context7 เกิน 3 ครั้งต่อคำถาม

### 4. Web Search Research

ใช้ Web Search เป็น fallback

1. ใช้ `search_web` เมื่อไม่มีข้อมูลจาก DeepWiki หรือ Context7
2. กำหนด query ที่ชัดเจนและเฉพาะเจาะจง
3. ใช้ domain filter ถ้าจำเป็น เช่น domain: "bun.sh"
4. เปรียบเทียบข้อมูลจากหลายแหล่ง
5. ตรวจสอบว่าข้อมูลเป็นปัจจุบัน (check publish date)

### 5. Knowledge Extraction

บันทึกความรู้จากการ research

1. จดบันทึกหลักการที่สำคัญและ core concepts
2. ระบุ features และ capabilities หลักทั้งหมด
3. บันทึก best practices และ recommendations
4. บันทึก code examples ที่สำคัญพร้อมคำอธิบาย
5. บันทึก configuration examples ที่สำคัญ
6. บันทึก edge cases และ common pitfalls
7. สร้าง summary สำหรับแต่ละ source

### 6. Analyze Feature Coverage

วิเคราะห์ features ที่ยังไม่มี content

1. ตรวจสอบ features ทั้งหมดของ skill หรือ project
2. ตรวจสอบ APIs ทั้งหมดที่มี (endpoints, methods, parameters, responses)
3. ตรวจสอบ use cases ที่เป็นไปได้
4. ระบุ content ที่ยังขาด (guides, examples, references, key-concepts, principles)
5. จัดลำดับ priority ตามความสำคัญและ impact ต่อผู้ใช้

### 7. Write Missing Content

เขียน content สำหรับส่วนที่ขาด

ตาม best practices จาก Stripe, Twilio, และ Heroku:

1. เขียน guides สำหรับ features ที่ยังไม่มี
   - **Getting Started guide** (สำคัญที่สุด - Hello World + benefits)
   - เขียน step-by-step ชัดเจน
   - รวม authentication instructions ใน guide
   - หลีกเลี่ยง cover มากเกินไปใน guide เดียว
   - Framework integration guides
   - อธิบาย "why" และ "how" นอกจาก "what"

2. เขียน examples สำหรับ APIs ที่ยังไม่มี
   - เขียน examples ที่ใช้งานได้จริง (copy-paste)
   - ให้ low barrier to entry (Download → Replace API key → Run)
   - รวม code ทั้งหมดในที่เดียว
   - ให้ examples ในหลาย programming languages
   - Complete working examples สำหรับ advanced use cases

3. เขียน references สำหรับ documentation ที่ขาด
   - **API specification** (endpoints, methods, parameters, responses)
   - **API reference** (data input/output, authentication, error troubleshooting)
   - Authentication instructions ที่ชัดเจน (first hurdle)
   - Terms of Use และ rate limits
   - Detailed information ทุก endpoint, operation, resource

4. เขียน key-concepts สำหรับ concepts ที่สำคัญ
   - อธิบาย "why" และ "how" นอกจาก "what"
   - จัดกลุ่มตาม logical flow

5. เขียน principles สำหรับ best practices

### 8. Verify Content Completeness

ตรวจสอบว่า content ครอบคลุมทุก aspects

1. ตรวจสอบทุก features มี guide
2. ตรวจสอบทุก APIs มี examples
3. ตรวจสอบทุก use cases มี documentation
4. ตรวจสอบทุก concepts มี explanations
5. ตรวจสอบทุก best practices มี guidelines

### 9. Update Index Files

อัปเดต index files ให้ครบถ้วน

1. อัปเดต SKILL.md ให้ครอบคลุมทุก content
2. อัปเดต sitemap ถ้ามี
3. อัปเดต references ถ้ามี
4. ตรวจสอบ links ถูกต้อง
5. ตรวจสอบ structure สม่ำเสมอ

## Rules

### 1. Information Source Priority

กำหนดลำดับความสำคัญของแหล่งข้อมูล:

- ลำดับแหล่งข้อมูล: `DeepWiki` → `Context7` → `Web Search` → `Official Docs`
- ใช้ `DeepWiki` ก่อนถ้าเป็น GitHub repository
- ใช้ `Context7` สำหรับ libraries และ frameworks
- ใช้ `Web Search` เป็น fallback
- เข้าถึง `Official Documentation` เสมอ

### 2. DeepWiki Usage

ใช้ DeepWiki สำหรับ GitHub repositories:

- ใช้ `read_wiki_structure` เพื่อดู topics ทั้งหมด
- ใช้ `read_wiki_contents` เพื่ออ่านเนื้อหาของ topic ที่เลือก
- ใช้ `ask_question` สำหรับคำถามเฉพาะเจาะจง
- เริ่มด้วย structure เพื่อดู topics ทั้งหมดก่อน
- เลือก topics ที่เกี่ยวข้องกับงานปัจจุบัน
- อ่าน getting started ก่อน advanced topics
- บันทึก code examples และ configuration examples

### 3. Context7 Usage

ใช้ Context7 สำหรับ libraries และ frameworks:

- ใช้ `resolve-library-id` เพื่อหา library ID ที่ถูกต้อง
- ใช้ `query-docs` สำหรับ documentation ที่ต้องการ
- Query ให้เฉพาะเจาะจง เช่น "How to setup authentication with JWT in Express.js"
- ตรวจสอบ source reputation และ benchmark scores
- เลือก library ที่มี source reputation High หรือ Medium
- อ่าน examples และ code snippets ที่ Context7 ให้มา
- ตรวจสอบ version ที่เข้ากันได้กับ project
- ไม่เรียก Context7 เกิน 3 ครั้งต่อคำถาม

### 4. Web Search Usage

ใช้ Web Search เป็น fallback:

- ใช้ `search_web` เมื่อไม่มีข้อมูลจาก DeepWiki หรือ Context7
- กำหนด query ที่ชัดเจนและเฉพาะเจาะจง
- ใช้ domain filter ถ้าจำเป็น เช่น domain: "bun.sh"
- เปรียบเทียบข้อมูลจากหลายแหล่ง
- ตรวจสอบว่าข้อมูลเป็นปัจจุบัน (check publish date)

### 5. Reading Order

อ่านเอกสารตามลำดับที่เหมาะสม:

- อ่าน introduction → getting started → examples → advanced
- จดบันทึก code examples และ best practices
- ทดสอบความเข้าใจด้วยโปรเจกต์ตัวอย่าง
- เปรียบเทียบข้อมูลจากหลายแหล่ง
- ติดตาม updates จากเว็บไซต์หลักอย่างสม่ำเสมอ

### 6. Feature Coverage

เขียน content ครอบคลุมทุก features

- ทุก features ต้องมี guide
- ทุก APIs ต้องมี examples
- ทุก use cases ต้องมี documentation
- ทุก concepts ต้องมี explanations
- ทุก best practices ต้องมี guidelines

### 7. Content Quality

เขียน content ที่มีคุณภาพ

- ทำ `/follow-content-quality` สำหรับจัดรูปแบบและคุณภาพเนื้อหา

### 8. Content Organization

จัดระเบียบ content อย่างเป็นระบบ

- ใช้ folder structure ตามมาตรฐาน
- ตั้งชื่อไฟล์สื่อความหมาย
- ใช้ kebab-case สำหรับชื่อไฟล์
- จัดลำดับ content ตาม logical flow
- ใช้ index files สำหรับ organization

### 9. Completeness Check

ตรวจสอบความครบถ้วนของ content

- ตรวจสอบทุก features มี content
- ตรวจสอบทุก APIs มี examples
- ตรวจสอบทุก use cases มี documentation
- ตรวจสอบทุก concepts มี explanations
- ตรวจสอบทุก best practices มี guidelines

## Expected Outcome

- ข้อมูลที่ครบถ้วนจาก multiple sources
- ความรู้ที่ถูกต้องและเป็นปัจจุบัน
- Code examples และ best practices ที่บันทึกไว้
- Content ครอบคลุมทุก features, APIs, และ use cases
- Guides ที่ครบถ้วนและอ่านง่าย
- Examples ที่ใช้งานได้จริง
- References ที่ถูกต้องและอัปเดต
- Index files ที่ครบถ้วนและถูกต้อง
