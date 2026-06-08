---

title: Review Backup

description: Review backup strategy, recovery procedures และ disaster recovery

auto_execution_mode: 3

related_workflows:
  - /check-backup
  - /review-security
  - /review-database

---

## Goal

Review backup layer ทั้งหมมเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม backup strategy, recovery procedures, disaster recovery, data retention

## Execute

### 1. Analyze Backup Strategy

1. ตรวจสอบ backup schedule
2. Review backup types
3. Check backup retention
4. Validate backup locations

### 2. Review Recovery Procedures

1. Check restore procedures
2. Review recovery time objectives
3. Validate recovery testing
4. Check recovery documentation

### 3. Review Disaster Recovery

1. Check disaster recovery plan
2. Review failover procedures
3. Validate redundancy
4. Check business continuity

### 4. Review Backup Security

1. Check backup encryption
2. Review access controls
3. Validate backup integrity
4. Check backup monitoring

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Improve backup strategy
2. Fix recovery procedures
3. Enhance disaster recovery
4. Improve backup security

## Rules

### 1. Backup Strategy

ตรวจสอบ backup strategy:

- Backup schedule ถูกต้อง
- Backup types ครบถ้วน
- Backup retention ถูกต้อง
- Backup locations ปลอดภัย
- Incremental backups มี

### 2. Recovery Procedures

ตรวจสอบ recovery procedures:

- Restore procedures ชัดเจน
- RTO defined
- RPO defined
- Recovery testing มี
- Recovery documentation ครบถ้วน

### 3. Disaster Recovery

ตรวจสอบ disaster recovery:

- Disaster recovery plan มี
- Failover procedures ดี
- Redundancy มี
- Business continuity ดี
- DR testing มี

### 4. Backup Security

ตรวจสอบ backup security:

- Backup encryption มี
- Access controls ถูกต้อง
- Backup integrity ดี
- Backup monitoring มี
- ไม่ expose sensitive data

### 5. Monitoring

ตรวจสอบ monitoring:

- Backup monitoring มี
- Backup alerts มี
- Backup success tracking
- Backup failure handling
- Backup reporting มี

## Expected Outcome

- Backup strategy ดี
- Recovery procedures ชัดเจน
- Disaster recovery พร้อม
- Backup security ดี
- Monitoring ครบถ้วน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่มี backup
- Backup ไม่ encrypted
- ไม่มี recovery testing
- ไม่มี DR plan
- Backup monitoring ไม่มี

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ไม่มี backup
- ❌ Backup ไม่ encrypted
- ❌ ไม่มี recovery testing
- ❌ ไม่มี DR plan
- ❌ Backup monitoring ไม่มี
