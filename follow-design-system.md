---
title: Design System
description: Design system principles พื้นฐานที่ใช้ได้กับทุก platform (TUI, Web, Desktop, Mobile)
auto_execution_mode: 3
related_workflows:
  - /follow-web-design
---

## Goal

ใช้ design system principles ที่ universal ใช้ได้กับทุก platform เพื่อ consistency และ maintainability

## Scope

ครอบคลุม design tokens, component guidelines, และ platform-specific adaptations สำหรับ TUI, Web, Desktop, และ Mobile

## Execute

### 1. กำหนด Design Tokens

- **Visual Consistency** - Colors, typography, spacing สม่ำเสมอ
- **Interaction Consistency** - Patterns ซ้ำๆ ใช้วิธีเดียวกัน
- **Language Consistency** - Terminology, tone of voice สม่ำเสมอ

### 2. สร้าง Component Guidelines

- **Component-Based** - สร้าง reusable components
- **Token-Based** - ใช้ design tokens (colors, spacing, etc.)
- **Documentation** - Document ทุก component และ pattern

### 3. นำไปใช้กับ Platform ต่างๆ

- **WCAG Compliance** - ทำตามมาตรฐาน accessibility
- **Keyboard Navigation** - รองรับ keyboard
- **Screen Reader Support** - รองรับ screen readers
- **Color Contrast** - contrast ratio ถูกต้อง

### 4. Document Components และ Patterns

- **Mobile-First** - เริ่มจาก mobile ก่อน
- **Adaptive Layouts** - layout ปรับตาม screen size
- **Breakpoints** - กำหนด breakpoints ชัดเจน

### 5. Test และ Validate

- **Lazy Loading** - load เฉพาะที่จำเป็น
- **Optimized Assets** - compress images, fonts
- **Minimal Dependencies** - ไม่ใช้ dependencies ที่ไม่จำเป็น

## Rules

### 1. Consistency

- Visual consistency: colors, typography, spacing สม่ำเสมอ
- Interaction consistency: patterns ซ้ำๆ ใช้วิธีเดียวกัน
- Language consistency: terminology, tone of voice สม่ำเสมอ

### 2. Scalability

- Component-based: สร้าง reusable components
- Token-based: ใช้ design tokens (colors, spacing, etc.)
- Documentation: document ทุก component และ pattern

### 3. Accessibility

- WCAG compliance: ทำตามมาตรฐาน accessibility
- Keyboard navigation: รองรับ keyboard
- Screen reader support: รองรับ screen readers
- Color contrast: contrast ratio ถูกต้อง

### 4. Platform Adaptations

| Platform | Color Palette | Spacing | Typography | Layout |
|----------|--------------|---------|------------|--------|
| TUI | 16 colors | character spacing | monospace only | grid-based |
| Web | full RGB | rem/em units | web fonts | flexbox, grid |
| Desktop | full RGB | platform units | system fonts | native layouts |
| Mobile | full RGB | touch-friendly | system fonts | responsive |

## Expected Outcome

- Design tokens ที่สม่ำเสมอ
- Component library ที่ reusable
- Documentation ครบถ้วน
- Cross-platform consistency
- Accessibility compliance

```typescript
// Primary colors
const primary = {
  50: '#f0f9ff',
  100: '#e0f2fe',
  500: '#0ea5e9',
  900: '#0c4a6e',
}

// Semantic colors
const semantic = {
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
}
```

### Typography

```typescript
const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
}
```

### Spacing

```typescript
const spacing = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  6: '1.5rem',
  8: '2rem',
}
```

## Common Mistakes

- ไม่กำหนด design tokens ก่อนสร้าง components
- สร้าง components โดยไม่ document
- ไม่ test accessibility
- ไม่พิจารณา platform differences

## Platform-Specific Guidelines

### TUI (Terminal UI)
- จำกัด 16 colors (terminal colors)
- ใช้ character spacing
- ใช้ monospace fonts เท่านั้น
- grid-based layouts

### Web
- full RGB support
- rem/em units
- web fonts
- flexbox, grid layouts

### Desktop
- full RGB support
- platform-specific units
- system fonts
- native layouts

### Mobile
- full RGB support
- touch-friendly spacing
- system fonts
- responsive layouts

- **Atoms** - พื้นฐานสุด (buttons, inputs, labels)
- **Molecules** - รวม atoms (form fields, cards)
- **Organisms** - รวม molecules (forms, headers)
- **Templates** - layouts
- **Pages** - หน้าเต็ม

### 2. Component Props

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}
```

### 3. Naming Conventions

- **PascalCase** สำหรับ components
- **camelCase** สำหรับ props
- **kebab-case** สำหรับ CSS classes
- **UPPER_SNAKE_CASE** สำหรับ constants

## References

- [Design Systems](https://www.designsystems.com/)
- [Atomic Design](http://atomicdesign.bradfrost.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
