---
title: Update Documentation
description: อัพเดท documentation และ references ตามมาตรฐาน
auto_execution_mode: 3
related_workflows:
  - /analyze-features
  - /analyze-project
  - /update-reference
  - /follow-vitepress
  - /deep-research
  - /write-windsurf-global-workflows
---

## Goal

อัพเดท documentation และ references ตามมาตรฐาน

## Scope

ครอบคลุมการสร้างและอัพเดท documentation structure ทั้งหมด รวมถึงการจัดการ references ใน project, workflows, และ skills

## Execute

### 1. Prepare VitePress Configuration

1. ทำ `/deep-research` สำหรับ VitePress และ UnoCSS integration
2. ทำ `/write-windsurf-global-workflows` สำหรับ `follow-vitepress`
3. ทำ `/follow-vitepress` สำหรับตั้งค่า VitePress พร้อม UnoCSS

### 2. Update Documentation

1. ทำ `/analyze-features` เพื่อวิเคราะห์ features ใน project
2. ทำ `/analyze-project` เพื่อวิเคราะห์โครงสร้าง project
3. เลือก template ตามประเภท project
4. สร้าง `docs/` folder
5. สร้าง structure ตาม template ที่เลือก
6. สร้างไฟล์หลักใน `project/` และ `getting-started/`
7. สร้าง subfolders ตาม template
8. เขียน content ตาม template
9. ใช้ frontmatter สำหรับทุกไฟล์
10. ทำ `/bench-competitors` เพื่อสร้างไฟล์ `comparison.md` ใน `project/`

### 3. Update References

เมื่อแก้ไขไฟล์ให้ค้นหาและอัพเดท references ทั้งหมด

1. ทำ `/update-reference` เพื่ออัพเดท references ทั้งหมด
2. ตรวจสอบว่าไม่มี references ที่เสียหายหรือชี้ไปยังไฟล์เดิม

## Rules

### 1. VitePress Configuration

- ทำ `/deep-research` ก่อนเพื่อค้นหาข้อมูลล่าสุด
- ทำ `/write-windsurf-global-workflows` เพื่ออัพเดท workflow ให้ถูกต้อง
- ทำ `/follow-vitepress` ซึ่งรวม `/follow-unocss` อยู่แล้ว
- ดูตัวอย่าง integration ที่ https://vp.yuy1n.io/

### 2. Documentation Structure

ใช้ template ตามประเภท project (Library, Product, CLI, Web, Monorepo):

**Core Structure (required)**:
- `project/` - ภาพรวมโปรเจกต์
- `getting-started/` - เริ่มต้นใช้งาน

**Optional Directories**:
- `guides/` - guides ละเอียด
- `key-concepts/` - key concepts และ terminology
- `principles/` - principles และ best practices
- `api/` - API documentation
- `examples/` - examples
- `reference/` - reference documentation
- `templates/` - templates สำหรับ project
- `workflows/` - project-specific workflows

```
docs/
├── project/                      # Project overview and core concepts (required)
│   ├── overview.md
│   ├── features.md
│   ├── key-concept.md
│   ├── principles.md
│   ├── roadmap.md (optional)
│   ├── comparison.md (optional)
│   ├── changelog.md (optional)
│   ├── faq.md (optional)
│   ├── team.md (optional)
│   └── vision.md (optional)
├── getting-started/             # เริ่มต้นใช้งาน (required)
│   ├── installation.md
│   ├── configuration.md
│   ├── usage.md
│   ├── quick-start.md (optional)
│   ├── troubleshooting.md (optional)
│   ├── prerequisites.md (optional)
│   ├── environment.md (optional)
│   └── next-steps.md (optional)
├── development/                  # Development guides (optional)
│   ├── overview.md
│   ├── workflow.md
│   ├── testing.md
│   ├── debugging.md
│   ├── spec/
│   │   ├── overview.md
│   │   └── [module-specs].md
│   └── code-quality.md
├── guides/                       # Guides ละเอียด (optional)
│   ├── architecture/
│   ├── deployment/
│   ├── performance/
│   ├── security/
│   ├── contributing/
│   ├── workflows/
│   └── monitoring/
├── key-concepts/                 # Key concepts และ terminology (optional)
├── principles/                   # Principles และ best practices (optional)
├── api/                          # API documentation (optional)
│   ├── modules/
│   ├── components/
│   ├── utilities/
│   ├── endpoints/
│   ├── schemas/
│   ├── events/
│   ├── hooks/
│   └── middleware/
├── examples/                     # Examples (optional)
│   ├── basic/
│   ├── advanced/
│   ├── integrations/
│   ├── real-world/
│   ├── patterns/
│   ├── tutorials/
│   ├── snippets/
│   └── templates/
├── reference/                    # Reference documentation (optional)
│   ├── types/
│   ├── functions/
│   ├── constants/
│   ├── config/
│   ├── errors/
│   ├── cli/
│   ├── env-vars/
│   └── performance-metrics/
├── templates/                    # Templates สำหรับ project (optional)
└── workflows/                    # Project-specific workflows (optional)
```

### 3. References Management

- ทำ `/update-reference` เมื่อแก้ไขไฟล์
- ตรวจสอบ references ใน project, workflows, และ skills
- ตรวจสอบว่าไม่มี references ที่เสียหาย

## Expected Outcome

### VitePress Configuration

- VitePress config พร้อมใช้งาน
- UnoCSS integrated พร้อม presetWind4
- Theme custom พร้อมใช้งาน
- Package scripts พร้อมใช้งาน

### Documentation

- Documentation ตามมาตรฐาน
- Structure สอดคล้องกับ template
- Content คุณภาพสูง
- ไฟล์ทั้งหมดมี frontmatter
- ไฟล์ `comparison.md` สร้างโดย `/bench-competitors`

### References

- References ใน project ถูกอัพเดททั้งหมด
- References ใน workflows ถูกอัพเดททั้งหมด
- References ใน skills ถูกอัพเดททั้งหมด
- ไม่มี references ที่เสียหาย
