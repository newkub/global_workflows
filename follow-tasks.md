---
title: Follow Tasks
description: ตั้งค่า scripts ใน package.json หรือ Cargo.toml ตามมาตรฐาน
auto_execution_mode: 3
related_workflows:
  - /follow-monorepo
  - /follow-config
  - /follow-taze
  - /follow-tsgo
  - /use-scripts
---

## Goal

ตั้งค่า scripts ใน `package.json` หรือ `Cargo.toml` ตามมาตรฐาน Minimal, Standard, Complete

## Scope

ตั้งค่า scripts สำหรับ packages และ workspaces ใน monorepo

## Execute

### 1. Check Prerequisites

- ตรวจสอบ `package.json` หรือ `Cargo.toml`
- ตรวจสอบ monorepo (หลาย `package.json`, workspace config, git submodules)
- ถ้าเป็น monorepo ทำ `/monorepo` ก่อน
- ยืนยัน tools ติดตั้งแล้ว:
  - Node.js/Bun: `biome`, `vitest`
  - Rust: `cargo-nextest`, `cargo-llvm-cov`
  - Python: `pytest`, `ruff`
  - Go: `go test`, `golangci-lint`

### 2. Update Dependencies

- ตรวจสอบ package manager (`bun`, `npm`, `pnpm`, `yarn`, `cargo`, `pip`, `go`)
- Update ตาม ecosystem:
  - Node.js/Bun: `taze`
  - Rust: `cargo update`, `cargo outdated`
  - Python: `pip install -U`, `pip list --outdated`
  - Go: `go get -u ./...`, `go mod tidy`

### 3. Select Template Level

เลือกระดับตาม Rules section 1

### 4. Apply Scripts

- ทำ `/use-scripts` ตาม tech stack จากตาราง Rules
- Single workspace: แก้ไข `package.json` หรือ `Cargo.toml` โดยตรง
- Multiple workspaces: ทำ `/monorepo` ก่อน แล้วใช้ `/use-bun-scripts`

### 5. Setup Config Files

- ทำ `/config` ตาม tech stack ที่ detect ได้
- ตรวจสอบ dependencies และ config files ใน project
- เช็ค global workflows และ skills ว่ามีอะไรให้ทำตามบ้าง
- รันเฉพาะที่จำเป็น ไม่รันทุก workflow

### 6. Validate

- ตรวจสอบ scripts syntax
- ยืนยัน commands ทำงานได้จริง
- ทดสอบรัน `bun run verify`

## Rules

### 1. Scripts Levels

เลือกระดับตามขนาดและความซับซ้อนของโปรเจกต์
- **Minimal** (Default): dev, build, typecheck, lint, format, test, scan, verify, ci, prepare - เหมาะสำหรับโปรเจกต์ส่วนใหญ่
- **Standard**: Minimal + test:watch, test:coverage, deps:analyze, clean, security, db scripts, predeploy, deploy:staging - เหมาะสำหรับโปรเจกต์ที่ต้องการ testing และ dependency management เพิ่มเติม
- **Complete**: Standard + build:watch, typecheck:watch, test:integration, test:e2e, benchmarks, prerelease, release, db:studio - เหมาะสำหรับ infra/tooling team

### 2. Required Scripts

Scripts พื้นฐานที่ทุกโปรเจกต์ต้องมีเพื่อรับประกันคุณภาพโค้ด:

| Task | Bun | Nuxt | Next.js | Solid Start | SvelteKit | Rust | Python | Go |
|------|-----|------|---------|------------|----------|------|--------|----|
| prepare | bunx taze -r -w -i && bunx lefthook install | bunx taze -r -w -i && bunx lefthook install | bunx taze -r -w -i && bunx lefthook install | bunx taze -r -w -i && bunx lefthook install | bunx taze -r -w -i && bunx lefthook install | cargo update && bunx lefthook install | pip install -U -r requirements.txt && pre-commit install | go mod download && go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest |
| dev | bun run src/index.ts | nuxt dev | next dev | solid-start dev | vite dev | cargo run | python -m src | go run . |
| build | bun build | nuxt build | next build | solid-start build | vite build | cargo build | python -m build | go build . |
| typecheck | tsgo --noEmit | nuxt typecheck | tsgo --noEmit | tsgo --noEmit | svelte-check --tsconfig ./tsconfig.json | cargo check | mypy src | go vet ./... |
| lint | biome check | biome check | biome check | biome check | biome check | cargo clippy | ruff check | golangci-lint run |
| format | biome check --write | biome check --write | biome check --write | biome check --write | biome check --write | cargo fmt | ruff format | gofmt -w . |
| test | vitest run | vitest run | vitest run | vitest run | vitest run | cargo nextest run | pytest | go test ./... |
| scan | ast-grep scan | ast-grep scan | ast-grep scan | ast-grep scan | ast-grep scan | cargo clippy --all-targets | ruff check | golangci-lint run |
| verify | scan && lint && typecheck && test | scan && lint && typecheck && test | scan && lint && typecheck && test | scan && lint && typecheck && test | scan && lint && typecheck && test | cargo clippy && cargo check && cargo nextest run | ruff check && mypy && pytest | golangci-lint run && go vet && go test |
| ci | verify && build | verify && build | verify && build | verify && build | verify && build | verify && build | verify && build | verify && build | verify && build |

### 3. Watch Mode Scripts

Scripts สำหรับ development mode เพื่อเพิ่มประสิทธิภาพการพัฒนา:

| Task | Bun | Nuxt | Next.js | Solid Start | SvelteKit | Rust | Python | Go |
|------|-----|------|---------|------------|----------|------|--------|----|
| test:watch | vitest | vitest | vitest | vitest | vitest | cargo nextest run --watch | pytest-watch | go test ./... -watch |
| typecheck:watch | tsgo --noEmit --watch | nuxt typecheck --watch | tsgo --noEmit --watch | tsgo --noEmit --watch | svelte-check --watch --tsconfig ./tsconfig.json | cargo watch -x check | - | - |
| build:watch | bun build --watch | nuxt build --watch | next build --watch | solid-start build --watch | vite build --watch | cargo build --watch | - | - |

### 4. Testing Scripts

Scripts สำหรับ testing เพิ่มเติมเพื่อครอบคลุมทุกมิติของการทดสอบ:

| Task | Bun | Nuxt | Next.js | Solid Start | SvelteKit | Rust | Python | Go |
|------|-----|------|---------|------------|----------|------|--------|----|
| test:coverage | vitest run --coverage | vitest run --coverage | vitest run --coverage | vitest run --coverage | vitest run --coverage | cargo llvm-cov --html | pytest --cov | go test -coverprofile=coverage.out |
| test:integration | vitest run --config vitest.integration.config.ts | vitest run --config vitest.integration.config.ts | vitest run --config vitest.integration.config.ts | vitest run --config vitest.integration.config.ts | vitest run --config vitest.integration.config.ts | cargo nextest run --test-dir integration | pytest tests/integration | go test ./tests/integration |
| test:e2e | vitest run --config vitest.e2e.config.ts | vitest run --config vitest.e2e.config.ts | vitest run --config vitest.e2e.config.ts | vitest run --config vitest.e2e.config.ts | vitest run --config vitest.e2e.config.ts | cargo nextest run --test-dir e2e | pytest tests/e2e | go test ./tests/e2e |

### 5. Dependency Management Scripts

Scripts สำหรับจัดการ dependencies เพื่อรักษาความปลอดภัยและประสิทธิภาพ:

| Task | Bun | Nuxt | Next.js | Solid Start | SvelteKit | Rust | Python | Go |
|------|-----|------|---------|------------|----------|------|--------|----|
| clean | bunx rimraf node_modules | bunx rimraf node_modules | bunx rimraf node_modules | bunx rimraf node_modules | bunx rimraf node_modules | cargo clean | rm -rf .venv __pycache__ | go clean -modcache |
| deps:analyze | bunx depcheck | bunx depcheck | bunx depcheck | bunx depcheck | bunx depcheck | cargo outdated | pip-audit | go mod verify |
| deps:update | taze -r -w | taze -r -w | taze -r -w | taze -r -w | taze -r -w | cargo update | pip install -U -r requirements.txt | go get -u ./... && go mod tidy |

### 6. Database Scripts

Scripts สำหรับ database operations เพื่อจัดการ schema และข้อมูล:

| Task | Bun | Nuxt | Next.js | Solid Start | SvelteKit | Rust | Python | Go |
|------|-----|------|---------|------------|----------|------|--------|----|
| db:migrate | bunx drizzle-kit push | bunx drizzle-kit push | bunx drizzle-kit push | bunx drizzle-kit push | bunx drizzle-kit push | diesel migration run | alembic upgrade head | go run ./migrate |
| db:seed | bunx drizzle-kit seed | bunx drizzle-kit seed | bunx drizzle-kit seed | bunx drizzle-kit seed | bunx drizzle-kit seed | - | python seed.py | go run ./seed |
| db:studio | bunx drizzle-kit studio | bunx drizzle-kit studio | bunx drizzle-kit studio | bunx drizzle-kit studio | bunx drizzle-kit studio | - | - | - |
| db:generate | bunx drizzle-kit generate | bunx drizzle-kit generate | bunx drizzle-kit generate | bunx drizzle-kit generate | bunx drizzle-kit generate | - | - | - |

### 7. Release Scripts

Scripts สำหรับการ release เพื่อจัดการ versioning และ performance:

| Task | Bun | Nuxt | Next.js | Solid Start | SvelteKit | Rust | Python | Go |
|------|-----|------|---------|------------|----------|------|--------|----|
| prerelease | bun run build | bun run build | bun run build | bun run build | bun run build | cargo build | python -m build | go build . |
| bench:fn | bunx mitata | bunx mitata | bunx mitata | bunx mitata | bunx mitata | cargo bench | pytest-benchmark | go test -bench=. |
| bench:server | bunx autocannon | bunx autocannon | bunx autocannon | bunx autocannon | bunx autocannon | - | - | - |
| bench:memory | bunx clinic | bunx clinic | bunx clinic | bunx clinic | bunx clinic | - | memory_profiler | pprof |
| release | auto-it | auto-it | auto-it | auto-it | auto-it | cargo release | python -m build && twine upload | go release |

### 8. Security Scripts

Scripts สำหรับ security เพื่อตรวจสอบ vulnerabilities และ licenses:

| Task | Bun | Nuxt | Next.js | Solid Start | SvelteKit | Rust | Python | Go |
|------|-----|------|---------|------------|----------|------|--------|----|
| security | bunx audit | bunx audit | bunx audit | bunx audit | bunx audit | cargo audit | pip-audit | go mod verify |
| license | bunx license-checker | bunx license-checker | bunx license-checker | bunx license-checker | bunx license-checker | cargo deny check licenses | pip-licenses | go-licenses check |

### 9. Deployment Scripts

Scripts สำหรับ deployment เพื่อรับประกันคุณภาพก่อน deploy:

| Task | Bun | Nuxt | Next.js | Solid Start | SvelteKit | Rust | Python | Go |
|------|-----|------|---------|------------|----------|------|--------|----|
| predeploy | bun run verify && bun run build | bun run verify && bun run build | bun run verify && bun run build | bun run verify && bun run build | bun run verify && bun run build | cargo clippy && cargo check && cargo build | ruff check && mypy && pytest && python -m build | golangci-lint run && go vet && go test && go build . |
| deploy:staging | bunx wrangler deploy | bunx wrangler deploy | bunx vercel --prebuilt | bunx wrangler deploy | bunx wrangler deploy | cargo publish --dry-run | twine upload --repository testpypi | go release --dry-run |

### 10. Documentation Scripts

Scripts สำหรับ documentation เพื่อจัดการ docs site:

| Task | Bun | Nuxt | Next.js | Solid Start | SvelteKit | Rust | Python | Go |
|------|-----|------|---------|------------|----------|------|--------|----|
| docs | vitepress dev | vitepress dev | vitepress dev | vitepress dev | vitepress dev | mdbook serve | mkdocs serve | godoc |

## Expected Outcome

- `package.json` มี scripts ตาม template ที่เลือก
- Scripts สอดคล้องกับ tech stack
- Verify pipeline ทำงานได้ถูกต้อง

