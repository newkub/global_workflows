---
title: Test Network
description: ทดสอบ network conditions, offline mode แล retry mechanisms
auto_execution_mode: 3
related_workflows:
  - /test-e2e
  - /test-api
---

## Goal

ทดสอบ network conditions ให้ครอบคลุม รวม offline mode, slow network, แล retry mechanisms

## Execute

### 1. Setup Network Testing Tools

1. ติดตั้ง Chrome DevTools สำหรับ network throttling
2. Configure network simulation tools
3. Setup offline testing environment
4. Configure network monitoring

### 2. Test Offline Mode

1. Test application behavior ขณะ offline
2. Test offline UI indicators
3. Test data caching สำหรับ offline
4. Test sync เมื่อกลับ online

### 3. Test Slow Network

1. Test บน 3G network (slow)
2. Test บน 4G network (medium)
3. Test บน slow WiFi
4. Verify loading states แ� indicators

### 4. Test Network Latency

1. Simulate high latency (500ms+)
2. Test timeout handling
3. Test request cancellation
4. Verify error messages

### 5. Test Network Interruption

1. Simulate network drops
2. Test reconnection logic
3. Test data recovery
4. Verify state consistency

### 6. Test Retry Mechanisms

1. Test retry on failure
2. Test exponential backoff
3. Test retry limits
4. Verify retry behavior

### 7. Test Request Queueing

1. Test request queuing ขณะ offline
2. Test request ordering
3. Test request deduplication
4. Verify queue processing

### 8. Test Data Synchronization

1. Test sync เมื่อกลับ online
2. Test conflict resolution
3. Test incremental sync
4. Verify data integrity

### 9. Run Network Tests

1. Execute offline mode tests
2. Execute slow network tests
3. Execute retry mechanism tests
4. Document network issues

## Rules

### 1. Network Conditions

| Condition | Latency | Bandwidth | Use Case |
|-----------|---------|-----------|----------|
| Offline | N/A | 0 Kbps | No connection |
| Slow 3G | 2000ms | 400 Kbps | Poor connection |
| Fast 3G | 500ms | 1.6 Mbps | Mobile data |
| 4G | 100ms | 10 Mbps | Good mobile |
| WiFi | 20ms | 30 Mbps | Desktop |

### 2. Offline Testing

- Test Service Worker registration
- Test cache strategies (cache-first, network-first)
- Test offline UI indicators
- Test sync เมื่อ reconnected

### 3. Retry Strategy

```javascript
// Exponential backoff
const retryWithBackoff = async (fn, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => 
        setTimeout(resolve, Math.pow(2, i) * 1000)
      );
    }
  }
};
```

### 4. Error Handling

- Show clear error messages สำหรับ network failures
- Provide retry options สำหรับ users
- Cache critical data สำหรับ offline access
- Implement graceful degradation

### 5. Testing Tools

| Tool | Use Case | Platform |
|------|----------|----------|
| Chrome DevTools | Network throttling | Browser |
| Network Link Conditioner | macOS simulation | macOS |
| Clumsy | Windows simulation | Windows |
| Service Worker | Offline caching | All |

## Expected Outcome

- [ ] Offline mode works correctly
- [ ] Slow network handled gracefully
- [ ] Retry mechanisms tested
- [ ] Data sync validated
- [ ] Error messages clear
- [ ] Network resilience documented

## Common Mistakes

- ไม่ test offline mode
- ไม่ handle network failures
- ไม่ implement retry logic
- ไม่ cache critical data
- Error messages ไม่ชัดเจน
- ไม่ test slow network

## Anti-Patterns

- ❌ ไม่ test offline mode
- ❌ ไม่ handle network failures
- ❌ ไม่ implement retry logic
- ❌ ไม่ cache critical data
- ❌ Silent failures

