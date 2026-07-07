---
title: Analyze Incident Response
description: วิเคราะห์ incident handling, runbooks, alerting rules, post-mortem templates
auto_execution_mode: 3
related_workflows:
  - /analyze-monitoring
  - /analyze-observability
  - /improve-reliability
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ incident response readiness เพื่อระบุ gaps ใน incident handling process

## Scope

Incident handling, runbooks, alerting rules, post-mortem templates, on-call procedures, incident classification, communication templates

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม incident response metrics ผ่าน scripts (alert scan, runbook detection, process analysis)

### 2. Check Incident Classification

1. ระบุ missing incident severity levels (SEV1-SEV4)
2. ระบุ missing incident type classification
3. ระบุ missing escalation matrix
4. ระบุ missing incident declaration criteria
5. ระบุ missing incident prioritization guidelines

### 3. Check Alerting Rules

1. ระบุ missing alerting thresholds
2. ระบุ alert fatigue (too many low-priority alerts)
3. ระบุ missing alert routing
4. ระบุ missing alert deduplication
5. ระบุ missing alert acknowledgment mechanism
6. ระบุ missing alert escalation policies

### 4. Check Runbooks

1. ระบุ missing runbooks สำหรับ common incidents
2. ระบุ runbooks ที่ outdated หรือ incomplete
3. ระบุ missing automated runbook steps
4. ระบุ missing runbook testing
5. ระบุ missing runbook ownership

### 5. Check On-Call Procedures

1. ระบุ missing on-call schedule
2. ระบุ missing on-call handoff process
3. ระบุ missing on-call escalation path
4. ระบุ missing on-call backup coverage
5. ระบุ missing on-call training

### 6. Check Post-Mortem Process

1. ระบุ missing post-mortem templates
2. ระบุ missing post-mortem process guidelines
3. ระบุ missing blameless post-mortem culture
4. ระบุ missing action item tracking
5. ระบุ missing post-mortem review schedule

### 7. Check Communication

1. ระบุ missing incident communication templates
2. ระบุ missing status page integration
3. ระบุ missing stakeholder notification process
4. ระบุ missing customer communication guidelines
5. ระบุ missing incident timeline documentation

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: alerting → incident classification → runbooks → on-call → post-mortem → communication

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม gap description และ severity

### 2. Severity Classification

- **Critical**: no alerting, no incident classification, no on-call
- **High**: missing runbooks, missing escalation, missing post-mortem
- **Medium**: alert fatigue, missing communication, outdated runbooks
- **Low**: missing training, missing testing, missing backup coverage

### 3. Framework Awareness

- ตรวจสอบ monitoring tool alerting capabilities
- ตรวจสอบ status page integration
- ระบุ incident response tooling

### 4. Use Scripts For Incident Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` เมื่อต้อง scan configuration files

## Expected Outcome

- Incident response gaps ระบุพร้อม severity
- Alerting และ runbook issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-reliability`
