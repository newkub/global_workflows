---
title: Architecture
description: เลือก architecture pattern ตาม package manifest
auto_execution_mode: 3
related:
  - /follow-clean-architecture
  - /follow-modular-monolith
  - /follow-microservices-architecture
  - /follow-monorepo
  - /follow-layered-architecture
  - /follow-code-quality
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

เลือก architecture pattern ตาม Detection Rules ในส่วน Rules

### 3. Setup Base Structure

ตั้งค่าโครงสร้างพื้นฐาน

1. สร้างโครงสร้างพื้นฐานตาม pattern ที่เลือก
2. ตั้งค่า configuration files
3. รัน `/restructure` เพื่อ reorganize code

## Rules

### 1. Detection Rules

กำหนดหลักการตรวจจับประเภทโปรเจกต์ ตามลำดับ priority

| Detection | Method | Architecture |
|-----------|--------|--------------|
| Nuxt | `nuxt` in dependencies | `/follow-nuxt-architecture` |
| Next.js | `next` in dependencies | `/follow-nextjs-architecture` |
| Vue.js | `vue` in dependencies | `/follow-vue` |
| SolidJS | `solid-js` in dependencies | `/follow-solid-start-architecture-architecture` |
| Svelte | `svelte` in dependencies | `/follow-svelte-kit-architecture-architecture` |
| Frontend ขนาดเล็ก-กลาง | 1-2 devs, frontend-only | `/follow-layered-architecture` |
| Rust | `Cargo.toml` exists | `/follow-clean-architecture` |
| Bun | `bun` in dependencies | `/follow-clean-architecture` |
| Monorepo | `workspaces` in `package.json` | `/follow-monorepo` |
| Medium scale | 3-5 devs, moderate complexity | `/follow-modular-monolith` |
| Microservices | distributed system | `/follow-microservices-architecture` |

### 2. Priority Rules

ตรวจจับตามลำดับ หยุดที่เงื่อนไขแรกที่ match

- Framework-specific patterns (Nuxt, Next.js, Vue.js, SolidJS, Svelte)
- Frontend small-medium (Layered Architecture)
- Language-specific patterns (Rust, Bun)
- Scale patterns (Monorepo, Modular Monolith, Microservices)
- Default: Clean Architecture

### 3. Decision Matrix

เงื่อนไขการตัดสินใจ

| Project Size | Complexity | Recommended Architecture |
|---------------|------------|--------------------------|
| Small (1-2 devs) | Simple | Framework default or Layered |
| Medium (3-5 devs) | Moderate | Modular Monolith + Clean |
| Large (5+ devs) | Complex | Monorepo + Modular Monolith + Clean |
| Enterprise | High | Microservices + Clean |

## Expected Outcome

- Architecture pattern ที่เหมาะสมกับโปรเจกต์
- โครงสร้างพื้นฐานที่ถูกต้อง
- Configuration files ที่สมบูรณ์
- Code organization ตามมาตรฐาน

