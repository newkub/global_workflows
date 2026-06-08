---

title: Review Frontend Optimization

description: Review frontend performance, bundle size และ rendering optimization

auto_execution_mode: 3

related_workflows:
  - /review-performance
  - /check-performance
  - /optimize-bundle

---

## Goal

Review frontend optimization ทั้งหมดเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม bundle size, rendering performance, lazy loading, code splitting

## Execute

### 1. Analyze Bundle Size

1. ตรวจสอบ bundle size
2. Review bundle analysis
3. Check large dependencies
4. Identify optimization opportunities

### 2. Review Rendering Performance

1. Check re-renders
2. Review component optimization
3. Analyze memoization usage
4. Check virtual DOM usage

### 3. Check Loading Strategy

1. Review lazy loading
2. Check code splitting
3. Analyze prefetching
4. Review asset loading

### 4. Review Asset Optimization

1. Check image optimization
2. Review font loading
3. Check CSS optimization
4. Analyze JS minification

### 5. Prioritize And Report

1. Group issues ตาม impact
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Reduce bundle size
2. Optimize rendering
3. Implement lazy loading
4. Optimize assets

## Rules

### 1. Bundle Size

ตรวจสอบ bundle size:

- Bundle size < 500KB
- ไม่มี unused code
- ใช้ tree shaking
- ใช้ code splitting
- ไม่ import ทั้ง library

### 2. Rendering Performance

ตรวจสอบ rendering performance:

- ไม่ re-render ไม่จำเป็น
- ใช้ memoization
- ใช้ keys ถูกต้อง
- ไม่มี heavy computations
- ใช้ virtualization สำหรับ lists

### 3. Loading Strategy

ตรวจสอบ loading strategy:

- ใช้ lazy loading
- ใช้ code splitting
- ใช้ prefetching
- โหลด assets อย่างเหมาะสม
- ใช้ skeleton loading

### 4. Asset Optimization

ตรวจสอบ asset optimization:

- Images optimized
- Fonts loaded อย่างเหมาะสม
- CSS minified
- JS minified
- ใช้ modern formats

### 5. Caching

ตรวจสอบ caching:

- มี browser caching
- มี service worker
- ใช้ CDN
- มี cache headers
- ไม่ cache dynamic content

## Expected Outcome

- Bundle size ลดลง
- Rendering performance ดีขึ้น
- Loading times ลดลง
- Assets optimized
- Core Web Vitals ผ่าน

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Bundle size ใหญ่
- Re-render ไม่จำเป็น
- ไม่มี lazy loading
- Images ไม่ optimized
- ไม่มี caching

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Bundle ขนาดใหญ่
- ❌ Re-render ทุกอย่าง
- ❌ โหลดทุกอย่างพร้อมกัน
- ❌ Images ไม่ optimized
- ❌ ไม่มี caching
