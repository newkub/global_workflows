---
title: Check Monitoring
description: ตรวจสอบ monitoring setup และ alerting configuration
auto_execution_mode: 3
related_workflows:
  - /run-metrics
---

## Goal

ตรวจสอบ monitoring setup และ alerting configuration ครบถ้วน

## Execute

### 1. Check Monitoring Setup

1. ตรวจสอบ monitoring tools ติดตั้งและ config
2. ตรวจสอบ metrics collection
3. ตรวจสอบ dashboards สำหรับ visualization
4. ตรวจสอบ monitoring coverage

### 2. Check Alerting Configuration

1. ตรวจสอบ alert rules ครบถ้วน
2. ตรวจสอบ alert thresholds ถูกต้อง
3. ตรวจสอบ alert notification channels
4. ตรวจสอบ alert escalation policies

### 3. Check Metrics Collection

1. ตรวจสอบ business metrics
2. ตรวจสอบ technical metrics
3. ตรวจสอบ custom metrics
4. ตรวจสอบ metrics retention

### 4. Check Logging Integration

1. ตรวจสอบ logs ถูกส่งไป monitoring
2. ตรวจสอบ log parsing และ indexing
3. ตรวจสอบ log alerts
4. ตรวจสอบ log correlation

### 5. Check Uptime Monitoring

1. ตรวจสอบ uptime monitors
2. ตรวจสอบ health checks
3. ตรวจสอบ synthetic monitoring
4. ตรวจสอง real user monitoring

### 6. Run Monitoring Test

1. ทดสอบ monitoring pipeline
2. ทดสอบ alert delivery
3. ทดสอบ dashboard accuracy
4. ทดสอบ metrics accuracy

## Rules

### 1. Monitoring Coverage

- ตรวจสอบ critical services ทั้งหมด
- ตรวจสอบ key business metrics
- ตรวจสอบ technical metrics สำคัญ
- ตรวจสอบ user-facing metrics

### 2. Alerting Best Practices

- ตั้งค่า alerts ที่ actionable
- หลีกเลี่ยง alert fatigue
- ใช้ multi-condition alerts
- ตั้งค่า alert escalation

### 3. Metrics Quality

- ใช้ meaningful metrics
- ใช้ consistent naming
- ใช้ appropriate granularity
- ใช้ appropriate retention

### 4. Priority Levels

- Critical: monitoring ขาดสำหรับ services สำคัญ
- High: alerts ไม่ทำงาน
- Medium: metrics ขาด
- Low: เป็น monitoring optimizations

## Expected Outcome

- Monitoring setup ครบถ้วน
- Alerting configuration ถูกต้อง
- Metrics collection ทำงานได้
- Logging integration ทำงานได้
- Uptime monitoring ทำงานได้
- Alerts ส่งถูกต้อง
