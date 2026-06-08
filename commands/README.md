# Global Workflows Commands

CLI commands สำหรับจัดการ global workflows

## คำสั่งที่มี

### check-loc

ตรวจสอบ workflows ที่ไม่ได้ถูกใช้ใน global_workflows

```bash
bun run dev
# หรือ
npm run dev
```

## Installation

```bash
bun install
```

## Development

```bash
bun run dev        # รัน check-loc
bun run build      # build project
bun run test       # รัน tests
bun run lint       # lint code
bun run format     # format code
bun run typecheck  # type check
```

## Project Structure

```
commands/
├── src/
│   └── check-loc.ts    # CLI command สำหรับตรวจสอบ unused workflows
├── package.json
├── tsconfig.json
└── README.md
```
