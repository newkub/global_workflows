---
title: Create Bun CLI
description: สร้าง CLI applications ด้วย Bun runtime ตาม best practices
auto_execution_mode: 3
---

## Goal

สร้าง CLI applications ด้วย Bun runtime ที่มีประสิทธิภาพสูง

## Scope

ใช้สำหรับสร้าง CLI applications ด้วย Bun runtime

## Execute

### 1. Setup Project Structure

สร้างโครงสร้างโปรเจกต์ตามมาตรฐาน

1. สร้าง directories: `src/cli/`, `src/services/`, `src/types/`, `src/utils/`
2. แยก concerns: business logic, CLI interface, utilities
3. สร้าง entry point: `src/cli.ts` และ `src/index.ts`

### 2. Configure Build Tools

ตั้งค่า build tools สำหรับ production

1. ติดตั้ง `bunup` ด้วย `bun add -d bunup`
2. ตั้งค่า `bunup.config.ts` สำหรับ building
3. ตั้งค่า TypeScript config สำหรับ type safety

### 3. Setup Scripts

ตั้งค่า scripts ใน `package.json`

1. เพิ่ม `dev` script: `bunx bunup --watch`
2. เพิ่ม `build` script: `bunx bunup`
3. เพิ่ม `lint` script: `bunx tsc --noEmit && bunx biome lint --write`
4. เพิ่ม `test` script: `bun test`

### 4. Development Workflow

ใช้ development workflow ที่มีประสิทธิภาพ

1. ใช้ `bun run dev` สำหรับ development พร้อม watch mode
2. ใช้ `bun run build` สำหรับ production build
3. ใช้ `bun run lint` สำหรับ code quality checks

## Rules

### 1. Project Structure

โครงสร้างต้องถูกต้อง

- แยก concerns: business logic, CLI interface, utilities
- ใช้ Clean Architecture หรือ Layered Architecture
- แยก types ไว้ใน `src/types/`

### 2. Build Configuration

ตั้งค่า build tools อย่างเหมาะสม

- ใช้ `bunup` สำหรับ building
- ตั้งค่า `dts.splitting: true` สำหรับ type declarations
- ตั้งค่า TypeScript `declaration: true` และ `isolatedDeclarations: true`

### 3. Development Workflow

ใช้ scripts ที่มีประสิทธิภาพ

- ใช้ `bunx` แทน `npx`
- ใช้ watch mode สำหรับ development
- รัน lint และ typecheck ก่อน commit

## Expected Outcome

- CLI project ที่มีโครงสร้างที่ดีและ maintainable
- Development workflow ที่มีประสิทธิภาพ
- Type-safe CLI application พร้อมสำหรับ production

## Project Structure

```text
project/
├── src/
│   └── cli/
│   └── services/
│   └── types/
│   └── utils/
│   └── cli.ts
│   └── index.ts
└── test/
└── .gitignore
└── package.json
└── bunup.config.ts
└── README.md
```

## Configuration Files

### package.json

```json
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "keywords": [],
  "author": "Wrikka",
  "license": "MIT",
  "scripts": {
    "dev": "bunx bunup --watch",
    "build": "bunx bunup",
    "lint": "bunx tsc --noEmit && bunx biome lint --write",
    "test": "bun test",
    "release": "bun run src/cli"
  }
}
```

### tsconfig.json

```json
{
	"compilerOptions": {
		"declaration": true,
		"isolatedDeclarations": true
	}
}
```

### bunup.config.ts

```ts
export default defineConfig({
	dts: {
		splitting: true,
	},
});
```

## Reference

- CLI: `bunx bunup --help`
- [bunup GitHub](https://github.com/hyperdyne/bunup)
- [Bun Documentation](https://bun.sh/docs)


