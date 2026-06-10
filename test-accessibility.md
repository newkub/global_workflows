---
title: Test Accessibility
description: ทดสอบ accessibility ตามมาตรฐาน WCAG สำหรับผู้ใช้ทุกคน
auto_execution_mode: 3
related_workflows:
  - /test-e2e
  - /check-accessibility
url: https://www.w3.org/WAI/WCAG21/quickref/
---

## Goal

ทดสอบ accessibility ให้ครอบคลุมตามมาตรฐาน WCAG รวม keyboard navigation, screen reader support แล semantic HTML

## Execute

### 1. Setup Accessibility Testing Tools

1. ติดตั้ง axe-core สำหรับ automated testing
2. Configure pa11y สำหรับ CI integration
3. Setup screen reader testing environment
4. Configure keyboard testing tools

### 2. Test Semantic HTML

1. Verify heading hierarchy (h1-h6)
2. Check landmark roles (header, main, nav, footer)
3. Validate list structures
4. Test form labels แล associations

### 3. Test Keyboard Navigation

1. Test tab order ที่ logical
2. Verify focus indicators visible
3. Test keyboard shortcuts
4. Check focus trap ใน modals

### 4. Test Screen Reader Support

1. Test with NVDA (Windows)
2. Test with VoiceOver (macOS)
3. Test with JAWS (Windows)
4. Verify ARIA labels แล descriptions

### 5. Test Color Contrast

1. Verify text contrast ratio >= 4.5:1
2. Check large text contrast >= 3:1
3. Test color independence
4. Verify focus indicators contrast

### 6. Test ARIA Attributes

1. Verify ARIA roles ถูกต้อง
2. Check ARIA labels แล descriptions
3. Test ARIA states แล properties
4. Validate dynamic content updates

### 7. Test Images And Media

1. Verify alt text สำหรับ images
2. Test captions สำหรับ videos
3. Check audio descriptions
4. Test media player accessibility

### 8. Test Forms

1. Verify form labels
2. Test error messages
3. Check field validation
4. Test form submission feedback

### 9. Run Automated Scans

1. รัน axe-core สำหรับ automated violations
2. รัน pa11y สำหรับ comprehensive scan
3. Integrate ใน CI/CD pipeline
4. Review แล fix violations

### 10. Document And Fix Issues

1. Categorize violations ตาม severity
2. Fix critical issues ก่อน
3. Document workarounds สำหรับ non-critical
4. Update accessibility statement

## Rules

### 1. WCAG Compliance Levels

- Level A: ขั้นต่ำที่ต้องมี
- Level AA: มาตรฐานที่แนะนำ
- Level AAA: ขั้นสูงสุด (ไม่จำเป็นสำหรับทุกเว็บ)

### 2. Common Violations

| Violation | Impact | Fix |
|-----------|--------|-----|
| Missing alt text | High | Add descriptive alt text |
| Low contrast | High | Increase contrast ratio |
| Missing labels | High | Add form labels |
| Invalid heading order | Medium | Fix heading hierarchy |
| Missing ARIA | Medium | Add appropriate ARIA attributes |

### 3. Testing Tools

| Tool | Use Case | Platform |
|------|----------|----------|
| axe-core | Automated scanning | All |
| pa11y | CI integration | All |
| NVDA | Screen reader testing | Windows |
| VoiceOver | Screen reader testing | macOS |
| WAVE | Visual accessibility | Browser |

### 4. Keyboard Navigation

- ทุก interactive elements ต้อง keyboard accessible
- Focus order ต้อง logical แล predictable
- Focus indicators ต้อง visible อย่างชัดเจน
- Escape key ต้อง close modals

### 5. Screen Reader Testing

- Test กับ screen readers หลักอย่างน้อย 2 ตัว
- Verify content อ่านได้ในลำดับที่ถูกต้อง
- Test dynamic content updates
- Verify ARIA live regions

## Expected Outcome

- [ ] WCAG AA compliance achieved
- [ ] Keyboard navigation ทำงานได้
- [ ] Screen reader support validated
- [ ] Automated scans integrated ใน CI
- [ ] Accessibility issues documented
- [ ] Accessibility statement published

## Common Mistakes

- ไม่ test กับ screen readers จริง
- พึ่ง automated tools เท่านั้น
- ไม่ fix color contrast issues
- ไม่ test keyboard navigation
- ไม่ add alt text สำหรับ images
- ไม่ update accessibility statement

## Anti-Patterns

- ❌ พึ่ง automated tools โดยไม่ test manual
- ❌ ไม่ test กับ screen readers จริง
- ❌ Ignore color contrast issues
- ❌ ไม่ test keyboard navigation
- ❌ Skip accessibility สำหรับ "nice to have"

