---
title: Write Cascade Hooks
description: สร้าง Cascade hooks สำหรับ logging, security, validation และ quality assurance
auto_execution_mode: 3
url: https://docs.devin.ai/desktop/cascade/hooks
related_workflows:
  - /windsurf-global-workflows
  - /write-windsurf-global-workflows
---

## Goal

สร้าง Cascade hooks สำหรับ control และ monitor การทำงานของ Cascade ด้วย custom scripts

## Scope

เขียน hooks สำหรับ system-level, user-level, และ workspace-level

## Execute

### 1. Choose Hook Event

เลือก hook event ที่เหมาะสมกับ use case:

- `pre_read_code` - ก่อนอ่านไฟล์ (security check, access control)
- `post_read_code` - หลังอ่านไฟล์ (logging, analytics)
- `pre_write_code` - ก่อนเขียนไฟล์ (validation, conventions check)
- `post_write_code` - หลังเขียนไฟล์ (linting, formatting, quality check)
- `pre_run_command` - ก่อนรัน command (security check, package manager validation)
- `post_run_command` - หลังรัน command (logging, audit)
- `pre_mcp_tool_use` - ก่อนใช้ MCP tool (validation, logging)
- `post_mcp_tool_use` - หลังใช้ MCP tool (audit, analytics)
- `pre_user_prompt` - ก่อน user prompt (policy check, logging)
- `post_cascade_response` - หลัง Cascade response (logging, format, typecheck)

### 2. Write Hook Script

เขียน hook script ด้วยภาษาที่ต้องการ:

1. อ่าน JSON input จาก stdin
2. Parse context จาก `agent_action_name` และ `tool_info`
3. ดำเนินการตาม logic ที่ต้องการ
4. Return exit code (0 = success, 1 = error, 2 = block)

**Example TypeScript with Bun:**
```typescript
#!/usr/bin/env bun
const input = Bun.stdin.read();
const data = JSON.parse(input.toString());
// Process data
process.exit(0);
```

### 3. Configure Hooks.json

เพิ่ม hook ลงใน `hooks.json`:

```json
{
  "hooks": {
    "post_write_code": [
      {
        "command": "bun /path/to/hook.ts",
        "show_output": true
      }
    ]
  }
}
```

### 4. Choose Configuration Level

เลือก level ตาม scope:

- System-level: `/Library/Application Support/Windsurf/hooks.json` (macOS)
- User-level: `~/.codeium/windsurf/hooks.json`
- Workspace-level: `.windsurf/hooks.json`

### 5. Test Hook

ทดสอบ hook ด้วยการ trigger event ที่เกี่ยวข้อง

## Rules

### 1. Hook Script Best Practices

ใช้ภาษาที่เหมาะสม:

- Bun/TypeScript - สำหรับ performance และ native APIs
- Python - สำหรับ complex logic และ data processing
- Bash - สำหรับ simple commands และ cross-platform

### 2. Exit Codes

ใช้ exit codes ตาม semantic:

- `0` - Success หรือ warning (allow action)
- `1` - Error (log but allow)
- `2` - Block action (prevent execution)

### 3. Input Structure

Parse JSON input จาก stdin:

```typescript
{
  "agent_action_name": "post_write_code",
  "tool_info": {
    "file_path": "/path/to/file.ts",
    "edits": [...]
  }
}
```

### 4. Performance Considerations

- Hooks ต้องรันเร็ว (ไม่เกิน 1-2 วินาที)
- หลีกเลี่ยง blocking operations ใน hooks
- Cache results ถ้าต้องใช้ external APIs

### 5. Error Handling

- Handle errors gracefully ด้วย try-catch
- Log errors ไป stderr
- Return exit code 1 สำหรับ recoverable errors
- Return exit code 2 สำหรับ critical errors

### 6. Security

- ไม่ hardcode secrets ใน hook scripts
- Validate input จาก stdin
- ใช้ environment variables สำหรับ sensitive data
- Sanitize output ก่อน log

### 7. Cross-Platform

- ใช้ absolute paths สำหรับ cross-platform
- ใช้ `powershell` สำหรับ Windows
- ใช้ `bash -c` สำหรับ Unix-like systems
- Test บนทุก platforms ที่ใช้

## Expected Outcome

- Hooks ทำงานได้อย่างถูกต้องตาม event ที่กำหนด
- Scripts รันเร็วและไม่ block workflow
- Exit codes ถูกต้องตาม semantic
- Configuration อยู่ที่ level ที่เหมาะสม
- Logs และ output ชัดเจน

