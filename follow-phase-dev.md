---
title: Phase.dev Secrets Management
description: ตั้งค่าและใช้งาน Phase.dev สำหรับจัดการ secrets และ environment variables อย่างปลอดภัย
auto_execution_mode: 3
---

ตั้งค่าและใช้งาน Phase.dev สำหรับจัดการ secrets และ environment variables อย่างปลอดภัย

## Goal

ตั้งค่าและใช้งาน Phase.dev สำหรับจัดการ secrets และ environment variables ในโปรเจกต์อย่างปลอดภัย

## Execute

### 1. Prepare

1. ศึกษา Phase.dev documentation จาก DeepWiki (phasehq/console), Official Docs (docs.phase.dev), และ Web Search
2. อ่าน workflows ที่คล้ายกันเพื่อดู patterns และ conventions

### 2. Best Practices

1. Centralize secrets ใน single source of truth
2. Encrypt secrets at all times และ decrypt เฉพาะเมื่อจำเป็น
3. Control และ monitor access ด้วย access control system ที่แข็งแกร่ง
4. Use versioning for secrets เพื่อ rollback ได้เมื่อจำเป็น
5. Regularly rotate secrets เช่น API keys, passwords, certificates
6. Secure secrets across all environments (development, staging, production)
7. Limit the lifespan of secrets โดยใช้ short-lived secrets
8. Regularly review และ update secrets management policies

### 3. Account Setup

1. เข้าไปที่ https://phase.dev/
2. Login หรือสมัครสมาชิก (รองรับ Google, GitHub, GitLab OAuth)
3. สร้าง Organization ใหม่
4. สร้าง App ภายใน Organization

### 4. Authentication

1. Authenticate กับ Phase Cloud: `phase auth`
2. สำหรับ self-hosted: `phase auth --mode token` แล้วเลือก Self Hosted
3. ตั้งค่า environment variables:
   - Phase Cloud: `PHASE_HOST=https://console.phase.dev`, `PHASE_TOKEN=<token>`
   - Self-hosted: `PHASE_HOST=http://localhost`, `PHASE_TOKEN=<token>`

### 5. Project Initialization

1. Navigate ไปยัง project directory
2. Run `phase init` เพื่อเชื่อมโยง project กับ Phase
3. เลือก organization และ app
4. Import existing secrets (optional): `phase secrets import .env`

### 6. Secret Creation

1. สร้าง secrets ผ่าน CLI: `phase secrets create DATABASE_URL "postgresql://..." --env production`
2. สร้าง secrets ผ่าน Console: เลือก App → Environment → Create Secret
3. ใช้ secret referencing เพื่อหลีกเลี่ยงการซ้ำซ้อน
4. เพิ่ม tags และ comments เพื่อจัดระเบียบ

### 7. Sync Configuration

1. ตั้งค่า sync ไปยัง external services (AWS Secrets Manager, GitHub Actions, Vercel, Railway)
2. สร้าง sync configuration: `phase sync create aws-secrets-manager --env production --region us-east-1`
3. ตั้งค่า automatic sync ใน `.phase/config.yaml`
4. Trigger sync manually: `phase sync trigger --env production`

### 8. Application Integration

1. Inject secrets ด้วย CLI: `phase run --env production -- npm run dev`
2. ใช้ Phase SDK สำหรับ programmatic access (Node.js, Python)
3. ตั้งค่า environment variables ใน application config
4. Test secrets injection ใน staging environment ก่อน production

### 9. Monitoring

1. ตรวจสอบ audit logs อย่างสม่ำเสมอ
2. Monitor sync status เพื่อให้แน่ใจว่า secrets sync สำเร็จ
3. ตั้งค่า alerts สำหรับ failed syncs หรือ unauthorized access
4. Backup secrets อย่างสม่ำเสมอ

## Rules

### 1. Frontmatter Standards

- title: Title Case สื่อความหมายชัดเจน
- description: อธิบายงานและ scope กระชับไม่เกิน 100 ตัวอักษร
- auto_execution_mode: 3 เท่านั้น

### 2. Structure & Format

- โครงสร้างต้องเป็น: ## Goal, ## Execute, ## Rules, ## Expected Outcome
- ใช้ numbered list (1., 2., 3.) เรียงตาม flow การทำงาน
- Bullet points ชิดซ้าย ไม่ indent ใช้ dash (-)

### 3. Security Rules

- ใช้ end-to-end encryption และ least privilege access เสมอ
- แยก secrets ตาม environments (development, staging, production) อย่างเคร่งครัด
- ใช้ personal access tokens แทน shared credentials
- Rotate secrets อย่างสม่ำเสมอ

### 4. Development Workflow Rules

- ใช้ Phase CLI สำหรับ local development
- ใช้ automatic sync เพื่อลดความผิดพลาดจาก manual updates
- Test secrets injection ใน staging ก่อน production
- เขียน comments สำหรับ secrets ที่ซับซ้อน

### 5. Tool Usage

- ใช้ `phase init` เพื่อเชื่อมโยง project กับ Phase
- ใช้ `phase secrets create` เพื่อสร้าง secrets
- ใช้ `phase run` เพื่อ inject secrets ลงใน application
- ใช้ `phase sync` เพื่อ sync secrets ไปยัง external services

## Expected Outcome

- Phase.dev ตั้งค่าเสร็จสมบูรณ์
- Secrets จัดเรียงตาม environments อย่างถูกต้อง
- Automatic sync ตั้งค่าเสร็จสมบูรณ์
- Application ใช้งาน secrets จาก Phase ได้อย่างปลอดภัย
- Monitoring และ audit logs พร้อมใช้งาน
