---
title: Follow Windsurf Hooks
description: เพิ่ม Cascade Hooks สำหรับ logging, security controls, validation และ enterprise governance
auto_execution_mode: 3
---

## Goal

เพิ่ม Cascade Hooks เพื่อ execute custom shell commands ที่ key points ใน Cascade's workflow สำหรับ logging, security controls, validation และ enterprise governance

## Execute

### 1. Understand Hooks Basics

1. ศึกษา Cascade Hooks จาก official docs
2. ทำความเข้าใจ pre-hooks และ post-hooks
3. เรียนรู้ 12 hook events ที่มีให้ใช้
4. ทำความเข้าใจ exit codes และ blocking behavior

### 2. Choose Hook Level

1. เลือก level ที่เหมาะสม: system-level, user-level, หรือ workspace-level
2. system-level: สำหรับ organization-wide policies
3. user-level: สำหรับ personal preferences
4. workspace-level: สำหรับ project-specific policies

### 3. Create Hooks Configuration

1. สร้างไฟล์ `hooks.json` ตาม level ที่เลือก
2. เขียน hooks configuration ใน JSON format
3. ระบุ hook events ที่ต้องการใช้
4. ตั้งค่า `command` สำหรับ macOS/Linux
5. ตั้งค่า `powershell` สำหรับ Windows
6. ตั้งค่า `show_output` สำหรับ debugging
7. ตั้งค่า `working_directory` หากจำเป็น

### 4. Write Hook Scripts

1. สร้าง hook scripts ด้วย bun-native-ts หรือ rust (ตามความเหมาะสม)
2. ใช้ bun-native-ts สำหรับ scripts ที่ต้องการ I/O, async operations, หรือ integration กับ external APIs
3. ใช้ rust สำหรับ scripts ที่ต้องการ performance สูง, static analysis, หรือ complex logic
4. อ่าน JSON input จาก stdin
5. ประมวลผลตาม logic ที่ต้องการ
6. return exit code 0 สำหรับ success
7. return exit code 2 สำหรับ blocking error (pre-hooks เท่านั้น)
8. log errors ไปที่ stderr

### 5. Test Hooks

1. ทำ `/follow-content-quality` สำหรับทุกไฟล์
2. trigger hook events ใน Cascade
3. ตรวจสอบ output ใน Cascade UI
4. ทดสอบ blocking behavior สำหรับ pre-hooks
5. แก้ไข scripts หากมี errors

## Rules

### 1. Hook Levels

ตำแหน่งไฟล์ hooks.json:

| Level | macOS | Linux/WSL | Windows |
|-------|-------|-----------|---------|
| System | `/Library/Application Support/Windsurf/hooks.json` | `/etc/windsurf/hooks.json` | `C:\ProgramData\Windsurf\hooks.json` |
| User | `~/.codeium/windsurf/hooks.json` | `~/.codeium/hooks.json` | `~/.codeium/hooks.json` |
| Workspace | `.windsurf/hooks.json` | `.windsurf/hooks.json` | `.windsurf/hooks.json` |

Hooks จากทุก levels จะถูก merge และ execute ตามลำดับ: system → user → workspace

### 2. Hook Events

12 hook events ที่มีให้ใช้:

- `pre_read_code` - ก่อนอ่านไฟล์ (สามารถ block)
- `post_read_code` - หลังอ่านไฟล์
- `pre_write_code` - ก่อนเขียนไฟล์ (สามารถ block)
- `post_write_code` - หลังเขียนไฟล์
- `pre_run_command` - ก่อนรัน command (สามารถ block)
- `post_run_command` - หลังรัน command
- `pre_mcp_tool_use` - ก่อนใช้ MCP tool (สามารถ block)
- `post_mcp_tool_use` - หลังใช้ MCP tool
- `pre_user_prompt` - ก่อน process user prompt (สามารถ block)
- `post_cascade_response` - หลัง Cascade response
- `post_cascade_response_with_transcript` - หลัง response พร้อม transcript
- `post_setup_worktree` - หลัง setup worktree

### 3. Exit Codes

ความหมายของ exit codes:

| Exit Code | Meaning | Effect |
|-----------|---------|--------|
| 0 | Success | Action proceeds normally |
| 2 | Blocking Error | Blocks action (pre-hooks เท่านั้น) |
| Other | Error | Action proceeds normally |

เฉพาะ pre-hooks เท่านั้นที่สามารถ block actions ด้วย exit code 2

### 4. Configuration Parameters

Parameters ที่ใช้ใน hooks.json:

- `command` - shell command สำหรับ macOS/Linux (required อย่างน้อยหนึ่งอัน)
- `powershell` - command สำหรับ Windows (optional)
- `show_output` - แสดง stdout/stderr ใน Cascade UI (boolean)
- `working_directory` - directory สำหรับ execute command (optional, default: workspace root)

### 5. Cross-Platform Behavior

| Platform | command set | powershell set | Result |
|----------|-------------|---------------|--------|
| macOS/Linux | ✓ | (ignored) | Runs command via bash -c |
| macOS/Linux | ✗ | ✓ | Skipped |
| Windows | ✓ | ✗ | Falls back to command via powershell |
| Windows | ✗ | ✓ | Runs powershell via powershell |
| Windows | ✓ | ✓ | Runs powershell via powershell |
| Any | ✗ | ✗ | Validation error |

### 6. Common Input Structure

ทุก hooks ได้รับ JSON พร้อม fields:

- `agent_action_name` - hook event name
- `trajectory_id` - unique identifier สำหรับ conversation
- `execution_id` - unique identifier สำหรับ agent turn
- `timestamp` - ISO 8601 timestamp
- `model_name` - model name
- `tool_info` - event-specific information

### 7. Security Best Practices

- Validate all inputs จาก JSON
- Use absolute paths ใน hook configurations
- หลีกเลี่ยง logging sensitive information
- Review permissions ของ hook scripts
- Audit hooks ก่อน deployment
- Test in isolation ก่อนใช้จริง

### 8. Performance Considerations

- Keep hooks fast (aim for sub-100ms)
- Use async operations สำหรับ non-blocking hooks
- Filter early ใน scripts เพื่อ avoid unnecessary processing

### 9. Error Handling

- Always validate JSON ด้วย try-catch
- Log errors ไปที่ stderr
- Fail safely - พิจารณาว่าควร block หรือ allow action

### 10. Enterprise Distribution

สำหรับ Enterprise:

- Cloud Dashboard - configure ผ่าน Team Settings
- System-Level Files - deploy ผ่าน MDM หรือ config management
- Workspace Hooks - version control สำหรับ project-specific policies

## Expected Outcome

- Cascade Hooks configured ตาม level ที่เลือก
- Hook scripts ทำงานได้อย่างถูกต้อง
- Security controls และ logging ทำงานตามที่ต้องการ
- Hooks execute ตามลำดับที่ถูกต้อง
