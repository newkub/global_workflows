---

title: At Windsurf Global Rules

description: ระบุ location ของ global rules file สำหรับ Windsurf

auto_execution_mode: 3

---

## Goal

ระบุ location ของ global rules file สำหรับ Windsurf เพื่อให้ Cascade สามารถอ่านและปฏิบัติตามกฎได้

## Scope

ใช้สำหรับระบุ location ของ global rules file ใน Windsurf environment

## Execute

### 1. Read Global Rules

1. อ่าน global rules file จาก location ที่ระบุ
2. Location อยู่ที่ `c:\Users\Veerapong\.codeium\windsurf\memories\global_rules.md`
3. ไฟล์ประกอบด้วยกฎและแนวทางการพัฒนาโปรเจกต์ทั่วไป
4. ใช้สำหรับทุก workspace ในการพัฒนาโปรเจกต์

### 2. Apply Rules

1. ทำตามกฎที่ระบุใน global rules file
2. ปฏิบัติตาม Execute steps ทั้งหมด
3. ปฏิบัติตาม Rules ทั้งหมด
4. ตรวจสอบ Expected Outcome

## Rules

### 1. Global Rules Location

ระบุ location ของ global rules file

- Global rules อยู่ที่ `c:\Users\Veerapong\.codeium\windsurf\memories\global_rules.md`
- ไฟล์นี้ประกอบด้วยกฎและแนวทางการพัฒนาโปรเจกต์ทั่วไป
- ใช้สำหรับทุก workspace ในการพัฒนาโปรเจกต์
- Cascade ต้องอ่านและปฏิบัติตามกฎเหล่านี้เสมอ

### 2. Execute Steps

ปฏิบัติตาม Execute steps ใน global rules

- Prepare: ทำ `/follow-agents-md`, `/ship-code`, `/setup-tasks`
- Analyze: ทำ `/analyze-project`, จัดการ errors
- Read Reference: อ่าน workflows, skills, global rules
- Search Code: ใช้ `Grep`, `find_by_name`
- Planning: แก้ไข workflows และ skills
- Write: ทำ `/follow-principles-engineering`, `/follow-architecture`
- Reflex: ทำ `/loop-until-complete`
- Report: ทำ `/report`, `/suggest-next-action`

### 3. Tool Selection

เลือก tools ที่เหมาะสมสำหรับ automation

- ใช้ `Bun shell` สำหรับ automation เสมอ
- ใช้ `bunx` แทน `npx` เสมอ

### 4. Workspace Standards

รักษามาตรฐานในทุก workspace

- ทุก workspace ต้องมี scripts มาตรฐาน
- Execute ต้องให้ผลลัพธ์เหมือนกันทุกครั้ง
- ระบุลำดับการทำงานชัดเจน
- ไม่ใช้คำสั่ง subjective หรือ ambiguous

## Expected Outcome

- Cascade รู้ location ของ global rules file
- ปฏิบัติตามกฎทั้งหมดในทุก workspace
- การทำงานสม่ำเสมอทุก workspace
- Code quality สูงและเป็นไปตามมาตรฐาน
- ไม่มี mock หรือ TODO ที่ไม่จำเป็น
- Workflows ทำงานได้อย่างมีประสิทธิภาพ
- การสื่อสารชัดเจนและกระชับ
