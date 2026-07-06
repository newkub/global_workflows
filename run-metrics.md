---
title: Run Metrics
description: ดู metrics และ monitoring จาก production/staging environments
auto_execution_mode: 3
---


## Goal

ดู metrics และ monitoring จาก production/staging environments

## Execute

### 1. Connect to Monitoring

1. เชื่อมต่อกับ monitoring platform (Datadog, New Relic, Prometheus)
2. ตรวจสอบ authentication
3. เลือก environment ที่ต้องการดู

### 2. View Key Metrics

1. ดู application performance metrics
2. ดู error rates และ latency
3. ดู throughput และ resource usage
4. ดู business metrics ที่สำคัญ

### 3. Analyze Trends

1. เปรียบเทียบ metrics กับช่วงเวลาก่อนหน้า
2. ระบุ anomalies หรือ patterns ผิดปกติ
3. วิเคราะห์ correlations ระหว่าง metrics

### 4. Set Alerts

1. ตั้งค่า alerts สำหรับ metrics สำคัญ
2. กำหนด thresholds ที่เหมาะสม
3. ตั้งค่า notification channels

### 5. Export Reports

1. สร้าง dashboard reports
2. ส่ง metrics summary ให้ทีม
3. บันทึก historical data

## Rules

### 1. Metrics Selection

- เลือก metrics ที่สำคัญต่อ business
- ใช้ SLIs และ SLOs ที่ชัดเจน
- ตรวจสอบ golden signals (latency, traffic, errors, saturation)

### 2. Analysis Best Practices

- ดู metrics ในหลาย time ranges
- เปรียบเทียบระหว่าง environments
- ใช้ percentiles ไม่ใช่ averages

### 3. Alert Configuration

- ตั้งค่า alerts ที่ actionable
- หลีกเลี่ยง alert fatigue
- ใช้ multi-condition alerts

## Expected Outcome

- Metrics ถูกตรวจสอบอย่างสม่ำเสมอ
- Issues ถูกระบุจาก metrics
- Alerts ถูกตั้งค่าอย่างเหมาะสม
- Reports ถูกสร้างและแชร์
- Performance trends ถูกติดตาม

