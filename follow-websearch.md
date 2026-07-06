---
title: Web Search
description: ใช้ CRW สำหรับ web search อย่างมีประสิทธิภาพ
auto_execution_mode: 3


## Goal

ใช้ CRW สำหรับ web search ผ่าน SearXNG เพื่อลด AI token และเพิ่มประสิทธิภาพ

## Execute

### 1. Web Search

ใช้ `crw search` สำหรับ web search ผ่าน SearXNG:

```bash
crw search "query"
crw search "rust web scraper" --format json
```

**เหมาะสำหรับ:**
- ค้นหาข้อมูลจากหลายแหล่งพร้อมกัน
- ต้องการผลลัพธ์แบบ structured (JSON)
- ลด AI token โดยใช้ search engine แทน AI generation

## Rules

### 1. Command Selection

- **Search**: `crw search` - สำหรับ web search

### 2. Token Reduction

- ใช้ `crw search` แทน AI generation สำหรับ web search
- ใช้ `--format json` สำหรับ structured output

## Expected Outcome

- ใช้ CRW search อย่างมีประสิทธิภาพ
- ลด AI token ด้วย search engine 
---


