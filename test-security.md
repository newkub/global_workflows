---
title: Test Security
description: ทดสอบ security vulnerabilities และป้องกันการโจมตี
auto_execution_mode: 3
related_workflows:
  - /test-api
  - /test-function
  - /check-vulnerability
url: https://owasp.org/www-project-top-ten/
---

## Goal

ทดสอบ security vulnerabilities ให้ครบถ้วน รวม XSS, SQL Injection, CSRF, dependency scanning และ secret detection

## Execute

### 1. Setup Security Testing Tools

1. ติดตั้ง security scanning tools (Snyk, OWASP ZAP, npm audit)
2. ตั้งค่า SAST tools สำหรับ static analysis
3. ตั้งค่า DAST tools สำหรับ dynamic analysis
4. Configure dependency scanning

### 2. Scan Dependencies

1. รัน `bunx npm audit` สำหรับ known vulnerabilities
2. รัน `bunx snyk test` สำหรับ deeper analysis
3. ตรวจสอบ outdated packages
4. Review transitive dependencies

### 3. Test Common Vulnerabilities

1. Test XSS (Cross-Site Scripting) ใน user inputs
2. Test SQL Injection ใน database queries
3. Test CSRF (Cross-Site Request Forgery) ใน forms
4. Test authentication bypass
5. Test authorization flaws

### 4. Scan For Secrets

1. ตรวจสอบ hardcoded API keys ใน code
2. Scan สำหรับ passwords และ tokens
3. Check สำหรับ sensitive data ใน config files
4. Validate .gitignore coverage

### 5. Run DAST Scans

1. รัน OWASP ZAP สำหรับ web application
2. Test authentication endpoints
3. Test API security headers
4. Check for exposed sensitive data

### 6. Review Security Headers

1. Verify CSP (Content Security Policy)
2. Check X-Frame-Options
3. Validate X-Content-Type-Options
4. Review Strict-Transport-Security

### 7. Analyze And Fix Issues

1. จัดลำดับ vulnerabilities ตาม severity
2. Fix critical issues ก่อน
3. Update dependencies ที่มี vulnerabilities
4. Document security fixes

## Rules

### 1. Vulnerability Scanning

- รัน dependency scans ทุกครั้งที่มีการ update packages
- ใช้ automated tools สำหรับ SAST และ DAST
- Review manual สำหรับ business logic vulnerabilities
- Monitor security advisories สำหรับ dependencies ที่ใช้

### 2. Common Vulnerabilities

| Vulnerability | Test Method | Tool |
|--------------|-------------|------|
| XSS | Input sanitization | OWASP ZAP |
| SQL Injection | Query validation | Manual + SAST |
| CSRF | Token validation | OWASP ZAP |
| Auth Bypass | Session testing | Manual |
| Secrets | Code scanning | git-secrets, truffleHog |

### 3. Security Best Practices

- ไม่เก็บ secrets ใน code หรือ config files
- ใช้ environment variables สำหรับ sensitive data
- Implement proper authentication และ authorization
- Validate และ sanitize ทุก user inputs
- Use HTTPS สำหรับทุก connections
- Implement rate limiting สำหรับ APIs

### 4. Remediation Priority

- Critical: แก้ทันที (remote code execution, data exposure)
- High: แก้ภายใน 1 สัปดาห์ (injection attacks, auth bypass)
- Medium: แก้ภายใน 1 เดือน (XSS, CSRF)
- Low: แก้ตาม schedule (information disclosure)

## Expected Outcome

- [ ] Dependencies ปลอดภัยจาก known vulnerabilities
- [ ] Common vulnerabilities ถูกทดสอบและแก้ไข
- [ ] Secrets ไม่ถูก expose ใน codebase
- [ ] Security headers ถูกตั้งค่าอย่างถูกต้อง
- [ ] Security testing integrated ใน CI/CD
- [ ] Security issues documented และ tracked

## Common Mistakes

- ไม่รัน dependency scans อย่างสม่ำเสมอ
- เก็บ secrets ใน code หรือ commit ไปยัง git
- ไม่ validate user inputs อย่างเหมาะสม
- ไม่ implement rate limiting
- ไม่ update dependencies ที่มี vulnerabilities
- ไม่ review security advisories

## Anti-Patterns

- ❌ Hardcode API keys หรือ passwords ใน code
- ❌ Skip input validation เพื่อความสะดวก
- ❌ ใช้ outdated dependencies ที่มี known vulnerabilities
- ❌ ไม่ implement authentication/authorization
- ❌ Disable security headers ใน production
