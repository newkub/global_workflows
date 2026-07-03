---
title: Follow DDD
description: Implement Domain-Driven Design สำหรับโปรเจกต์ที่มี business logic ซับซ้อนมาก
auto_execution_mode: 3
---

## Goal

Implement Domain-Driven Design สำหรับโปรเจกต์ที่มี business logic ซับซ้อนมาก (Functional style)

## Execute

### 1. Identify Bounded Contexts

1. วิเคราะห์ business domain
2. ระบุ bounded contexts ทั้งหมด
3. กำหนด boundaries ระหว่าง contexts
4. ระบุ relationships ระหว่าง contexts
5. กำหนด context mapping

### 2. Create Context Structure

```
src/
├── bounded-contexts/  // domain boundaries
│   ├── sales/         // sales context
│   │   ├── domain/     // domain model
│   │   │   ├── entities/      // domain entities
│   │   │   ├── value-objects/ // value objects
│   │   │   ├── aggregates/    // aggregate roots
│   │   │   ├── services/ (optional) // domain services
│   │   │   ├── factories/ (optional) // entity factories
│   │   │   ├── specs/ (optional)    // specifications
│   │   │   └── events/        // domain events
│   │   ├── application/ // application layer
│   │   │   ├── services/      // use case implementations
│   │   │   ├── interfaces/    // application interfaces
│   │   │   └── queries/       // read models (CQRS)
│   │   └── infrastructure/ // infrastructure
│   │       └── repositories/ // data access
│   └── inventory/    // inventory context
└── shared/            // shared kernel
    └── kernel/       // shared domain logic
```

### 3. Build Domain Model

1. สร้าง folder structure ตาม bounded contexts
2. สร้าง domain model ตาม DDD principles
3. สร้าง application layer และ infrastructure layer
4. ตรวจสอบ domain model ว่าสะท้อน business logic ได้ถูกต้อง
5. ทำตาม `/refactor-workspace` หลังจากเสร็จ

## Rules

### 1. Bounded Contexts

ใช้สำหรับโปรเจกต์ที่มี business logic ซับซ้อนมาก (Functional style)

- แยกตาม bounded contexts
- Domain types มี identity และ lifecycle (data + functions)
- Value types คือ immutable data structures
- Aggregates รวม data structures ที่เกี่ยวข้องกัน
- Domain events สำหรับ cross-context communication
- ใช้ pure functions สำหรับ business logic

### 2. Domain Layer

- entities มี identity เป็นเอกลักษณ์
- value-objects เป็น immutable และไม่มี identity
- aggregates เป็น root ที่รวม entities อื่นๆ
- domain services สำหรับ business logic ที่ไม่ fit ใน entity/aggregate
- factories สำหรับสร้าง complex aggregates
- specifications สำหรับ business rules ที่ซับซ้อน
- domain events สำหรับ cross-context communication

### 3. Application Layer

- services สำหรับ use case implementations
- interfaces สำหรับ application interfaces
- queries สำหรับ read models (CQRS)
- orchestrate business logic จาก domain layer

### 4. Infrastructure Layer

- repositories สำหรับ data access
- implement interfaces จาก application layer
- handle external dependencies

### 5. Shared Kernel

- shared domain logic ระหว่าง contexts
- shared types ที่ใช้ร่วมกัน
- ระมัดรัวในการ share เพื่อ avoid coupling

## Expected Outcome

- Bounded contexts แยกชัดเจน
- Domain model สะท้อน business logic ได้ถูกต้อง
- Aggregates และ consistency boundaries ชัดเจน
- Domain events สำหรับ cross-context communication
- Code สามารถ test และ maintain ได้ง่าย

