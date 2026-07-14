---
title: Debug Issue
description: หา root cause ของปัญหาอย่างเป็นระบบด้วยการจัดลำดับและตัดสิ่งที่ไม่ใช่
auto_execution_mode: 3
related:
  - /follow-debugging
  - /write-test
  - /resolve-errors
---

## Goal

หา root cause ของปัญหาอย่างเป็นระบบด้วยการจัดลำดับความเป็นไปได้และตัดสิ่งที่ไม่ใช่ออก ลดการเดาและแก้ปัญหาได้เร็วขึ้น

## Scope

Debug issues ทั้ง VSCode, terminal, shell, runtime และ OS layers

## Execute

### 1. Triage Incident

ทำ `/incident-triage` เพื่อจัดลำดับความสำคัญและกำหนด action plan

### 2. Define Problem

ทำ `/content-quality` เพื่อเขียนปัญหาให้ชัดเจน ระบุ:

- Expected: สิ่งที่ควรเกิด
- Actual: สิ่งที่เกิดจริง
- Scope: สถานที่เกิดปัญหา (VSCode / OS / app / API)

### 3. List Possible Causes

สร้าง hypothesis list H = {H₁, H₂, ..., Hₙ} 3–5 ข้อ เช่น:

- H₁: config issue
- H₂: environment (PATH / runtime)
- H₃: dependency / package
- H₄: tool version mismatch
- H₅: user mistake

### 4. Rank By Probability (Bayesian Inference)

ใช้ Bayesian Inference เพื่อจัดลำดับความเป็นไปได้:

**สูตร:** P(H|E) = P(E|H) × P(H) / P(E)

**ขั้นตอน:**
1. กำหนด prior probability P(H) สำหรับแต่ละ hypothesis (0.1–0.9)
2. ประเมณ likelihood P(E|H) ความน่าจะเป็นที่ evidence เกิดขึ้นถ้า H เป็นจริง
3. คำนวณ posterior probability P(H|E)
4. เลือก top 1–2 ที่มี P(H|E) สูงสุด

### 5. Eliminate Fast (Information Theory)

ใช้ Information Theory เพื่อเลือก test ที่ให้ข้อมูลมากที่สุด:

**สูตร:** Information Gain = H(H) - H(H|E)

**ขั้นตอน:**
1. คำนวณ entropy H(H) = -Σ P(Hᵢ) log₂ P(Hᵢ) ของ hypotheses ปัจจุบัน
2. สำหรับแต่ละ test T คำนวณ conditional entropy H(H|T)
3. เลือก test ที่มี Information Gain สูงสุด
4. ทำ `/use-bun-shell` เพื่อ execute test ที่เลือก
5. อัพเดท P(H|E) ด้วย Bayesian update
6. ตัด hypothesis ที่ P(H|E) < 0.05

### 6. Isolate Variable

เปลี่ยนทีละอย่างเท่านั้น:

- ปิด extension
- เปลี่ยน PATH
- ใช้ clean terminal
- run bare command

### 7. Narrow Down Layer

ไล่จากบนลงล่าง:

```txt
UI (VSCode)
→ Terminal
→ Shell (pwsh / powershell)
→ Runtime
→ OS
```

### 8. Confirm Root Cause

ต้องมี 3 อย่าง:

- Reproduce ได้
- Fix แล้วหาย
- กลับมา error ถ้าถอย fix

### 9. Perform Root Cause Analysis

ทำ `/root-cause-analysis` เพื่อวิเคราะห์หาสาเหตุหลักอย่างละเอียด

### 10. Fix And Prevent

- fix ปัญหาที่ root cause ไม่ใช่ symptoms
- document cause
- prevent recurrence

### 11. Write Regression Tests

ทำ `/write-test` เพื่อสร้าง regression tests จาก reproduction steps

1. สร้าง test จาก reproduction steps ใน step 2
2. ทดสอบว่า test fail ก่อน fix และ pass หลัง fix
3. ครอบคลุม edge cases ที่เกี่ยวข้อง
4. รัน test suite ทั้งหมดเพื่อยืนยันไม่มี regression

### 12. Prevent Recurrence

ป้องกันการเกิดปัญหาซ้ำ

1. ระบุ root cause ในระดับ process: ทำไมปัญหานี้ถึงเกิดขึ้นได้
2. แนะนำ preventive measures: linter rules, type constraints, code review checklist
3. บันทึก root cause และ prevention สำหรับ future reference

## Rules

### 1. Core Principles

- ห้ามแก้หลายอย่างพร้อมกัน
- ห้ามเดา
- ต้อง isolate variable

### 2. Heuristic Cheatsheet

| Symptom                 | Likely Cause                         |
| ----------------------- | ------------------------------------ |
| tool detect wrong shell | PATH                                 |
| VSCode weird behavior   | extension / profile                  |
| command not found       | PATH                                 |
| version mismatch        | runtime manager (mise / node / etc.) |

### 3. Mental Model (Math-Based)

Debug = Bayesian Search in Hypothesis Space

- State: Probability distribution over hypotheses P(H)
- Action: Test that maximizes Information Gain
- Update: Bayesian update P(H|E) = P(E|H) × P(H) / P(E)
- Goal: Find H with P(H|E) → 1.0

**Information Theory Perspective:**
- Entropy H(H) = uncertainty ใน hypotheses
- Information Gain = reduction in uncertainty
- Optimal test = maximizes Information Gain

### 4. Fast Debug Loop

```txt
1. Observe
2. List 3–5 causes
3. Pick top 1–2
4. Test one change at a time
5. Eliminate
6. Repeat
```

### 5. Regression Safety

- ทุก bug fix ต้องมี regression test
- Test ต้อง fail ก่อน fix และ pass หลัง fix
- รัน test suite ทั้งหมดเพื่อยืนยันไม่มี regression
- ถ้าปัญหาซับซ้อนหรือเกิดซ้ำๆ ให้ใช้ `/deep-thinking` ก่อน debug

## Expected Outcome

- หา root cause ได้เร็วขึ้น
- ลดการเดาและแก้หลายอย่างพร้อมกัน
- มี systematic approach สำหรับ debug ทุกประเภท
- Regression tests ที่ป้องกันปัญหาซ้ำ
- Preventive measures สำหรับ future

