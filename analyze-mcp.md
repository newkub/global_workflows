---
title: Analyze MCP
description: วิเคราะห์ MCP server quality, tool schemas, error handling, transport
auto_execution_mode: 3
related_workflows:
  - /analyze-api
  - /analyze-sdk
  - /improve-sdk
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ MCP server quality เพื่อระบุ tool schema และ transport gaps

## Scope

MCP tool schemas, error handling, transport (stdio, SSE, WebSocket), resource management, prompt templates, server lifecycle

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม MCP metrics ผ่าน scripts (tool detection, schema scan, transport analysis)

### 2. Check Tool Schemas

1. ระบุ missing Zod validation สำหรับ tool inputs
2. ระบุ missing tool descriptions
3. ระบุ missing parameter descriptions
4. ระบุ missing required vs optional parameter distinction
5. ระบุ missing output schema
6. ระบุ inconsistent tool naming conventions

### 3. Check Error Handling

1. ระบุ missing tool error handling
2. ระบุ missing error response format
3. ระบุ missing error codes
4. ระบุ missing timeout handling
5. ระบุ missing rate limiting
6. ระบุ missing graceful degradation

### 4. Check Transport

1. ระบุ missing transport selection (stdio, SSE, WebSocket)
2. ระบุ missing transport error handling
3. ระบุ missing connection lifecycle management
4. ระบุ missing reconnection logic
5. ระบุ missing transport security (TLS)

### 5. Check Resource Management

1. ระบุ missing resource cleanup
2. ระบุ missing resource listing
3. ระบุ missing resource reading
4. ระบุ missing resource subscriptions
5. ระบุ missing resource URI validation

### 6. Check Prompt Templates

1. ระบุ missing prompt template definitions
2. ระบุ missing prompt parameter validation
3. ระบุ missing prompt documentation
4. ระบุ missing prompt examples
5. ระบุ missing prompt versioning

### 7. Check Server Lifecycle

1. ระบุ missing server initialization
2. ระบุ missing server shutdown handling
3. ระบุ missing health check endpoint
4. ระบุ missing server version management
5. ระบุ missing capability negotiation

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: tool schemas → error handling → transport → lifecycle → resources → prompts

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม tool name และ severity

### 2. Severity Classification

- **Critical**: missing Zod validation, missing error handling, no transport security
- **High**: missing tool descriptions, missing timeout, missing lifecycle management
- **Medium**: missing output schema, missing reconnection, missing resource cleanup
- **Low**: missing prompt templates, missing versioning, missing capability negotiation

### 3. Framework Awareness

- ตรวจสอบ `@modelcontextprotocol/sdk` patterns
- ตรวจสอบ MCP server configuration
- ระบุ transport-specific patterns

### 4. Use Scripts For MCP Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ tool registration detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- MCP server gaps ระบุพร้อม tool name และ severity
- Schema และ error handling issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-sdk`
