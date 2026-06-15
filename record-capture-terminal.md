---

title: Record Capture Terminal

description: Record video และ capture ภาพจาก terminal สำหรับ CLI testing

auto_execution_mode: 3

---

## Goal

เลือกและใช้ tools ที่เหมาะสมสำหรับ record video และ capture ภาพจาก terminal เพื่อใช้ใน CLI testing

## Scope

ใช้สำหรับ workflows ที่ต้องการบันทึก terminal sessions เช่น `/run-test-cli`, `/run-dev`, `/watch-terminal`

## Execute

### 1. Analyze Requirements

วิเคราะห์ความต้องการของงาน:

1. ต้องการ video หรือ screenshot เท่านั้น
2. ต้องการ text-based หรือ visual recording
3. ต้องการ automation หรือ manual capture
4. ต้องการ embed ใน HTML หรือเป็นไฟล์ standalone

### 2. Select Appropriate Tool

เลือก tool ตามความต้องการ:

- **Bun Terminal Recorder**: Record terminal เป็น JSON, ใช้ Bun native APIs, เร็วและ lightweight, เหมาะสำหรับ CLI testing automation
- **asciinema**: Record terminal เป็น text-based format, ไฟล์เล็ก, แก้ไขได้, เหมาะสำหรับ CI/CD
- **terminalizer**: Record terminal เป็น GIF, ปรับแต่ง style ได้, เหมาะสำหรับ demo
- **vhs**: Record terminal เป็น video/GIF, ใช้ config file, เหมาะสำหรับ automated recording
- **Windows Snipping Tool**: Screenshot ด้วย `Win + Shift + S`, เร็วที่สุด, มีอยู่แล้วใน Windows
- **Windows Game Bar**: Record screen ด้วย `Win + G`, เหมาะสำหรับ video recording

### 3. Install And Configure

ติดตั้งและตั้งค่า tool ที่เลือก:

```bash
# ติดตั้ง Bun Terminal Recorder (แนะนำสำหรับ CLI testing)
cd record-terminal
bun install

# ติดตั้ง asciinema
bun add -g asciinema

# ติดตั้ง terminalizer
bun add -g terminalizer

# ติดตั้ง vhs
bun add -g vhs
```

### 4. Record Terminal Session

บันทึก terminal session ตาม tool ที่เลือก:

```bash
# ใช้ Bun Terminal Recorder (แนะนำสำหรับ CLI testing)
cd record-terminal
bun run src/index.ts bun run ../src/index.ts --help
bun run src/index.ts bun run test:cli

# ใช้ asciinema
asciinema rec test-cli.cast --command "bun run test:cli"
asciinema play test-cli.cast

# ใช้ terminalizer
terminalizer record demo
terminalizer render demo -o demo.gif

# ใช้ vhs
vhs demo.tape
```

### 5. Capture Screenshot

Capture screenshot สำหรับ documentation:

```bash
# ใช้ Windows Snipping Tool (Win + Shift + S)
# หรือใช้ PowerShell ScreenCapture
Install-Module -Name ScreenCapture
```

## Rules

### 1. Tool Selection Criteria

เลือก tool ตาม use case:

- **CLI testing automation**: ใช้ `Bun Terminal Recorder` เพราะใช้ Bun native APIs, เร็ว, lightweight, JSON output
- **CI/CD integration**: ใช้ `asciinema` เพราะ text-based, ไฟล์เล็ก, แก้ไขได้
- **Demo presentation**: ใช้ `terminalizer` หรือ `vhs` เพราะ visual appeal
- **Quick screenshot**: ใช้ `Windows Snipping Tool` เพราะเร็วที่สุด
- **Video recording**: ใช้ `Windows Game Bar` หรือ `vhs`

### 2. File Management

จัดการไฟล์ที่บันทึก:

- เก็บไฟล์ใน `test/screenshots/` หรือ `test/recordings/`
- ตั้งชื่อไฟล์ตาม test case ที่เกี่ยวข้อง
- ลบไฟล์เก่าก่อนบันทึกใหม่เพื่อหลีกเลี่ยง confusion
- Commit ไฟล์ที่จำเป็นเท่านั้น (ไม่ commit ไฟล์ขนาดใหญ่)

### 3. Integration With Workflows

ผนวกกับ workflows อื่น:

- เรียก `/record-capture-terminal` ใน workflows ที่ต้องการบันทึก
- ใช้ใน `/run-test-cli` สำหรับบันทึก test execution
- ใช้ใน `/run-dev` สำหรับบันทึก development sessions
- ใช้ใน `/watch-terminal` สำหรับ monitoring

### 4. Quality Standards

รักษาคุณภาพของการบันทึก:

- ตรวจสอบว่า output ชัดเจนและอ่านง่าย
- ตั้งค่า terminal size ที่เหมาะสม (80x24 หรือ 120x30)
- ใช้ font ที่อ่านง่าย (monospace)
- หลีกเลี่ยง recording ที่ยาวเกินไป (แบ่งเป็นส่วนถ้าจำเป็น)

## Expected Outcome

- เลือก tool ที่เหมาะสมกับ use case
- Terminal sessions บันทึกได้อย่างมีประสิทธิภาพ
- ไฟล์จัดเก็บอย่างเป็นระบบ
- ผนวกกับ workflows อื่นได้อย่างราบรื่น
