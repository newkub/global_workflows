---
title: Improve Until Score 10
description: ปรับปรุงจนกว่าคะแนนจะถึง 10 โดยวน /review-score ซ้ำ
auto_execution_mode: 3
related:
  - /review-score
  - /fix
  - /validate
  - /suggest-next-action
  - /deep-thinking
  - /follow-best-practice
  - /restructure
  - /refactor
  - /follow-content-quality
  - /simplify
  - /ask-me
---

## Goal

ปรับปรุง target จนคะแนนเต็ม 10 โดยวน `/review-score` ซ้ำจนกว่าจะผ่าน

## Scope

ใช้กับ workflow, skill, code, config, หรือไฟล์ใดๆ ที่ต้องการให้คะแนนเต็ม 10

## Execute

### 1. Baseline Score

ทำ `/review-score` ครั้งแรกเพื่อทราบคะแนนเริ่มต้นและ improvements

1. ทำ `/review-score` กับ target ไฟล์
2. บันทึกคะแนนรวม, grade, และรายการ improvements
3. ถ้าคะแนน = 10 → จบ ไม่ต้องปรับปรุง
4. ถ้าคะแนน < 10 → ไป Step 2

> Goal: ทราบคะแนนเริ่มต้นและสิ่งที่ต้องปรับปรุง

### 2. Analyze Gaps

วิเคราะห์สิ่งที่ทำให้ไม่ได้คะแนนเต็ม

1. อ่าน improvements จาก `/review-score` — จัดลำดับตาม impact ต่อคะแนน
2. ระบุ root cause ของแต่ละ issue — ไม่ใช่แค่อาการ
3. ถ้า issue ซับซ้อน → ทำ `/deep-thinking` เพื่อวิเคราะห์
4. ถ้า issue เกี่ยวกับ external tools → ทำ `/follow-best-practice`

> Goal: เข้าใจ root cause ของทุก issue ที่ทำให้เสียคะแนน

### 3. Fix Issues

แก้ไข issues ตามลำดับ impact สูงสุดก่อน

1. ทำ `/fix` สำหรับแต่ละ issue ตามลำดับ impact สูงสุดก่อน
2. ถ้า issue เกี่ยวกับ structure → ทำ `/restructure` หรือ `/refactor`
3. ถ้า issue เกี่ยวกับ content → ทำ `/follow-content-quality` และ `/simplify`
4. ถ้าแก้ไม่ได้ → บันทึกเหตุผลและข้ามไป issue ถัดไป
5. ห้าม weaken หรือลด criteria เพื่อให้ได้คะแนน 10 — แก้ที่ issue จริง

> Goal: แก้ทุก issue ตามลำดับ impact ไม่ weaken criteria

### 4. Re-Score

ทำ `/review-score` อีกครั้งเพื่อตรวจสอบผล

1. ทำ `/review-score` กับ target ไฟล์ที่แก้แล้ว
2. เปรียบเทียบคะแนนกับรอบก่อน — ต้องเพิ่มขึ้นหรือเท่าเดิม
3. ถ้าคะแนนลด → กลับไป Step 2 และวิเคราะห์ว่าการแก้ทำให้เสียคะแนนด้านอื่น
4. ทำ `/validate` เพื่อยืนยันว่าการแก้ไม่ทำลายสิ่งที่ผ่านแล้ว

> Goal: คะแนนเพิ่มขึ้น ไม่ลด ไม่ทำลายสิ่งที่ผ่านแล้ว

### 5. Loop Or Complete

ตรวจสอบว่าคะแนนถึง 10 หรือไม่

1. ถ้าคะแนน = 10 → จบ ทำ `/suggest-next-action`
2. ถ้าคะแนน < 10 และยังแก้ได้ → กลับไป Step 2
3. ถ้าคะแนน < 10 และแก้ไม่ได้แล้ว → stop และ report เหตุผล
4. ถ้าวนเกิน 5 รอบ → stop และ report — ทำ `/ask-me` เพื่อขอคำแนะนำจากผู้ใช้

> Goal: คะแนน 10 หรือหยุดด้วยเหตุผลชัดเจน

## Rules

### 1. Loop Control

- วนซ้ำได้สูงสุด 5 รอบ — ถ้าเกิน → stop และ report
- แต่ละรอบต้องมีคะแนนเพิ่มขึ้นหรือเท่าเดิม — ถ้าลด → วิเคราะห์ root cause ใหม่
- ถ้าแก้ไม่ได้ → บันทึกเหตุผลและข้าม — ไม่หยุดกลางคัน

### 2. Safety And Quality

- ห้าม weaken criteria หรือลดมาตรฐานเพื่อให้ได้คะแนน 10 — แก้ที่ issue จริง
- การแก้ต้องไม่ทำลายสิ่งที่ผ่านแล้ว — ทำ `/validate` ทุกรอบ
- ไม่มี TODO, MOCK, หรือ placeholder ในผลลัพธ์ — ทุกการแก้ต้องสมบูรณ์

### 3. Determinism

- ใช้ `/review-score` ซ้ำ — เกณฑ์เดียวกันทุกรอบ — ไม่เปลี่ยน dimensions ระหว่างทาง
- ลำดับการแก้: impact สูงสุดก่อน — ไม่สุ่ม
- ถ้า input เดียวกัน → ผลลัพธ์เหมือนกันทุกรอบ

## Expected Outcome

- Target ไฟล์ที่ได้คะแนน 10/10 จาก `/review-score` หรือหยุดด้วยเหตุผลชัดเจน (state change + รายงานตาราง)
