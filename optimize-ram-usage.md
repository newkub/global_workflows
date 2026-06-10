---
title: Optimize RAM Usage
description: ปรับปรุงการใช้งาน RAM ด้วย systematic approach ครอบคลุมทุกภาษา
auto_execution_mode: 3
---

## Goal

ปรับปรุงการใช้งาน RAM ด้วย systematic approach ครอบคลุมทุกภาษาและ frameworks

## Execute

### 1. Detect Memory Usage

1. ใช้ `memory profiling tools` เฉพาะภาษา (`Valgrind`, `Chrome DevTools`, `pprof`)
2. Monitor `memory usage patterns` ที่เพิ่มขึ้นอย่างต่อเนื่อง
3. เก็บ `heap snapshots` เปรียบเทียบก่อนและหลัง operations
4. รัน application ภายใต้ realistic workload

### 2. Analyze Root Cause

1. ตรวจสอบ `object retention paths` ใน heap snapshots
2. หา `references` ที่ไม่ได้ release (`event listeners`, `callbacks`, `timers`)
3. ตรวจสอบ `circular references` และ `reference cycles`
4. ตรวจสอบ `global/static variables` ที่เก็บข้อมูลมากเกินไป
5. ตรวจสอบ `caches` ที่ไม่มี `eviction policy`

### 3. Apply Optimizations

1. Cleanup resources ใน `lifecycle hooks` หรือ `destructors`
2. ใช้ `weak references` (`WeakMap`, `WeakSet`, `weakref`) เมื่อเป็นไปได้
3. Implement `cache eviction policies` (`LRU`, `TTL`, `size limits`)
4. ตั้งค่า references เป็น `null/None/nil` เมื่อไม่ใช้งาน
5. Cancel `async operations` และ `timers` เมื่อไม่จำเป็น
6. ใช้ `object pooling` สำหรับ objects ที่สร้างบ่อย

### 4. Verify And Monitor

1. รัน `memory profiling` อีกครั้งหลัง optimize
2. ทำ `load testing` เพื่อยืนยัน stability ภายใต้ pressure
3. ตรวจสอบว่า `memory usage` ไม่เพิ่มขึ้นอย่างต่อเนื่อง
4. เพิ่ม `memory monitoring` ใน production
5. ตั้งค่า `alerts` สำหรับ `memory thresholds`

## Rules

### 1. Memory Profiling Tools

ใช้ tools เฉพาะภาษาสำหรับ detect memory usage

- `Valgrind` (C/C++), `pprof` (Go), `Chrome DevTools` (JS/TS), `heapdump` (Node.js), `memory_profiler` (Python)
- Bun: ใช้ `writeHeapSnapshot` จาก `v8` module สร้าง `.heapsnapshot` แล้วโหลดใน Chrome DevTools
- เก็บ snapshots เปรียบเทียบก่อนและหลัง optimize
- Monitor memory ใน production เป็นประจำ
- ใช้ flame graphs สำหรับ visualize memory usage

### 2. Common Causes Of High Memory Usage

ตรวจสอบสาเหตุทั่วไปของการใช้ memory สูง

- `Event listeners/callbacks` ที่ไม่ได้ remove
- `Closures` ที่ capture references ขนาดใหญ่
- `Circular references` และ `reference cycles`
- `Global/static variables` ที่ไม่ได้ cleanup
- `Caches` ที่ไม่มี `eviction policy`
- `Timers/intervals` ที่ไม่ได้ clear
- `File handles/network connections` ที่ไม่ได้ close

### 3. Best Practices

ทำตาม best practices เพื่อปรับปรุง memory usage

- ทำ cleanup ใน `lifecycle hooks` (`destructor`, `dispose`, `unmount`)
- ใช้ `weak references` เมื่อเป็นไปได้
- Implement `cache limits` และ `eviction policies`
- ตั้งค่า references เป็น `null` เมื่อไม่ใช้
- ใช้ `object pooling` สำหรับ `high-frequency objects`
- หลีกเลี่ยง `closures` ที่ capture ข้อมูลมากเกินไป
- ใช้ `RAII pattern` ในภาษาที่รองรับ

### 4. Language-Specific Patterns

ใช้ patterns เฉพาะภาษาสำหรับจัดการ memory

- `JavaScript/TypeScript`: `WeakMap`, `WeakSet`, `AbortController`, cleanup in `useEffect/onUnmount`
  - หลีกเลี่ยง `closures` ที่ capture large objects ใน top-level scope (ES modules/CommonJS)
  - หลีกเลี่ยง referencing large data ใน `AbortSignal` event listeners
  - ใช้ `once()` สำหรับ one-time events หรือ explicitly remove `EventEmitter` listeners
- `Python`: `weakref`, `context managers`, `__del__`, `gc.collect()`
- `Go`: `defer` for cleanup, `runtime/pprof`, circular reference detection
- `Rust`: `Drop trait`, `weak references`, `ownership system`
- `Java`: `WeakReference`, `PhantomReference`, `try-with-resources`
- `C/C++`: `smart pointers`, `RAII`, `Valgrind`, `AddressSanitizer`

## Expected Outcome

- Memory usage ถูกปรับปรุงครอบคลุมทุกภาษา
- Memory usage มีเสถียรภาพภายใต้ load
- Application performance และ reliability ดีขึ้น
- Memory monitoring และ alerts มีอยู่อย่างเป็นระบบ

