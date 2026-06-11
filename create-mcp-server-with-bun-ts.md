---
title: Create MCP Server With Bun TS
description: สร้าง MCP server ด้วย Bun และ TypeScript SDK ตาม best practices
auto_execution_mode: 3
---

## Goal

สร้าง MCP server ด้วย Bun runtime และ TypeScript SDK ที่ใช้งานได้จริง

## Scope

ใช้สำหรับสร้าง MCP server ด้วย Bun และ TypeScript

## Execute

### 1. Setup Project

ตั้งค่า project สำหรับ MCP server

1. สร้าง project ด้วย `bun init`
2. ติดตั้ง `@modelcontextprotocol/sdk` ด้วย `bun add @modelcontextprotocol/sdk`
3. สร้าง project structure ตาม Clean Architecture
4. ตั้งค่า TypeScript configuration ตาม `/typescript`

### 2. Initialize Server

สร้าง MCP server instance

1. สร้าง server instance ด้วย `McpServer`
2. ระบุ `name` และ `version` ของ server
3. เพิ่ม `server instructions` อธิบายการใช้งาน
4. เปิดใช้ `logging` capability

### 3. Register Capabilities

ลงทะเบียน MCP capabilities

1. ลงทะเบียน tools ด้วย `registerTool()`
2. ลงทะเบียน resources ด้วย `registerResource()`
3. ลงทะเบียน prompts ด้วย `registerPrompt()`
4. กำหนด `inputSchema` ด้วย JSON Schema สำหรับ validation
5. ใช้ `completable()` สำหรับ argument completions

### 4. Configure Transport

ตั้งค่า transport layer

1. เลือก transport: `StdioServerTransport` (local) หรือ `Streamable HTTP` (remote)
2. สำหรับ Streamable HTTP: ใช้ `WebStandardStreamableHTTPServerTransport` สำหรับ Bun
3. ตั้งค่า `stateless_http=True` และ `json_response=True` สำหรับ production
4. เปิดใช้ DNS rebinding protection ด้วย middleware

### 5. Implement Security

ตั้งค่า security measures

1. ใช้ Authentication ด้วย JWT หรือ OAuth 2.1
2. ตั้งค่า Authorization ด้วย capability-based ACL
3. ใช้ input validation ด้วย strict schema
4. Sanitize output ก่อนส่งกลับ
5. ใช้ network isolation (bind to 127.0.0.1)

### 6. Add Resilience

เพิ่ม resilience patterns

1. ใช้ circuit breaker pattern สำหรับ external calls
2. เพิ่ม caching ด้วย TTL
3. ใช้ rate limiting ด้วย token bucket
4. ส่ง progress notifications สำหรับ long-running operations
5. ใช้ graceful degradation เมื่อ failure

### 7. Connect and Run

เชื่อมและรัน server

1. เชื่อม server กับ transport ด้วย `server.connect(transport)`
2. รัน server ด้วย `bun run src/index.ts`
3. ทดสอบด้วย MCP Inspector
4. ตรวจสอบ logs และ errors
5. ตรวจสอบ health checks

## Rules

### 1. Bun Runtime

ใช้ Bun runtime สำหรับ performance

- ใช้ `bun add` แทน `npm install`
- ใช้ `bunx` แทน `npx`
- ใช้ Bun native APIs เมื่อเป็นไปได้
- ใช้ `WebStandardStreamableHTTPServerTransport` สำหรับ Bun compatibility

### 2. Architecture

โครงสร้างต้องถูกต้อง

- ใช้ Single Responsibility Principle: แต่ละ server มี purpose เดียว
- แยก concerns: tools, resources, prompts ควรมีความเฉพาะเจาะจง
- ใช้ Clean Architecture หรือ Layered Architecture
- แยก business logic จาก protocol handling

### 3. Security

ตั้งค่า security measures

- ใช้ Defense in Depth: network, authentication, authorization, validation, monitoring
- Implement DNS rebinding protection สำหรับ HTTP servers
- Validate inputs ด้วย strict JSON Schema
- Sanitize outputs ก่อนส่งกลับ
- Log ทุก operations สำหรับ audit trail

### 4. Error Handling

จัดการ errors อย่างเหมาะสม

- ใช้ `console.error()` สำหรับ stdio servers (ไม่ใช้ stdout)
- Return structured errors ด้วย proper error codes
- Log errors ด้วย context ที่เพียงพอ
- ใช้ circuit breakers สำหรับ external dependencies
- ใช้ fallback values เมื่อ service unavailable

### 5. Performance

ตั้งค่า performance

- ใช้ caching สำหรับ expensive operations
- ใช้ rate limiting เพื่อป้องกัน abuse
- ใช้ async/await สำหรับ I/O operations
- ใช้ connection pooling สำหรับ databases
- Monitor latency และ throughput

### 6. Transport Selection

เลือก transport ที่เหมาะสม

- ใช้ `stdio` สำหรับ local integrations (Claude Desktop)
- ใช้ `Streamable HTTP` สำหรับ remote production deployments
- ใช้ `stateless_http=True` สำหรับ scalability
- ใช้ `json_response=True` สำหรับ compatibility
- ใช้ middleware สำหรับ security headers

### 7. Testing

ทดสอบอย่างครบถ้วน

- เขียน unit tests สำหรับ tools, resources, prompts
- เขียน integration tests สำหรับ transport layer
- ทดสอบด้วย MCP Inspector
- ทดสอบ error scenarios
- ทดสอบ security vulnerabilities

### 8. Documentation

เขียน documentation ครบถ้วน

- เขียน README อธิบาย capabilities
- Document input/output schemas
- Document authentication requirements
- Document environment variables
- เขียน examples สำหรับ common use cases

## Expected Outcome

- MCP server ที่ใช้งานได้จริงตาม MCP specification
- Server ที่มี tools, resources, prompts ที่ถูกต้อง
- Transport layer ที่เชื่อมต่อได้ (stdio หรือ HTTP)
- Security measures ที่ครบถ้วน (auth, validation, sanitization)
- Error handling และ logging ที่ robust
- Documentation ที่ครบถ้วน
- Tests ที่ครอบคลุม

## Reference

- MCP SDK: `@modelcontextprotocol/sdk`
- [MCP Documentation](https://modelcontextprotocol.io)
- [Bun Documentation](https://bun.sh/docs)

