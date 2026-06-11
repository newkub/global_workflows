---
title: Improve Environment Config
description: ปรับปรุง environment configuration management
auto_execution_mode: 3
related_workflows:
  - /improve-config
  - /improve-security
  - /check-configuration
---

## Goal

ปรับปรุม environment configuration ให้ปลอดภัยและจัดการได้ง่าย

## Scope

ใช้สำหรับปรับปรุม environment variables, config files, และ secrets

## Execute

### 1. Analyze Current Environment Config

วิเคราะห์ environment config ปัจจุบัน

1. ทำ `/check-configuration` เพื่อตรวจสอบ config
2. ระบุ environment variables ทั้งหมด
3. ตรวจสอบ config files ทั้งหมด
4. ระบุ hardcoded values
5. ระบุ sensitive data ใน code
6. ระบุ missing environment variables

### 2. Define Environment Strategy

กำหนด environment strategy

1. กำหนด environments (dev, staging, prod)
2. กำหนด environment-specific configs
3. กำหนด config validation rules
4. กำหนด config loading order
5. กำหนด config defaults
6. กำหนด config documentation

### 3. Setup Environment Variables

ตั้งค่า environment variables

1. สร้าง .env.example สำหรับ template
2. สร้าง .env.local สำหรับ local development
3. สร้าง .env.development สำหรับ dev
4. สร้าง .env.production สำหรับ prod
5. ใช้ .env สำหรับ defaults
6. Add .env ไปยัง .gitignore

### 4. Implement Config Loading

ตั้งค่า config loading

1. ใช้ config library (dotenv, convict, config)
2. ตั้งค่า config loading order
3. ตั้งค่า config validation
4. ตั้งค่า config type safety
5. ตั้งค่า config defaults
6. ตั้งค่า config error handling

### 5. Add Config Validation

เพิ่ม config validation

1. Validate required variables
2. Validate variable types
3. Validate variable formats
4. Validate variable ranges
5. Provide clear error messages
6. Add config schemas

### 6. Implement Secrets Management

ตั้งค่า secrets management

1. ใช้ `/phase-dev` สำหรับ secrets
2. ใช้ environment variables สำหรับ secrets
3. ใช้ secret management service
4. ใช้ encryption สำหรับ secrets
5. ใช้ secret rotation
6. Audit secret access

### 7. Document Configuration

Document configuration

1. Document ทุก environment variables
2. Document config files
3. Document config defaults
4. Document config validation
5. Document secrets management
6. Update README

### 8. Setup CI/CD Config

ตั้งค่า CI/CD config

1. ตั้งค่า environment variables ใน CI
2. ตั้งค่า secrets ใน CI
3. ตั้งค่า config injection
4. ตั้งค่า config validation ใน CI
5. ตั้งค่า config rotation
6. Monitor config changes

## Rules

### 1. Environment Variables

ใช้ environment variables อย่างเหมาะสม

- ใช้ environment variables สำหรับ config
- ใช้ .env.example สำหรับ template
- ไม่ commit .env files
- ใช้ descriptive names
- ใช้ UPPER_SNAKE_CASE

### 2. Config Validation

Validate config อย่างเหมาะสม

- Validate ทุก required variables
- Validate variable types
- Validate variable formats
- Provide clear errors
- Fail fast บน invalid config

### 3. Secrets Management

จัดการ secrets อย่างปลอดภัย

- ไม่ commit secrets
- ใช้ secret management service
- ใช้ encryption
- ใช้ secret rotation
- Audit secret access

### 4. Config Loading

Load config อย่างถูกต้อง

- ใช้ consistent loading order
- ใช้ appropriate defaults
- ใช้ type-safe config
- ใช้ config validation
- Handle config errors

### 5. Documentation

Document config ครบถ้วน

- Document ทุก variables
- Document defaults
- Document validation
- Document secrets
- Keep docs updated

## Expected Outcome

- Environment variables ที่ organized
- Config files ที่ structured
- Config validation ที่ implemented
- Secrets management ที่ secure
- Config documentation ที่ complete
- CI/CD config ที่ setup
