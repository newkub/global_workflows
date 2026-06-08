---
title: Setup Tasks
description: Setup package.json or Cargo.toml scripts following standardized templates
auto_execution_mode: 3
---

## Goal

ตั้งค่า scripts ใน `package.json` หรือ `Cargo.toml` ตามมาตรฐานที่กำหนด รองรับทั้ง Minimal, Standard และ Complete levels

## Scope

ครอบคลุมการตั้งค่า scripts สำหรับ package managers: Bun, npm, pnpm, yarn, Cargo, Python, และ Go

## Execute

### 1. Check Prerequisites

1. ตรวจสอบว่ามี `package.json` หรือ `Cargo.toml`
2. ตรวจสอบว่าเป็น monorepo หรือไม่:
   - มีหลาย `package.json` ใน subdirectories
   - มี workspace config (moonrepo/turborepo)
   - มี git submodules
3. ถ้าเป็น monorepo ให้ทำ `/follow-monorepo` ก่อน
4. ยืนยันว่า tools จำเป็นติดตั้งแล้ว:
   - Node.js/Bun: `biome`, `vitest`
   - Rust: `cargo-nextest`, `cargo-llvm-cov` (สำหรับ coverage)
   - Python: `pytest`, `ruff`
   - Go: `go test`, `golangci-lint`

### 2. Prepare Dependency Updates

1. ตรวจสอบ package manager ที่ใช้ (`bun`, `npm`, `pnpm`, `yarn`, `cargo`, `pip`, `go`)
2. ทำ `/setup-tasks` เพื่อ update dependencies ตาม ecosystem:
   - Node.js/Bun: ใช้ `taze` สำหรับ update dependencies
   - Rust: ใช้ `cargo update` และ `cargo outdated`
   - Python: ใช้ `pip install -U` และ `pip list --outdated`
   - Go: ใช้ `go get -u ./...` และ `go mod tidy`

### 3. Select Template Level

1. ประเมินขนาดและความซับซ้อนของโปรเจกต์
2. เลือกระดับตามความเหมาะสม:
   - **Minimal** (Default): โปรเจกต์ส่วนใหญ่
   - **Standard**: ต้องการ testing และ dependency management เพิ่มเติม
   - **Complete**: เฉพาะ infra/tooling team

### 4. Apply Scripts Template

ทำ `/use-scripts` เพื่อ apply scripts ตาม tech stack ที่ detect ได้จากตารางใน Rules

#### 4.1 Single Workspace

สำหรับโปรเจกต์เดี่ยว ให้แก้ไข `package.json` หรือ `Cargo.toml` โดยตรง:

ตัวอย่าง `package.json` (Minimal):

```json
{
  "scripts": {
    "dev": "bun run src/index.ts",
    "build": "bun build",
    "typecheck": "tsgo --noEmit",
    "lint": "biome check",
    "format": "biome check --write",
    "test": "vitest run",
    "scan": "ast-grep scan",
    "verify": "bun run lint && bun run typecheck && bun run test",
    "ci": "bun run verify && bun run build"
  }
}
```

#### 4.2 Multiple Workspaces

สำหรับ monorepo หรือหลาย workspace:

1. ทำ `/follow-monorepo` เพื่อ setup monorepo structure
2. ใช้ `/use-bun-scripts` เพื่อ analyze และ setup scripts ทีเดียว:
   - สร้าง script ใน `.windsurf/scripts/setup-package-scripts.ts` ที่ root workspace
   - Analyze แต่ละ workspace จาก `package.json`, `Cargo.toml`, `requirements.txt`, `go.mod`
   - Detect tech stack จาก dependencies และ config files
   - Apply scripts ตาม tech stack ที่ detect ได้จากตารางใน Rules
   - ประมวลผลทุก workspace พร้อมกัน
   - ลบ script หลังใช้งาน

ตัวอย่าง script template:

```typescript
#!/usr/bin/env bun

import { z } from "https://esm.sh/zod"

interface SetupOptions {
  level: "minimal" | "standard" | "complete"
}

const TechStackSchema = z.enum([
  "bun", "nuxt", "nextjs", "vite-tanstack",
  "rust", "python", "go"
])

type TechStack = z.infer<typeof TechStackSchema>

function detectTechStack(manifestPath: string): TechStack | null {
  // Detect from package.json, Cargo.toml, etc.
  // Return tech stack type
  return null
}

function getScriptsForStack(stack: TechStack, level: SetupOptions["level"]) {
  // Return scripts from tables in Rules section
  return {}
}

function createSetupScript(options: SetupOptions) {
  const results: { path: string; stack: TechStack }[] = []

  async function run() {
    // Find all package.json, Cargo.toml, requirements.txt, go.mod
    const manifests = new Bun.Glob("**/{package.json,Cargo.toml,requirements.txt,go.mod}").scan()
    
    for await (const manifest of manifests) {
      const stack = detectTechStack(manifest)
      if (stack) {
        const scripts = getScriptsForStack(stack, options.level)
        // Apply scripts to manifest
        results.push({ path: manifest, stack })
      }
    }
  }

  return { run, results }
}

const script = createSetupScript({ level: "minimal" })
await script.run()
console.log(`Processed ${script.results.length} workspaces`)
```

### 5. Setup Config Files

ทำ `/setup-config` เพื่อตั้งค่า config files ตาม tech stack ที่ detect ได้:

1. ตรวจสอบ dependencies และ config files ใน project
2. เช็คใน global workflows และ skills ว่ามีอะไรให้ทำตามบ้าง
3. รันเฉพาะที่จำเป็นตาม tech stack ที่ใช้
4. ไม่รันทุก workflow ให้เหมือนกันหมด

### 6. Validate Scripts

1. ตรวจสอบว่า scripts ถูกต้องตาม syntax
2. ยืนยันว่า commands ทำงานได้จริง
3. ทดสอบรัน `bun run verify` เบื้องต้น

## Rules

### 1. Template Selection

เลือกระดับ template ตามขนาดและความซับซ้อนของโปรเจกต์

### 2. Scripts Levels

เลือกระดับ scripts ตามขนาดโปรเจกต์:
- **Minimal (Default)**: dev, build, typecheck, lint, format, test, scan, verify, ci
- **Standard**: Minimal + test:watch, test:coverage, deps:analyze, clean, security
- **Complete**: Standard + prepare, build:watch, typecheck:watch, test:integration, test:e2e, bench, prerelease, release, deadcode, docs, size, perf

### 3. Core Scripts

เรียงตามลำดับการใช้งานและ pipeline

| Task | Bun | Nuxt | Next.js | Vite-TanStack | Rust | Python | Go | Level | Required |
|------|-----|------|---------|--------------|------|--------|----|-------|----------|
| dev | bun run src/index.ts | nuxt dev | next dev | vite | cargo run | python -m src | go run . | Minimal | - |
| build | bun build | nuxt build | next build | vite build | cargo build | python -m build | go build . | Minimal | - |
| typecheck | tsgo --noEmit | nuxt typecheck | tsc --noEmit | tsgo --noEmit | cargo check | mypy src | go vet ./... | Minimal | - |
| lint | biome check | biome check | biome check | biome check | cargo clippy | ruff check | golangci-lint run | Minimal | biome, clippy, ruff, golangci-lint |
| format | biome check --write | biome check --write | biome check --write | biome check --write | cargo fmt | ruff format | gofmt -w . | Minimal | biome, cargo fmt, ruff, gofmt |
| test | vitest run | vitest run | vitest run | vitest run | cargo nextest run | pytest | go test ./... | Minimal | vitest, cargo-nextest, pytest |
| scan | ast-grep scan | ast-grep scan | ast-grep scan | ast-grep scan | cargo clippy --all-targets | ruff check | golangci-lint run | Minimal | ast-grep, clippy, ruff, golangci-lint |
| verify | lint && typecheck && test | lint && typecheck && test | lint && typecheck && test | lint && typecheck && test | cargo clippy && cargo check && cargo nextest run | ruff check && mypy && pytest | golangci-lint run && go vet && go test | Minimal | - |
| ci | verify && build | verify && build | verify && build | verify && build | verify && build | verify && build | verify && build | Minimal | - |

### 4. Watch Mode Scripts

| Task | Bun | Nuxt | Next.js | Vite-TanStack | Rust | Python | Go | Level | Required |
|------|-----|------|---------|--------------|------|--------|----|-------|----------|
| build:watch | bun build --watch | nuxt build --watch | next build --watch | vite build --watch | cargo build --watch | - | - | Complete | cargo watch |
| typecheck:watch | tsgo --noEmit --watch | nuxt typecheck --watch | tsc --noEmit --watch | tsgo --noEmit --watch | cargo watch -x check | - | - | Complete | cargo watch |
| test:watch | vitest | vitest | vitest | vitest | cargo nextest run --watch | pytest-watch | go test ./... -watch | Standard | vitest, cargo-nextest, pytest-watch |

### 5. Testing Scripts

| Task | Bun | Nuxt | Next.js | Vite-TanStack | Rust | Python | Go | Level | Required |
|------|-----|------|---------|--------------|------|--------|----|-------|----------|
| test:coverage | vitest run --coverage | vitest run --coverage | vitest run --coverage | vitest run --coverage | cargo llvm-cov --html | pytest --cov | go test -coverprofile=coverage.out | Standard | vitest, cargo-llvm-cov, pytest-cov |
| test:integration | vitest run --config vitest.integration.config.ts | vitest run --config vitest.integration.config.ts | vitest run --config vitest.integration.config.ts | cargo nextest run --test-dir integration | pytest tests/integration | go test ./tests/integration | Complete | - |
| test:e2e | vitest run --config vitest.e2e.config.ts | vitest run --config vitest.e2e.config.ts | vitest run --config vitest.e2e.config.ts | cargo nextest run --test-dir e2e | pytest tests/e2e | go test ./tests/e2e | Complete | - |

### 6. Dependency Management Scripts

| Task | Bun | Nuxt | Next.js | Vite-TanStack | Rust | Python | Go | Level | Required |
|------|-----|------|---------|--------------|------|--------|----|-------|----------|
| deps:analyze | bunx depcheck | bunx depcheck | bunx depcheck | bunx depcheck | cargo outdated | pip-audit | go mod verify | Standard | depcheck, cargo-outdated, pip-audit |
| deps:update | taze -r -w | taze -r -w | taze -r -w | taze -r -w | cargo update | pip install -U -r requirements.txt | go get -u ./... && go mod tidy | Standard | taze, cargo |
| clean | bunx rimraf node_modules | bunx rimraf node_modules | bunx rimraf node_modules | bunx rimraf node_modules | cargo clean | rm -rf .venv __pycache__ | go clean -modcache | Standard | rimraf, cargo |
| prepare | bunx taze -r -w -i && bunx lefthook install | bunx taze -r -w -i && bunx lefthook install | bunx taze -r -w -i && bunx lefthook install | bunx taze -r -w -i && bunx lefthook install | cargo update && bunx lefthook install | pip install -U -r requirements.txt && pre-commit install | go mod download && go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest | Complete | taze, lefthook, pre-commit |

### 7. Release Scripts

| Task | Bun | Nuxt | Next.js | Vite-TanStack | Rust | Python | Go | Level | Required |
|------|-----|------|---------|--------------|------|--------|----|-------|----------|
| bench | bunx mitata | bunx mitata | bunx mitata | bunx mitata | cargo bench | pytest-benchmark | go test -bench=. | Complete | mitata, pytest-benchmark |
| prerelease | bun run build | bun run build | bun run build | bun run build | cargo build | python -m build | go build . | Complete | - |
| release | auto-it | auto-it | auto-it | auto-it | cargo release | python -m build && twine upload | go release | Complete | auto-it, cargo-release, twine |

### 8. Security Scripts

| Task | Bun | Nuxt | Next.js | Vite-TanStack | Rust | Python | Go | Level | Required |
|------|-----|------|---------|--------------|------|--------|----|-------|----------|
| security | bunx audit | bunx audit | bunx audit | bunx audit | cargo audit | pip-audit | go mod verify | Standard | bunx audit, cargo-audit, pip-audit |
| license | bunx license-checker | bunx license-checker | bunx license-checker | bunx license-checker | cargo deny check licenses | pip-licenses | go-licenses check | Complete | license-checker, cargo-deny, pip-licenses, go-licenses |

### 9. Code Quality Scripts

| Task | Bun | Nuxt | Next.js | Vite-TanStack | Rust | Python | Go | Level | Required |
|------|-----|------|---------|--------------|------|--------|----|-------|----------|
| deadcode | bunx knip | bunx knip | bunx knip | bunx knip | cargo-udeps | vulture | deadcode | Standard | knip, cargo-udeps, vulture, deadcode |
| docs | vitepress dev | vitepress dev | vitepress dev | vitepress dev | mdbook serve | mkdocs serve | godoc | Standard | vitepress, mdbook, mkdocs |

### 10. Performance Scripts

| Task | Bun | Nuxt | Next.js | Vite-TanStack | Rust | Python | Go | Level | Required |
|------|-----|------|---------|--------------|------|--------|----|-------|----------|
| size | bunx bundlesize | bunx bundlesize | bunx bundlesize | bunx bundlesize | cargo bloat | py-sizer | go test -benchmem | Complete | bundlesize, cargo-bloat, py-sizer |
| perf | bunx mitata | bunx mitata | bunx mitata | bunx mitata | cargo flamegraph | py-spy | pprof | Complete | mitata, cargo-flamegraph, py-spy, pprof |

### 11. Workspace Detection

ตรวจสอบประเภท workspace ก่อนดำเนินการ:

| Criteria | Single Workspace | Multiple Workspaces |
|----------|------------------|-------------------|
| package.json count | 1 ที่ root | >1 ใน subdirectories |
| moonrepo/turborepo | ไม่มี | มี workspace config |
| git submodules | ไม่มี | มี submodules |
| Action | แก้ไขโดยตรง | ทำ `/follow-monorepo` ก่อน แล้วใช้ `/use-scripts` |

### 12. Monorepo Root-Only Tasks

Tasks เหล่านี้ใช้เฉพาะที่ monorepo root เท่านั้น ไม่วางใน sub-workspaces:

- `deps:update` - อัพเดท dependencies ทุก workspace พร้อมกัน (ใช้ `-i` สำหรับ interactive mode)
- `prepare` - ตั้งค่า pre-commit hooks และ update dependencies
- `clean` - ลบ `node_modules` ทั้งหมดใน monorepo

เหตุผล:
- ป้องกันการ update dependencies ซ้ำซ้อน
- รักษาความสอดคล้องของ versions ทุก workspace
- ลดความสับสนในการจัดการ dependencies

### 13. Verify Pipeline

Verify Pipeline ตามมาตรฐาน `run-verify`:

| Script | Definition | Note |
|--------|------------|------|
| verify | lint && typecheck && test | Fail-fast ordering |
| scan | AST-based pattern search | For structural code analysis |
| ci | verify && build | Build gate |

## Expected Outcome

- `package.json` มี scripts ตาม template ที่เลือก
- Scripts สอดคล้องกับ tech stack ของโปรเจกต์
- Verify pipeline ทำงานได้ถูกต้อง
