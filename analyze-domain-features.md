---
title: Analyze Domain Features
description: วิเคราะห์ domain features: payment, queue, realtime, webhook, multi-tenancy, email, notification, analytics, file upload, video, AI
auto_execution_mode: 3
related_workflows:
  - /analyze-payment
  - /analyze-queue
  - /analyze-realtime
  - /analyze-webhook
  - /analyze-multi-tenancy
  - /analyze-email
  - /analyze-notification
  - /analyze-analytics
  - /analyze-file-upload
  - /analyze-video
  - /analyze-ai
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ domain-specific features ของ codebase

## Scope

Payment, queue, realtime, webhook, multi-tenancy, email, notification, analytics, file upload, video, AI

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม domain feature metrics ผ่าน scripts (feature detection, integration scan, dependency analysis)

### 2. Analyze Business Features

1. ถ้า project มี payment ให้ทำ `/analyze-payment` วิเคราะห์ payment flow, Stripe, refund, subscription
2. ถ้า project มี multi-tenancy ให้ทำ `/analyze-multi-tenancy` วิเคราะห์ tenant isolation, provisioning, routing

### 3. Analyze Communication Features

1. ถ้า project มี email ให้ทำ `/analyze-email` วิเคราะห์ email templates, deliverability, SPF/DKIM/DMARC
2. ถ้า project มี notifications ให้ทำ `/analyze-notification` วิเคราะห์ push/in-app/SMS, preferences, routing
3. ถ้า project มี analytics ให้ทำ `/analyze-analytics` วิเคราะห์ event tracking, funnel, privacy-friendly analytics

### 4. Analyze Infrastructure Features

1. ถ้า project มี background jobs ให้ทำ `/analyze-queue` วิเคราะห์ background jobs, task queues, worker management
2. ถ้า project มี realtime ให้ทำ `/analyze-realtime` วิเคราะห์ WebSocket, SSE, real-time sync
3. ถ้า project มี webhooks ให้ทำ `/analyze-webhook` วิเคราะห์ webhook delivery, retry, signature verification

### 5. Analyze Media And AI Features

1. ถ้า project มี file upload ให้ทำ `/analyze-file-upload` วิเคราะห์ upload handling, validation, storage
2. ถ้า project มี video ให้ทำ `/analyze-video` วิเคราะห์ video streaming, transcoding, adaptive bitrate
3. ถ้า project มี AI integration ให้ทำ `/analyze-ai` วิเคราะห์ AI/LLM integration, prompt management, token usage

### 6. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: payment → multi-tenancy → file upload → email → notification → AI → queue → realtime → webhook → analytics → video

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Conditional Execution

- ถ้า project ไม่มี payment ให้ข้าม `/analyze-payment`
- ถ้า project ไม่มี background jobs ให้ข้าม `/analyze-queue`
- ถ้า project ไม่มี realtime ให้ข้าม `/analyze-realtime`
- ถ้า project ไม่มี webhooks ให้ข้าม `/analyze-webhook`
- ถ้า project ไม่มี multi-tenancy ให้ข้าม `/analyze-multi-tenancy`
- ถ้า project ไม่มี email ให้ข้าม `/analyze-email`
- ถ้า project ไม่มี notifications ให้ข้าม `/analyze-notification`
- ถ้า project ไม่มี analytics ให้ข้าม `/analyze-analytics`
- ถ้า project ไม่มี file upload ให้ข้าม `/analyze-file-upload`
- ถ้า project ไม่มี video ให้ข้าม `/analyze-video`
- ถ้า project ไม่มี AI integration ให้ข้าม `/analyze-ai`

### 3. Severity Classification

- **Critical**: missing payment security, missing tenant isolation, missing file validation
- **High**: missing webhook signature, missing email deliverability, missing AI safety
- **Medium**: missing notification preferences, missing queue retry, missing video captions
- **Low**: missing analytics consent, missing notification grouping, missing video analytics

### 4. Use Scripts For Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ feature pattern detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

### 5. Non-Redundancy

- แต่ละ sub-workflow มี scope ที่ไม่ทับซ้อนกัน
- ใช้ references แทนการเขียนซ้ำเนื้อหาจาก sub-workflows

## Expected Outcome

- Domain feature gaps ระบุพร้อม severity
- พร้อมสำหรับ orchestrator consolidation หรือ `/improve-features-coverage`
