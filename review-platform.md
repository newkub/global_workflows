---
title: Review Platform
description: Orchestrator สำหรับ review platform ครอบคลุม mobile, desktop, CLI, SSR, state management, routing
auto_execution_mode: 3
related:
  - /review-mobile
  - /review-desktop
  - /review-cli
  - /review-ssr
  - /review-state-management
  - /review-routing
  - /validate
  - /report
  - /report-format-table
  - /suggest-next-action
---

## Goal

Orchestrate platform review ครอบคลุมทุก dimension ของ platform ผ่าน sub-workflows พร้อม aggregate findings

## Scope

platform orchestrator สำหรับ: mobile app, desktop app, CLI/TUI, server-side rendering, state management, routing

## Execute

### 1. Run Sub-Workflows

ทำ review-* sub-workflows ตามลำดับ ถ้าพบ critical issues ให้หยุดและ validate ก่อนดำเนินต่อ

1. ทำ `/review-mobile` เพื่อ review Capacitor plugins, platform-specific code, offline, mobile UX
2. ทำ `/review-desktop` เพื่อ review native integration, window management, auto-update, IPC security
3. ทำ `/review-cli` เพื่อ review CLI commands, options, help text, TUI layout, terminal compatibility
4. ทำ `/review-ssr` เพื่อ review server-side rendering, hydration, SSR-compatible code, streaming
5. ทำ `/review-state-management` เพื่อ review store organization, reactivity, data flow
6. ทำ `/review-routing` เพื่อ review route definitions, navigation guards, lazy loading, params validation

### 2. Validate Findings

1. ทำ `/validate` สำหรับ validate issues จากทุก sub-workflow
2. จัดลำดับการ validate ตาม severity: Critical → High → Medium → Low

### 3. Report

1. ทำ `/report` พร้อม `/report-format-table`
2. สร้างตาราง aggregate findings จากทุก sub-workflow
3. ทำ `/suggest-next-action`

## Rules

### 1. Skip Conditions

- ถ้า project ไม่มี mobile app ให้ข้าม `/review-mobile`
- ถ้า project ไม่มี desktop app ให้ข้าม `/review-desktop`
- ถ้า project ไม่มี CLI หรือ TUI ให้ข้าม `/review-cli`
- ถ้า project ไม่มี SSR ให้ข้าม `/review-ssr`
- ถ้า project ไม่มี state management ให้ข้าม `/review-state-management`
- ถ้า project ไม่มี routing ให้ข้าม `/review-routing`

### 2. Delegation

- Orchestrator เรียก sub-workflows เท่านั้น ไม่ทำ review เอง
- ไม่ duplicate เนื้อหา sub-workflows

### 3. Review Independence

- ทำ review เท่านั้น ไม่แก้ไข code ระหว่าง review

## Expected Outcome

- รายงานตาราง aggregate findings จากทุก platform sub-workflow
- รายงาน recommended actions พร้อม priority
- แนะนำ action ถัดไปผ่าน `/suggest-next-action`
