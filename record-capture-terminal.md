---
title: Record Capture Terminal
description: Record video และ capture ภาพจาก terminal สำหรับ CLI testing
auto_execution_mode: 3
related:
  - /record-terminal
  - /capture-terminal
  - /test-usage
  - /watch-terminal
---

## Goal

เลือกและใช้ tools ที่เหมาะสมสำหรับ record video และ capture ภาพจาก terminal

## Scope

ใช้สำหรับ workflows ที่ต้องการบันทึก terminal sessions เช่น `/test-usage`, `/run-dev`, `/watch-terminal`

## Execute

### 1. Determine Use Case

วิเคราะห์ความต้องการแล้วเลือก workflow ที่เหมาะสม

1. ถ้าต้องการ **บันทึกวิดีโอ/session** ให้ทำ `/record-terminal`
2. ถ้าต้องการ **capture ภาพ screenshot** ให้ทำ `/capture-terminal`
3. ถ้าต้องการทั้งสองอย่าง ให้ทำทั้งคู่ตามลำดับ

## Rules

### 1. Delegation

- ใช้ `/record-terminal` สำหรับ recording terminal sessions ทั้งหมด
- ใช้ `/capture-terminal` สำหรับ capture terminal screenshots ทั้งหมด
- ไม่เขียนซ้ำกับ `/record-terminal` และ `/capture-terminal` — ดูรายละเอียดที่นั่น

### 2. Integration With Workflows

- เรียก `/record-terminal` หรือ `/capture-terminal` ใน workflows ที่ต้องการบันทึก
- ใช้ใน `/test-usage` สำหรับบันทึก test execution
- ใช้ใน `/run-dev` สำหรับบันทึก development sessions
- ใช้ใน `/watch-terminal` สำหรับ monitoring

## Expected Outcome

- เลือก workflow ที่เหมาะสมกับ use case
- Terminal sessions บันทึกได้อย่างมีประสิทธิภาพ
- ไม่มีเนื้อหาซ้ำซ้อนกับ `/record-terminal` และ `/capture-terminal`
