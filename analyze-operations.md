---
title: Analyze Operations
description: วิเคราะห์ operations: deployment, monitoring, observability, compliance, cost, backup, incident, health check, versioning, integration
auto_execution_mode: 3
related_workflows:
  - /analyze-deployment
  - /analyze-monitoring
  - /analyze-observability
  - /analyze-compliance
  - /analyze-cost
  - /analyze-backup-recovery
  - /analyze-incident-response
  - /analyze-versioning
  - /analyze-integration
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ operations และ production readiness ของ codebase

## Scope

Deployment, monitoring, observability, compliance, cost, backup recovery, incident response, versioning, integration

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม operations metrics ผ่าน scripts (deployment scan, config analysis, monitoring detection)

### 2. Analyze Deployment And Versioning

1. ถ้า project มี deployment ให้ทำ `/analyze-deployment` วิเคราะห์ CI/CD, Dockerfile, rollback
2. ถ้า project มี releases ให้ทำ `/analyze-versioning` วิเคราะห์ semver compliance, changelog quality

### 3. Analyze Monitoring And Observability

1. ถ้า project มี production ให้ทำ `/analyze-monitoring` วิเคราะห์ observability, alerting, health checks
2. ถ้า project มี production ให้ทำ `/analyze-observability` วิเคราะห์ distributed tracing, spans, metrics

### 4. Analyze Compliance And Cost

1. ถ้า project มี user data ให้ทำ `/analyze-compliance` วิเคราะห์ GDPR, privacy, data retention
2. ถ้า project มี cloud deployment ให้ทำ `/analyze-cost` วิเคราะห์ cloud cost optimization, resource utilization

### 5. Analyze Resilience

1. ถ้า project มี database ให้ทำ `/analyze-backup-recovery` วิเคราะห์ backup strategy, recovery procedures
2. ถ้า project มี production ให้ทำ `/analyze-incident-response` วิเคราะห์ incident handling, runbooks, alerting rules

### 6. Analyze Integrations

1. ถ้า project มี third-party integrations ให้ทำ `/analyze-integration` วิเคราะห์ integration quality, API client patterns, vendor lock-in

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: deployment → versioning → backup recovery → monitoring → observability → incident response → integration → cost → compliance

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Conditional Execution

- ถ้า project ไม่มี deployment ให้ข้าม `/analyze-deployment`
- ถ้า project ไม่มี production ให้ข้าม `/analyze-monitoring`, `/analyze-observability`, `/analyze-incident-response`
- ถ้า project ไม่มี user data ให้ข้าม `/analyze-compliance`
- ถ้า project ไม่มี cloud deployment ให้ข้าม `/analyze-cost`
- ถ้า project ไม่มี database ให้ข้าม `/analyze-backup-recovery`
- ถ้า project ไม่มี releases ให้ข้าม `/analyze-versioning`
- ถ้า project ไม่มี third-party integrations ให้ข้าม `/analyze-integration`

### 3. Severity Classification

- **Critical**: no backup, no incident response, vendor lock-in ใน core logic
- **High**: missing monitoring, missing deployment rollback, missing changelog
- **Medium**: missing cost tracking, missing compliance checks, missing integration tests
- **Low**: missing versioning policy, missing observability correlation

### 4. Use Scripts For Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ config pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

### 5. Non-Redundancy

- แต่ละ sub-workflow มี scope ที่ไม่ทับซ้อนกัน
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก sub-workflows

## Expected Outcome

- Operations gaps ระบุพร้อม severity
- พร้อมสำหรับ orchestrator consolidation หรือ `/improve-operations`
