---
title: Test Load
description: ทดสอบ application ด้วย load testing เพื่อตรวจสอบ scalability และ stability ใต้ load
auto_execution_mode: 3
---

## Goal

ทดสอบ application ด้วย load testing เพื่อตรวจสอบ performance ใต้ expected load, หา breaking point และ bottlenecks, ยืนยัน scalability และ stability

## Execute

### 1. Define Load Profile

1. กำหนด concurrent users
2. วิเคราะห์ request patterns
3. รวบรวม think times
4. กำหนด endpoints ที่ทดสอบและ critical paths

### 2. Design Test Scripts

1. สร้าง test scenarios
2. ตั้งค่า virtual users
3. ตั้งค่า ramp-up
4. เพิ่ม assertions

### 3. Setup Monitoring

1. ตั้งค่า APM
2. ตั้งค่า logging
3. วางแผน alerting
4. ออกแบบ dashboards

### 4. Run Load Tests

1. รัน normal load
2. วัด response times
3. ตรวจสอบ error rates
4. Monitor resources

### 5. Run Stress Tests

1. เพิ่ม load แบบ gradual
2. หา breaking point
3. วัด degradation
4. บันทึก limits

### 6. Run Spike Tests

1. เพิ่ม load แบบ sudden
2. วัด recovery
3. ตรวจสอบ error spikes
4. บันทึก behavior

### 7. Run Endurance Tests

1. ระยะเวลายาวนาน
2. Monitor memory
3. ตรวจสอบ leaks
4. ยืนยัน stability

### 8. Analyze Results

1. รีวิว response times และ throughput
2. ตรวจสอบตาม SLAs (P95 latency, error rate)
3. ระบุ bottlenecks (slow queries, resource exhaustion)
4. สร้าง optimization recommendations

## Rules

1. จำลอง real user behavior และ ramp up load แบบ gradual
2. Track metrics: P50, P95, P99 latencies, throughput, error rate, resource usage
3. อย่า impact production โดยใช้ test environment
4. Ensure tests สามารถ repeat ได้และ measurable

## Expected Outcome

1. Clear performance baseline
2. Identified bottlenecks
3. SLA validation results
4. Optimization roadmap
5. Regular load testing cadence

