---
title: Debug Hooks
description: หา root cause ของปัญหา Cascade Hooks อย่างเป็นระบบด้วยการจัดลำดับและตัดสิ่งที่ไม่ใช่
auto_execution_mode: 3
---

## Goal

หา root cause ของปัญหา Cascade Hooks อย่างเป็นระบบด้วยการจัดลำดับความเป็นไปได้และตัดสิ่งที่ไม่ใช่ออก ลดการเดาและแก้ปัญหาได้เร็วขึ้น

## Scope

Debug Cascade Hooks issues ทั้ง configuration, script execution, runtime และ platform layers

## Execute

### 1. Triage Incident

ทำ `/incident-triage` เพื่อจัดลำดับความสำคัญและกำหนด action plan

### 2. Define Problem

ทำ `/content-quality` เพื่อเขียนปัญหาให้ชัดเจน ระบุ:

- Expected: Hook ควรทำงานอย่างไร
- Actual: Hook ทำงานอย่างไรจริง
- Scope: Hook event, script language, platform

### 3. List Possible Causes

สร้าง hypothesis list H = {H₁, H₂, ..., Hₙ} 3–5 ข้อ เช่น:

- H₁: hooks.json configuration error
- H₂: script path incorrect
- H₃: script syntax error (TypeScript/Rust)
- H₄: missing dependencies (bun/cargo)
- H₅: permission issue

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

- Test hook script individually
- Test hooks.json syntax
- Test with minimal configuration
- Test on different hook events

### 7. Narrow Down Layer

ไล่จากบนลงล่าง:

```txt
Cascade UI
→ hooks.json configuration
→ Hook script execution
→ Runtime (bun/cargo)
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

- fix ปัญหา
- document cause
- prevent recurrence

## Rules

### 1. Core Principles

- ห้ามแก้หลายอย่างพร้อมกัน
- ห้ามเดา
- ต้อง isolate variable

### 2. Heuristic Cheatsheet

| Symptom                 | Likely Cause                         |
| ----------------------- | ------------------------------------ |
| Hook not triggered      | hooks.json syntax / event name      |
| Script not found        | Path incorrect / not executable      |
| Exit code 2 always      | Pre-hook blocking logic              |
| No output shown         | show_output: false                  |
| TypeScript error        | Missing @types/bun / @types/node    |
| Rust compile error      | Cargo.toml workspace issue          |

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
1. Observe hook behavior
2. List 3–5 causes
3. Pick top 1–2
4. Test one change at a time
5. Eliminate
6. Repeat
```

## Expected Outcome

- หา root cause ของ hook issues ได้เร็วขึ้น
- ลดการเดาและแก้หลายอย่างพร้อมกัน
- มี systematic approach สำหรับ debug hooks ทุกประเภท

