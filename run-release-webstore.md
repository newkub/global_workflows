---
title: Run Release Webstore
description: Release extension ไปยัง Chrome Web Store ด้วยการตั้งค่าที่ถูกต้อง
auto_execution_mode: 3
---

Release extension ไปยัง Chrome Web Store ด้วยการตั้งค่าที่ถูกต้อง

## Goal

Release extension ไปยัง Chrome Web Store ด้วยการตั้งค่าที่ถูกต้องและตรวจสอบคุณภาพโค้ด

## Scope

Release Chrome extensions ไปยัง Chrome Web Store

## Execute

### 1. Check Package Configuration

ตรวจสอบ manifest.json มีข้อมูลครบถ้วน

1. ตรวจสอบ manifest.json มี name, version, description
2. ตรวจสอบ manifest_version และ version
3. ตรวจสอบ permissions และ host_permissions
4. ตรวจสอบ icons และ background scripts
5. ตรวจสอบ content scripts และ action

### 2. Setup Authentication

ตั้งค่า authentication สำหรับ Chrome Web Store publish

1. รับ credentials จาก Google Cloud Console
2. ตั้งค่า CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN ใน GitHub Secrets ด้วย:
   ```bash
   gh secret set CLIENT_ID
   gh secret set CLIENT_SECRET
   gh secret set REFRESH_TOKEN
   ```
3. ตรวจสอบว่า CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN มีอยู่ใน GitHub Secrets
4. ตรวจสอบว่า credentials มีสิทธิ์ publish ไปที่ extension

### 3. Run Verify

ตรวจสอบคุณภาพโค้ดก่อน release

1. ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด
2. ตรวจสอบว่า scan, typecheck, lint, และ test ผ่านทั้งหมด
3. ถ้า verify ไม่ผ่าน ให้แก้ไขก่อนดำเนินการต่อ

### 4. Setup Release Tool

ตั้งค่า release tool สำหรับ Chrome Web Store

1. ทำ `/release-webstore` เพื่อตั้งค่า release tool
2. ตรวจสอบ installation สำเร็จ
3. ตรวจสอบ configuration ใน manifest.json

### 5. Run Release

รัน release ไปยัง Chrome Web Store

1. รัน `chrome-webstore-upload`
2. ตรวจสอบว่า release สำเร็จ
3. ถ้า release ไม่สำเร็จ ให้ทำข้อ 1 ใหม่จนกว่าจะผ่าน

## Rules

### 1. Package Configuration

ตรวจสอบ configuration ครบถ้วนก่อน release

- ต้องมี name, version, description
- ต้องมี manifest_version
- ต้องมี permissions และ host_permissions
- ต้องมี icons และ action

### 2. Authentication

ตรวจสอบว่ามีสิทธิ์ publish

- ต้องมี CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN ใน GitHub Secrets
- Credentials ต้องมีสิทธิ์ publish ไปที่ extension
- ใช้ OAuth credentials จาก Google Cloud Console

### 3. Tool Usage

ใช้ release tool ที่เหมาะสม

- ใช้ `/release-webstore` สำหรับตั้งค่า release tool
- ใช้ `chrome-webstore-upload` สำหรับ publish
- รัน chrome-webstore-upload validate ก่อน publish

## Expected Outcome

- Extension ถูก release สำเร็จไปยัง Chrome Web Store
- Version ถูก bump อัตโนมัติ
- Changelog ถูกสร้างอัตโนมัติ
- Git tags ถูกสร้างอัตโนมัติ
