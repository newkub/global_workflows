---
title: Deep Research
description: ค้นหาข้อมูลจาก CRW, NPM, GitHub, DeepWiki, Context7
auto_execution_mode: 3
related_workflows:
  - /follow-crw
---

## Goal

ค้นหาข้อมูลลึกจาก multiple sources เพื่อให้ได้คำตอบที่ครบถ้วนและถูกต้อง

## Scope

ค้นหาข้อมูลจาก CRW (web scraping), NPM, GitHub, DeepWiki และ Context7

## Execute

### 1. Identify Research Topic

1. ระบุหัวข้อที่ต้องการค้นหา
2. แยก keywords สำคัญ
3. กำหนด scope ของการค้นหา

### 2. Use CRW For Web Research

1. ทำ `/follow-crw` เพื่อใช้ CRW อย่างถูกต้อง
2. ใช้ `crw map <url>` เพื่อ discover URLs ทั้งหมด
3. ใช้ `crw <url>` สำหรับ scrape content แต่ละ URL
4. ใช้ `crw search "query"` สำหรับ web search ผ่าน SearXNG

### 3. Search Package And Code Sources

1. ค้นหา packages ที่เกี่ยวข้องใน NPM Registry
2. ค้นหา repositories ที่เกี่ยวข้องใน GitHub
3. ตรวจสอบ download counts, stars, forks, issues

### 4. Use AI Documentation Tools

1. ใช้ DeepWiki (`mcp2_ask_question`, `mcp2_read_wiki_contents`) สำหรับ GitHub repositories
2. ใช้ Context7 (`mcp1_resolve-library-id`, `mcp1_query-docs`) สำหรับ library documentation
3. ตรวจสอบ source reputation และ benchmark scores

### 5. Synthesize Findings

1. รวบรวมข้อมูลจากทุก sources
2. เปรียบเทียบและ cross-reference
3. สรุป findings ที่สำคัญ

## Rules

### 1. Source Selection

เลือกใช้ multiple sources เพื่อความถูกต้อง:

- ใช้ `CRW` สำหรับ web scraping และ search
- ใช้ `NPM Registry` สำหรับ package information
- ใช้ `GitHub` สำหรับ repositories และ code
- ใช้ `DeepWiki` สำหรับ GitHub repositories
- ใช้ `Context7` สำหรับ library documentation

### 2. CRW Usage

ใช้ CRW สำหรับ web research:

- ใช้ `crw map <url>` เพื่อ discover URLs ทั้งหมดก่อน
- ใช้ `crw <url>` สำหรับ scrape content แต่ละ URL
- ใช้ `crw search "query"` สำหรับ web search
- ใช้ `--format json` สำหรับ structured output
- ใช้ `--format markdown` สำหรับ readable output

### 3. Credibility Check

ตรวจสอบ credibility ของ sources:

- ตรวจสอบ source reputation และ benchmark scores
- ตรวจสอบ download counts และ maintenance
- ตรวจสอบ stars, forks, issues บน GitHub
- กรองผลลัพธ์จาก credible sources
- เปรียบเทียบข้อมูลจากหลายแหล่ง

### 4. AI Documentation Tools

ใช้ AI documentation tools อย่างมีประสิทธิภาพ:

- ใช้ DeepWiki (`mcp2_ask_question`, `mcp2_read_wiki_contents`) สำหรับ GitHub repositories
- ใช้ Context7 (`mcp1_resolve-library-id`, `mcp1_query-docs`) สำหรับ library documentation
- ตรวจสอบ source reputation และ benchmark scores

### 5. Information Freshness

ตรวจสอบ dates และ recency ของข้อมูล:

- ตรวจสอบว่าข้อมูลเป็นปัจจุบัน
- เปรียบเทียบ publish dates
- ตรวจสอบ version compatibility
- ติดตาม updates จาก sources หลัก

## Expected Outcome

- ข้อมูลครบถ้วนจาก multiple sources
- Cross-referenced findings ที่ถูกต้อง
- สรุป findings ที่สำคัญ