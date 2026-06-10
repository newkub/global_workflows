title: Follow Effect Ts
description: แนวทางการพัฒนาโปรเจกต์ด้วย Effect-TS สำหรับ functional programming, type-safe effects และ structured concurrency
auto_execution_mode: 3
## Purpose

กำหนดมาตรฐานการพัฒนาด้วย Effect-TS สำหรับ functional programming ที่มี type safety และ error handling ที่ดี

## Scope

- ตั้งค่า TypeScript config สำหรับ Effect
- ติดตั้ง Effect libraries
- จัดโครงสร้างโปรเจกต์ตาม Effect patterns
- ใช้ phantom types, ADT และ lazy execution

## Inputs

| Input | Details |
|-------|-----------|
| Package Manager | Bun |
| Language | TypeScript |
| Libraries | effect, @effect/schema |

## Rules

| Category | Requirements |
|------|---------|
| **TS Config** | strict mode, noUncheckedIndexedAccess, exactOptionalPropertyTypes |
| **Libraries** | effect, @effect/schema |
| **Structure** | domain/, services/, app/, adapters/, types/, utils/ |
| **Effects** | ใช้ phantom types, ADT, lazy execution |
| **Imports** | domain ไม่ import services, types/utils ไม่มี internal dependencies |

## Structure

### Directory Structure

```text
project/
├── src/
│   ├── app/              # Composition root / orchestration
│   ├── domain/           # Pure business rules (types + logic)
│   ├── services/         # Side effects (http/db/fs)
│   ├── adapters/         # Wrappers for external libs
│   ├── config/           # Runtime config parsing/validation
│   ├── types/            # Shared types/schemas
│   ├── utils/            # Pure helpers
│   └── index.ts
└── tsconfig.json
```

### Phase Definitions

| Phase | Description | Main Activities |
|-------|-------------|---------------|
| Setup | ตั้งค่า TS | Config strict mode |
| Install | ติดตั้ง | Add effect packages |
| Structure | สร้างโครงสร้าง | domain/, services/, etc. |
| Implement | เขียน code | Follow Effect patterns |

## Steps

### Phase 0: Precondition

- 0.1 **ตรวจสอบ Environment**
  - มี Bun ติดตั้งแล้ว
  - มี `package.json` อยู่แล้ว

### Phase 1: Setup

- 1.1 **กำหนดค่า tsconfig.json**
  - แก้ไข `tsconfig.json`:

```json [tsconfig.json]
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### Phase 2: Install

- 2.1 **ติดตั้ง Effect**
  - รัน `bun add effect`
  - รัน `bun add @effect/schema`

### Phase 3: Structure

- 3.1 **สร้างโครงสร้างโฟลเดอร์**
  - สร้าง `src/app/`
  - สร้าง `src/domain/`
  - สร้าง `src/services/`
  - สร้าง `src/adapters/`
  - สร้าง `src/config/`
  - สร้าง `src/types/`
  - สร้าง `src/utils/`

### Phase 4: Implement

- 4.1 **Domain Layer**
  - สร้าง types และ pure functions ใน `src/domain/`:

```ts [src/domain/user.ts]
export type User = {
  id: string
  email: string
}

export const isCorporate = (user: User) => user.email.endsWith('@company.com')
```

- 4.2 **Services Layer**
  - สร้าง side effects ใน `src/services/`:

```ts [src/services/health.ts]
import { Effect } from 'effect'

export const fetchHealth = Effect.tryPromise({
  try: async () => 'ok',
  catch: (e) => new Error(String(e)),
})
```

- 4.3 **App Layer**
  - สร้าง orchestration ใน `src/app/`:

```ts [src/app/program.ts]
import { Effect } from 'effect'
import { fetchHealth } from '../services/health'

export const program = Effect.gen(function* (_) {
  const health = yield* _(fetchHealth)
  return { health }
})
```

- 4.4 **Import Rules**
  - `app` <-- domain, services, types, config
  - `domain` <-- types, utils
  - `services` <-- types, config, adapters
  - `adapters` <-- (external libs only)
  - `types` <-- (no internal dependencies)
  - `utils` <-- (no internal dependencies)

## Outputs

| Output | Details |
|--------|-----------|
| tsconfig.json | Strict TypeScript config |
| src/domain/ | Pure business logic |
| src/services/ | Side effects |
| src/app/ | Orchestration |

## Expected Outcome

- TypeScript config กำหนด strict mode
- Effect libraries ติดตั้งสำเร็จ
- โครงสร้างโปรเจกต์ตาม best practices
- Import dependencies ถูกต้องตามกฎ

## Reference

- `/validate` - ตรวจสอบความถูกต้องก่อนเริ่ม
- `/connect-workflows` - เชื่อมโยง workflows

