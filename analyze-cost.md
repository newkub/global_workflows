---
title: Analyze Cost
description: วิเคราะห์ cloud cost optimization, resource utilization, billing patterns
auto_execution_mode: 3
related_workflows:
  - /analyze-deployment
  - /analyze-performance
  - /improve-cost-optimization
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ cloud cost patterns และ resource utilization เพื่อระบุ cost optimization opportunities

## Scope

Cloud cost optimization, resource utilization, billing patterns, serverless efficiency, database cost, CDN cost, storage cost, compute cost

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม cost metrics ผ่าน scripts (resource scan, config analysis, usage patterns)

### 2. Check Compute Costs

1. ระบุ over-provisioned resources (CPU, memory)
2. ระบุ missing auto-scaling configuration
3. ระบุ missing serverless optimization (cold starts)
4. ระบุ idle resources ที่ควร terminate
5. ระบุ missing request batching สำหรับ API calls

### 3. Check Database Costs

1. ระบุ over-provisioned database instances
2. ระบุ missing connection pooling
3. ระบุ expensive queries ที่ consume resources
4. ระบุ missing read replicas สำหรับ read-heavy workloads
5. ระบุ missing data archiving (old data ใน hot storage)

### 4. Check Storage Costs

1. ระบุ missing storage lifecycle policies
2. ระบุ data ใน hot storage ที่ควรเป็น cold
3. ระบุ missing data compression
4. ระบุ duplicate data storage
5. ระบุ missing cleanup automation

### 5. Check CDN And Bandwidth Costs

1. ระบุ missing CDN cache optimization
2. ระบุ missing bandwidth optimization (compression, minification)
3. ระบุ missing image optimization สำหรับ bandwidth
4. ระบุ missing video streaming optimization
5. ระบุ unnecessary data transfer

### 6. Check Serverless Efficiency

1. ระบุ missing function timeout optimization
2. ระบุ missing function memory optimization
3. ระบุ missing provisioned concurrency
4. ระบุ missing function batching
5. ระบุ cold start patterns ที่เพิ่ม cost

### 7. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: compute → database → storage → CDN/bandwidth → serverless

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม resource และ estimated cost impact

### 2. Severity Classification

- **Critical**: idle resources, over-provisioned instances, no auto-scaling
- **High**: expensive queries, missing connection pooling, no CDN
- **Medium**: missing lifecycle policies, missing compression, cold starts
- **Low**: missing batching, missing provisioned concurrency, duplicate data

### 3. Framework Awareness

- ตรวจสอบ Cloudflare Workers cost patterns
- ตรวจสอบ Supabase pricing tiers
- ตรวจสอบ Vercel/Netlify serverless costs

### 4. Use Scripts For Cost Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ ast-grep สำหรับ resource configuration detection
- ใช้ `/use-scripts` เมื่อต้อง scan ไฟล์มากกว่า 10 ไฟล์

## Expected Outcome

- Cost optimization opportunities ระบุพร้อม resource และ severity
- Compute และ database cost issues จัดลำดับตาม impact
- พร้อมสำหรับ `/improve-cost-optimization`
