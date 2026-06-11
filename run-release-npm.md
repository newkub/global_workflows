---
title: Run Release NPM
description: Release package ไปยัง npm ด้วยการตั้งค่าที่ถูกต้อง
auto_execution_mode: 3
---

Release package ไปยัง npm ด้วยการตั้งค่าที่ถูกต้อง

## Goal

Release package ไปยัง npm ด้วยการตั้งค่าที่ถูกต้องและตรวจสอบคุณภาพโค้ด

## Scope

Release npm packages ทั้ง public และ scoped packages

## Execute

### 1. Check Package Configuration

ตรวจสอบ package.json มีข้อมูลครบถ้วน

1. ตรวจสอบ package.json มี name, version, description, license
2. ตรวจสอบ private เป็น false
3. ตรวจสอบ repository และ homepage
4. ตรวจสอบ main, types, exports ถ้าจำเป็น
5. ตรวจสอบ files field สำหรับ include files

### 2. Setup Authentication

ตั้งค่า authentication สำหรับ npm publish

1. รับ token จาก https://www.npmjs.com/settings/newkubise/tokens (Automation token)
2. ตั้งค่า NPM_TOKEN ใน GitHub Secrets ด้วย:
   ```bash
   gh secret set NPM_TOKEN
   # วาง npm token แล้วกด Enter
   ```
3. ตรวจสอบว่า NPM_TOKEN มีอยู่ใน GitHub Secrets
4. สำหรับ scoped package: ตรวจสอบว่า scope มีใน npm หรือไม่
   - ถ้าไม่มี scope: publish ครั้งแรกใน local ด้วย `bun publish --access public`
   - ถ้า scope มีแล้ว: ตรวจสอบ NPM_TOKEN มีสิทธิ์ publish ไปที่ scope นั้น
5. **Alternative**: ใช้ npm Trusted Publishers (OIDC) แทน token โดยตั้งค่าใน npm organization settings

### 3. Run Verify

ตรวจสอบคุณภาพโค้ดก่อน release

1. ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด
2. ตรวจสอบว่า scan, typecheck, lint, และ test ผ่านทั้งหมด
3. ถ้า verify ไม่ผ่าน ให้แก้ไขก่อนดำเนินการต่อ

### 4. Setup Release Tool

ตั้งค่า release tool สำหรับ npm

1. ทำ `/release-npm` เพื่อตั้งค่า release tool
2. ตรวจสอบ installation สำเร็จ
3. ตรวจสอบ configuration ใน package.json

### 5. Run Release

รัน release ไปยัง npm

1. รัน `bun run release` หรือ `npm publish`
2. ตรวจสอบว่า release สำเร็จ
3. ถ้า release ไม่สำเร็จ ให้ทำข้อ 1 ใหม่จนกว่าจะผ่าน

## Rules

### 1. Package Configuration

ตรวจสอบ configuration ครบถ้วนก่อน release

- ต้องมี name, version, description, license
- private ต้องเป็น false
- ต้องมี repository และ homepage
- สำหรับ scoped packages: ต้องมี scope ใน npm

### 2. Authentication

ตรวจสอบว่ามีสิทธิ์ publish

- ต้องมี NPM_TOKEN ใน GitHub Secrets
- Token ต้องมีสิทธิ์ publish ไปที่ scope ที่เกี่ยวข้อง
- ใช้ Automation tokens ไม่ใช่ personal tokens

### 3. Tool Usage

ใช้ release tool ที่เหมาะสม

- ใช้ `/release-npm` สำหรับตั้งค่า release tool
- รัน prerelease script ก่อน release
- ใช้ bun หรือ npm ตาม package manager ที่ใช้

## Expected Outcome

- Package ถูก release สำเร็จไปยัง npm
- Version ถูก bump อัตโนมัติ
- Changelog ถูกสร้างอัตโนมัติ
- Git tags ถูกสร้างอัตโนมัติ
