---

title: Review Security

description: Review security vulnerabilities, authentication และ authorization

auto_execution_mode: 3

related_workflows:
  - /check-vulnerability
  - /check-security
  - /fix-vulnerability

---

## Goal

Review security ทั้งหมดเพื่อระบุและแก้ไข vulnerabilities ตาม priority

## Scope

ครอบคลุม authentication, authorization, data protection, dependencies

## Execute

### 1. Analyze Authentication

1. ตรวจสอบ authentication implementation
2. Review session management
3. Check password handling
4. Validate MFA implementation

### 2. Review Authorization

1. Check role-based access
2. Review permission checks
3. Validate API authorization
4. Check resource access

### 3. Check Data Protection

1. Review encryption usage
2. Check data masking
3. Validate secure storage
4. Review data transmission

### 4. Scan Vulnerabilities

1. Run dependency scan
2. Check for known vulnerabilities
3. Review code for security issues
4. Validate configuration security

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Fix critical vulnerabilities
2. Improve authentication
3. Fix authorization issues
4. Update dependencies

## Rules

### 1. Authentication

ตรวจสอบ authentication:

- มี authentication ที่ strong
- ใช้ secure password hashing
- มี session management
- มี MFA support
- ไม่ store passwords plain text

### 2. Authorization

ตรวจสอบ authorization:

- มี role-based access
- มี permission checks
- ไม่ expose sensitive data
- ม principle of least privilege
- ไม่ have authorization bypass

### 3. Data Protection

ตรวจสอบ data protection:

- ใช้ encryption
- มี data masking
- ไม่ log sensitive data
- ใช้ HTTPS
- มี secure headers

### 4. Dependencies

ตรวจสอบ dependencies:

- ไม่มี known vulnerabilities
- Dependencies up to date
- ใช้ lock files
- Review new dependencies
- มี dependency scanning

### 5. Configuration

ตรวจสอบ configuration:

- ไม่ hardcode secrets
- ใช้ environment variables
- มี secrets management
- ไม่ commit secrets
- มี secure defaults

## Expected Outcome

- Security vulnerabilities ถูกแก้ไข
- Authentication ปลอดภัย
- Authorization ถูกต้อง
- Data ถูกปกป้อง
- Dependencies ปลอดภัย

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Hardcode secrets
- ไม่มี authentication
- ไม่ validate input
- Dependencies ล้าสมัย
- ไม่ใช้ HTTPS

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Hardcode secrets
- ❌ ไม่มี authentication
- ❌ ไม่ validate input
- ❌ Dependencies ล้าสมัย
- ❌ ไม่ใช้ HTTPS

