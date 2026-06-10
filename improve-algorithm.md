---
title: Improve Algorithm
description: ปรับปรุง algorithms และ data structures เพื่อเพิ่มประสิทธิภาพ
auto_execution_mode: 3
---

## Goal

ปรับปรุง algorithms และ data structures เพื่อเพิ่มประสิทธิภาพของ codebase

## Execute

### 1. Analyze Current Algorithms

วิเคราะห์ algorithms ปัจจุบัน

1. ระบุ algorithms ที่ใช้ใน codebase
2. วิเคราะห์ time complexity ของแต่ละ algorithm
3. วิเคราะห์ space complexity ของแต่ละ algorithm
4. ระบุ bottlenecks ใน performance-critical code
5. วัดผลลัพธ์ปัจจุบันด้วย benchmarking

### 2. Optimize Time Complexity

ปรับปรุง time complexity

1. แปลง O(n²) เป็น O(n log n) หรือ O(n) ถ้าเป็นไปได้
2. ใช้ hash maps แทน nested loops
3. ใช้ binary search สำหรับ sorted data
4. ใช้ memoization สำหรับ recursive calls
5. ใช้ greedy algorithms ถ้าเหมาะสม

### 3. Optimize Space Complexity

ปรับปรุง space complexity

1. ใช้ in-place algorithms ถ้าเป็นไปได้
2. ลบ unnecessary data structures
3. ใช้ generators หรือ iterators สำหรับ large datasets
4. ใช้ bit manipulation สำหรับ boolean flags
5. ปล่อย memory ที่ไม่ใช้ทันที

### 4. Optimize Data Structures

ปรับปรุง data structures

1. เลือก data structures ที่เหมาะสมกับ use case
2. ใช้ `arrays` สำหรับ random access
3. ใช้ `linked lists` สำหรับ frequent insertions/deletions
4. ใช้ `hash maps` สำหรับ fast lookups
5. ใช้ `trees` สำหรับ hierarchical data
6. ใช้ `heaps` สำหรับ priority queues

### 5. Apply Common Patterns

ใช้ common algorithm patterns

1. ใช้ `two pointers` สำหรับ sorted arrays
2. ใช้ `sliding window` สำหรับ subarray problems
3. ใช้ `divide and conquer` สำหรับ large problems
4. ใช้ `dynamic programming` สำหรับ overlapping subproblems
5. ใช้ `backtracking` สำหรับ combinatorial problems

### 6. Optimize Critical Paths

ปรับปรุง critical paths

1. ระบุ hot paths ด้วย profiling
2. ใช้ caching สำหรับ expensive computations
3. ใช้ lazy evaluation ถ้าเป็นไปได้
4. ใช้ parallel processing สำหรับ independent tasks
5. ใช้ SIMD operations ถ้าภาษารองรับ

### 7. Test And Validate

ทดสอบและตรวจสอบ

1. ทดสอบ correctness ของ algorithms ใหม่
2. benchmark เปรียบเทียบ performance
3. ตรวจสอบ edge cases
4. ทดสอบกับ large datasets
5. ตรวจสอบว่าไม่มี regressions

## Rules

### Complexity Analysis

วิเคราะห์ complexity ก่อน optimize

- ระบุ time complexity ของ algorithms ปัจจุบัน
- ระบุ space complexity ของ algorithms ปัจจุบัน
- เน้นที่ algorithms ที่มี impact สูง
- วัด baseline metrics ก่อนเริ่ม

### Data Structure Selection

เลือก data structures ที่เหมาะสม

- เข้าใจ trade-offs ระหว่าง data structures ต่างๆ
- เลือกตาม operations ที่ใช้บ่อย
- พิจารณา memory usage
- พิจารณา implementation complexity

### Optimization Trade-offs

พิจารณา trade-offs

- Time vs space complexity
- Readability vs performance
- Implementation complexity vs gains
- Maintainability vs optimization

### Common Patterns

ใช้ patterns ที่พิสูจน์แล้ว

- `two pointers` สำหรับ sorted arrays
- `sliding window` สำหรับ subarray problems
- `divide and conquer` สำหรับ large problems
- `dynamic programming` สำหรับ overlapping subproblems
- `greedy` สำหรับ optimization problems

### Benchmarking

วัดผลลัพธ์อย่างเป็นระบบ

- ใช้ realistic datasets
- ทดสอบหลายครั้งเพื่อความแม่นยำ
- เปรียบเทียบกับ baseline
- ตรวจสอบ worst-case scenarios

## Expected Outcome

- Time complexity ดีขึ้น
- Space complexity ดีขึ้น
- Data structures เหมาะสมกับ use cases
- Performance-critical code ทำงานเร็วขึ้น
- Code ยังคง readable และ maintainable
- ไม่มี regressions ใน functionality

