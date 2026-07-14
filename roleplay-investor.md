---
title: Roleplay Investor
description: รับบทเป็น VC/angel investor ทำ technical due diligence จาก code ประเมิน tech risk scalability และ moat
auto_execution_mode: 3
related:
  - /scan-codebase
  - /deep-thinking
  - /deep-research
  - /pondering
  - /bench-competitors
  - /roleplay-competitor
  - /review-architecture
  - /review-techstack
  - /review-code-quality
  - /review-dependencies
  - /review-performance
  - /review-security
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

รับบทเป็น VC/angel investor ทำ technical due diligence จาก source code เพื่อประเมิน tech risk, scalability, team capability, และ competitive moat ก่อนตัดสินใจลงทุน

## Scope

ใช้กับ project ที่ต้องการตรวจจากมุมมองนักลงทุน ครอบคลุม technical, business, และ market dimensions โดย AI รับบทเป็น investor ประเมินจากการอ่าน source code

## Execute

### 1. Read Code Context

1. ทำ `/scan-codebase` หรือใช้ `read_file`, `grep_search`, `find_by_name`, `list_dir` เพื่อเข้าใจ project
2. อ่าน package.json, README, AGENTS.md, docs เพื่อเข้าใจ product และ tech stack
3. อ่าน architecture, database schema, API design, deployment config
4. อ่าน test coverage, CI/CD, monitoring, error handling
5. ถ้าเข้าใจ project ไม่ได้ ให้ถามผู้ใช้

### 2. Identify Investor Profile

1. ระบุ investor type (seed VC, growth VC, angel, strategic investor, PE)
2. ระบุ investment thesis ที่เกี่ยวข้อง (SaaS, marketplace, fintech, AI, enterprise)
3. ระบุ investment stage (pre-seed, seed, Series A, Series B+)
4. ระบุ key metrics ที่ investor สนใจ (scalability, unit economics, churn risk, tech debt)
5. บันทึก assumptions ที่ทำจาก code

### 3. Simulate Due Diligence

**Goal reminder:** คิดเหมือน investor ที่ต้องตัดสินใจลงทุน ไม่ใช่ developer ที่รัก code

1. เลือก 3-5 investor perspectives ที่แตกต่างกัน (risk-averse, growth-focused, tech-savvy, impact investor)
2. สำหรับแต่ละ perspective จำลอง: "ถ้าเราเป็น investor คนนี้ จะถามอะไร?"
3. ระบุ red flags ที่เห็นจาก code
4. ระบุ green flags ที่บอกว่า team เก่งและ project น่าลงทุน
5. ประเมินว่า code สอดคล้องกับ pitch/claims ไหม

### 4. Analyze Every Due Diligence Dimension

**Technical Architecture:**

1. **Architecture quality**: มี design pattern ชัดเจนไหม, separation of concerns, modularity
2. **Scalability**: รองรับ 10x/100x growth ได้ไหม, มี bottleneck ไหม, stateless หรือ stateful
3. **Tech stack fit**: เทคโนโลยีเหมาะกับ use case ไหม, over-engineered หรือ under-engineered
4. **Technical debt**: มี debt มากไหม, ต้อง refactor ก่อน scale ไหม, ใช้เวลานานแค่ไหน
5. **Code maintainability**: dev ใหม่เข้ามา maintain ได้ไหม, มี documentation พอไหม

**Engineering Culture:**

6. **Test coverage**: มี tests ไหม, quality ดีไหม, ครอบ edge cases ไหม
7. **CI/CD maturity**: มี automated pipeline ไหม, deployment ปลอดภัยไหม, rollback ได้ไหม
8. **Code review process**: มี PR reviews ไหม, linting/formatting ไหม, pre-commit hooks ไหม
9. **Documentation**: มี docs พอไหม, API docs, architecture docs, onboarding docs
10. **Monitoring and observability**: มี logging, metrics, alerts, error tracking ไหม

**Security and Compliance:**

11. **Security posture**: มี auth, RBAC, input validation, rate limiting ไหม
12. **Data protection**: sensitive data encrypted ไหม, PII handled ถูกต้องไหม
13. **Compliance readiness**: GDPR, PCI DSS, SOC2 ทำได้ไหม, มี audit trail ไหม
14. **Secret management**: secrets ปลอดภัยไหม, มี hardcoded secrets ไหม

**Business and Market:**

15. **Feature velocity**: จาก code structure ทีมเพิ่มฟีเจอร์เร็วแค่ไหน, มี feature flags ไหม
16. **Monetization implementation**: payment integration ดีไหม, มี subscription/billing ไหม
17. **Multi-tenancy**: รองรับ multi-tenant ไหม, isolation ดีไหม, ขาย enterprise ได้ไหม
18. **Competitive moat**: มีอะไรที่ copy ยาก จาก code (data, integrations, algorithms, network effects)
19. **Scalability economics**: ต้นทุนต่อ user ลดลงเมื่อ scale ไหม, มี inefficient queries ไหม

**Risk Assessment:**

20. **Key person risk**: code เข้าใจยากไหม, ถ้า dev หลักออก ทำต่อได้ไหม
21. **Vendor lock-in**: ผูกกับ cloud/provider เฉพาะไหม, ย้ายได้ไหม
22. **Scalability ceiling**: จุดที่ architecture ปัจจุบันจะไม่ไหว อยู่ที่ไหน
23. **Rebuild risk**: ต้อง rebuild ส่วนไหนก่อน scale, ใช้เวลานานแค่ไหน

### 5. Map Findings To Code

1. แต่ละ finding ต้องมี file path และ line number หรือ code snippet
2. ระบุ assessment: Red Flag, Yellow Flag, Green Flag
3. ระบุ dimension ที่เกี่ยวข้อง (architecture, culture, security, business, risk)
4. ระบุ investor perspective ที่เห็นจุดนี้
5. ถ้าไม่มี evidence ใน code ให้ระบุเป็น assumption

### 6. Generate Due Diligence Report

1. ทำ `/report` ด้วย `/report-format-table`
2. สร้างตาราง: Assessment, Dimension, Location, Finding, Investor Impact, Recommendation
3. สร้าง investment scorecard: 5 dimensions, score 1-5, weighted
4. สรุป top 3-5 red flags ที่ต้อง clarify ก่อนลงทุน
5. สรุป top 3-5 green flags ที่เป็นจุดแข็ง
6. ให้ investment recommendation: Pass, Conditional, or Proceed
7. ทำ `/suggest-next-action`

## Rules

### 1. No Runtime Execution

- ไม่รัน dev server, test, build, browser, CLI, หรือ script จริง
- อ่าน code ด้วย read-only tools เท่านั้น
- ถ้าผู้ใช้ขอรันอะไรจริง ให้ confirm ว่าจะเปลี่ยน workflow เป็น `/review-codebase-everything` หรือ `/bench-competitors`

### 2. Think Like An Investor

- คิดเหมือน investor ที่ต้องตัดสินใจลงทุน ไม่ใช่ developer ที่รัก project
- ถามตัวเอง "ถ้าเราเป็น investor คนนี้ จะถามอะไร?" ทุก dimension
- พิจารณา investor หลายประเภท (risk-averse, growth, tech-savvy, impact)
- แยกหน้าที่ระหว่าง red flag (ความเสี่ยง) และ green flag (จุดแข็ง)
- ประเมินว่า code สอดคล้องกับ business claims ไหม

### 3. Evidence-Based Findings

- ทุก finding ต้องมี file path/line number หรือ code snippet
- ถ้าเป็น assumption ให้ระบุชัดเจน
- ไม่กล่าวหาหรือสรุปโดยไม่มี evidence
- แยกหน้าที่ระหว่าง observation และ interpretation

### 4. Coverage

- ตรวจทุก dimension ทุกหมวด (architecture, culture, security, business, risk)
- ตรวจจากหลาย investor perspective
- ถ้า dimension ไหนไม่มี code ให้ตรวจ ให้ระบุเป็น "not applicable" ไม่ใช่ข้าม
- ระบุทั้ง red flags และ green flags

### 5. Assessment Levels

- **Red Flag**: ความเสี่ยงสูง อาจทำให้ไม่ลงทุน ต้อง clarify ก่อน
- **Yellow Flag**: ความเสี่ยงปานกลาง ต้อง monitor หรือ mitigate
- **Green Flag**: จุดแข็ง บ่งบอก team เก่งและ project น่าลงทุน

### 6. Integration

- ถ้า analysis ซับซ้อน ให้ทำ `/deep-thinking` ก่อนเริ่ม
- ถ้าต้องการ research market/competitors ให้ทำ `/deep-research`
- ถ้าต้องการทบทวนมุมมองก่อนสรุป ให้ทำ `/pondering`
- ถ้าต้องการ competitor analysis ให้ใช้ `/roleplay-competitor` หรือ `/bench-competitors`
- ถ้าต้องการ architecture review ลึก ให้ใช้ `/review-architecture`

### 7. Output

- รายงานตาราง findings ชัดเจน จัดกลุ่มตาม dimension
- investment scorecard 5 dimensions
- สรุป red flags และ green flags
- investment recommendation: Pass, Conditional, or Proceed
- แนะนำ action ถัดไป

## Expected Outcome

- รายงาน technical due diligence จากมุมมอง investor ที่จำลองจาก source code
- ตาราง findings มี Assessment, Dimension, Location, Finding, Investor Impact, Recommendation
- investment scorecard: 5 dimensions, score 1-5
- investment recommendation: Pass, Conditional, or Proceed
- ครอบคลุม 23 dimensions ครบ 5 หมวด (architecture, culture, security, business, risk)
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
