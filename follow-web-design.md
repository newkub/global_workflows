---
title: Web Design
description: ออกแบบ web interfaces ด้วย design system principles และ best practices
auto_execution_mode: 3
related_workflows:
  - /design-system
  - /choose-tech-stack
---

## Goal

ออกแบบ web interfaces ที่สวยงาม ใช้งานได้ และเข้าถึงได้ โดยใช้ design system principles

## Scope

ครอบคลุม layout, typography, colors, components, accessibility, และ responsive design สำหรับ web applications

## Execute

### 1. ทำ `/design-system`

1. กำหนด design tokens (colors, typography, spacing)
2. สร้าง component guidelines
3. นำไปใช้กับ web platform

### 2. ออกแบบ Layout

1. ใช้ semantic HTML
2. ใช้ CSS Grid หรือ Flexbox สำหรับ layouts
3. ทำให้ responsive ด้วย breakpoints

### 3. ออกแบบ Typography

1. เลือก font families ที่เหมาะสม
2. กำหนด font scale ชัดเจน
3. ใช้ line-height และ letter-spacing ที่เหมาะสม

### 4. ออกแบบ Colors

1. ใช้ color palette ที่สม่ำเสมอ
2. กำหนด semantic colors (success, warning, error)
3. ตรวจสอบ contrast ratio

### 5. สร้าง Components

1. สร้าง reusable components (buttons, inputs, cards)
2. ใช้ atomic design principles
3. Document ทุก component

### 6. ทำ Accessibility

1. ทำตาม WCAG guidelines
2. รองรับ keyboard navigation
3. รองรับ screen readers
4. ตรวจสอบ color contrast

### 7. Optimize Performance

1. Optimize images และ assets
2. ใช้ lazy loading
3. Minimize CSS และ JavaScript
4. ใช้ modern CSS features

## Rules

### 1. Semantic HTML

- ใช้ semantic tags (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ใช้ headings ตามลำดับที่ถูกต้อง
- ใช้ `<button>` สำหรับ actions, `<a>` สำหรับ navigation

### 2. Responsive Design

- Mobile-first approach
- ใช้ relative units (rem, em, %)
- กำหนด breakpoints ชัดเจน
- Test บนทุก screen sizes

### 3. Typography

- ใช้ font scale ที่ consistent
- line-height 1.5-1.6 สำหรับ body text
- ไม่ใช้ font size น้อยกว่า 16px สำหรับ body
- ใช้ font weights ที่ชัดเจน (400, 500, 600, 700)

### 4. Colors

- ใช้ color palette ที่สม่ำเสมอ
- contrast ratio อย่างน้อย 4.5:1 สำหรับ normal text
- contrast ratio อย่างน้อย 3:1 สำหรับ large text
- ใช้ colors เพื่อสื่อความหมาย ไม่ใช่ decoration เท่านั้น

### 5. Spacing

- ใช้ spacing scale ที่ consistent (4px, 8px, 16px, 24px, 32px)
- ใช้ whitespace อย่างเหมาะสม
- ไม่ใช้ magic numbers สำหรับ spacing

### 6. Components

- สร้าง components ที่ reusable
- ใช้ props ที่ชัดเจน
- Document ทุก component
- Test ทุก component

### 7. Accessibility

- ใช้ ARIA labels เมื่อจำเป็น
- รองรับ keyboard navigation
- ใช้ focus states ที่ชัดเจน
- ใช้ alt text สำหรับ images

## Expected Outcome

- Web interfaces ที่สวยงามและ consistent
- Responsive บนทุก devices
- Accessible ตาม WCAG standards
- Fast loading performance
- Code ที่ maintainable

## Common Mistakes

- ไม่ใช้ semantic HTML
- ไม่ทำ responsive design
- ไม่ตรวจสอบ contrast ratio
- ไม่ test accessibility
- ใช้ magic numbers สำหรับ spacing

## Anti-Patterns

- ใช้ `<div>` สำหรับทุกอย่าง
- Hardcode pixel values
- ไม่มี focus states
- ไม่มี hover states
- ใช้ colors ที่ไม่มี semantic meaning

## Examples

### Button Component

```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
}

export function Button({ variant, size, disabled, children }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
```

### Responsive Layout

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}
```

## Tools

- Figma - Design tool
- Storybook - Component documentation
- Lighthouse - Performance and accessibility audit
- axe DevTools - Accessibility testing
- Chrome DevTools - Debugging

## References

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)

