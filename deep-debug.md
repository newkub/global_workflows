---
title: Deep Debug
description: Debug อย่างละเอียดหลายมิติ ตั้งแต่ reproduce จนถึง prevent recurrence
auto_execution_mode: 3
related:
  - /debug-issue
  - /deep-thinking
  - /follow-debugging
  - /follow-root-cause-analysis
  - /resolve-errors
  - /write-test
  - /loop-until-complete
  - /report-format-table
  - /suggest-next-action
---

## Goal

Debug อย่างละเอียดหลายมิติ: reproduce, isolate, root cause, fix, regression test, verify, prevent recurrence

## Scope

ใช้สำหรับ debug ที่ซับซ้อน ต้องการ systematic approach ครบวงจร ไม่ใช่แค่หาสาเหตุเฉพาะหน้า

สำหรับ debug แบบปกติ ใช้ `/debug-issue`, สำหรับแก้ error เฉพาะ ใช้ `/resolve-errors`

## Execute

Step dependencies: แต่ละ step ขึ้นกับ step ก่อนหน้าตามลำดับ (Step N ขึ้นกับ Step N-1)

### 1. Deep Thinking Phase

ทำ `/deep-thinking` เพื่อวางแผน debug อย่างเป็นระบบ

- กำหนด debug objectives: อาการ, ความถี่, ผลกระทบ
- ระบุ debug dimensions ที่เกี่ยวข้อง: runtime, network, database, UI, config
- สร้าง debug strategy ก่อนเริ่ม investigate
- ถ้าซับซ้อนมาก ให้ทำ `/deep-research` หา known issues ที่คล้ายกัน

### 2. Reproduce And Define

ทำ `/follow-debugging` เพื่อ reproduce และนิยามปัญหาให้ชัดเจน

- reproduce ปัญหาให้ได้ก่อน ถ้า reproduce ไม่ได้ให้หาเงื่อนไขที่ทำให้เกิด
- เขียนนิยามปัญหา: Expected, Actual, Scope, Frequency
- บันทึก environment: runtime version, OS, config, dependencies
- ถ้า reproduce ไม่ได้ ให้ stop และ report ไม่ฝืน debug

### 3. Hypothesis Generation

สร้าง hypothesis list 3-5 ข้อพร้อม prior probability

- สร้าง hypothesis H = {H₁, H₂, ..., Hₙ} จากอาการและ environment
- กำหนด prior probability P(H) สำหรับแต่ละ hypothesis (0.1-0.9)
- จัดลำดับตาม probability สูงสูงก่อน
- ระบุ evidence ที่ต้องการเพื่อยืนยันหรือปฏิเสธแต่ละ hypothesis

### 4. Systematic Elimination

ใช้ Bayesian Inference และ Information Theory เพื่อตัด hypothesis

- คำนวณ Information Gain สำหรับแต่ละ test ที่ทำได้
- เลือก test ที่ให้ Information Gain สูงสุดก่อน
- ทำ test ทีละอย่าง ปรับ P(H|E) หลังแต่ละ test
- ตัด hypothesis ที่ P(H|E) < 0.05
- ทำซ้ำจนเหลือ hypothesis ที่ P(H|E) → 1.0
- ถ้าทุก hypothesis ถูกตัด ให้กลับไป Step 3 สร้าง hypothesis ใหม่

### 5. Isolate And Confirm Root Cause

ยืนยัน root cause ด้วยการ isolate variable

- เปลี่ยนทีละอย่างเท่านั้น: config, dependency, runtime, code
- ไล่จากบนลงล่าง: UI → Terminal → Shell → Runtime → OS
- ยืนยัน root cause ด้วย 3 เงื่อนไข: reproduce ได้, fix แล้วหาย, กลับมา error ถ้าถอย fix
- ทำ `/follow-root-cause-analysis` เพื่อวิเคราะห์หาสาเหตุหลักอย่างละเอียด
- ถ้าไม่ผ่าน 3 เงื่อนไข ให้กลับไป Step 4

### 6. Fix At Root Cause

Goal reminder: แก้ที่ root cause ไม่ใช่ symptoms

- แก้ปัญหาที่ root cause ไม่ใช่ symptoms
- ใช้ minimal changes ที่สุดที่แก้ปัญหาได้
- ถ้า fix กระทบหลายไฟล์ ให้ทำ `/edit-relative` อัปเดท references
- ถ้า fix มี side effects ให้ทำ `/resolve-errors` จนกว่าจะไม่มี error ใหม่
- ถ้า fix ไม่ได้ ให้ stop และ report

### 7. Regression Tests

ทำ `/write-test` เพื่อสร้าง regression tests จาก reproduction steps

- สร้าง test จาก reproduction steps ใน Step 2
- ทดสอบว่า test fail ก่อน fix และ pass หลัง fix
- ครอบคลุม edge cases ที่เกี่ยวข้อง
- รัน test suite ทั้งหมดเพื่อยืนยันไม่มี regression
- ถ้ามี regression ให้กลับไป Step 6 แก้ fix

### 8. Verify And Prevent

ทำ `/loop-until-complete` เพื่อ verify จนกว่าจะผ่านทุกเงื่อนไข

- รัน test suite ทั้งหมดจนกว่าจะผ่าน 100%
- ทำ `/run-check` เพื่อตรวจสอบ lint และ typecheck ผ่าน
- ระบุ root cause ในระดับ process: ทำไมปัญหานี้ถึงเกิดขึ้นได้
- แนะนำ preventive measures: linter rules, type constraints, code review checklist
- ถ้าเกิน 3 รอบแล้วยังไม่ผ่าน ให้ stop และ report

### 9. Report

ทำ `/report-format-table` เพื่อสร้างตารางสรุปผล

- ตาราง: Step, Hypothesis, P(H|E), Test, Result, Status
- สรุป root cause, fix, regression tests, preventive measures
- ทำ `/suggest-next-action` เพื่อแนะนำขั้นต่อไป

## Rules

### 1. Systematic Approach

- ห้ามเดา ต้องมี hypothesis และ evidence
- ห้ามแก้หลายอย่างพร้อมกัน เปลี่ยนทีละอย่าง
- ต้อง isolate variable ก่อน confirm root cause
- ต้องผ่าน 3 เงื่อนไข: reproduce, fix หาย, ถอย fix กลับมา error

### 2. Bayesian Method

- กำหนด prior probability สำหรับทุก hypothesis
- เลือก test ที่มี Information Gain สูงสุดก่อน
- ตัด hypothesis ที่ P(H|E) < 0.05
- ถ้าทุก hypothesis ถูกตัด ให้สร้าง hypothesis ใหม่

### 3. Regression Safety

- ทุก bug fix ต้องมี regression test
- Test ต้อง fail ก่อน fix และ pass หลัง fix
- รัน test suite ทั้งหมดเพื่อยืนยันไม่มี regression
- ถ้ามี regression ให้กลับไปแก้ fix

### 4. Error Handling

- ถ้า reproduce ไม่ได้ ให้ stop และ report
- ถ้า fix ไม่ได้ ให้ stop และ report
- ถ้าเกิน 3 รอบแล้วยังไม่ผ่าน ให้ stop และ report
- ถ้าซับซ้อนมาก ให้ทำ `/deep-thinking` ก่อน debug

### 5. Prevention

- ระบุ root cause ในระดับ process ไม่ใช่แค่ code
- แนะนำ preventive measures ที่ actionable
- บันทึก root cause และ prevention สำหรับ future reference

## Expected Outcome

- Root cause ถูกระบุอย่างชัดเจนด้วย evidence
- Bug ถูกแก้ที่ root cause ไม่ใช่ symptoms
- Regression tests ป้องกันปัญหาซ้ำ
- Preventive measures ลดความเสี่ยงการเกิดปัญหาใหม่
- ตารางสรุปผล: hypothesis, test, result, status
