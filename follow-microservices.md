---
title: Follow Microservices
description: พัฒนา distributed systems ด้วย Microservices Architecture สำหรับ scalability และ independence
auto_execution_mode: 3
---

## Goal

กำหนดโครงสร้างโปรเจกต์ด้วย Microservices Architecture สำหรับ distributed systems ที่ต้องการ scalability, independence และ fault tolerance

## Execute

### 1. Analyze Domain Boundaries

1. ระบุ business capabilities และ bounded contexts
2. แยก concerns ตาม domain-driven design
3. ระบุ data ownership ของแต่ละ service
4. ตรวจสอบ coupling ระหว่าง services

### 2. Design Service Boundaries

1. กำหนด service boundaries ชัดเจน
2. ระบุ APIs และ contracts ระหว่าง services
3. กำหนด data isolation strategy
4. ทำ `/architecture` สำหรับแต่ละ service

### 3. Implement API Gateway

1. สร้าง API Gateway สำหรับ routing
2. กำหนด authentication และ authorization
3. ตั้งค่า rate limiting แล load balancing
4. กำหนด request/response transformation

### 4. Implement Service Discovery

1. ติดตั้ง service registry (Consul, Eureka, etcd)
2. ตั้งค่า service registration
3. กำหนด health checks
4. ตรวจสอบ service availability

### 5. Implement Communication

1. เลือก communication pattern: REST, gRPC, message queues
2. ตั้งค่า inter-service communication
3. กำหนด retry logic แล circuit breakers
4. ทำ `/event-drive-architecture` สำหรับ async communication

### 6. Implement Data Isolation

1. กำหนด database per service
2. ตั้งค่า data replication ถ้าจำเป็น
3. กำหนด eventual consistency strategy
4. ตรวจสอบ transaction boundaries

### 7. Validate Architecture

1. ตรวจสอบ service independence
2. ทดสอบ fault tolerance แล resilience
3. ตรวจสอบ scalability
4. ทำ `/refactor` หลังจาก implement เสร็จ

## Rules

### Service Boundaries

- Services ต้อง loosely coupled
- แต่ละ service ต้องมี database ของตัวเอง
- ใช้ domain-driven design สำหรับ boundaries
- หลีกเลี่ยง shared databases

### API Gateway

- API Gateway เป็น single entry point
- จัดการ cross-cutting concerns ที่ gateway
- ใช้ API versioning สำหรับ compatibility
- ตรวจสอบ security ที่ gateway level

### Service Discovery

- Services ต้อง register กับ service registry
- ใช้ health checks สำหรับ monitoring
- ใช้ load balancing สำหรับ distribution
- ตรวจสอบ service availability อัตโนมัติ

### Communication Patterns

- ใช้ synchronous (REST/gRPC) สำหรับ immediate responses
- ใช้ asynchronous (message queues) สำหรับ eventual consistency
- ใช้ circuit breakers สำหรับ fault tolerance
- ใช้ retry logic สำหรับ transient failures

### Directory Structure

ต้องมีการแยก concerns ชัดเจน:

```text
# Example monorepo structure
services/
├── api-gateway/             # API Gateway
│   ├── src/
│   │   ├── routes/         # Route definitions
│   │   ├── middleware/     # Auth, rate limiting
│   │   └── config/         # Gateway config
│   └── package.json
├── user-service/           # User domain
│   ├── src/
│   │   ├── domain/         # Business logic
│   │   ├── application/    # Use cases
│   │   ├── infrastructure/ # DB, external
│   │   └── api/            # Controllers
│   └── package.json
├── order-service/          # Order domain
│   ├── src/
│   │   ├── domain/
│   │   ├── application/
│   │   ├── infrastructure/
│   │   └── api/
│   └── package.json
└── shared/
    ├── types/              # Shared types
    ├── utils/              # Shared utilities
    └── events/             # Event schemas
```

### Data Isolation

- แต่ละ service ต้องมี database ของตัวเอง
- ใช้ eventual consistency สำหรับ cross-service transactions
- ใช้ sagas สำหรับ long-running transactions
- หลีกเลี่ยง distributed transactions ที่ซับซ้อน

### Deployment

- Deploy services อิสระกัน
- ใช้ containerization (Docker)
- ใช้ orchestration (Kubernetes)
- ใช้ CI/CD pipelines สำหรับ automation

### Language Support

- รองรับ: TypeScript, Python, Rust, Go, Java, C#
- Services สามารถใช้ภาษาต่างกันได้
- ปรับ deployment strategy ตามภาษา

## Expected Outcome

- Microservices Architecture ที่ loosely coupled
- Services ที่ independent แล scalable
- API Gateway สำหรับ unified entry point
- Communication ที่ reliable แล fault-tolerant
- Data isolation ที่ชัดเจน

