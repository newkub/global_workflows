---

title: Review Performance

description: Review application performance, bottlenecks และ optimization opportunities

auto_execution_mode: 3

related_workflows:
  - /check-performance
  - /review-database
  - /review-frontend-optimization

---

## Goal

Review performance ทั้งหมดเพื่อระบุและแก้ไข bottlenecks ตาม priority

## Scope

ครอบคลุม database performance, API performance, frontend performance, caching

## Execute

### 1. Analyze Performance Metrics

1. ตรวจสอบ performance metrics
2. Review load test results
3. Check monitoring data
4. Identify bottlenecks

### 2. Review Database Performance

1. Check slow queries
2. Review index usage
3. Analyze connection pooling
4. Check query optimization

### 3. Review API Performance

1. Check response times
2. Review endpoint performance
3. Analyze caching strategy
4. Check rate limiting

### 4. Review Frontend Performance

1. Check bundle size
2. Review rendering performance
3. Analyze loading times
4. Check Core Web Vitals

### 5. Prioritize And Report

1. Group issues ตาม impact
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Fix critical bottlenecks
2. Optimize slow queries
3. Improve caching
4. Optimize bundle size

## Rules

### 1. Database Performance

ตรวจสอบ database performance:

- ไม่มี slow queries
- ใช้ indexes อย่างถูกต้อง
- มี connection pooling
- ใช้ query caching
- ไม่มี N+1 queries

### 2. API Performance

ตรวจสอบ API performance:

- Response times < 200ms
- มี caching strategy
- มี rate limiting
- ใช้ compression
- ไม่มี blocking operations

### 3. Frontend Performance

ตรวจสอบ frontend performance:

- Bundle size < 500KB
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- ใช้ lazy loading

### 4. Caching Strategy

ตรวจสอบ caching:

- มี caching strategy
- มี cache invalidation
- ใช้ CDN
- มี browser caching
- ไม่ cache sensitive data

### 5. Monitoring

ตรวจสอบ monitoring:

- มี performance monitoring
- มี alerting
- มี logging
- มี metrics
- มี dashboards

## Expected Outcome

- Performance ดีขึ้นอย่างชัดเจน
- Bottlenecks ถูกแก้ไข
- Caching ใช้งานได้
- Monitoring ครบถ้วน
- Core Web Vitals ผ่าน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- ไม่มี caching
- Bundle size ใหญ่เกินไป
- Slow queries
- ไม่มี monitoring
- ไม่ optimize images

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ ไม่มี caching
- ❌ Bundle ขนาดใหญ่
- ❌ N+1 queries
- ❌ ไม่มี monitoring
- ❌ ไม่ optimize assets

