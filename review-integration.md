---

title: Review Integration

description: Review integration points, external services และ data flow

auto_execution_mode: 3

related_workflows:
  - /review-api
  - /review-security
  - /review-performance

---

## Goal

Review integration layer ทั้งหมมเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม integration points, external services, API integrations, data flow

## Execute

### 1. Analyze Integration Points

1. ตรวจสอบ external service integrations
2. Review API integrations
3. Check webhooks
4. Validate data flow

### 2. Review API Integrations

1. Check API client implementations
2. Review API error handling
3. Validate API retry logic
4. Check API rate limiting

### 3. Review Webhooks

1. Check webhook handlers
2. Review webhook security
3. Validate webhook processing
4. Check webhook retries

### 4. Review Data Flow

1. Trace data flow between services
2. Check data transformation
3. Validate data consistency
4. Review data validation

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Fix integration issues
2. Improve error handling
3. Add retry logic
4. Improve data flow

## Rules

### 1. Integration Points

ตรวจสอบ integration points:

- External services documented
- API integrations ถูกต้อง
- Webhooks ปลอดภัย
- Data flow ชัดเจน
- Integration testing มี

### 2. API Integrations

ตรวจสอบ API integrations:

- API clients ถูกต้อง
- Error handling ดี
- Retry logic มี
- Rate limiting มี
- Timeouts ถูกต้อง

### 3. Webhooks

ตรวจสอบ webhooks:

- Webhook handlers ถูกต้อง
- Webhook security ดี
- Webhook processing ดี
- Webhook retries มี
- Idempotent operations

### 4. Data Flow

ตรวจสอบ data flow:

- Data flow ชัดเจน
- Data transformation ถูกต้อง
- Data consistency ดี
- Data validation มี
- Data tracking มี

### 5. Resilience

ตรวจสอบ resilience:

- Circuit breakers มี
- Fallback mechanisms มี
- Graceful degradation
- Timeout handling ดี
- ไม่ cascade failures

## Expected Outcome

- Integration points ดี
- API integrations ปลอดภัย
- Webhooks มีประสิทธิภาพ
- Data flow ชัดเจน
- Resilience สูง

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่มี retry logic
- Error handling แย่
- ไม่มี rate limiting
- Data inconsistency
- ไม่มี circuit breakers

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ไม่มี retry logic
- ❌ Error handling แย่
- ❌ ไม่มี rate limiting
- ❌ Data inconsistency
- ❌ ไม่มี circuit breakers

