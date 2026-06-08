---

title: Review Configuration

description: Review configuration management, environment variables และ secrets

auto_execution_mode: 3

related_workflows:
  - /check-configuration
  - /review-security
  - /follow-config

---

## Goal

Review configuration layer ทั้งหมมเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม configuration management, environment variables, secrets, validation

## Execute

### 1. Analyze Configuration

1. ตรวจสอบ config files
2. Review environment variables
3. Check secrets management
4. Validate config validation

### 2. Review Environment Variables

1. Check environment variable usage
2. Review default values
3. Validate variable naming
4. Check variable documentation

### 3. Review Secrets Management

1. Check secret storage
2. Review secret access
3. Validate secret rotation
4. Check secret encryption

### 4. Review Config Validation

1. Check config validation
2. Review config schema
3. Validate config defaults
4. Check config error handling

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Fix configuration issues
2. Improve secrets management
3. Add config validation
4. Document configuration

## Rules

### 1. Configuration Management

ตรวจสอบ configuration management:

- Config files organized
- Config validation มี
- Config schema มี
- Config defaults ดี
- Config error handling ดี

### 2. Environment Variables

ตรวจสอบ environment variables:

- Environment variables documented
- Default values มี
- Variable naming consistent
- Variable types ถูกต้อง
- ไม่ hardcode values

### 3. Secrets Management

ตรวจสอบ secrets management:

- Secrets encrypted
- Secrets not in code
- Secret access controlled
- Secret rotation มี
- Secrets not in git

### 4. Config Validation

ตรวจสอบ config validation:

- Config validation มี
- Config schema ถูกต้อง
- Config defaults ดี
- Config error handling ดี
- Validation early

### 5. Documentation

ตรวจสอบ documentation:

- Config documented
- Environment variables documented
- Secrets documented
- Examples มี
- Up to date

## Expected Outcome

- Configuration management ดี
- Environment variables ถูกต้อง
- Secrets ปลอดภัย
- Config validation มี
- Documentation ครบถ้วน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Hardcode values
- Secrets in code
- ไม่มี validation
- ไม่ document config
- Config ไม่ organized

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Hardcode values
- ❌ Secrets in code
- ❌ ไม่มี validation
- ❌ ไม่ document config
- ❌ Config ไม่ organized
