---
title: Analyze AI
description: วิเคราะห์ AI/LLM integration, prompt management, token usage, error handling
auto_execution_mode: 3
related_workflows:
  - /analyze-api
  - /analyze-cost
  - /improve-features-coverage
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ AI/LLM integration เพื่อระบุ prompt และ token management gaps

## Scope

AI/LLM integration, prompt management, token usage, error handling, model selection, streaming responses, AI safety, cost optimization

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม AI metrics ผ่าน scripts (AI API detection, prompt scan, token analysis)

### 2. Check Prompt Management

1. ระบุ missing prompt templates
2. ระบุ missing prompt versioning
3. ระบุ missing prompt testing
4. ระบุ hardcoded prompts ที่ควรเป็น configurable
5. ระบุ missing system prompt management
6. ระบุ missing prompt injection prevention

### 3. Check Token Usage

1. ระบุ missing token counting
2. ระบุ missing token budget management
3. ระบุ missing context window optimization
4. ระบุ missing conversation summarization
5. ระบุ missing token rate limiting
6. ระบุ missing cost tracking per request

### 4. Check Model Selection

1. ระบุ missing model selection strategy (cost vs quality)
2. ระบุ missing model fallback
3. ระบุ missing model version management
4. ระบุ missing model capability matching
5. ระบุ missing model routing ตาม task complexity

### 5. Check Streaming Responses

1. ระบุ missing streaming response support
2. ระบุ missing streaming error handling
3. ระบุ missing streaming cancellation
4. ระบุ missing streaming backpressure
5. ระบุ missing streaming UI feedback
6. ระบุ missing partial response handling

### 6. Check Error Handling

1. ระบุ missing AI API error handling
2. ระบุ missing rate limit handling (429)
3. ระบุ missing timeout handling
4. ระบุ missing retry mechanism สำหรับ AI calls
5. ระบุ missing fallback response
6. ระบุ missing hallucination detection

### 7. Check AI Safety

1. ระบุ missing input content filtering
2. ระบุ missing output content filtering
3. ระบุ missing PII detection ใน prompts
4. ระบุ missing bias detection
5. ระบุ missing harmful content prevention
6. ระบุ missing user consent สำหรับ AI features

### 8. Check Cost Optimization

1. ระบุ missing response caching
2. ระบุ missing batch processing
3. ระบุ missing model downsizing สำหรับ simple tasks
4. ระบุ missing prompt compression
5. ระบุ missing semantic caching
6. ระบุ missing usage analytics

### 9. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: prompt management → error handling → token usage → AI safety → model selection → cost → streaming

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: missing prompt injection prevention, missing PII detection, no error handling
- **High**: missing token management, missing retry, missing streaming, missing safety
- **Medium**: missing prompt versioning, missing model fallback, missing caching
- **Low**: missing prompt testing, missing analytics, missing compression

### 3. Framework Awareness

- ตรวจสอบ TanStack AI patterns
- ตรวจสอบ OpenAI integration
- ระบุ AI SDK patterns

### 4. Use Scripts For AI Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ AI API call detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- AI integration gaps ระบุพร้อม severity
- Prompt และ token management issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-features-coverage`
