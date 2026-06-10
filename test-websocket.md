---
title: Test WebSocket
description: ทดสอบ WebSocket connections แล real-time messaging
auto_execution_mode: 3
related_workflows:
  - /test-api
  - /test-network
---

## Goal

ทดสอบ WebSocket connections ให้ครอบคลุม รวม connection handling, real-time messaging, แล reconnection logic

## Execute

### 1. Setup WebSocket Testing

1. ติดตั้ง WebSocket testing library
2. Configure test WebSocket server
3. Setup WebSocket client testing
4. Configure mock WebSocket server

### 2. Test Connection

1. Test WebSocket connection establishment
2. Test connection failure handling
3. Test connection timeout
4. Test connection closure

### 3. Test Message Sending

1. Test text message sending
2. Test binary message sending
3. Test message validation
4. Test message encoding

### 4. Test Message Receiving

1. Test text message receiving
2. Test binary message receiving
3. Test message parsing
4. Test message filtering

### 5. Test Reconnection Logic

1. Test automatic reconnection
2. Test reconnection with backoff
3. Test reconnection limits
4. Test reconnection state management

### 6. Test Room/Channel Management

1. Test joining rooms
2. Test leaving rooms
3. Test room message broadcasting
4. Test room permissions

### 7. Test Authentication

1. Test authenticated connections
2. Test connection authentication
3. Test token validation
4. Test unauthorized access

### 8. Test Error Handling

1. Test connection errors
2. Test message errors
3. Test network errors
4. Test server errors

### 9. Run WebSocket Tests

1. Execute connection tests
2. Execute messaging tests
3. Execute reconnection tests
4. Document WebSocket issues

## Rules

### 1. Connection Testing

```javascript
// Test connection
const ws = new WebSocket('ws://localhost:8080');
ws.onopen = () => console.log('Connected');
ws.onerror = (error) => console.error('Error:', error);
ws.onclose = () => console.log('Disconnected');
```

### 2. Message Testing

- Test ทุก message types (text, binary, JSON)
- Validate message format
- Test message size limits
- Test message ordering

### 3. Reconnection Strategy

```javascript
// Exponential backoff reconnection
let retryCount = 0;
const maxRetries = 5;
const connect = () => {
  const ws = new WebSocket(url);
  ws.onclose = () => {
    if (retryCount < maxRetries) {
      setTimeout(connect, Math.pow(2, retryCount) * 1000);
      retryCount++;
    }
  };
};
```

### 4. Error Handling

- Handle connection errors gracefully
- Show user-friendly error messages
- Implement retry logic
- Log errors สำหรับ debugging

### 5. Performance Testing

- Measure connection latency
- Test message throughput
- Test concurrent connections
- Monitor memory usage

## Expected Outcome

- [ ] WebSocket connections tested
- [ ] Real-time messaging validated
- [ ] Reconnection logic tested
- [ ] Error handling verified
- [ ] Authentication tested
- [ ] Performance measured

## Common Mistakes

- ไม่ test reconnection logic
- ไม่ handle connection errors
- ไม่ validate message format
- ไม่ test authentication
- ไม่ implement retry logic
- ไม่ test concurrent connections

## Anti-Patterns

- ❌ ไม่ test reconnection
- ❌ ไม่ handle connection errors
- ❌ ไม่ validate messages
- ❌ ไม่ test authentication
- ❌ ไม่ implement retry

