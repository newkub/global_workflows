---
title: Update All Windsurf Global Workflows
description: อัพเดททุกไฟล์ใน windsurf global workflows ให้สอดคล้องกับมาตรฐาน
auto_execution_mode: 3
---


อัพเดททุกไฟล์ใน windsurf global workflows ให้สอดคล้องกับ `/write-global-workflows`

## Goal

ทุก workflow ใน global_workflows สอดคล้องกับ `/write-global-workflows`

## Execute

### 1. List Workflows

1. รายชื่อไฟล์ .md ทั้งหมดใน global_workflows
2. จัดลำดับตามตัวอักษร

### 2. Validate Each Workflow

1. อ่านไฟล์ workflow แต่ละไฟล์
2. ตรวจสอบตาม `/write-global-workflows`

### 3. Update Non-Compliant Workflows

1. แก้ไขให้สอดคล้องกับ `/write-global-workflows`
2. ลบเนื้อหาที่ซ้ำซ้อน
3. ใช้ `/workflow-name` อ้างอิงแทนการเขียนซ้ำ

### 4. Verify Changes

1. ตรวจสอบทุก workflow ผ่าน validation
2. ตรวจสอบ consistency กับ workflows อื่น

## Rules

ทำตาม `/write-global-workflows`

## Expected Outcome

ทุก workflow ใน global_workflows สอดคล้องกับ `/write-global-workflows`

