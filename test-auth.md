---
title: Test Auth
description: ทดสอบ authentication, authorization แล session management
auto_execution_mode: 3
related_workflows:
  - /test-api
  - /test-security
---

## Goal

ทดสอบ authentication แล authorization ให้ครอบคลุม รวม login, session management, OAuth, แล JWT validation

## Execute

### 1. Setup Auth Testing

1. ติดตั้ง auth testing utilities
2. Configure test auth server
3. Setup mock auth providers
4. Configure session testing

### 2. Test Authentication

1. Test login with valid credentials
2. Test login with invalid credentials
3. Test login with missing fields
4. Test password reset flow

### 3. Test Session Management

1. Test session creation
2. Test session expiration
3. Test session refresh
4. Test session invalidation

### 4. Test JWT Validation

1. Test JWT token generation
2. Test JWT token validation
3. Test JWT token expiration
4. Test JWT token refresh

### 5. Test OAuth Flow

1. Test OAuth authorization
2. Test OAuth callback
3. Test OAuth token exchange
4. Test OAuth token refresh

### 6. Test Authorization

1. Test role-based access control
2. Test permission-based access
3. Test resource ownership
4. Test admin access

### 7. Test Security Headers

1. Test CSRF protection
2. Test CORS configuration
3. Test secure cookies
4. Test XSS protection

### 8. Test Multi-Factor Auth

1. Test MFA setup
2. Test MFA verification
3. Test MFA backup codes
4. Test MFA recovery

### 9. Test Logout

1. Test manual logout
2. Test session cleanup
3. Test token revocation
4. Test redirect after logout

### 10. Run Auth Tests

1. Execute authentication tests
2. Execute authorization tests
3. Execute session tests
4. Document auth issues

## Rules

### 1. Authentication Testing

```javascript
// Test login
await request(app)
  .post('/api/auth/login')
  .send({ email, password })
  .expect(200)
  .expect('Set-Cookie', /session/);
```

### 2. JWT Validation

- Validate token signature
- Check token expiration
- Verify token issuer
- Validate token audience

### 3. Session Security

- Use secure cookies (HttpOnly, Secure, SameSite)
- Implement session expiration
- Rotate session IDs
- Store sessions securely

### 4. Authorization Matrix

| Role | Read | Write | Delete | Admin |
|------|------|-------|--------|-------|
| Guest | ✓ | ✗ | ✗ | ✗ |
| User | ✓ | ✓ | ✗ | ✗ |
| Admin | ✓ | ✓ | ✓ | ✓ |

### 5. Security Best Practices

- Hash passwords ด้วย bcrypt/argon2
- Use HTTPS สำหรับทุก auth requests
- Implement rate limiting สำหรับ login
- Log auth attempts
- Implement account lockout หลัง failed attempts

## Expected Outcome

- [ ] Authentication flows tested
- [ ] Authorization validated
- [ ] Session management tested
- [ ] JWT validation verified
- [ ] OAuth flows tested
- [ ] Security measures implemented

## Common Mistakes

- ไม่ hash passwords
- ไม่ implement session expiration
- ไม่ validate JWT properly
- ไม่ implement rate limiting
- ไม่ log auth attempts
- ไม่ test authorization

## Anti-Patterns

- ❌ Store passwords ใน plain text
- ❌ ไม่ implement session expiration
- ❌ ไม่ validate JWT
- ❌ ไม่ implement rate limiting
- ❌ ไม่ test authorization
