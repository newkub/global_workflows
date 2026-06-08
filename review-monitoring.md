---

title: Review Monitoring

description: Review monitoring setup, alerting และ dashboards

auto_execution_mode: 3

related_workflows:
  - /check-monitoring
  - /review-logging
  - /review-performance

---

## Goal

Review monitoring layer ทั้งหมดเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม monitoring setup, alerting, dashboards, metrics collection

## Execute

### 1. Analyze Monitoring Setup

1. ตรวจสอบ monitoring tools
2. Review metrics collection
3. Check data retention
4. Validate monitoring coverage

### 2. Review Alerting

1. Check alert rules
2. Review alert channels
3. Validate alert thresholds
4. Check alert escalation

### 3. Review Dashboards

1. Check dashboard completeness
2. Review visualization
3. Validate data accuracy
4. Check dashboard accessibility

### 4. Check Metrics

1. Review metric types
2. Check metric naming
3. Validate metric labels
4. Review metric aggregation

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Improve monitoring setup
2. Fix alerting issues
3. Improve dashboards
4. Add missing metrics

## Rules

### 1. Monitoring Setup

ตรวจสอบ monitoring setup:

- มี monitoring tools
- Metrics collected
- Data retention ถูกต้อง
- Monitoring coverage ครบถ้วน
- Real-time monitoring

### 2. Alerting

ตรวจสอบ alerting:

- Alert rules ถูกต้อง
- Alert channels ครบถ้วน
- Alert thresholds ถูกต้อง
- Alert escalation ดี
- ไม่ alert มากเกินไป

### 3. Dashboards

ตรวจสอบ dashboards:

- Dashboards ครบถ้วน
- Visualization ดี
- Data accurate
- Dashboards accessible
- Real-time updates

### 4. Metrics

ตรวจสอบ metrics:

- Metric types ถูกต้อง
- Metric naming consistent
- Metric labels ดี
- Metric aggregation ถูกต้อง
- Metrics meaningful

### 5. Incident Response

ตรวจสอบ incident response:

- มี runbooks
- มี on-call rotation
- Incident tracking ดี
- Post-mortems ทำ
- Learning culture

## Expected Outcome

- Monitoring setup ดี
- Alerting มีประสิทธิภาพ
- Dashboards มีประโยชน์
- Metrics ครบถ้วน
- Incident response ดี

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่มี monitoring
- Alert มากเกินไป
- Dashboards ไม่มีประโยชน์
- Metrics ไม่ meaningful
- ไม่มี runbooks

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ไม่มี monitoring
- ❌ Alert มากเกินไป
- ❌ Dashboards ไม่มีประโยชน์
- ❌ Metrics ไม่ meaningful
- ❌ ไม่มี runbooks
