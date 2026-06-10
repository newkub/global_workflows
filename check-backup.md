---
title: Check Backup
description: ตรวจสอบ backup strategy และ procedures
auto_execution_mode: 3
related_workflows:
  - /check-recovery
---

## Goal

ตรวจสอบ backup strategy และ procedures ครบถ้วน

## Execute

### 1. Check Backup Strategy

1. ตรวจสอบ backup strategy มีอยู่
2. ตรวจสอบ backup frequency ถูกต้อง
3. ตรวจสอบ backup types (full, incremental, differential)
4. ตรวจสอบ backup retention policy

### 2. Check Backup Coverage

1. ตรวจสอบ databases ถูก backup
2. ตรวจสอบ application data ถูก backup
3. ตรวจสอบ configuration ถูก backup
4. ตรวจสอบ user data ถูก backup

### 3. Check Backup Storage

1. ตรวจสอบ backup storage locations
2. ตรวจสอบ backup storage redundancy
3. ตรวจสอบ backup storage encryption
4. ตรวจสอบ backup storage access controls

### 4. Check Backup Verification

1. ตรวจสอบ backup integrity checks
2. ตรวจสอบ backup test restores
3. ตรวจสอบ backup monitoring
4. ตรวจสอบ backup alerts

### 5. Check Backup Automation

1. ตรวจสอบ backup automation scripts
2. ตรวจสอบ backup scheduling
3. ตรวจสอบ backup error handling
4. ตรวจสอบ backup logging

### 6. Run Backup Test

1. ทดสอบ backup process
2. ทดสอบ backup restore
3. ทดสอบ backup verification
4. บันทึก backup test results

## Rules

### 1. Backup Frequency

- Critical data: daily backup
- Important data: weekly backup
- Configuration: on change backup
- Logs: weekly backup

### 2. Backup Retention

- Daily backups: 7 days
- Weekly backups: 4 weeks
- Monthly backups: 12 months
- Yearly backups: 7 years

### 3. Backup Storage

- ใช้ multiple locations
- ใช้ offsite storage
- ใช้ encryption
- ใช้ access controls

### 4. Priority Levels

- Critical: backup ไม่ทำงาน
- High: backup ไม่ครบถ้วน
- Medium: backup ไม่ถูก verify
- Low: เป็น backup optimizations

## Expected Outcome

- Backup strategy ครบถ้วน
- Backup coverage ครบถ้วน
- Backup storage ปลอดภัย
- Backup verification ทำงานได้
- Backup automation ทำงานได้
- Backup tests ผ่าน

