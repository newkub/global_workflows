---
title: Report Format Log
description: จัดรูปแบบ log files
auto_execution_mode: 3
---

## Goal

จัดรูปแบบ log files ให้อ่านง่ายและ debug ได้

## Scope

ใช้สำหรับการจัดรูปแบบ:
- Server logs
- Error logs
- Debug logs
- Application logs

## Execute

### 1. Parse Logs

1. ระบุ log format และ structure
2. แยก log levels (INFO, WARN, ERROR, DEBUG)
3. แยก timestamps และ metadata
4. แยก log messages และ stack traces

### 2. Format Logs

1. ใช้ colors สำหรับ log levels
2. ใช้ timestamps พร้อม timezone
3. ใช้ consistent formatting
4. ใช้ line numbers สำหรับ reference

### 3. Filter Logs

1. กรอง logs ตาม levels
2. กรอง logs ตาม time ranges
3. กรอง logs ตาม keywords
4. กรอง logs ตาม sources

### 4. Highlight Issues

1. ใช้ bold สำหรับ errors และ warnings
2. ใช้ markers สำหรับ critical issues
3. ใช้ summaries สำหรับ error counts
4. ใช้ groupings สำหรับ related errors

## Rules

### Log Levels

ระดับ logs ที่ต้องจัดรูปแบบ

- ใช้ consistent colors สำหรับ levels
- ใช้ clear labels สำหรับ levels
- ใช้ proper ordering ตาม severity
- ใช้ standard log level names

### Formatting

การจัดรูปแบบ logs

- ใช้ consistent timestamp format
- ใช้ proper indentation สำหรับ stack traces
- ใช้ line wrapping สำหรับ long messages
- ใช้ metadata ที่เป็นประโยชน์

### Filtering

การกรอง logs

- ใช้ meaningful filters
- ใช้ time ranges ที่เหมาะสม
- ใช้ keywords ที่ relevant
- ใช้ source filters สำหรับ debugging

## Expected Outcome

- Logs ที่อ่านง่ายและ debug ได้
- Log levels ที่ชัดเจน
- Issues ที่ถูก highlight
- Filters ที่มีประสิทธิภาพ
