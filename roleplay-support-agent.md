---
title: Roleplay Support Agent
description: รับบทเป็น support/customer service มอง code ว่า user จะติดต่อเรื่องอะไร error ช่วยได้ไหม หา root cause ยากไหม
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-thinking
  - /pondering
  - /review-error-handling
  - /review-logging
  - /review-debugging
  - /roleplay-user
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

รับบทเป็น support/customer service agent อ่าน source code แล้วคิดว่า user จะติดต่อเรื่องอะไร, error message ช่วยได้ไหม, มี self-serve ไหม, และหา root cause ยากไหม เพื่อปรับปรุง support experience

## Scope

ใช้กับ project ที่ต้องการตรวจจากมุมมอง support ครอบคลุม error messages, self-serve, debugging, logging, และ user communication โดย AI รับบทเป็น support agent คิดเหมือนต้องตอบ user จริง

## Execute

### 1. Read Code Context

1. ทำ `/scan-codebase` หรือใช้ `read_file`, `grep_search`, `find_by_name`, `list_dir` เพื่อหา user-facing code
2. อ่าน error messages, error handling, validation messages, toast/notification text
3. อ่าน logging, error tracking, debug info, audit logs
4. อ่าน help text, tooltips, FAQs, documentation links
5. ถ้าหา user-facing code ไม่เจอ ให้ถามผู้ใช้

### 2. Identify Support Profile

1. ระบุ support level (L1 frontline, L2 technical, L3 engineering, tiered)
2. ระบุ support channel (email, chat, phone, in-app, ticket system)
3. ระบุ support context (B2B enterprise, B2C consumer, self-serve, managed)
4. ระบุ SLA expectations (response time, resolution time)
5. บันทึก assumptions ที่ทำจาก code

### 3. Simulate Support Scenarios

**Goal reminder:** คิดเหมือน support agent ที่ต้องตอบ user จริง ไม่ใช่ dev ที่เช็คว่า error handling มีไหม

1. เลือก 3-5 common support scenarios ที่ user จะติดต่อ (login ไม่ได้, จ่ายเงินไม่สำเร็จ, ข้อมูลหาย, ใช้ไม่เป็น)
2. จำลอง: user แจ้งปัญหามา → support หา root cause จาก code ได้ไหม → แก้ให้ user ได้ไหม
3. ระบุจุดที่ support ต้องส่งต่อ dev เพราะหา root cause ไม่ได้
4. ระบุจุดที่ user สามารถ self-serve ได้แต่ไม่มีทาง
5. ประเมินเวลาที่ใช้ตอบ ticket แต่ละประเภท

### 4. Analyze Every Support Dimension

**Error Messages:**

1. **User-facing errors**: ข้อความชัดไหม, บอกวิธีแก้ไหม, หรือแค่ "Something went wrong"
2. **Error codes**: มี error codes ไหม, ใช้ค้นหาได้ไหม, สื่อความหมายไหม
3. **Validation messages**: บอกว่าผิดเพราะอะไรไหม, บอกว่าต้องกรอกอะไรไหม
4. **Error context**: มี context พอให้ support เข้าใจปัญหาไหม, หรือต้องถาม user เพิ่ม

**Self-Service:**

5. **Password reset**: ทำได้เองไหม, มี flow ชัดไหม, มี rate limit ที่บล็อก user ไหม
6. **Account management**: user แก้ข้อมูลเองได้ไหม, ลบบัญชีเองได้ไหม, export ข้อมูลได้ไหม
7. **Help documentation**: มี in-app help ไหม, มี FAQs ไหม, มี links ไป docs ไหม
8. **Status indicators**: มี system status ไหม, มี maintenance notice ไหม, มี error banner ไหม
9. **Guided troubleshooting**: มี wizard ช่วยไหม, มี diagnostic tool ไหม, มี debug mode ไหม

**Debugging and Root Cause:**

10. **Logging quality**: มี logs พอไหม, มี context พอไหม, มี correlation IDs ไหม
11. **Error tracking**: มี Sentry/error tracking ไหม, มี stack traces ไหม, มี user context ไหม
12. **Audit trail**: มี audit log ไหม, สามารถบอกได้ไหมว่า user ทำอะไรก่อนเกิดปัญหา
13. **Reproducibility**: จาก logs สามารถ reproduce ปัญหาได้ไหม, มี steps ไหม
14. **Debug mode**: มี debug mode ไหม, มี verbose logging ไหม, ปลอดภัยไหม

**User Communication:**

15. **Notification quality**: notification สื่อความหมายไหม, บอก action ที่ต้องทำไหม
16. **Email templates**: มี email templates ไหม, ชัดไหม, มี contact info ไหม
17. **In-app messaging**: มี in-app chat ไหม, มี contact button ไหม, มี feedback form ไหม
18. **Status updates**: มีแจ้ง progress ไหม, มีแจ้ง resolution ไหม, มี follow-up ไหม

**Common Support Scenarios:**

19. **Login issues**: มี error ที่บอกสาเหตุไหม, มี account lockout ไหม, มี recovery flow ไหม
20. **Payment failures**: มี error ที่บอกสาเหตุไหม, มี retry flow ไหม, มี alternative payment ไหม
21. **Data loss**: มี backup ไหม, มี recovery flow ไหม, มี undo ไหม
22. **Performance issues**: มี loading state ไหม, มี timeout handling ไหม, มี offline mode ไหม
23. **Permission issues**: มี error ที่บอกว่าขาด permission อะไรไหม, มีวิธี request access ไหม

### 5. Map Findings To Code

1. แต่ละ finding ต้องมี file path และ line number หรือ code snippet
2. ระบุ severity: Critical, High, Medium, Low
3. ระบุ dimension ที่เกี่ยวข้อง (errors, self-service, debugging, communication, scenarios)
4. ระบุ support scenario ที่กระทบ
5. ถ้าไม่มี evidence ให้ระบุเป็น assumption

### 6. Generate Support Review Report

1. ทำ `/report` ด้วย `/report-format-table`
2. สร้างตาราง: Severity, Dimension, Location, Issue, Support Impact, Recommendation
3. สร้าง support scenario matrix: Scenario, Root Cause Findable, Self-Serve Available, Resolution Time
4. สรุป top 3-5 issues ที่สร้าง ticket volume สูงสุด
5. สรุป top 3-5 self-serve opportunities ที่จะลด ticket
6. ทำ `/suggest-next-action`

## Rules

### 1. No Runtime Execution

- ไม่รัน dev server, test, build, browser, CLI, หรือ script จริง
- อ่าน code ด้วย read-only tools เท่านั้น
- ถ้าผู้ใช้ขอรันอะไรจริง ให้ confirm ว่าจะเปลี่ยน workflow เป็น `/review-error-handling` หรือ `/review-logging`

### 2. Think Like A Support Agent

- คิดเหมือน support agent ที่ต้องตอบ user จริง ไม่ใช่ dev ที่เช็คว่า error handling มีไหม
- ถามตัวเอง "ถ้าเราเป็น support จะตอบ user ยังไง?" ทุก scenario
- พิจารณา support หลายระดับ (L1, L2, L3)
- คิดถึง user ที่ไม่เข้าใจ tech และต้องการคำอธิบายง่าย ๆ
- คิดถึง ticket volume ที่จะเกิดจากแต่ละปัญหา

### 3. Evidence-Based Findings

- ทุก finding ต้องมี file path/line number หรือ code snippet
- ถ้าเป็น assumption ให้ระบุชัดเจน
- ไม่กล่าวหาหรือสรุปโดยไม่มี evidence
- แยกหน้าที่ระหว่าง "user-facing issue" และ "internal issue"

### 4. Coverage

- ตรวจทุก dimension ทุกหมวด (errors, self-service, debugging, communication, scenarios)
- ตรวจจากหลาย support perspective
- ถ้า dimension ไหนไม่มี code ให้ตรวจ ให้ระบุเป็น "not applicable" ไม่ใช่ข้าม
- เน้น issues ที่สร้าง ticket volume สูง

### 5. Severity

- **Critical**: user ใช้ไม่ได้เลย, ไม่มี error message, ไม่มีทาง self-serve, ticket volume สูงมาก
- **High**: user ใช้ได้แต่เจอปัญหาบ่อย, error message ไม่ชัด, ต้องส่งต่อ dev บ่อย
- **Medium**: มี error message แต่ไม่ helpful, มี self-serve บางส่วน, ticket volume ปานกลาง
- **Low**: polish, ขาด documentation บางจุด, ขาด in-app help

### 6. Integration

- ถ้า support review ซับซ้อน ให้ทำ `/deep-thinking` ก่อนเริ่ม
- ถ้าต้องการทบทวนมุมมองก่อนสรุป ให้ทำ `/pondering`
- ถ้าต้องการ scan error handling จริง ให้ใช้ `/review-error-handling`
- ถ้าต้องการ scan logging จริง ให้ใช้ `/review-logging`
- ถ้าต้องการมุมมอง user ให้ใช้ `/roleplay-user`

### 7. Output

- รายงานตาราง support findings ชัดเจน จัดกลุ่มตาม dimension
- support scenario matrix
- สรุป high-volume ticket sources และ self-serve opportunities
- แนะนำ action ถัดไป

## Expected Outcome

- รายงาน support review จากมุมมอง support agent ที่จำลองจาก source code
- ตาราง findings มี Severity, Dimension, Location, Issue, Support Impact, Recommendation
- support scenario matrix: Scenario, Root Cause Findable, Self-Serve Available, Resolution Time
- ครอบคลุม 23 dimensions ครบ 5 หมวด (errors, self-service, debugging, communication, scenarios)
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
