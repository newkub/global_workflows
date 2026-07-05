---
title: Improve Monitoring
description: ปรับปรุง monitoring และ observability ครบวงจร
auto_execution_mode: 3
related_workflows:
  - improve-codebase
  - improve-error-handling
---

## Goal

ปรับปรุง monitoring และ observability ครบวงจรเพื่อติดตามและวิเคราะห์ระบบ

## Scope

ใช้สำหรับการตั้งค่าและปรับปรุง monitoring, logging, metrics, tracing, และ alerting

## Execute

### 1. Logging

ตั้งค่า logging ที่มีโครงสร้างและเป็นระบบ

1. ใช้ structured logging (JSON format)
2. กำหนด log levels ที่ชัดเจน (error, warn, info, debug)
3. เพิ่ม context ใน logs (request ID, user ID, timestamp)
4. ตั้งค่า log rotation และ retention
5. ใช้ log aggregation service (เช่น Loki, CloudWatch)
6. หลีกเลี่ยง logging sensitive data

### 2. Metrics

ตั้งค่า metrics สำหรับ monitoring ระบบ

1. ตั้งค่า business metrics (DAU, revenue, conversion)
2. ตั้งค่า system metrics (CPU, memory, disk, network)
3. ตั้งค่า application metrics (request rate, error rate, latency)
4. ใช้ Prometheus หรือ CloudWatch metrics
5. ตั้งค่า custom metrics สำหรับ critical paths
6. ตั้งค่า metric labels สำหรับ filtering

### 3. Tracing

ตั้งค่า distributed tracing สำหรับ debug

1. ใช้ OpenTelemetry หรือ Jaeger
2. ตั้งค่า trace propagation ข้าม services
3. ติดตาม request lifecycle ตั้งแต่เริ่มจนจบ
4. ตั้งค่า sampling rate ที่เหมาะสม
5. เชื่อมต่อ traces กับ logs และ metrics

### 4. Alerting

ตั้งค่า alerting สำหรับติดตามปัญหา

1. ตั้งค่า error alerts (error rate spike)
2. ตั้งค่า performance alerts (latency threshold)
3. ตั้งค่า availability alerts (service down)
4. ตั้งค่า business alerts (revenue drop)
5. ใช้ PagerDuty, Slack, หรือ email notifications
6. ตั้งค่า alert escalation rules

### 5. Dashboard

สร้าง dashboard สำหรับ monitoring

1. สร้าง real-time monitoring dashboard
2. แสดง key metrics และ KPIs
3. สร้าง dashboard สำหรับแต่ละ service
4. สร้าง dashboard สำหรับ business metrics
5. ตั้งค่า dashboard refresh rate
6. แชร์ dashboard กับทีม

## Rules

### 1. Structured Logging

ใช้ structured logging เสมอ

- Log เป็น JSON format
- ใส่ context ที่จำเป็นในทุก log
- ใช้ log levels ที่ถูกต้อง
- ไม่ log sensitive data

### 2. Metrics Naming

ตั้งชื่อ metrics ตามมาตรฐาน

- ใช้ snake_case
- ใส่ unit ในชื่อ (เช่น request_duration_seconds)
- ใช้ labels สำหรับ dimensions
- หลีกเลี่ยง high cardinality labels

### 3. Alert Thresholds

ตั้งค่า alert thresholds อย่างระมัดระวัง

- ไม่ตั้ง threshold ต่ำเกินไป (false positives)
- ไม่ตั้ง threshold สูงเกินไป (missed issues)
- ทดสอบ alerts ก่อนใช้งานจริง
- ปรับ threshold ตาม usage patterns

### 4. Cost Awareness

คำนึงถึง cost ของ monitoring

- ตั้งค่า sampling rate ที่เหมาะสม
- ตั้งค่า retention policy
- ไม่ collect metrics/logs ที่ไม่จำเป็น
- ตรวจสอบ monitoring cost ประจำ

## Expected Outcome

- Logging มีโครงสร้างและค้นหาง่าย
- Metrics ครอบคลุมทั้ง system และ business
- Tracing ช่วย debug ปัญหาได้รวดเร็ว
- Alerts แจ้งเตือนปัญหาที่สำคัญ
- Dashboard แสดงภาพรวมของระบบ
- Monitoring cost อยู่ในงบประมาณ
