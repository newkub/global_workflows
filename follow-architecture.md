---
title: Architecture
description: เลือก architecture pattern ตาม package manifest
auto_execution_mode: 3
---

## Goal

เลือก architecture pattern ที่เหมาะสมกับโปรเจกต์ตาม package manifest

## Scope

ใช้สำหรับเลือก architecture pattern ตาม framework, language, และ scale ของโปรเจกต์

## Execute

### 1. Analyze Project Type

ตรวจสอบประเภทของโปรเจกต์

1. ตรวจสอบ package manifest (`package.json`, `Cargo.toml`)
2. ระบุประเภทของโปรเจกต์จาก dependencies
3. ตรวจสอบ framework และ runtime ที่ใช้

### 2. Select Architecture Pattern

เลือก architecture pattern ที่เหมาะสม

1. ถ้าใช้ Nuxt → ทำ `/nuxt-architecture`
2. ถ้าใช้ Next.js → ทำ `/nextjs-architecture`
3. ถ้าใช้ Vue.js → ทำ `/vue`
4. ถ้าใช้ SolidJS → ทำ `/solidjs-architecture`
5. ถ้าใช้ Svelte → ทำ `/svelte-architecture`
6. ถ้าใช้ Rust หรือ Bun → ทำ `/clean-architecture`
7. ถ้าเป็น monorepo → ทำ `/monorepo`
8. ถ้าเป็น microservices → ทำ `/microservices`

### 3. Setup Base Structure

ตั้งค่าโครงสร้างพื้นฐาน

1. สร้างโครงสร้างพื้นฐานตาม pattern ที่เลือก
2. ตั้งค่า configuration files
3. รัน `/refactor` เพื่อ reorganize code

## Rules

### 1. Detection Rules

กำหนดหลักการตรวจจับประเภทโปรเจกต์

| Framework | Detection Method | Architecture |
|-----------|------------------|--------------|
| Nuxt | `nuxt` in dependencies | `/nuxt-architecture` |
| Next.js | `next` in dependencies | `/nextjs-architecture` |
| Vue.js | `vue` in dependencies | `/vue` |
| SolidJS | `solid-js` in dependencies | `/solidjs-architecture` |
| Svelte | `svelte` in dependencies | `/svelte-architecture` |
| Rust | `Cargo.toml` exists | `/clean-architecture` |
| Bun | `bun` in dependencies | `/clean-architecture` |

### 2. Priority Rules

ลำดับความสำคัญในการเลือก architecture

- Framework-specific patterns (Nuxt, Next.js, Vue.js, SolidJS, Svelte)
- Language-specific patterns (Rust, Bun)
- Scale patterns (Monorepo, Microservices)
- Default patterns (Clean Architecture)

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

