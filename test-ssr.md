---
title: Test SSR
description: ทดสอบ server-side rendering, hydration แล SEO metadata
auto_execution_mode: 3
related_workflows:
  - /test-e2e
  - /test-component
---

## Goal

ทดสอบ server-side rendering ให้ครอบคลุม รวม hydration, SEO metadata, แล initial HTML validation

## Execute

### 1. Setup SSR Testing

1. ติดตั้ง SSR testing tools
2. Configure test SSR server
3. Setup hydration testing
4. Configure SEO validation

### 2. Test Server Rendering

1. Test initial HTML generation
2. Test server-side component rendering
3. Test data fetching on server
4. Verify server response time

### 3. Test Hydration

1. Test client-side hydration
2. Test hydration mismatches
3. Test event listeners after hydration
4. Verify state consistency

### 4. Test SEO Metadata

1. Test page titles
2. Test meta descriptions
3. Test Open Graph tags
4. Test Twitter Card tags

### 5. Test Structured Data

1. Test JSON-LD markup
2. Test schema.org validation
3. Test rich snippets
4. Verify structured data correctness

### 6. Test Performance

1. Measure Time to First Byte (TTFB)
2. Measure First Contentful Paint (FCP)
3. Test streaming SSR
4. Verify caching strategies

### 7. Test Error Handling

1. Test server errors
2. Test 404 pages
3. Test 500 pages
4. Verify error page rendering

### 8. Test Client Navigation

1. Test client-side routing
2. Test navigation transitions
3. Test scroll restoration
4. Verify navigation state

### 9. Run SSR Tests

1. Execute server rendering tests
2. Execute hydration tests
3. Execute SEO tests
4. Document SSR issues

## Rules

### 1. SSR Testing Checklist

- Initial HTML ต้อง complete แล valid
- Hydration ต้อง match server HTML
- SEO metadata ต้อง correct
- Structured data ต้อง valid
- Performance metrics ต้อง acceptable

### 2. Hydration Testing

```javascript
// Test hydration mismatch
expect(document.querySelector('h1').textContent).toBe('Server Title');
// After hydration
expect(document.querySelector('h1').textContent).toBe('Client Title');
```

### 3. SEO Metadata

```html
<title>Page Title</title>
<meta name="description" content="Page description">
<meta property="og:title" content="OG Title">
<meta property="og:description" content="OG Description">
```

### 4. Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": "Author Name"
}
```

### 5. Performance Targets

- TTFB < 200ms
- FCP < 1.8s
- LCP < 2.5s
- Hydration < 100ms

## Expected Outcome

- [ ] Server rendering validated
- [ ] Hydration tested
- [ ] SEO metadata correct
- [ ] Structured data valid
- [ ] Performance optimized
- [ ] Error handling tested

## Common Mistakes

- ไม่ test hydration mismatches
- ไม่ validate SEO metadata
- ไม่ test structured data
- ไม่ measure performance
- Hydration errors ไม่ handled
- ไม่ test error pages

## Anti-Patterns

- ❌ ไม่ test hydration
- ❌ ไม่ validate SEO
- ❌ ไม่ test structured data
- ❌ ไม่ measure performance
- ❌ Hydration mismatches
