---
title: Clean Architecture
description: Ultra Minimal Clean Architecture - Production-Ready Guidelines for Teams
auto_execution_mode: 3
---

## Goal

Implement Functional Clean Architecture ด้วย Vertical Slice Architecture สำหรับ production-grade applications

## Execute

### 1. Setup Project Structure

ทำ `/setup-config` เพื่อตั้งค่า project structure ตาม Clean Architecture:

```
src/
├── modules/                      # Feature modules (Vertical Slice Architecture)
│   └── [module-name]/            # e.g., booking, payment, user
│       ├── types/                # Domain types (type aliases)
│       ├── domain/               # Pure business logic - no dependencies
│       │   ├── models/           # Data models (readonly types)
│       │   ├── operations/       # Pure functions for business logic
│       │   ├── validators/       # Domain validation functions
│       │   └── events/           # Domain event types only (no handlers)
│       ├── application/          # Orchestration layer (pipeline style)
│       │   ├── usecases/         # Flow orchestration
│       │   └── workflows/        # Complex workflows
│       ├── ports/                # Module-specific interfaces
│       └── index.ts              # Public API exports

├── adapters/                     # External systems integration
│   ├── db/                       # Database layer
│   ├── http/                     # HTTP clients
│   ├── external/                 # External services
│   └── config/                   # Configuration management

├── presentation/                 # Entry points
│   ├── http/                     # HTTP handlers and routes
│   ├── cli/                      # CLI commands
│   └── events/                   # Event handlers

├── shared/                       # Shared kernel
│   ├── types/                    # Common types (Result, Option, Either)
│   ├── utils/                    # Pure utility functions
│   ├── errors/                   # Error types
│   └── constants/                # Static constants (compile-time)

test/                             # Test suite (mirror src structure)
├── fixtures/                    # Shared test data and mocks
├── helpers/                     # Test utilities and setup
└── modules/                     # Mirror src/modules structure
    └── [module-name]/
        ├── domain/              # Domain logic tests
        ├── application/         # Use case tests
        └── [other-layers]/      # Other layer tests

// distributed/ - Plugin layer (disabled by default)
// ONLY create when you need: distributed systems, event-driven saga, cross-module orchestration
```

### 2. Create Shared Kernel

ทำ `/follow-functional-programming` เพื่อสร้าง `shared/` สำหรับ common utilities:

- `types/` - Common types (Result, Option)
- `utils/` - Pure utility functions
- `errors/` - Error types
- `constants/` - Constants

### 3. Implement Functional Core

ทำ `/follow-functional-core-imperative-shell` เพื่อเขียน business logic ใน `modules/*/domain/`:

- ใช้ pure functions เท่านั้น
- Immutable data structures (`readonly`)
- ไม่มี side effects
- ไม่พึ่ง infrastructure

### 4. Implement Application Layer

ทำ `/follow-event-driven` เพื่อสร้าง orchestration layer ใน `modules/*/application/`:

- `usecases/` - Flow orchestration
- `workflows/` - Complex multi-step workflows
- ใช้ ports สำหรับ side effects

### 5. Implement Adapters

ทำ `/follow-layered-architecture` เพื่อสร้าง adapters layer:

- `adapters/db/` - Database implementations
- `adapters/http/` - HTTP clients
- `adapters/external/` - External service adapters
- `adapters/config/` - Configuration management

### 6. Implement Presentation Layer

ทำ `/follow-layered-architecture` เพื่อสร้าง presentation layer:

- `presentation/http/` - HTTP handlers and routes
- `presentation/cli/` - CLI commands
- `presentation/events/` - Event handlers

### 7. Refactor Existing Code

ทำ `/refactor` เพื่อย้าย code ไปยัง structure ใหม่:

1. ย้าย business logic จาก adapters/services ไป `modules/*/domain/operations/`
2. ย้าย data models จาก entities/classes ไป `modules/*/domain/models/` เป็น readonly types
3. ย้าย repository implementations ไป `adapters/db/` เป็น functions
4. ย้าย HTTP handlers ไป `presentation/http/`
5. ย้าย CLI commands ไป `presentation/cli/`
6. แยก domain events ไป `modules/*/domain/events/`
7. สร้าง application functions ใน `modules/*/application/usecases/` จาก controllers
8. สร้าง module ports ใน `modules/*/ports/` สำหรับ interface definitions
9. แปลง class methods เป็น pure functions

### 8. Testing Strategy

ทำ `/follow-testing` เพื่อจัดการ tests ตาม layer:

- Unit tests - Pure function tests ใน `test/modules/*/domain/`
- Integration tests - Adapter tests ใน `test/adapters/`
- E2E tests - Full workflow tests ใน `test/e2e/`
- Test fixtures - Shared test data ใน `test/fixtures/`
- Test helpers - Test utilities ใน `test/helpers/`


## Rules

### 1. Core Rules

Clean Architecture มี 3 rules หลัก:

- Domain = business rules (100% pure)
- Application = orchestration + "what happens next" decisions
- Adapters = side effects only

### 2. Folder Structure

| Folder | Purpose | Style | Side Effects |
|--------|---------|-------|--------------|
| `modules/*/types/` | Domain type definitions | Pure FP | None |
| `modules/*/domain/` | Pure business logic | Pure FP | None |
| `modules/*/application/` | Orchestration layer | FP | Via ports |
| `modules/*/ports/` | Module-specific interfaces | FP | None |
| `adapters/` | External systems integration | FP | I/O only |
| `presentation/` | Entry points | Functional Core/Imperative Shell | I/O only |
| `shared/` | Common utilities | Pure FP | None |
| `distributed/` | Cross-module orchestration | FP (Event-Driven) | I/O only |

### 3. Layer Responsibilities

| Layer | Purpose | Dependencies | Side Effects |
|-------|---------|--------------|--------------|
| Domain | Business rules | None | None |
| Application | Orchestration | Domain | Via ports |
| Adapters | Side effects | Ports | I/O only |
| Presentation | Entry points | Application | I/O only |
| Shared | Common utilities | None | None |

### 4. Required Folders

ต้องมีเสมอ:

- `modules/*/types/` - Domain types (type aliases)
- `modules/*/domain/` - Pure business logic
- `modules/*/application/` - Orchestration layer
- `modules/*/ports/` - Module-specific interfaces
- `presentation/http/` - HTTP handlers and routes
- `shared/types/` - Common types
- `shared/utils/` - Pure utility functions
- `adapters/db/` - Database layer
- `adapters/config/` - Configuration management

### 5. Optional Folders

เพิ่มตามความจำเป็น:

- `modules/*/domain/events/` - Domain event types
- `presentation/cli/` - CLI commands
- `presentation/events/` - Event handlers
- `adapters/http/` - HTTP clients
- `adapters/external/` - External services
- `shared/errors/` - Error types
- `shared/constants/` - Static constants (compile-time)
- `distributed/` - Cross-module orchestration (event-driven only)

### 6. When To Use

เหมาะกับ:

- ต้องการ testability สูง
- ต้องการเปลี่ยน technology ได้ง่าย
- ทีมขนาดกลาง-ใหญ่ (3+ developers)

ไม่เหมาะกับ:

- CRUD ธรรมดาไม่มี business logic
- Prototype/MVP ต้องความเร็ว
- One-person project ระยะสั้น

## Expected Outcome

- Final Boss Version Functional Clean Architecture - Enterprise-ready จาก startup ถึง large-scale systems
- Pure domain logic อยู่ใน `modules/` (100% functional + math-like core)
- Clear application orchestration - "What happens next" decisions with practical patterns
- Architecture drift prevention - Clear decision boundaries + dependency rules
- Clear port boundaries - Module-specific interfaces only
- Side effects isolation - Limited to adapters layer
- Team governance - Simple rules + clear examples
- Production-grade testability - Pure functions + clear boundaries
- Developer-friendly - Fast onboarding + minimal complexity
