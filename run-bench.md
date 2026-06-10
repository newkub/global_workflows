title: Run Bench
description: รัน benchmark tests เพื่อวัดประสิทธิภาพและเปรียบเทียบ performance
auto_execution_mode: 3
## Purpose

รัน benchmark tests เพื่อวัดประสิทธิภาพของ code และเปรียบเทียบ performance ระหว่าง implementations

## Scope

ใช้สำหรับ:

- วัด performance ของ functions
- เปรียบเทียบ implementations ต่างๆ
- ตรวจสอบ performance regressions
- Optimize code ตามผล benchmark

## Inputs

| Input | Details |
|-------|---------|
| Bench Pattern | (optional) pattern สำหรับรันเฉพาะ benchmark |
| Iterations | (optional) จำนวน iterations |

## Rules

### Benchmark Best Practices

| Practice | Description |
|----------|-------------|
| Isolated | แต่ละ benchmark แยกจากกัน |
| Consistent | รันหลายๆ ครั้งเพื่อ consistency |
| Representative | ใช้ data ที่สมจริง |
| Minimal Overhead | ลด overhead ของ test framework |

### Metrics

| Metric | Description |
|--------|-------------|
| ops/sec | Operations per second |
| avg time | Average execution time |
| min/max | Min/max execution time |
| samples | Number of samples |

## Structure

### File Location

```text
.windsurf/workflows/
└── run-bench.md
```

### Phase Definitions

| Phase | Description | Main Activities |
|-------|-------------|---------------|
| Setup | เตรียมการ | install, check config |
| Run | รัน benchmarks | execute bench suite |
| Analyze | วิเคราะห์ | ดูผลลัพธ์ |
| Compare | เปรียบเทียบ | compare กับ baseline |

## Steps

### Phase 1: Setup

- 1.1 **Install Dependencies**
  - รัน `/run-install`
  - ตรวจสอบ benchmark libraries ถูกติดตั้ง
  - เช่น vitest bench, tinybench

- 1.2 **Check Configuration**
  - ตรวจสอบ benchmark files มีอยู่
  - ตรวจสอบ benchmark config
  - ตรวจสอบ baseline results (ถ้ามี)

### Phase 2: Run Benchmarks

- 2.1 **Execute Benchmarks**
  - รัน `bun run bench` หรือ script ที่กำหนด
  - รอ benchmarks เสร็จสิ้น
  - บันทึกผลลัพธ์ทั้งหมด

- 2.2 **Collect Metrics**
  - บันทึก ops/sec แต่ละ benchmark
  - บันทึก execution times
  - บันทึก sample counts

### Phase 3: Analyze

- 3.1 **Review Results**
  - ดูผลลัพธ์ของแต่ละ benchmark
  - ระบุ slow benchmarks
  - ระบุ fast benchmarks

- 3.2 **Identify Issues**
  - หา benchmarks ที่มี variance สูง
  - หา benchmarks ที่มี outliers
  - หา potential optimizations

### Phase 4: Compare

- 4.1 **Compare with Baseline**
  - เปรียบเทียบกับ baseline (ถ้ามี)
  - ระบุ regressions
  - ระบุ improvements

- 4.2 **Document Results**
  - บันทึกผลลัพธ์
  - บันทึก improvements
  - บันทึก action items

## Outputs

| Output | Details |
|--------|---------|
| Bench Results | ผลลัพธ์ของแต่ละ benchmark |
| Comparison | เปรียบเทียบกับ baseline |
| Regressions | รายการที่ช้าลง |
| Improvements | รายการที่เร็วขึ้น |

## Expected Outcome

- Benchmarks รันสำเร็จ
- Metrics ถูกบันทึกครบถ้วน
- Regressions ถูกระบุ
- Action items สำหรับ optimize

## Reference

- `/validate` - ตรวจสอบความถูกต้องก่อนเริ่ม
- `/run-install` - ติดตั้ง dependencies

