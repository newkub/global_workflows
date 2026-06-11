---
title: Create Tauri Plugins
description: สร้าง custom Tauri plugins ด้วย Rust และ JavaScript API
auto_execution_mode: 3
related_workflows:
  - /follow-tauri
---

## Goal

สร้าง custom Tauri plugins เพื่อขยายความสามารถของ Tauri applications ด้วย Rust backend และ JavaScript API

## Scope

ครอบคลุมการสร้าง plugins สำหรับ desktop และ mobile platforms พร้อม commands, state management, และ mobile native code

## Execute

### 1. Initialize Plugin Project

1. รัน `bunx @tauri-apps/cli plugin new <name>` สำหรับสร้าง plugin ใหม่
2. ใช้ `--no-api` หากไม่ต้องการ NPM package
3. ใช้ `--android` และ `--ios` สำหรับ mobile support
4. Plugin จะถูกสร้างใน `tauri-plugin-<name>/`

### 2. Define Commands

1. สร้าง commands ใน `src/commands.rs`:

```rust
#[tauri::command]
async fn my_command<R: Runtime>(app: AppHandle<R>, window: Window<R>) -> Result<(), String> {
  Ok(())
}
```

2. Register commands ใน `src/lib.rs`:

```rust
Builder::new("<plugin-name>")
  .invoke_handler(tauri::generate_handler![commands::my_command])
```

### 3. Implement Plugin Logic

1. แยก desktop/mobile logic ใน `src/desktop.rs` และ `src/mobile.rs`
2. จัดการ state ใน `setup` hook
3. Implement lifecycle hooks: `on_navigation`, `on_page_load`, `on_window_ready`

### 4. Create JavaScript API

1. สร้าง bindings ใน `webview-src/index.ts`:

```typescript
import { invoke } from '@tauri-apps/api/core'
export async function myCommand() {
  await invoke('plugin:<plugin-name>|my_command')
}
```

2. Build TypeScript: `bun run build`

### 5. Add Mobile Support (Optional)

1. รัน `bunx @tauri-apps/cli plugin android add` สำหรับ Android
2. รัน `bunx @tauri-apps/cli plugin ios add` สำหรับ iOS
3. Implement native code ใน Kotlin/Swift

### 6. Test And Publish

1. Test plugin ใน Tauri app: ติดตั้งด้วย `tauri add <plugin-name>`
2. Build plugin: `cargo build`
3. Publish ไป crates.io และ NPM

## Rules

### 1. Naming Convention

ใช้ naming convention ตามมาตรฐาน Tauri

- Rust crate: `tauri-plugin-<plugin-name>`
- NPM package: `@scope/plugin-<plugin-name>` หรือ `tauri-plugin-<plugin-name>-api`
- Plugin name ใน `tauri.conf.json > plugins`

### 2. Project Structure

โครงสร้าง plugin ตามมาตรฐาน:

```
tauri-plugin-<name>/
├── src/
│   ├── commands.rs - Commands สำหรับ webview
│   ├── desktop.rs - Desktop implementation
│   ├── mobile.rs - Mobile implementation
│   ├── error.rs - Error types
│   ├── lib.rs - Plugin entry point
│   └── models.rs - Shared structs
├── permissions/ - Permission files
├── android/ - Android library
├── ios/ - Swift package
├── guest-js/ - JavaScript API source
├── dist-js/ - Transpiled JS
├── Cargo.toml
└── package.json
```

### 3. Command Permissions

กำหนด permissions สำหรับ commands

- Commands จะถูก generate permissions อัตโนมัติใน `permissions/`
- Define permissions ใน `tauri.conf.json > capabilities`
- ใช้ `allow-<command-name>` สำหรับ grant access

### 4. State Management

จัดการ state ใน plugins

- ใช้ `app.manage()` ใน `setup` hook
- Access state ผ่าน extension trait บน Manager instances
- ใช้ `AppHandle`, `App`, `Window` สำหรับ state access

### 5. Mobile Development

พัฒนา mobile plugins ตามแต่ละ platform

- Android: Kotlin code ใน `android/`
- iOS: Swift code ใน `ios/`
- Trigger mobile code จาก Rust ผ่าน `mobile.rs`

## Expected Outcome

- Tauri plugin สร้างสำเร็จด้วย CLI
- Commands และ JavaScript API ทำงานได้
- Plugin รองรับ desktop และ mobile platforms
- Plugin สามารถ publish ไป crates.io และ NPM
