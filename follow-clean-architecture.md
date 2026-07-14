---
title: Follow Clean Architecture
description: Ultra Minimal Clean Architecture - Production-Ready Guidelines for Teams
auto_execution_mode: 3
related:
  - /follow-functional-programming
  - /follow-functional-core-imperative-shell
  - /follow-event-driven
  - /follow-layered-architecture
  - /follow-validation
  - /follow-orm
  - /refactor-modules
  - /write-test
  - /follow-code-quality
---

## Goal

Implement Functional Clean Architecture ด้วย Vertical Slice Architecture สำหรับ production-grade applications

## Scope

ใช้สำหรับ projects ที่ต้องการ testability สูง และ maintainability ระยะยาว

## Execute

### 1. Setup Project Structure

ทำ `/follow-config` เพื่อตั้งค่า `src/` ตาม Clean Architecture:

```
src/
├── modules/                      # Feature modules (Vertical Slice)
│   └── [module-name]/            # e.g., booking, payment, user
│       ├── types/                # Domain type definitions
│       ├── schemas/              # Input/output Zod schemas
│       ├── domain/               # Pure business logic (no deps)
│       │   ├── models/           # Readonly data models
│       │   ├── operations/       # Pure business functions
│       │   ├── validators/       # Domain validation
│       │   ├── policies/         # Reusable business policies
│       │   └── events/           # Domain event types (no handlers)
│       ├── application/          # Orchestration layer
│       │   ├── usecases/         # Flow orchestration (write side)
│       │   ├── queries/          # Read-side queries (CQRS read)
│       │   ├── workflows/        # Complex multi-step workflows
│       │   └── handlers/         # Domain event handlers
│       ├── ports/                # Module-specific interfaces
│       └── index.ts              # Public API exports
├── adapters/                     # External systems integration
│   ├── db/                       # Database implementations
│   ├── http/                     # HTTP clients
│   ├── external/                 # External services
│   ├── config/                   # Configuration management
│   ├── cache/                    # Cache implementations (Redis, in-memory)
│   ├── queue/                    # Message queue adapters (RabbitMQ, SQS, BullMQ)
│   ├── storage/                  # File/object storage (S3, local filesystem)
│   └── auth/                     # Authentication adapters (OAuth, JWT, session)
├── presentation/                 # Entry points
│   ├── http/                     # HTTP handlers and routes
│   ├── graphql/                  # GraphQL resolvers
│   ├── grpc/                     # gRPC handlers
│   ├── cli/                      # CLI commands
│   └── events/                   # Event handlers
├── shared/                       # Shared kernel
│   ├── types/                    # Common types (Result, Option, Either)
│   ├── utils/                    # Pure utility functions
│   ├── errors/                   # Error types
│   ├── constants/                # Static constants
│   ├── ports/                    # Cross-module shared interfaces (LoggerPort, ClockPort)
│   └── mappers/                  # Shared mapper functions across modules

test/                             # Mirror src structure
├── fixtures/                     # Shared test data and mocks
├── helpers/                      # Test utilities and setup
├── mocks/                        # Mock implementations of ports
└── modules/                      # Mirror src/modules

// distributed/ - Plugin layer (optional)
// ONLY create when you need: distributed systems, saga, cross-module orchestration
```

### 2. Create Shared Kernel

ทำ `/follow-functional-programming` เพื่อสร้าง `shared/`:

- `types/` - Common types (`Result`, `Option`)
- `utils/` - Pure utility functions
- `errors/` - Error types
- `constants/` - Constants
- `ports/` - Cross-module shared interfaces (`LoggerPort`, `ClockPort`, `IdGeneratorPort`)
- `mappers/` - Shared mapper functions across modules

### 3. Implement Functional Core

ทำ `/follow-functional-core-imperative-shell` เพื่อเขียน business logic ใน `modules/*/domain/`:

- ใช้ `pure functions` เท่านั้น
- Immutable data structures (`readonly`)
- ไม่มี side effects
- ไม่พึ่ง infrastructure
- ทำ `/follow-validation` เพื่อกำหนด validation strategy ข้าม layers
- ทำ `/deep-review` เพื่อใช้ patterns ที่เหมาะสมกับ functional core

### 4. Implement Application Layer

ทำ `/follow-event-driven` เพื่อสร้าง orchestration layer ใน `modules/*/application/`:

- `usecases/` - Flow orchestration (write side)
- `queries/` - Read-side queries (CQRS read)
- `workflows/` - Complex multi-step workflows
- `handlers/` - Domain event handlers
- ใช้ `ports` สำหรับ side effects

### 5. Implement Adapters

ทำ `/follow-layered-architecture` เพื่อสร้าง adapters layer:

- `adapters/db/` - Database implementations — ทำ `/follow-orm` สำหรับ repository ports และ ORM adapters
- `adapters/http/` - HTTP clients
- `adapters/external/` - External service adapters
- `adapters/config/` - Configuration management
- `adapters/cache/` - Cache implementations (Redis, in-memory)
- `adapters/queue/` - Message queue adapters (RabbitMQ, SQS, BullMQ)
- `adapters/storage/` - File/object storage (S3, local filesystem)
- `adapters/auth/` - Authentication adapters (OAuth, JWT, session)

### 6. Implement Presentation Layer

ทำ `/follow-layered-architecture` เพื่อสร้าง presentation layer:

- `presentation/http/` - HTTP handlers and routes
- `presentation/graphql/` - GraphQL resolvers
- `presentation/grpc/` - gRPC handlers
- `presentation/cli/` - CLI commands
- `presentation/events/` - Event handlers

### 7. Refactor Existing Code

ถ้า project มี existing code ให้ทำ `/refactor` เพื่อย้าย code ไปยัง structure ใหม่:

1. ย้าย business logic ไป `modules/*/domain/operations/`
2. ย้าย data models ไป `modules/*/domain/models/` เป็น `readonly` types
3. ย้าย repository implementations ไป `adapters/db/` เป็น functions
4. ย้าย HTTP handlers ไป `presentation/http/`
5. ย้าย CLI commands ไป `presentation/cli/`
6. แยก domain events ไป `modules/*/domain/events/`
7. สร้าง application functions ใน `modules/*/application/usecases/`
8. สร้าง module ports ใน `modules/*/ports/`
9. แปลง class methods เป็น `pure functions`

### 8. Testing Strategy

ทำ `/write-test` เพื่อจัดการ tests ตาม Clean Architecture:

- Unit tests - Pure function tests ใน `test/modules/*/domain/` (AAA pattern)
- Integration tests - Adapter tests ใน `test/adapters/` (mock ports)
- E2E tests - Full workflow tests ใน `test/e2e/` (critical flows)
- Test fixtures - Shared test data ใน `test/fixtures/` (factories)
- Test helpers - Test utilities ใน `test/helpers/` (setup/teardown)

### 9. Split Modules When Too Large

ถ้า module โตเกินเกณฑ์ ให้ทำ `/refactor-modules`:

1. วัด module size: ไฟล์เกิน 15, `domain/operations/` เกิน 300 บรรทัด, `application/usecases/` เกิน 5 usecases, `index.ts` export เกิน 20 symbols
2. ระบุ domain boundaries โดยจัดกลุ่ม operations ที่เกี่ยวข้องเป็น cluster
3. เลือก pattern: **sub-module** (ยังเกี่ยวข้อง parent), **sibling module** (อิสระ), **shared module** (ใช้ร่วม)
4. แต่ละ sub-module ต้องเขียน responsibility ได้ในประโยคเดียว (SRP)
5. สร้าง sub-module directories ตาม Clean Architecture structure
6. ทำ `/edit-relative` เพื่ออัปเดท imports
7. ทำ `/run-test` เพื่อยืนยัน functionality ไม่พัง

## Rules

### 1. Core Rules

Clean Architecture มี 3 rules หลัก:

- `Domain` = business rules (100% pure)
- `Application` = orchestration + "what happens next" decisions
- `Adapters` = side effects only

### 2. Folder Structure

| Folder | Purpose | Style | Side Effects | Required | Naming Convention |
|--------|---------|-------|--------------|----------|------------------|
| `modules/*/types/` | Domain type definitions | Pure FP | None | Required | PascalCase types |
| `modules/*/schemas/` | Input/output Zod schemas | Pure FP | None | Required | camelCase schemas |
| `modules/*/domain/` | Pure business logic | Pure FP | None | Required | camelCase functions |
| `modules/*/domain/policies/` | Reusable business policies | Pure FP | None | Optional | camelCase functions |
| `modules/*/application/` | Orchestration layer | FP | Via ports | Required | useCase, query, workflow |
| `modules/*/application/queries/` | Read-side queries (CQRS) | FP | Via ports | Optional | camelCase functions |
| `modules/*/application/handlers/` | Domain event handlers | FP | Via ports | Optional | camelCase functions |
| `modules/*/ports/` | Module-specific interfaces | FP | None | Required | I*Port interfaces |
| `adapters/` | External systems integration | FP | I/O only | Required | kebab-case files |
| `adapters/cache/` | Cache implementations | FP | I/O only | Optional | kebab-case files |
| `adapters/queue/` | Message queue adapters | FP | I/O only | Optional | kebab-case files |
| `adapters/storage/` | File/object storage | FP | I/O only | Optional | kebab-case files |
| `adapters/auth/` | Authentication adapters | FP | I/O only | Optional | kebab-case files |
| `presentation/` | Entry points | Functional Core/Imperative Shell | I/O only | Required | kebab-case files |
| `presentation/graphql/` | GraphQL resolvers | Functional Core/Imperative Shell | I/O only | Optional | camelCase resolvers |
| `presentation/grpc/` | gRPC handlers | Functional Core/Imperative Shell | I/O only | Optional | camelCase handlers |
| `shared/` | Common utilities | Pure FP | None | Required | camelCase functions |
| `shared/ports/` | Cross-module shared interfaces | Pure FP | None | Optional | I*Port interfaces |
| `shared/mappers/` | Shared mapper functions | Pure FP | None | Optional | camelCase functions |
| `distributed/` | Cross-module orchestration | FP (Event-Driven) | I/O only | Optional | saga, sagaId |

### 3. Layer Responsibilities

| Layer | Purpose | Dependencies | Side Effects |
|-------|---------|--------------|--------------|
| Domain | Business rules | None | None |
| Application | Orchestration | Domain | Via ports |
| Adapters | Side effects | Ports | I/O only |
| Presentation | Entry points | Application | I/O only |
| Shared | Common utilities | None | None |

### 4. When To Use

เหมาะกับ:

- ต้องการ testability สูง
- ต้องการเปลี่ยน technology ได้ง่าย
- ทีมขนาดกลาง-ใหญ่ (3+ developers)

ไม่เหมาะกับ:

- CRUD ธรรมดาไม่มี business logic
- Prototype/MVP ต้องความเร็ว
- One-person project ระยะสั้น

### 5. Module Splitting

- ผ่าน 2+ triggers = ควร split
- ไม่ split module ที่ < 5 ไฟล์ (`over-engineering`)
- แต่ละ sub-module ควรมี 3-10 ไฟล์
- ไม่ split ถ้าทำให้เกิด `circular dependency`
- ไม่ split ใน prototype/MVP phase
- sub-module ที่ได้ต้องเขียน responsibility ได้ในประโยคเดียว (SRP)

## Expected Outcome

- Functional Clean Architecture ที่ production-ready และ enterprise-grade
- Pure domain logic ใน `modules/` (100% functional)
- Clear application orchestration สำหรับ "What happens next" decisions
- Architecture drift prevention ด้วย clear decision boundaries
- Side effects isolation จำกัดใน `adapters/` layer เท่านั้น
- Production-grade testability จาก pure functions + clear boundaries
- Developer-friendly ด้วย fast onboarding + minimal complexity
