---
title: Follow Create Tauri Plugins
description: สร้าง Tauri plugins ด้วย Rust และ JavaScript/TypeScript
auto_execution_mode: 3
---

สร้าง Tauri plugins ด้วย Rust และ JavaScript/TypeScript เพื่อเพิ่ม functionality ให้ Tauri apps

## Goal

สร้าง Tauri plugins ด้วย Rust และ JavaScript/TypeScript เพื่อเพิ่ม functionality ให้ Tauri apps

## Execute

### 1. Initialize Plugin

1. รัน `bunx @tauri-apps/cli plugin new [name]` เพื่อ bootstrap plugin project
2. เลือกใช้ flags `--android` หรือ `--ios` ถ้าต้องการ mobile support
3. ใช้ `--no-api` flag ถ้าไม่ต้องการ NPM package

### 2. Configure Plugin

1. กำหนด plugin configuration ใน `tauri.conf.json`
2. กำหนด Config struct ใน Rust code
3. ใช้ Builder สำหรับ setup plugin ด้วย config

### 3. Add Commands

1. กำหนด commands ใน `commands.rs`
2. Hook commands ผ่าน `invoke_handler()` ใน `lib.rs`
3. สร้าง binding functions ใน `webview-src/index.ts`

### 4. Implement Lifecycle Events

1. Hook ลง lifecycle events: setup, on_navigation, on_webview_ready, on_event, on_drop
2. Implement logic สำหรับแต่ละ event
3. จัดการ state ผ่าน lifecycle

### 5. Build and Test

1. รัน `cargo build` เพื่อ build Rust code
2. Build TypeScript code ใน guest-js
3. ทดสอบ plugin ใน Tauri application

## Rules

### 1. Naming Convention

- Rust crate name: `tauri-plugin-{plugin-name}`
- NPM package name: `tauri-plugin-{plugin-name}-api` หรือ `@scope-name/plugin-{plugin-name}`
- Plugin name ระบุใน tauri.conf.json > plugins

### 2. Project Structure

- `src/` - Rust code (commands.rs, desktop.rs, error.rs, lib.rs, mobile.rs, models.rs)
- `permissions/` - Permission files สำหรับ commands
- `android/` - Android library (Kotlin/Java)
- `ios/` - Swift package
- `guest-js/` - JavaScript API bindings source
- `dist-js/` - Transpiled assets จาก guest-js
- `Cargo.toml` - Cargo crate metadata
- `package.json` - NPM package metadata

### 3. Commands

- กำหนด commands ใน `commands.rs` ด้วย `#[command]` macro
- Commands สามารถ access AppHandle, Window, state และ input parameters
- Hook commands ผ่าน `invoke_handler(tauri::generate_handler![commands::upload])`

### 4. Lifecycle Events

- setup: Plugin initialization
- on_navigation: Web view navigation attempt
- on_webview_ready: New window creation
- on_event: Event loop events
- on_drop: Plugin deconstruction

### 5. Mobile Development

- Android: Kotlin/Java code ใน android/ directory
- iOS: Swift code ใน ios/ directory
- ใช้ `plugin android add` และ `plugin ios add` สำหรับ bootstrap mobile libraries

## Expected Outcome

- Plugin project initialized ด้วย CLI
- Commands defined และ exposed ถูกต้อง
- Lifecycle events implemented
- Plugin สามารถ configure ใน Tauri application
- Rust และ JavaScript/TypeScript code build สำเร็จ

