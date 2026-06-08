---

title: Review Design System

description: Review design system consistency, components และ tokens

auto_execution_mode: 3

related_workflows:
  - /review-uxui
  - /check-consistency
  - /follow-design-system

---

## Goal

Review design system ทั้งหมดเพื่อระบุและแก้ไข inconsistencies ตาม priority

## Scope

ครอบคลุม design tokens, components, spacing, typography, colors

## Execute

### 1. Analyze Design Tokens

1. ตรวจสอบ color tokens
2. Review spacing tokens
3. Check typography tokens
4. Validate token usage

### 2. Review Components

1. Check component consistency
2. Review component API
3. Validate component usage
4. Check component variants

### 3. Check Spacing And Layout

1. Review spacing consistency
2. Check layout patterns
3. Validate responsive design
4. Check grid usage

### 4. Review Typography

1. Check font sizes
2. Review font weights
3. Validate line heights
4. Check font families

### 5. Prioritize And Report

1. Group issues ตาม impact
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Fix token inconsistencies
2. Standardize components
3. Fix spacing issues
4. Improve typography

## Rules

### 1. Design Tokens

ตรวจสอบ design tokens:

- มี design tokens ครบถ้วน
- ใช้ tokens อย่าง consistent
- ไม่ hardcode values
- มี token documentation
- มี dark mode support

### 2. Components

ตรวจสอบ components:

- Components consistent
- มี component API ชัดเจน
- มี variants ที่จำเป็น
- มี documentation
- มี examples

### 3. Spacing

ตรวจสอบ spacing:

- ใช้ spacing tokens
- Spacing consistent
- มี spacing scale
- ไม่ hardcode margins/paddings
- Responsive spacing

### 4. Typography

ตรวจสอบ typography:

- ใช้ typography tokens
- Font sizes consistent
- Line heights ดี
- Font weights ใช้ถูกต้อง
- Font families ถูกต้อง

### 5. Colors

ตรวจสอบ colors:

- ใช้ color tokens
- Colors accessible
- มี color palette
- มี dark mode
- Contrast ratios ดี

## Expected Outcome

- Design system consistent
- Components standardized
- Tokens ใช้งานได้
- Documentation ครบถ้วน
- Accessibility ดี

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Hardcode values
- Components inconsistent
- ไม่มี tokens
- Spacing ไม่ consistent
- Colors ไม่ accessible

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Hardcode values
- ❌ Components ไม่ consistent
- ❌ ไม่มี design tokens
- ❌ Spacing สุ่ม
- ❌ Colors ไม่ accessible
