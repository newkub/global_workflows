---
title: Run Release Crates
description: Release package ไปยัง crates.io ด้วยการตั้งค่าที่ถูกต้อง
auto_execution_mode: 3
---

Release package ไปยัง crates.io ด้วยการตั้งค่าที่ถูกต้อง

## Goal

Release package ไปยัง crates.io ด้วยการตั้งค่าที่ถูกต้องและตรวจสอบคุณภาพโค้ด

## Scope

Release Rust crates ไปยัง crates.io

## Execute

### 1. Check Package Configuration

ตรวจสอบ Cargo.toml มีข้อมูลครบถ้วน

1. ตรวจสอบ Cargo.toml มี name, version, description, license
2. ตรวจสอบ repository และ homepage
3. ตรวจสอบ categories และ keywords
4. ตรวจสอบ edition และ rust-version

### 2. Setup Authentication

ตั้งค่า authentication สำหรับ crates.io publish

1. รับ token จาก https://crates.io/settings/tokens
2. ตั้งค่า CARGO_REGISTRY_TOKEN ใน GitHub Secrets ด้วย:
   ```bash
   gh secret set CARGO_REGISTRY_TOKEN
   ```
3. ตรวจสอบว่า CARGO_REGISTRY_TOKEN มีอยู่ใน GitHub Secrets
4. ตรวจสอบว่า token มีสิทธิ์ publish ไปที่ crate ที่เกี่ยวข้อง

### 3. Run Verify

ตรวจสอบคุณภาพโค้ดก่อน release

1. ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด
2. ตรวจสอบว่า scan, typecheck, lint, และ test ผ่านทั้งหมด
3. ถ้า verify ไม่ผ่าน ให้แก้ไขก่อนดำเนินการต่อ

### 4. Setup Release Tool

ตั้งค่า release tool สำหรับ crates

1. ทำ `/release-crates` เพื่อตั้งค่า release tool
2. ตรวจสอบ installation สำเร็จ
3. ตรวจสอบ configuration ใน Cargo.toml

### 5. Run Release

รัน release ไปยัง crates.io

1. รัน `cargo release` หรือ `release-plz release`
2. ตรวจสอบว่า release สำเร็จ
3. ถ้า release ไม่สำเร็จ ให้ทำข้อ 1 ใหม่จนกว่าจะผ่าน

## Rules

### 1. Package Configuration

ตรวจสอบ configuration ครบถ้วนก่อน release

- ต้องมี name, version, description, license
- ต้องมี repository และ homepage
- ต้องมี categories และ keywords
- ต้องมี edition และ rust-version

### 2. Authentication

ตรวจสอบว่ามีสิทธิ์ publish

- ต้องมี CARGO_REGISTRY_TOKEN ใน GitHub Secrets
- Token ต้องมีสิทธิ์ publish ไปที่ crate ที่เกี่ยวข้อง
- ใช้ API tokens ไม่ใช่ personal tokens

### 3. Tool Usage

ใช้ release tool ที่เหมาะสม

- ใช้ `/release-crates` สำหรับตั้งค่า release tool
- ใช้ `cargo release` หรือ `release-plz release`
- รัน cargo test ก่อน release

## Expected Outcome

- Crate ถูก release สำเร็จไปยัง crates.io
- Version ถูก bump อัตโนมัติ
- Changelog ถูกสร้างอัตโนมัติ
- Git tags ถูกสร้างอัตโนมัติ
