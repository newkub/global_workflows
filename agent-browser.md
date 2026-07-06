---
title: Agent Browser
description: ใช้ agent-browser CLI สำหรับ browser automation และ web testing
auto_execution_mode: 3
url: https://agent-browser.dev
related_workflows:
  - /follow-agent-browser
  - /watch-browser
---

## Goal

ใช้ `agent-browser` CLI สำหรับ browser automation และ web testing อย่างมีประสิทธิภาพ

## Scope

ใช้สำหรับ browser automation, web testing, และ monitoring ด้วย `agent-browser` CLI จาก Vercel Labs

## Execute

### 1. Use Follow Agent Browser

ทำตาม `/follow-agent-browser` สำหรับ browser automation และ configuration ทั้งหมด

1. ทำ `/follow-agent-browser` เพื่อดูคำสั่งและ options ทั้งหมด
2. ใช้ `/watch-browser` สำหรับการ watch หน้าเว็บต่อเนื่อง

## Rules

### 1. Delegation

- ใช้ `/follow-agent-browser` สำหรับ browser automation ทั้งหมด
- ไม่เขียนซ้ำกับ `/follow-agent-browser` — ดูรายละเอียดที่นั่น
- ใช้ `/watch-browser` สำหรับ continuous monitoring

## Expected Outcome

- Browser automation ทำงานได้อย่างมีประสิทธิภาพ
- ไม่มีเนื้อหาซ้ำซ้อนกับ `/follow-agent-browser`
