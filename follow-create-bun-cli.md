
---

title: Bun CLI Development
description: แนวทางการพัฒนา CLI applications ด้วย Bun runtime ตาม best practices
auto_execution_mode: follow
- "@bun-sdk"
- "@typescript"
---

## Purpose

- สร้าง CLI applications ด้วย Bun runtime ที่มีประสิทธิภาพสูง
- จัดโครงสร้างโปรเจกต์ตามมาตรฐาน
- ตั้งค่า build tools และ development environment อย่างเหมาะสม

## Execute

1. Project Structure
   - สร้างโครงสร้างโฟลเดอร์ตามมาตรฐาน CLI application
   - แยกส่วนของ business logic, CLI interface, และ utilities

2. Configuration Setup
   - ตั้งค่า package.json ด้วย scripts ที่เหมาะสมสำหรับ CLI development
   - กำหนด TypeScript config สำหรับ type safety
   - ตั้งค่า bunup.config.ts สำหรับ building

3. Development Workflow
   - ใช้ `bun run dev` สำหรับ development พร้อม watch mode
   - ใช้ `bun run build` สำหรับ production build
   - ใช้ `bun run lint` สำหรับ code quality checks

4. Testing & Release
   - รัน tests ด้วย `bun test`
   - สร้าง release version ด้วย proper build process

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


