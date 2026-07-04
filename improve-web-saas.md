---
title: Improve Web SaaS
description: ปรับปรุง web SaaS application ครบวงจรเพื่อความสมบูรณ์และ scalability
auto_execution_mode: 3
related_workflows:
  - /improve-web-performance
  - /improve-uxui
  - /improve-seo
  - /improve-integrations
  - /improve-security
  - /improve-scalability
  - /improve-database
  - /improve-error-handling
  - /improve-monitoring
  - /improve-dx
  - /follow-content-quality
---

## Goal

ปรับปรุง web SaaS application ครบวงจรเพื่อให้มีประสิทธิภาพ ใช้งานง่าย และ scalable

## Scope

ใช้สำหรับ web SaaS applications ทุกประเภท (B2B, B2C, marketplace, platform)

## Execute

### 1. Analyze SaaS Structure

วิเคราะห์โครงสร้าง SaaS ปัจจุบัน

1. ทำ `/analyze-project` เพื่อดูโครงสร้าง
2. ตรวจสอบ architecture patterns
3. ตรวจสอบ multi-tenancy implementation
4. ตรวจสอบ authentication และ authorization
5. ตรวจสอบ billing และ subscription logic
6. ถ้า project มี CLI tools ให้ตรวจสอบ API integration ด้วย
7. ถ้า project มี SDK ให้ตรวจสอบ developer API surface

### 2. Improve Performance

ปรับปรุง performance ครบวงจร

1. ทำ `/improve-web-performance` สำหรับ web performance
2. Optimize database queries
3. ใช้ caching อย่างเหมาะสม
4. Implement CDN
5. Optimize API responses

### 3. Improve UX/UI

ปรับปรุง UX/UI ครบวงจร

1. ทำ `/improve-uxui` สำหรับ UX/UI improvements
2. ปรับปรุง onboarding flow
3. ปรับปรุง user dashboard
4. ปรับปรุง settings interface
5. ปรับปรุง notification experience

### 4. Improve SEO

ปรับปรุง SEO ครบวงจร

1. ทำ `/improve-seo` สำหรับ SEO improvements
2. Optimize landing pages
3. Optimize content pages
4. Implement structured data
5. Monitor search performance

### 5. Improve Integrations

ปรับปรุง integrations ครบวงจร

1. ทำ `/improve-integrations` สำหรับ integrations
2. Improve third-party integrations
3. Improve API integrations
4. Improve webhook handling
5. Improve data synchronization

### 6. Improve Security

ปรับปรุง security ครบวงจร

1. ทำ `/improve-security` สำหรับ security improvements
2. Implement multi-factor authentication
3. Improve data encryption
4. Improve access control
5. Implement security monitoring

### 7. Improve Scalability

ปรับปรุง scalability

1. ทำ `/improve-scalability` สำหรับ scalability improvements
2. Optimize database for scale
3. Implement horizontal scaling
4. Implement load balancing
5. Optimize resource usage

### 8. Improve Database

ปรับปรุง database operations

1. ทำ `/improve-database` สำหรับ database improvements
2. Optimize queries
3. Implement proper indexing
4. Improve connection pooling
5. Implement data archiving

### 9. Improve Error Handling

ปรับปรุง error handling

1. ทำ `/improve-error-handling` สำหรับ error handling
2. Implement global error handling
3. Improve error messages
4. Implement error tracking
5. Improve error recovery

### 10. Improve Monitoring

ปรับปรุง monitoring และ observability

1. ทำ `/improve-monitoring` สำหรับ monitoring improvements
2. Implement application monitoring
3. Implement business metrics
4. Implement alerting
5. Implement logging

### 11. Improve Developer Experience

ปรับปรุง developer experience

1. ทำ `/improve-dx` สำหรับ DX improvements
2. Improve build times
3. Improve deployment process
4. Improve local development
5. Improve documentation

### 12. Verify And Report

ตรวจสอบผลการปรับปรุง

1. ทำ `/check-correctness` เพื่อ verify การเปลี่ยนแปลง
2. ทำ `/run-verify` เพื่อตรวจสอบ quality รวม
3. ทำ `/report` เพื่อสรุปการปรับปรุงครบวงจร

## Rules

### 1. Multi-Tenancy

Multi-tenancy ต้อง secure และ isolated

- Implement proper tenant isolation
- Use tenant-aware data access
- Implement tenant-specific configurations
- Monitor tenant resource usage
- Implement tenant migration strategies

### 2. Authentication And Authorization

Auth ต้อง secure และ flexible

- Implement OAuth2/OIDC
- Implement role-based access control
- Implement session management
- Implement API key management
- Monitor authentication attempts

### 3. Billing And Subscriptions

Billing ต้อง accurate และ reliable

- Integrate with payment gateways (Stripe)
- Implement subscription management
- Implement usage tracking
- Implement billing notifications
- Handle payment failures gracefully

### 4. Data Privacy

Data privacy ต้อง compliant

- Implement GDPR compliance
- Implement data retention policies
- Implement data export functionality
- Implement data deletion
- Implement consent management

### 5. Performance Targets

ทำตามเป้าหมาย performance

- Page load time: < 2s
- API response time: < 200ms
- Database query time: < 100ms
- Uptime: > 99.9%
- Error rate: < 0.1%

### 6. Security Standards

ทำตาม security standards

- Implement HTTPS everywhere
- Use secure headers
- Implement rate limiting
- Implement input validation
- Regular security audits

### 7. Monitoring Requirements

Monitoring ต้องครบถ้วน

- Monitor application health
- Monitor business metrics
- Monitor user behavior
- Monitor costs
- Set up proactive alerting

## Expected Outcome

- Performance ดีและเร็ว
- UX/UI ใช้งานง่ายและเป็นมิตร
- SEO ดีและ ranking สูง
- Integrations stable และ reliable
- Security เข้มงวด
- Scalable และ handle growth ได้
- Database operations efficient
- Error handling robust
- Monitoring ครบถ้วน
- Developer experience ดี
- SaaS application พร้อมสำหรับ production
