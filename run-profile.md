---
title: Run Profile
description: Profile performance เพื่อหา bottlenecks และ optimize
auto_execution_mode: 3
related_workflows:
  - /run-bench
  - /optimize-perf
---

## Goal

Profile performance เพื่อหา bottlenecks และ optimize

## Execute

### 1. Setup Profiling

1. เลือก profiling tool ที่เหมาะสม (Chrome DevTools, Node.js profiler, etc.)
2. ตั้งค่า profiling environment
3. กำหนด scope ของ profiling

### 2. Capture Profile

1. เริ่ม profiling session
2. ทำงานที่ต้อง profile (user flow, API call, etc.)
3. หยุด profiling และบันทึกข้อมูล

### 3. Analyze Profile

1. วิเคราะห์ call tree และ flame graph
2. ระบุ functions ที่ใช้เวลานาน
3. ตรวจสอบ memory allocations
4. ดู network requests และ I/O

### 4. Identify Bottlenecks

1. ระบุ hot paths ใน code
2. ตรวจสอบ unnecessary computations
3. ดู inefficient algorithms
4. ตรวจสอบ memory leaks

### 5. Optimize

1. ทำ `/optimize-perf` เพื่อปรับปรุง
2. ใช้ caching ที่เหมาะสม
3. Optimize algorithms และ data structures
4. ลบ unnecessary work

### 6. Verify Improvements

1. Profile อีกครั้งหลัง optimize
2. เปรียบเทียบกับ profile เดิม
3. ยืนยัน improvements

## Rules

### 1. Profiling Scope

- Profile realistic workloads
- Profile ใน production-like environment
- Profile ช่วงเวลาที่เพียงพอ

### 2. Analysis Focus

- มุ่งเน้นที่ bottlenecks ที่ impact สูง
- ดูทั้ง CPU และ memory
- ตรวจสอบ I/O และ network

### 3. Optimization Strategy

- Optimize สิ่งที่ช้าก่อน
- ใช้ measurements ไม่ใช่ assumptions
- Optimize แบบ iterative

## Expected Outcome

- Performance bottlenecks ถูกระบุ
- Hot paths ถูก optimize
- Memory usage ถูกปรับปรุง
- Performance improvements ถูกวัด
- Code ทำงานเร็วขึ้น

