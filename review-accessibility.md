---

title: Review Accessibility

description: Review WCAG compliance, keyboard navigation และ screen reader support

auto_execution_mode: 3

related_workflows:
  - /check-accessibility
  - /review-uxui
  - /review-design-system

---

## Goal

Review accessibility layer ทั้งหมมเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม WCAG compliance, keyboard navigation, screen readers, color contrast

## Execute

### 1. Analyze WCAG Compliance

1. ตรวจสอบ WCAG level
2. Review accessibility audit
3. Check accessibility testing
4. Validate compliance

### 2. Review Keyboard Navigation

1. Check keyboard accessibility
2. Review focus management
3. Validate focus order
4. Check skip links

### 3. Review Screen Reader Support

1. Check ARIA labels
2. Review semantic HTML
3. Validate alt text
4. Check screen reader testing

### 4. Review Visual Accessibility

1. Check color contrast
2. Review font sizes
3. Validate text spacing
4. Check color blindness

### 5. Prioritize And Report

1. Group issues ตาม severity
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Fix WCAG violations
2. Improve keyboard navigation
3. Add ARIA labels
4. Improve visual accessibility

## Rules

### 1. WCAG Compliance

ตรวจสอบ WCAG compliance:

- WCAG AA compliant
- Accessibility audit มี
- Accessibility testing มี
- Compliance validated
- ไม่ violate guidelines

### 2. Keyboard Navigation

ตรวจสอบ keyboard navigation:

- Keyboard accessible
- Focus management ดี
- Focus order ถูกต้อง
- Skip links มี
- ไม่ keyboard traps

### 3. Screen Reader Support

ตรวจสอบ screen reader support:

- ARIA labels ครบถ้วน
- Semantic HTML ใช้
- Alt text ครบถ้วน
- Screen reader tested
- ไม่ hide content

### 4. Visual Accessibility

ตรวจสอบ visual accessibility:

- Color contrast ดี
- Font sizes ดี
- Text spacing ดี
- Color blindness พิจารณา
- ไม่ color-only information

### 5. Testing

ตรวจสอบ testing:

- Accessibility testing มี
- Screen reader testing มี
- Keyboard testing มี
- Automated testing มี
- Manual testing มี

## Expected Outcome

- WCAG compliant
- Keyboard navigation ดี
- Screen reader support ดี
- Visual accessibility ดี
- Testing ครบถ้วน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Color contrast แย่
- ไม่มี alt text
- ไม่ keyboard accessible
- ไม่ semantic HTML
- ไม่ ARIA labels

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Color contrast แย่
- ❌ ไม่มี alt text
- ❌ ไม่ keyboard accessible
- ❌ ไม่ semantic HTML
- ❌ ไม่ ARIA labels
