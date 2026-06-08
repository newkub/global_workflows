---

title: Review Scalability

description: Review scalability potential, bottlenecks และ scaling strategies

auto_execution_mode: 3

related_workflows:
  - /review-performance
  - /review-database
  - /review-architecture

---

## Goal

Review scalability layer ทั้งหมมเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม scalability potential, bottlenecks, horizontal/vertical scaling, load balancing

## Execute

### 1. Analyze Scalability

1. ตรวจสอบ current capacity
2. Review scaling requirements
3. Identify bottlenecks
4. Validate scaling strategy

### 2. Review Horizontal Scaling

1. Check stateless design
2. Review load balancing
3. Validate auto-scaling
4. Check service discovery

### 3. Review Vertical Scaling

1. Check resource utilization
2. Review optimization opportunities
3. Validate resource limits
4. Check performance tuning

### 4. Review Database Scaling

1. Check database capacity
2. Review read replicas
3. Validate sharding strategy
4. Check caching strategy

### 5. Prioritize And Report

1. Group issues ตาม impact
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Remove bottlenecks
2. Implement horizontal scaling
3. Optimize resources
4. Improve database scaling

## Rules

### 1. Scalability Design

ตรวจสอบ scalability design:

- Stateless design
- Horizontal scaling possible
- Vertical scaling optimized
- Bottlenecks identified
- Scaling strategy clear

### 2. Horizontal Scaling

ตรวจสอบ horizontal scaling:

- Load balancing ดี
- Auto-scaling มี
- Service discovery มี
- Session management ดี
- ไม่ stateful bottlenecks

### 3. Vertical Scaling

ตรวจสอบ vertical scaling:

- Resource utilization ดี
- Optimization มี
- Resource limits ถูกต้อง
- Performance tuning ดี
- Cost-effective

### 4. Database Scaling

ตรวจสอบ database scaling:

- Database capacity ดี
- Read replicas มี
- Sharding strategy ดี
- Caching strategy ดี
- Connection pooling ดี

### 5. Caching Strategy

ตรวจสอบ caching strategy:

- Caching layers มี
- Cache invalidation ดี
- Cache hit rate สูง
- Distributed caching ถ้าจำเป็น
- ไม่ cache busting

## Expected Outcome

- Scalability potential สูง
- Bottlenecks ถูกแก้ไข
- Horizontal scaling พร้อม
- Vertical scaling optimized
- Database scaling ดี

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Stateful design
- ไม่มี load balancing
- Database bottleneck
- ไม่มี caching
- ไม่ optimize resources

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Stateful design
- ❌ ไม่มี load balancing
- ❌ Database bottleneck
- ❌ ไม่มี caching
- ❌ ไม่ optimize resources
