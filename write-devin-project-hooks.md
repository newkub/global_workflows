---
title: Write Devin Project Hooks
description: สร้าง hooks สำหรับ Devin/Cascade เพื่อ run custom logic ตาม events
auto_execution_mode: 3
---

## Goal

สร้าง `Cascade hooks` สำหรับ run custom logic เมื่อเกิด events ต่างๆ ระหว่าง session

## Scope

ใช้สำหรับสร้าง workspace-level hooks สำหรับ `Cascade` เท่านั้น

## โครงสร้าง Directory

```
.devin/
├── hooks/
│   ├── hooks.json          # Hook configuration
│   ├── run-lint.ts         # Lint hook script
│   └── run-typecheck.ts    # Typecheck hook script
```

## Execute

### 1. Read Reference Documentation

1. อ่าน `Cascade hooks` documentation จาก https://docs.devin.ai/desktop/cascade/hooks
2. ทำ `/write-windsurf-global-workflows` เพื่อเข้าใจมาตรฐาน workflow
3. อ่าน `hook events` documentation สำหรับรายละเอียด events

### 2. Choose Hook Location

1. ใช้ workspace-level hooks สำหรับ project-specific logic
2. ใช้ `.devin/hooks/hooks.json` สำหรับ workspace configuration
3. ใช้ `post_write_code` event สำหรับ run lint และ typecheck หลังแก้ไข code

### 3. Define Hook Events

1. เลือก events ที่ต้องการ: `pre_read_code`, `post_read_code`, `pre_write_code`, `post_write_code`, `pre_run_command`, `post_run_command`, `pre_mcp_tool_use`, `post_mcp_tool_use`, `pre_user_prompt`, `post_cascade_response`
2. กำหนด hook events ใน JSON configuration
3. สำหรับ lint/typecheck: ใช้ `post_write_code` event หลังแก้ไข code
4. Hook รับ JSON input ผ่าน stdin พร้อม context เกี่ยวกับ action

### 4. Create Hook Scripts

1. สร้าง TypeScript scripts สำหรับ hooks ใน `.devin/hooks/` directory
2. กำหนด exit codes: 0 (approve), 1 (block), 2 (deny)
3. Hook รับ JSON input ผ่าน stdin พร้อม context (agent_action_name, tool_info, file_path, etc.)
4. สร้าง script สำหรับ lint และ typecheck hooks:
   - `.devin/hooks/run-lint.ts` - รัน lint หลังแก้ไข code
   - `.devin/hooks/run-typecheck.ts` - รัน typecheck หลังแก้ไข code
   - ใช้ `bun run lint` และ `bun run typecheck` สำหรับ performance
   - Exit code 0 ถ้าผ่าน, 1 ถ้ามี errors
   - Parse JSON input จาก stdin เพื่อดู file_path และ context

### 5. Configure Hooks File

1. สร้าง `.devin/hooks/hooks.json` ใน workspace
2. กำหนด hook events ใน JSON format
3. ตั้งค่า `show_output: true` เพื่อแสดงผล hook
4. กำหนด command path สำหรับแต่ละ hook event

### 6. Test And Validate

1. ทดสอบ hooks ด้วยการแก้ไข code และดูว่า lint/typecheck ทำงาน
2. ตรวจสอบ exit codes และ output
3. ตรวจสอบว่า hooks ทำงานตามที่คาดหวัง
4. ตรวจสอบ JSON configuration ถูกต้อง

## Rules

### 1. Hook Events

ใช้ events ที่เหมาะสมกับ use case

- `pre_read_code`: Validate ก่อนอ่าน code
- `post_read_code`: Log หรือ audit หลังอ่าน code
- `pre_write_code`: Validate ก่อนเขียน code
- `post_write_code`: Run lint/typecheck หลังเขียน code
- `pre_run_command`: Validate ก่อนรัน command
- `post_run_command`: Log หรือ audit หลังรัน command
- `pre_mcp_tool_use`: Validate ก่อนใช้ MCP tool
- `post_mcp_tool_use`: Log หรือ audit หลังใช้ MCP tool
- `pre_user_prompt`: Validate user prompts
- `post_cascade_response`: Log หรือ audit Cascade responses

### 2. Hook Format

รูปแบบ hooks configuration (.devin/hooks/hooks.json)

```json
{
  "post_write_code": [
    {
      "command": "bun .devin/hooks/run-lint.ts",
      "show_output": true
    }
  ]
}
```

### 3. Command Hooks

ใช้ command hooks สำหรับ custom logic

- Script ต้อง executable (TypeScript รันด้วย bun)
- Exit code 0 = approve
- Exit code 1 = block
- Exit code 2 = deny
- Hook รับ JSON input ผ่าน stdin พร้อม context
- ใช้ `show_output: true` เพื่อแสดงผล

### 4. Hook Input Structure

Hook รับ JSON input ผ่าน stdin

- `agent_action_name`: ชื่อ event (เช่น post_write_code)
- `tool_info`: Context เกี่ยวกับ action (file_path, edits, command_line, etc.)
- `trajectory_id`: ID ของ trajectory
- `execution_id`: ID ของ execution
- `timestamp`: เวลาที่เกิด event
- `model_name`: ชื่อ model ที่ใช้

### 5. Hook Location

ใช้ workspace-level location

- `.devin/hooks/hooks.json` ใน workspace

### 6. TypeScript Scripts

ใช้ TypeScript สำหรับ hooks

- สร้าง scripts ใน `.devin/hooks/` directory
- รันด้วย `bun .devin/hooks/run-lint.ts`
- Parse JSON input จาก stdin
- ใช้ type safety สำหรับ context parsing
- Return exit code ถ้าผ่าน/ไม่ผ่าน

### 7. Lint And Typecheck Hooks

ใช้ hooks สำหรับ quality assurance

- ใช้ `post_write_code` event สำหรับ lint และ typecheck
- รัน `bun run lint` หลัง write code
- รัน `bun run typecheck` หลัง write code
- ตั้งค่า `show_output: true` เพื่อแสดงผล
- ใช้ TypeScript scripts สำหรับ type safety

### 8. Best Practices

ทำตาม best practices

- Hooks ต้อง fast (ใช้ Bun สำหรับ performance)
- Scripts ต้อง idempotent
- Log สิ่งที่สำคัญเท่านั้น
- ใช้ clear error messages
- Test hooks ก่อน deploy
- ใช้ TypeScript สำหรับ type safety

## Expected Outcome

- `.devin/hooks/hooks.json` configuration ถูกต้องตาม format
- TypeScript scripts ทำงานได้และ return exit codes ที่ถูกต้อง
- Hooks ทำงานตาม events ที่กำหนด (post_write_code)
- Lint และ typecheck ทำงานอัตโนมัติหลังแก้ไข code
- Hooks ผ่าน testing
