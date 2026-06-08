---

title: Review CI/CD

description: Review CI/CD pipeline, deployment strategy และ build process

auto_execution_mode: 3

related_workflows:
  - /setup-github-actions
  - /review-security
  - /review-performance

---

## Goal

Review CI/CD layer ทั้งหมมเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม CI/CD pipeline, deployment strategy, build process, rollback

## Execute

### 1. Analyze CI Pipeline

1. ตรวจสอบ CI configuration
2. Review build steps
3. Check test execution
4. Validate build times

### 2. Review CD Pipeline

1. Check deployment strategy
2. Review deployment steps
3. Validate environment promotion
4. Check rollback procedures

### 3. Review Build Process

1. Check build configuration
2. Review dependency management
3. Validate artifact management
4. Check build caching

### 4. Review Security

1. Check secret management
2. Review access controls
3. Validate security scanning
4. Check compliance

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Improve CI pipeline
2. Fix deployment issues
3. Optimize build process
4. Enhance security

## Rules

### 1. CI Pipeline

ตรวจสอบ CI pipeline:

- CI configuration ถูกต้อง
- Build steps ครบถ้วน
- Tests execute
- Build times ดี
- Parallel execution

### 2. CD Pipeline

ตรวจสอบ CD pipeline:

- Deployment strategy ดี
- Deployment steps ปลอดภัย
- Environment promotion ถูกต้อง
- Rollback procedures ดี
- Zero-downtime deployment

### 3. Build Process

ตรวจสอบ build process:

- Build configuration ถูกต้อง
- Dependency management ดี
- Artifact management ดี
- Build caching มี
- Build reproducible

### 4. Security

ตรวจสอบ security:

- Secret management ปลอดภัย
- Access controls ถูกต้อง
- Security scanning มี
- Compliance ผ่าน
- ไม่ expose secrets

### 5. Monitoring

ตรวจสอบ monitoring:

- Build monitoring มี
- Deployment monitoring มี
- Alerting ดี
- Logs collected
- Metrics tracked

## Expected Outcome

- CI pipeline มีประสิทธิภาพ
- CD pipeline ปลอดภัย
- Build process ดี
- Security ถูกรักษา
- Monitoring ครบถ้วน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Build times ช้า
- ไม่มี rollback
- Secret management แย่
- ไม่มี monitoring
- Deployment เสี่ยง

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Build times ช้า
- ❌ ไม่มี rollback
- ❌ Secret management แย่
- ❌ ไม่มี monitoring
- ❌ Deployment เสี่ยง
