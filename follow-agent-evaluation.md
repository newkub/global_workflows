---
title: Follow Agent Evaluation
description: ประเมิน AI agent ด้วย trace-based evaluation และ episode packages สำหรับ auditable execution
auto_execution_mode: 3
url: https://arxiv.org/html/2605.13357
related:
  - /follow-harness-engineering
  - /follow-context-engineering
  - /run-test
  - /validate
  - /review-logging
  - /review-error-handling
  - /report
---

## Goal

ประเมิน AI agent performance ผ่าน trace-based evaluation protocol สร้าง episode packages สำหรับ auditable execution และวัด metrics ที่ model-harness configuration level

## Scope

ใช้สำหรับ project ที่มี AI agent infrastructure ที่ผ่าน `/follow-harness-engineering` แล้ว ต้องการประเมิน quality, reliability, และ efficiency ของ agent อย่างเป็นระบบ

## Execute

### 1. Define Evaluation Episodes

กำหนด episode สำหรับ evaluation

1. กำหนด episode identifier, model identity, harness level, repository, initial commit, task specification
2. กำหนด visible artifacts และ allowed tools สำหรับแต่ละ episode
3. กำหนด intervention policy: ไม่มี human intervention (autonomous) หรือ มี (assisted)
4. กำหนด verification procedure: deterministic checks, behavioral checks, requirement checks
5. กำหนด final outcome rule: อะไรคือเกณฑ์ที่ถือว่า task สำเร็จ
6. สร้าง controlled task ที่ reproducible และ measurable

### 2. Record Execution Traces

บันทึก 8 trace types ตาม trace-based evaluation protocol

1. บันทึก **action trace**: `read_file`, `edit_file`, `run_tool`, `write_report`, `update_task_state`, `inspect_diff`, `declare_complete`
2. บันทึก **tool trace**: command, exit code, duration, timeout status, failure type, recovery status
3. บันทึก **context trace**: ใช้ project memory artifacts ใด มีผลต่อ decision อย่างไร
4. บันทึก **verification trace**: type, method, result, requirements covered, agent interpretation
5. บันทึก **failure-attribution log**: observed output, expected output, failure type, evidence, next diagnostic action
6. บันทึก **intervention log**: human assistance, avoidability, burden level, harness gap
7. บันทึก **entropy audit**: maintenance burden categories (code, docs, dependency, test, file residue, architecture, workflow) พร้อม severity 0-3
8. บันทึก **outcome record**: final classification และ summary metrics

### 3. Create Episode Packages

สร้าง episode package สำหรับแต่ละ evaluation run

1. รวม 8 trace types เป็น JSONL format ตาม compact schema
2. แนบ patch หรือ final artifact ที่ agent สร้าง
3. แนบ verification report: deterministic check results, requirement coverage
4. แนบ final report: agent's own summary ของ task completion
5. แนบ final-outcome record: classification และ metrics
6. บันทึก episode package เป็น auditable record สำหรับ comparison

### 4. Classify Outcomes

จัดประเภท final outcome ตาม 5-level taxonomy

1. **autonomous_verified_success**: task สำเร็จ มี evidence เพียงพอ ไม่มี human intervention
2. **assisted_verified_success**: patch ถูกต้อง แต่ progress หรือ verification พึ่ง human assistance
3. **unverified_success**: patch ดูถูกต้อง แต่ agent ไม่ได้ produce evidence เพียงพอ
4. **failed**: required behavior ล้มเหลว หรือ tests fail หรือ ไม่มี usable patch
5. **unsafe_invalid**: tests ถูก weaken หรือมี unrelated destructive edits หรือ task ถูก bypass

### 5. Calculate Process Metrics

คำนวณ process-level metrics จาก episode packages

1. คำนวณ **AVSR** (Autonomous Verified Success Rate): อัตราสำเร็จแบบ autonomous พร้อม evidence
2. คำนวณ **M-HIR** (Missing-Harness Human Intervention Rate): อัตราที่ต้องมี human intervention เพราะ harness ขาด
3. คำนวณ **verification autonomy**: อัตราที่ agent  verify ได้เองโดยไม่พึ่ง evaluator
4. คำนวณ **context-trace meaningfulness**: อัตราที่ context ที่เลือกมี influence ต่อ decision
5. คำนวณ **tool recovery rate**: อัตราที่ agent กู้คืนจาก tool failure ได้
6. คำนวณ **failure attribution completeness**: อัตราที่ agent ระบุสาเหตุ failure ได้ครบถ้วน
7. คำนวณ **entropy delta**: maintenance burden ที่ agent เพิ่มเข้าระบบ

### 6. Analyze Execution Alignment

วิเคราะห์ execution-alignment failures

1. ตรวจสอบ reasoning ที่ไม่ตรงกับ tool feedback (decoupled reasoning)
2. ตรวจสอบ reasoning ที่ไม่ตรงกับ workspace state (stale state)
3. ตรวจสอบ reasoning ที่ไม่ตรงกับ evidence (unsupported claims)
4. ตรวจสอบ reasoning ที่ไม่ตรงกับ verifiable output contracts (unverifiable output)
5. ระบุ recurring failure patterns ข้าม episodes
6. จัดลำดับ failure patterns ตาม frequency และ impact

### 7. Compare Configurations

เปรียบเทียบ model-harness configurations

1. รัน same task กับ different harness levels (H0-H3) เพื่อแยก harness effect จาก model effect
2. รัน same task กับ different models บน same harness เพื่อวัด model variation
3. เปรียบเทียบ metrics: completion rate, process quality, efficiency, failure behavior
4. ระบุ harness-only gains: improvements ที่เกิดจาก harness ไม่ใช่ model
5. บันทึกผลเป็น configuration-level diagnostics ไม่ใช่ model-level claims

### 8. Report And Iterate

รายงานผลและวางแผน iteration

1. สร้าง evaluation report: episode packages, metrics, failure analysis, configuration comparison
2. ทำ `/report` เพื่อจัดรูปแบบ report ตามมาตรฐาน
3. ระบุ harness gaps ที่ต้องปรับปรุง ส่งต่อไป `/follow-harness-engineering`
4. ระบุ context issues ที่ต้องปรับปรุง ส่งต่อไป `/follow-context-engineering`
5. วางแผน next evaluation cycle พร้อม improved harness และ metrics

## Rules

### 1. Episode-Based Evaluation

หน่วยของ evaluation คือ episode ไม่ใช่ single model response

- แต่ละ episode ครอบคลุม complete task attempt ตั้งแต่ start ถึง outcome
- บันทึกทุก action, tool call, context selection, verification attempt
- episode package คือ auditable record ที่ reproducible ได้
- ไม่ evaluate แค่ final patch แต่ evaluate process ด้วย

### 2. Eight Trace Types

บันทึกครบ 8 trace types ตาม protocol

- **action**: externally meaningful operations
- **tool**: command, exit code, duration, recovery
- **context**: artifacts consulted, influence on decisions
- **verification**: type, method, result, requirements
- **failure attribution**: observed, expected, evidence, next action
- **intervention**: human assistance, avoidability, harness gap
- **entropy**: maintenance burden categories, severity 0-3
- **outcome**: final classification, summary metrics

### 3. Outcome Taxonomy

ใช้ 5-level taxonomy แยก task behavior จาก evidence quality

- patch ถูกต้องไม่เท่ากับ verified success
- patch ผิดไม่เท่ากับ ไม่มี diagnostic value
- แยก autonomous จาก assisted success
- ระบุ unsafe_invalid เมื่อมี destructive edits หรือ weakened tests

### 4. Configuration-Level Reporting

รายงานที่ model-harness configuration level

- ไม่ attribute performance ให้ model เพียงอย่างเดียว
- harness-only gains มี impact มากกว่า model gains ในหลายกรณี
- รัน same task ข้าม configurations เพื่อ isolate harness effect
- บันทึก harness configuration สำหรับ reproducibility

### 5. Deterministic Verification

ใช้ deterministic behavioral checks สำหรับ adjudication

- แต่ละ task requirement มี directly observable output check
- check ทั้ง corrected behavior, preserved valid-input, preserved invalid-input
- deterministic checks ใช้ได้ทั้ง agent-visible (H3) และ evaluator-side
- ไม่พึ่ง LLM rubric เพียงอย่างเดียว ใช้ oracle graders เมื่อเป็นไปได้

### 6. Continuous Evaluation

evaluation เป็น continuous process ไม่ใช่ one-time

- รัน evaluation ทุกครั้งที่ harness หรือ model เปลี่ยน
- เปรียบเทียบกับ baseline episode packages ก่อนหน้า
- track metrics ตลอดเวลา: AVSR, M-HIR, verification autonomy
- ระบุ regression เมื่อ metrics แย่ลงจาก baseline

## Expected Outcome

- Episode packages ครบทุก evaluation run พร้อม 8 trace types
- Outcome classification ตาม 5-level taxonomy ครบถ้วน
- Process metrics คำนวณครบ: AVSR, M-HIR, verification autonomy, context meaningfulness, tool recovery, failure attribution, entropy delta
- Execution-alignment failures ระบุและจัดลำดับ
- Configuration-level comparison แยก harness effect จาก model effect
- Evaluation report ส่งต่อไป `/follow-harness-engineering` สำหรับ iteration
