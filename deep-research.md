---
title: Deep Research
description: ค้นหาข้อมูลจาก NPM, GitHub, DeepWiki, Context7, และ Windsurf WebSearch
auto_execution_mode: 3
---

## Goal

ค้นหาข้อมูลลึกจาก multiple sources เพื่อให้ได้คำตอบที่ครบถ้วนและถูกต้อง

## Scope

ค้นหาข้อมูลจาก NPM, GitHub, DeepWiki, Context7 และ Windsurf WebSearch

## Execute

### 1. Identify Research Topic

ระบุหัวข้อที่ต้องการค้นหา แยก keywords สำคัญ และกำหนด scope ของการค้นหา

### 2. Search Package And Code Sources

ค้นหาข้อมูลทั่วไปจาก package registries และ code repositories ตาม ## Rules ข้อ 1

### 3. Use AI Documentation Tools

ใช้ AI tools สำหรับ documentation ที่มี MCP integration ตาม ## Rules ข้อ 3

### 4. Use CRW For Official Documentation

ใช้ CRW สำหรับ crawl official documentation ตาม ## Rules ข้อ 4:

- ใช้ `crw map <domain>` เพื่อ discover URLs ทั้งหมดจาก official site
- ใช้ `crw crawl <domain> --depth <n>` เพื่อ crawl และอ่านทุกหน้า
- ใช้ `--format markdown` สำหรับ output ที่ LLM อ่านง่าย
- ใช้ `--output <file>` เพื่อบันทึกผลลัพธ์

### 5. Use Windsurf WebSearch

อ่าน content จาก official documentation URLs ตาม ## Rules ข้อ 5

### 6. Find Latest Year

ค้นหาปีล่าสุดของข้อมูลที่เกี่ยวข้อง เพื่อให้ได้ข้อมูลที่ current ที่สุด:

- ค้นหาด้วย keywords ที่ระบุปี เช่น `2025`, `2026`, `latest`
- ใช้ `search_web` กับ query ที่มีปีปัจจุบัน เช่น `<topic> 2026`, `<topic> latest`
- ตรวจสอบ publish dates และ release dates จากทุก sources
- เปรียบเทียบปีจาก NPM registry, GitHub releases, และ official documentation
- เลือกข้อมูลที่มีปีล่าสุดเป็น primary source

### 7. Synthesize Findings

รวบรวมข้อมูลจากทุก sources เปรียบเทียบและ cross-reference สรุป findings ที่สำคัญ และจัดกลุ่มตามหมวดหมู่ โดยเน้นข้อมูลที่มีปีล่าสุด

## Rules

### 1. Source Selection

เลือกใช้ multiple sources เพื่อความถูกต้อง:

- ใช้ `NPM Registry` สำหรับ package information
- ใช้ `GitHub` สำหรับ repositories และ code
- ใช้ `DeepWiki` สำหรับ GitHub repositories
- ใช้ `Context7` สำหรับ library documentation
- ใช้ `Windsurf WebSearch` สำหรับ web search และ official documentation

### 2. Credibility Check

ตรวจสอบ credibility ของ sources:

- ตรวจสอบ source reputation และ benchmark scores
- ตรวจสอบ download counts และ maintenance
- ตรวจสอบ stars, forks, issues บน GitHub
- กรองผลลัพธ์จาก credible sources
- เปรียบเทียบข้อมูลจากหลายแหล่ง

### 3. AI Documentation Tools

ใช้ AI documentation tools อย่างมีประสิทธิภาพ:

- ใช้ DeepWiki (`mcp2_ask_question`, `mcp2_read_wiki_contents`) สำหรับ GitHub repositories
- ใช้ Context7 (`mcp1_resolve-library-id`, `mcp1_query-docs`) สำหรับ library documentation
- ตรวจสอบ source reputation และ benchmark scores

### 4. CRW For Official Documentation

ใช้ CRW สำหรับ crawl official documentation อย่างมีประสิทธิภาพ:

- ใช้ `crw map <domain>` เพื่อ discover URLs ทั้งหมดจาก official site
- ใช้ `crw crawl <domain> --depth <n>` เพื่อ crawl และอ่านทุกหน้า
- ใช้ `--format markdown` สำหรับ output ที่ LLM อ่านง่าย
- ใช้ `--output <file>` เพื่อบันทึกผลลัพธ์
- ทำตาม `/follow-crw` สำหรับการใช้งาน CRW อย่างเต็มประสิทธิภาพ

### 5. Windsurf WebSearch Usage

ใช้ Windsurf WebSearch อย่างมีประสิทธิภาพ:

- ใช้ `search_web` สำหรับ web search ทั่วไป
- ใช้ `read_url_content` สำหรับอ่าน content จาก official documentation URLs
- ใช้ `view_content_chunk` สำหรับ large documents
- ใช้สำหรับ sources ที่ไม่มี MCP integration

### 6. Information Freshness

ตรวจสอบ dates และ recency ของข้อมูล โดยเน้นการค้นหาปีล่าสุด:

- ค้นหาปีล่าสุดจากทุก sources ก่อนใช้ข้อมูล
- ใช้ `search_web` กับ query ที่มีปีปัจจุบัน เช่น `<topic> 2026`
- เปรียบเทียบ publish dates และ release dates จาก NPM, GitHub, และ official docs
- ตรวจสอบ version compatibility กับปีล่าสุด
- เลือกข้อมูลที่มีปีล่าสุดเป็น primary source
- ติดตาม updates จาก sources หลัก

## Expected Outcome

- ข้อมูลครบถ้วนจาก multiple sources
- Cross-referenced findings ที่ถูกต้อง
- สรุป findings ที่สำคัญ
- ข้อมูลที่ใช้เป็นปีล่าสุด (latest year)
