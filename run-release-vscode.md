---
title: Run Release VSCode
description: Release VSCode extension ไปยัง marketplace ด้วยการตั้งค่าที่ถูกต้อง
auto_execution_mode: 3
---

Release VSCode extension ไปยัง marketplace ด้วยการตั้งค่าที่ถูกต้อง

## Goal

Release VSCode extension ไปยัง marketplace ด้วยการตั้งค่าที่ถูกต้องและตรวจสอบคุณภาพโค้ด

## Scope

Release VSCode extensions ไปยัง Visual Studio Marketplace

## Execute

### 1. Check Package Configuration

ตรวจสอบ package.json มีข้อมูลครบถ้วน

1. ตรวจสอบ package.json มี name, version, description, publisher
2. ตรวจสอบ repository และ homepage
3. ตรวจสอบ engines.vscode และ activationEvents
4. ตรวจสอบ main หรือ browser สำหรับ entry point
5. ตรวจสอบ contributes สำหรับ extension capabilities

### 2. Setup Authentication

ตั้งค่า authentication สำหรับ VSCode marketplace publish

1. รับ token จาก https://dev.azure.com/
2. ตั้งค่า VSCE_PAT ใน GitHub Secrets ด้วย:
   ```bash
   gh secret set VSCE_PAT
   ```
3. ตรวจสอบว่า VSCE_PAT มีอยู่ใน GitHub Secrets
4. ตรวจสอบว่า publisher มีอยู่ใน marketplace

### 3. Run Verify

ตรวจสอบคุณภาพโค้ดก่อน release

1. ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด
2. ตรวจสอบว่า scan, typecheck, lint, และ test ผ่านทั้งหมด
3. ถ้า verify ไม่ผ่าน ให้แก้ไขก่อนดำเนินการต่อ

### 4. Setup Release Tool

ตั้งค่า release tool สำหรับ VSCode

1. ทำ `/release-vscode` เพื่อตั้งค่า release tool
2. ตรวจสอบ installation สำเร็จ
3. ตรวจสอบ configuration ใน package.json

### 5. Run Release

รัน release ไปยัง VSCode marketplace

1. รัน `vsce publish`
2. ตรวจสอบว่า release สำเร็จ
3. ถ้า release ไม่สำเร็จ ให้ทำข้อ 1 ใหม่จนกว่าจะผ่าน

## Rules

### 1. Package Configuration

ตรวจสอบ configuration ครบถ้วนก่อน release

- ต้องมี name, version, description, publisher
- ต้องมี repository และ homepage
- ต้องมี engines.vscode และ activationEvents
- ต้องมี main หรือ browser สำหรับ entry point

### 2. Authentication

ตรวจสอบว่ามีสิทธิ์ publish

- ต้องมี VSCE_PAT ใน GitHub Secrets
- Token ต้องมีสิทธิ์ publish ไปที่ publisher
- Publisher ต้องมีอยู่ใน marketplace

### 3. Tool Usage

ใช้ release tool ที่เหมาะสม

- ใช้ `/release-vscode` สำหรับตั้งค่า release tool
- ใช้ `vsce publish` สำหรับ publish
- รัน vsce package ก่อน publish เพื่อตรวจสอบ

## Expected Outcome

- Extension ถูก release สำเร็จไปยัง VSCode marketplace
- Version ถูก bump อัตโนมัติ
- Changelog ถูกสร้างอัตโนมัติ
- Git tags ถูกสร้างอัตโนมัติ
