---
title: Check Scalability
description: ตรวจสอบ scalability potential และ bottlenecks
auto_execution_mode: 3
related_workflows:
  - /improve-perf
  - /run-profile
---

## Goal

ตรวจสอบ scalability potential และระบุ bottlenecks ที่อาจเกิดขึ้น

## Execute

### 1. Check Horizontal Scalability

1. ตรวจสอบ stateless architecture
2. ตรวจสอบ session management
3. ตรวจสอบ load balancing capability
4. ตรวจสอบ auto-scaling configuration

### 2. Check Vertical Scalability

1. ตรวจสอบ resource usage patterns
2. ตรวจสอบ memory efficiency
3. ตรวจสอบ CPU efficiency
4. ตรวจสอบ I/O efficiency

### 3. Check Database Scalability

1. ตรวจสอบ query performance
2. ตรวจสอบ indexing strategy
3. ตรวจสอบ connection pooling
4. ตรวจสอบ read replica support

### 4. Check Cache Strategy

1. ตรวจสอบ caching layers
2. ตรวจสอบ cache invalidation
3. ตรวจสอบ cache hit rates
4. ตรวจสอบ distributed caching

### 5. Check Bottlenecks

1. ระบุ CPU bottlenecks
2. ระบุ memory bottlenecks
3. ระบุ I/O bottlenecks
4. ระบุ network bottlenecks

### 6. Run Load Tests

1. ทำ `/test-load` เพื่อทดสอบภายใต้ load
2. ตรวจสอบ response times ภายใต้ load
3. ตรวจสอบ error rates ภายใต้ load
4. ตรวจสอบ resource usage ภายใต้ load

## Rules

### 1. Scalability Principles

- Stateless สำหรับ horizontal scaling
- Caching สำหรับ reduce load
- Asynchronous สำหรับ non-blocking
- Partitioning สำหรับ distribute load

### 2. Database Scalability

- ใช้ read replicas สำหรับ read-heavy workloads
- ใช้ sharding สำหรับ write-heavy workloads
- ใช้ connection pooling
- ใช้ indexing อย่างเหมาะสม

### 3. Caching Strategy

- Cache ที่ expensive operations
- Cache ที่ frequently accessed data
- Invalidate cache อย่างถูกต้อง
- ใช้ distributed caching สำหรับ scale

### 4. Priority Levels

- Critical: ไม่สามารถ scale ได้
- High: scale ได้แต่มี bottlenecks รุนแรง
- Medium: scale ได้แต่มี bottlenecks เล็กน้อย
- Low: เป็น optimizations

## Expected Outcome

- Horizontal scalability พร้อม
- Vertical scalability พร้อม
- Database scalability พร้อม
- Cache strategy มีประสิทธิภาพ
- Bottlenecks ถูกระบุ
- Load tests ผ่าน

