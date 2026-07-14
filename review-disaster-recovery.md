---
title: Review Disaster Recovery
description: Review DR plan ครอบคลุม RPO/RTO, failover, data backup และ recovery procedures
auto_execution_mode: 3
related:
  - /deep-analyze-codebase
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Review disaster recovery quality ครอบคลุม RPO/RTO targets, failover strategy, data backup และ recovery procedures

## Scope

RPO/RTO definition, failover strategy, data backup, recovery procedures, DR testing และ DR documentation

## Execute

### 1. Prepare

1. ทำ `/scan-codebase` เพื่อเข้าใจ disaster recovery setup
2. ระบุ critical services, data stores และ existing DR strategy

### 2. Deep Analyze

1. ทำ `/deep-analyze-codebase` เพื่อสร้าง `analyze-disaster-recovery.ts` ใน `.devin/scripts/analyze/`
2. Script ตรวจสอบ RPO/RTO targets: definition per service, measurement method, compliance status
3. Script ตรวจสอบ failover strategy: active-passive vs active-active, failover trigger, failback procedure
4. Script ตรวจสอบ data backup: backup frequency, backup type, backup storage, backup encryption
5. Script ตรวจสอบ recovery procedures: recovery steps, recovery time estimation, recovery validation
6. Script ตรวจสอบ DR testing: test frequency, test scope, test documentation, automated DR test
7. Script ตรวจสอบ DR documentation: runbook, contact list, escalation procedure, dependency map
8. Script ตรวจสอบ single points of failure: redundant services, data replication, geographic distribution
9. Script คำนวณ DR health score และ output เป็น structured JSON

### 3. Validate Findings

1. ทำ `/validate` สำหรับ validate issues แต่ละอย่าง
2. จัดลำดับการ validate ตาม severity

### 4. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง findings และ recommended actions
3. ทำ `/suggest-next-action`

## Rules

### 1. Severity Classification

- **Critical**: no backup, no failover, single point of failure บน critical service
- **High**: missing RPO/RTO, no DR testing, missing recovery procedure
- **Medium**: inconsistent backup, missing DR documentation, minor failover gap
- **Low**: DR naming convention, minor procedure improvement

### 2. Evidence-Based Findings

- ทุก finding ต้องมี file path และ line number

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง findings พร้อม severity และ location
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
