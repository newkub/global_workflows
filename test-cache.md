---
title: Test Cache
description: ทดสอบ cache strategies, invalidation แล CDN caching
auto_execution_mode: 3
related_workflows:
  - /test-api
  - /test-network
---

## Goal

ทดสอบ cache strategies ให้ครอบคลุม รวม browser cache, CDN cache, แล application cache

## Execute

### 1. Setup Cache Testing

1. ติดตั้ง cache testing tools
2. Configure cache headers
3. Setup CDN cache testing
4. Configure application cache

### 2. Test Browser Cache

1. Test Cache-Control headers
2. Test ETag validation
3. Test Last-Modified headers
4. Verify cache hit/miss behavior

### 3. Test CDN Caching

1. Test CDN cache hit rates
2. Test cache invalidation
3. Test cache purging
4. Verify CDN configuration

### 4. Test Application Cache

1. Test Redis caching
2. Test in-memory caching
3. Test cache warming
4. Verify cache expiration

### 5. Test Cache Invalidation

1. Test time-based invalidation
2. Test event-based invalidation
3. Test manual cache clearing
4. Verify cache consistency

### 6. Test Cache Strategies

1. Test cache-first strategy
2. Test network-first strategy
3. Test stale-while-revalidate
4. Verify strategy selection

### 7. Test Cache Performance

1. Measure cache hit rates
2. Measure cache miss rates
3. Measure cache size
4. Verify cache efficiency

### 8. Test Cache Edge Cases

1. Test cache สำหรับ dynamic content
2. Test cache สำหรับ personalized content
3. Test cache สำหรับ authenticated content
4. Verify cache security

### 9. Run Cache Tests

1. Execute browser cache tests
2. Execute CDN cache tests
3. Execute application cache tests
4. Document cache issues

## Rules

### 1. Cache Headers

| Header | Purpose | Example |
|--------|---------|---------|
| Cache-Control | Cache policy | max-age=3600 |
| ETag | Content validation | "33a64df551425fcc55e4d42a148795d9f25f89d4" |
| Last-Modified | Last modified date | Wed, 21 Oct 2015 07:28:00 GMT |
| Vary | Cache key variation | Accept-Encoding |

### 2. Cache Strategies

- **Cache-First**: Serve from cache, fallback to network
- **Network-First**: Try network, fallback to cache
- **Stale-While-Revalidate**: Serve stale, update in background
- **Network-Only**: Always from network

### 3. Cache Invalidation

- Time-based: Invalidate after TTL
- Event-based: Invalidate on data change
- Manual: Clear cache explicitly
- Versioning: Use cache busting

### 4. Cache Security

- ไม่ cache sensitive data
- ใช้ cache keys ที่ specific ต่อ user
- Validate cache permissions
- Implement cache encryption สำหรับ sensitive data

### 5. Cache Monitoring

- Track cache hit rates
- Monitor cache size
- Alert on cache misses
- Measure cache latency

## Expected Outcome

- [ ] Browser cache configured correctly
- [ ] CDN cache working efficiently
- [ ] Application cache validated
- [ ] Cache invalidation tested
- [ ] Cache performance measured
- [ ] Cache security verified

## Common Mistakes

- ไม่ set cache headers
- Cache sensitive data
- ไม่ invalidate cache เมื่อ data changes
- ไม่ monitor cache performance
- Cache keys ไม่ specific พอ
- ไม่ test cache edge cases

## Anti-Patterns

- ❌ Cache sensitive data
- ❌ ไม่ set cache headers
- ❌ ไม่ invalidate cache
- ❌ Cache keys ไม่ specific
- ❌ ไม่ monitor cache

