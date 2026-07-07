---
title: Analyze Backup Recovery
description: วิเคราะห์ backup strategy, recovery procedures, disaster recovery
auto_execution_mode: 3
related_workflows:
  - /analyze-database
  - /analyze-deployment
  - /improve-backup-recovery
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ backup และ recovery strategy เพื่อระบุ data loss risks และ recovery gaps

## Scope

Backup strategy, recovery procedures, disaster recovery, backup verification, RTO/RPO, backup encryption, point-in-time recovery

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม backup metrics ผ่าน scripts (backup config scan, recovery procedure detection)

### 2. Check Backup Strategy

1. ระบุ missing backup schedule
2. ระบุ missing backup types (full, incremental, differential)
3. ระบุ missing backup retention policy
4. ระบุ missing backup encryption
5. ระบุ missing backup verification
6. ระบุ backup frequency ที่ไม่เหมาะสม

### 3. Check Recovery Procedures

1. ระบุ missing recovery procedures
2. ระบุ missing recovery documentation
3. ระบุ missing recovery testing
4. ระบุ missing recovery time objectives (RTO)
5. ระบุ missing recovery point objectives (RPO)
6. ระบุ missing point-in-time recovery capability

### 4. Check Disaster Recovery

1. ระบุ missing disaster recovery plan
2. ระบุ missing failover mechanism
3. ระบุ missing multi-region replication
4. ระบุ missing disaster recovery testing
5. ระบุ missing disaster recovery documentation
6. ระบุ missing disaster recovery roles และ responsibilities

### 5. Check Data Export And Import

1. ระบุ missing data export capability
2. ระบุ missing data import capability
3. ระบุ missing data migration tools
4. ระบุ missing data format standardization
5. ระบุ missing data validation ใน import/export

### 6. Check Backup Security

1. ระบุ missing backup access controls
2. ระบุ missing backup audit trail
3. ระบุ missing backup encryption at rest
4. ระบุ missing backup encryption in transit
5. ระบุ missing backup key management

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: backup strategy → recovery → disaster recovery → security → export/import

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity และ data loss risk

### 2. Severity Classification

- **Critical**: no backups, no recovery plan, no disaster recovery
- **High**: missing recovery testing, missing encryption, missing RTO/RPO
- **Medium**: missing verification, missing failover, missing export/import
- **Low**: missing audit trail, missing key management, missing documentation

### 3. Framework Awareness

- ตรวจสอบ Supabase backup configuration
- ตรวจสอบ PostgreSQL backup strategies
- ตรวจสอบ Cloudflare R2 backup patterns

### 4. Use Scripts For Backup Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ configuration scanning

## Expected Outcome

- Backup และ recovery gaps ระบุพร้อม severity และ data loss risk
- Backup strategy และ disaster recovery issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-backup-recovery`
