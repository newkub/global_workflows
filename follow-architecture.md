---
title: Architecture
description: เลือก architecture pattern ตาม package manifest
auto_execution_mode: 3
---

## Goal

เลือก architecture pattern ที่เหมาะสมกับโปรเจกต์ตาม package manifest

## Execute

### 1. Analyze Project Type

1. ตรวจสอบ package manifest (`package.json`, `Cargo.toml`)
2. ระบุประเภทของโปรเจกต์จาก dependencies
3. ตรวจสอบ framework และ runtime ที่ใช้

### 2. Select Architecture Pattern

1. ถ้าใช้ Nuxt → ทำ `/follow-nuxt-architecture`
2. ถ้าใช้ Rust หรือ Bun → ทำ `/follow-clean-architecture`
3. ถ้าใช้ Next.js → ทำ `/follow-next`
4. ถ้าใช้ Vue.js → ทำ `/follow-vue`
5. ถ้าเป็น monorepo → ทำ `/follow-monorepo`
6. ถ้าเป็น microservices → ทำ `/follow-microservices`

### 3. Setup Base Structure

1. สร้างโครงสร้างพื้นฐานตาม pattern ที่เลือก
2. ตั้งค่า configuration files
3. รัน `/refactor` เพื่อ reorganize code

## Rules

### 1. Detection Rules

กำหนดหลักการตรวจจับประเภทโปรเจกต์

| Framework | Detection Method | Architecture |
|-----------|------------------|--------------|
| Nuxt | `nuxt` in dependencies | `/follow-nuxt-architecture` |
| Next.js | `next` in dependencies | `/follow-next` |
| Vue.js | `vue` in dependencies | `/follow-vue` |
| Rust | `Cargo.toml` exists | `/follow-clean-architecture` |
| Bun | `bun` in dependencies | `/follow-clean-architecture` |

### 2. Priority Rules

ลำดับความสำคัญในการเลือก architecture

1. **Framework-specific patterns** (Nuxt, Next.js, Vue.js)
2. **Language-specific patterns** (Rust, Bun)
3. **Scale patterns** (Monorepo, Microservices)
4. **Default patterns** (Clean Architecture)

### 3. Manifest Analysis

การวิเคราะห์ package manifest

- ตรวจสอบ dependencies ใน `package.json` เพื่อระบุ framework
- ตรวจสอบ `workspaces` สำหรับ monorepo detection
- ตรวจสอบ `Cargo.toml` สำหรับ Rust projects
- ตรวจสอบ runtime-specific dependencies (bun, node)

### 4. Decision Matrix

เงื่อนไขการตัดสินใจ

| Project Size | Complexity | Recommended Architecture |
|---------------|------------|--------------------------|
| Small (1-2 devs) | Simple | Framework default |
| Medium (3-5 devs) | Moderate | Framework + Clean |
| Large (5+ devs) | Complex | Monorepo + Clean |
| Enterprise | High | Microservices + Clean |

## Expected Outcome

- Architecture pattern ที่เหมาะสมกับโปรเจกต์
- โครงสร้างพื้นฐานที่ถูกต้อง
- Configuration files ที่สมบูรณ์
- Code organization ตามมาตรฐาน
