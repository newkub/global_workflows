---

title: Write Devin Project Hooks

description: สร้าง hooks สำหรับ Devin/Cascade เพื่อ run custom logic ตาม events

auto_execution_mode: 3

related_workflows:
  - /write-windsurf-global-workflows
  - /write-cascade-hooks

url: https://docs.devin.ai/cli/extensibility/hooks/overview

---

## Goal

สร้าง hooks สำหรับ Devin/Cascade เพื่อ run custom logic เมื่อเกิด events ต่างๆ ระหว่าง session

## Scope

ใช้สำหรับสร้าง project-level hooks สำหรับ Devin เท่านั้น

## Execute

### 1. Read Reference Documentation

1. อ่าน Devin hooks documentation จาก https://docs.devin.ai/cli/extensibility/hooks/overview
2. ทำ `/write-windsurf-global-workflows` เพื่อเข้าใจมาตรฐาน workflow
3. อ่าน lifecycle hooks documentation สำหรับรายละเอียด events

### 2. Choose Hook Location

1. ใช้ project-level hooks สำหรับ project-specific logic
2. ตัดสินใจใช้ `.devin/hooks.v1.json` หรือ config file

### 3. Define Hook Events

1. เลือก events ที่ต้องการ: `PreToolUse`, `PostToolUse`, `PermissionRequest`, `UserPromptSubmit`, `Stop`, `SessionStart`, `SessionEnd`
2. กำหนด matcher สำหรับ filter tools ที่ต้องการ
3. ระบุ tool_name หรือ pattern ที่ต้องการ hook

### 4. Create Hook Scripts

1. สร้าง script สำหรับ command hooks ใน `scripts/` directory
2. กำหนด exit codes: 0 (approve), 1 (block), 2 (deny)
3. ใช้ `DEVIN_PROJECT_DIR` environment variable สำหรับ project path
4. Return JSON response พร้อม `decision` และ `reason` สำหรับ command hooks

### 5. Configure Hooks File

1. สร้าง `.devin/hooks.v1.json` หรือเพิ่มใน config file
2. กำหนด hook type: `command` หรือ `prompt`
3. ตั้งค่า `timeout` สำหรับ command hooks
4. กำหนด matcher และ hooks array

### 6. Test And Validate

1. รัน `devin verify hooks` เพื่อตรวจสอบ configuration
2. ทดสอบ hooks ด้วย scenarios ต่างๆ
3. ตรวจสอบ exit codes และ JSON responses
4. ตรวจสอบว่า hooks ทำงานตามที่คาดหวัง

## Rules

### 1. Hook Events

ใช้ events ที่เหมาะสมกับ use case:

- `PreToolUse`: Validate commands ก่อน execute
- `PostToolUse`: Log หรือ audit หลัง execute
- `PermissionRequest`: Approve/deny permissions
- `UserPromptSubmit`: Validate user prompts
- `Stop`: Cleanup หรือ save state ก่อน stop
- `SessionStart`: Initialize session state
- `SessionEnd`: Cleanup หรือ report session summary

### 2. Hook Format

รูปแบบ hooks configuration:

```json
{
  "PreToolUse": [
    {
      "matcher": "exec",
      "hooks": [
        {
          "type": "command",
          "command": "./scripts/validate.sh",
          "timeout": 10
        }
      ]
    }
  ]
}
```

### 3. Command Hooks

ใช้ command hooks สำหรับ custom logic:

- Script ต้อง executable
- Exit code 0 = approve
- Exit code 1 = block
- Exit code 2 = deny
- Return JSON พร้อม `decision` และ `reason` สำหรับ blocking
- ใช้ `DEVIN_PROJECT_DIR` environment variable

### 4. Prompt Hooks

ใช้ prompt hooks สำหรับ AI-driven logic:

- กำหนด prompt template
- Devin จะ evaluate prompt และตัดสินใจ
- เหมาะสำหรับ logic ที่ซับซ้อน
- ใช้สำหรับ validation ที่ต้องการ context

### 5. Hook Location

ใช้ project-level location:

- `.devin/hooks.v1.json` หรือ `.devin/config.json`
- Config file สามารถ override hooks.v1.json

### 6. Matcher Usage

ใช้ matcher สำหรับ filter tools:

- `tool_name`: match tool ที่ระบุ
- `exec`: match exec command
- ใช้ pattern matching สำหรับ multiple tools
- สามารถกำหนด multiple matchers

### 7. Format Check Hook

ใช้ format-check hook สำหรับ quality assurance:

- ใช้ `PostToolUse` event สำหรับ format และ typecheck
- รัน formatter (biome, dprint, prettier) หลัง write code
- รัน typecheck (tsc, tsgo) หลัง write code
- ตั้งค่า `show_output: true` เพื่อแสดงผล
- ใช้ Bun สำหรับ performance ใน script execution

### 8. Best Practices

ทำตาม best practices:

- Hooks ต้อง fast (timeout < 10s)
- Scripts ต้อง idempotent
- Log สิ่งที่สำคัญเท่านั้น
- ใช้ clear error messages
- Test hooks ก่อน deploy
- ใช้ environment variables สำหรับ config

## Expected Outcome

- Hooks configuration ถูกต้องตาม format
- Scripts ทำงานได้และ return exit codes ที่ถูกต้อง
- Hooks ทำงานตาม events ที่กำหนด
- Project มี custom logic ตามที่ต้องการ
- Hooks ผ่าน verification
