---
title: Update Documentation
description: อัพเดท documentation และ references ตามมาตรฐาน
auto_execution_mode: 3
related_workflows:
  - /analyze-features
  - /analyze-project
  - /update-reference
---

## Goal

อัพเดท documentation และ references ตามมาตรฐาน

## Scope

ครอบคลุมการสร้างและอัพเดท documentation structure ทั้งหมด รวมถึงการจัดการ references ใน project, workflows, และ skills

## Execute

### 1. Update Documentation

1. ทำ `/analyze-features` เพื่อวิเคราะห์ features ใน project
2. ทำ `/analyze-project` เพื่อวิเคราะห์โครงสร้าง project
3. เลือก template ตามประเภท project
4. สร้าง `docs/` folder
5. สร้าง structure ตาม template ที่เลือก
6. สร้างไฟล์หลักใน `project/` และ `getting-started/`
7. สร้าง subfolders ตาม template
8. เขียน content ตาม template
9. ใช้ frontmatter สำหรับทุกไฟล์

### 2. Update References

เมื่อแก้ไขไฟล์ให้ค้นหาและอัพเดท references ทั้งหมด

1. ตรวจสอบ path ของไฟล์ที่แก้ไข
2. ระบุว่าอยู่ใน project, workflows, หรือ skills
3. ตรวจสอบ workspace ที่ใช้งานปัจจุบัน
4. ใช้ search tool ค้นหา references ตาม context
5. อัพเดท references ที่ตรงกับไฟล์ที่แก้ไข
6. ตรวจสอบว่าไม่มี references ที่เสียหายหรือชี้ไปยังไฟล์เดิม

## Rules

### 1. Documentation Structure

ใช้ template ตามประเภท project (Library, Product, CLI, Web, Monorepo):

**project/ (required)** - ภาพรวมโปรเจกต์:
- overview.md - แนะนำโปรเจกต์, วัตถุประสงค์, และ use cases
- features.md - รายการ features ทั้งหมดพร้อมคำอธิบาย
- key-concept.md - concepts สำคัญและ terminology
- principles.md - principles และ best practices ที่ใช้
- roadmap.md (optional) - แผนการพัฒนาและ milestones
- changelog.md (optional) - ประวัติการเปลี่ยนแปลง
- faq.md (optional) - คำถามที่พบบ่อย
- team.md (optional) - team structure, contributors
- vision.md (optional) - vision และ mission

**getting-started/ (required)** - เริ่มต้นใช้งาน:
- installation.md - วิธีติดตั้งและ dependencies
- configuration.md - การตั้งค่า environment และ config
- usage.md - วิธีใช้งานพื้นฐานและ examples
- quick-start.md (optional) - เริ่มต้นใช้งานอย่างรวดเร็ว
- troubleshooting.md (optional) - แก้ปัญหาที่พบบ่อย
- prerequisites.md (optional) - prerequisites ก่อนติดตั้ง
- environment.md (optional) - environment setup details
- next-steps.md (optional) - ขั้นตอนถัดไปหลังเริ่มต้น

**guides/ (optional)** - guides ละเอียด:
- architecture/ - architecture patterns, design decisions
- development/ - development workflow, testing, debugging
- deployment/ - deployment strategies, CI/CD
- performance/ - performance optimization, profiling
- security/ - security best practices, vulnerabilities
- testing/ - testing strategies, test patterns
- contributing/ - contribution guidelines
- workflows/ - workflow guides
- debugging/ - debugging techniques
- monitoring/ - monitoring และ observability

**api/ (optional)** - API documentation:
- modules/ - module APIs และ exports
- components/ - component APIs และ props
- utilities/ - utility functions และ helpers
- endpoints/ - API endpoints และ routes
- schemas/ - data schemas และ validation
- events/ - events และ listeners
- hooks/ - hooks และ lifecycle
- middleware/ - middleware documentation

**examples/ (optional)** - examples:
- basic/ - examples พื้นฐาน
- advanced/ - examples ขั้นสูง
- integrations/ - integration examples กับ services อื่น
- real-world/ - examples จากการใช้งานจริง
- patterns/ - design patterns และ use cases
- tutorials/ - tutorial examples
- snippets/ - code snippets
- templates/ - templates พร้อมใช้

**reference/ (optional)** - reference documentation:
- types/ - type definitions และ interfaces
- functions/ - function signatures และ parameters
- constants/ - constants และ enums
- config/ - configuration options และ settings
- errors/ - error codes และ handling
- cli/ - CLI commands reference
- env-vars/ - environment variables reference
- performance-metrics/ - performance metrics reference

### 2. File Structure

```
docs/
├── project/                      # Project overview and core concepts
│   ├── overview.md              # แนะนำโปรเจกต์, วัตถุประสงค์, use cases
│   ├── features.md              # รายการ features ทั้งหมด
│   ├── key-concept.md           # Concepts สำคัญและ terminology
│   ├── principles.md            # Principles และ best practices
│   ├── roadmap.md (optional)    # แผนการพัฒนาและ milestones
│   ├── changelog.md (optional)  # ประวัติการเปลี่ยนแปลง
│   ├── faq.md (optional)        # คำถามที่พบบ่อย
│   ├── team.md (optional)       # Team structure, contributors
│   └── vision.md (optional)     # Vision และ mission
├── getting-started/             # เริ่มต้นใช้งาน
│   ├── installation.md          # วิธีติดตั้งและ dependencies
│   ├── configuration.md         # การตั้งค่า environment และ config
│   ├── usage.md                 # วิธีใช้งานพื้นฐานและ examples
│   ├── quick-start.md (optional) # เริ่มต้นใช้งานอย่างรวดเร็ว
│   ├── troubleshooting.md (optional) # แก้ปัญหาที่พบบ่อย
│   ├── prerequisites.md (optional) # Prerequisites ก่อนติดตั้ง
│   ├── environment.md (optional) # Environment setup details
│   └── next-steps.md (optional) # ขั้นตอนถัดไปหลังเริ่มต้น
├── guides/                       # Guides ละเอียด
│   ├── architecture/            # Architecture patterns, design decisions
│   ├── development/             # Development workflow, testing, debugging
│   ├── deployment/              # Deployment strategies, CI/CD
│   ├── performance/             # Performance optimization, profiling
│   ├── security/                # Security best practices, vulnerabilities
│   ├── testing/                 # Testing strategies, test patterns
│   ├── contributing/            # Contribution guidelines
│   ├── workflows/               # Workflow guides
│   ├── debugging/               # Debugging techniques
│   └── monitoring/              # Monitoring และ observability
├── api/                          # API documentation
│   ├── modules/                 # Module APIs และ exports
│   ├── components/              # Component APIs และ props
│   ├── utilities/               # Utility functions และ helpers
│   ├── endpoints/               # API endpoints และ routes
│   ├── schemas/                 # Data schemas และ validation
│   ├── events/                  # Events และ listeners
│   ├── hooks/                   # Hooks และ lifecycle
│   └── middleware/              # Middleware documentation
├── examples/                     # Examples
│   ├── basic/                   # Examples พื้นฐาน
│   ├── advanced/                # Examples ขั้นสูง
│   ├── integrations/            # Integration examples กับ services อื่น
│   ├── real-world/              # Examples จากการใช้งานจริง
│   ├── patterns/                # Design patterns และ use cases
│   ├── tutorials/               # Tutorial examples
│   ├── snippets/                # Code snippets
│   └── templates/               # Templates พร้อมใช้
├── reference/                    # Reference documentation
│   ├── types/                   # Type definitions และ interfaces
│   ├── functions/               # Function signatures และ parameters
│   ├── constants/               # Constants และ enums
│   ├── config/                  # Configuration options และ settings
│   ├── errors/                  # Error codes และ handling
│   ├── cli/                     # CLI commands reference
│   ├── env-vars/                # Environment variables reference
│   └── performance-metrics/     # Performance metrics reference
```

### 3. Documentation Content

- ไฟล์ไม่เกิน 200 บรรทัด
- ใช้ frontmatter บังคับทุกไฟล์ (required)
- ทำ `/update-docs` เมื่อเปลี่ยนชื่อไฟล์ (required)
- ใช้ backticks สำหรับ file paths, commands, code snippets (required)
- ใช้ภาษาไทย ยกเว้นคำศัพท์เฉพาะ (required)
- เขียนแบบ how-to ไม่ใช่ manual step-by-step (required)

## Expected Outcome

### Documentation

- Documentation ตามมาตรฐาน
- Structure สอดคล้องกับ template
- Content คุณภาพสูง
- ไฟล์ทั้งหมดมี frontmatter

### References

- References ใน project ถูกอัพเดททั้งหมด
- References ใน workflows ถูกอัพเดททั้งหมด
- References ใน skills ถูกอัพเดททั้งหมด
- ไม่มี references ที่เสียหาย

## Common Mistakes

- ไม่ใช้ frontmatter ในไฟล์ documentation
- สร้าง structure ไม่ตรงตาม template
- ลืมอัพเดท references เมื่อเปลี่ยนชื่อไฟล์
- เขียนไฟล์เกิน 200 บรรทัด
- ไม่แยก guides/ จาก getting-started/

