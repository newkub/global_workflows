---
title: Improve TUI
description: ปรับปรุง Terminal User Interface ครบวงจร layout, input, rendering
auto_execution_mode: 3
related_workflows:
  - improve-cli
  - improve-uxui
  - improve-accessibility
  - improve-performance-tuning
  - improve-error-handling
---

## Goal

ปรับปรุง Terminal User Interface (TUI) ครบวงจรทั้ง layout, input handling, rendering performance, และ accessibility

## Scope

ใช้สำหรับ TUI applications ทุกประเภท (Ratatui, Bubble Tea, blessed-contrib, Textual) ที่ต้องการปรับปรุง user experience ใน terminal

## Execute

### 1. Layout And Design

ปรับปรุง layout และ visual design

1. วิเคราะห์ layout structure และ component organization
2. ตรวจสอบ responsive layout สำหรับ terminal resize
3. ตั้งค่า color scheme ที่อ่านง่าย และรองรับ terminal themes
4. ตรวจสอบ spacing และ alignment
5. ใช้ borders และ panels อย่างมีประสิทธิภาพ
6. ทำ `/improve-uxui` สำหรับ UX principles

### 2. Input Handling

ปรับปรุง input และ interaction

1. ตรวจสอบ keyboard shortcuts และ key bindings
2. ตั้งค่า mouse support ถ้าเหมาะสม
3. ตรวจสอบ focus management ระหว่าง components
4. ตั้งค่า input validation และ error feedback
5. รองรับ common terminal input modes (raw, cooked)
6. ทำ `/improve-error-handling` สำหรับ input errors

### 3. Rendering Performance

ปรับปรุง rendering performance

1. วิเคราะห์ render loop และ frame rate
2. ใช้ double buffering สำหรับ flicker-free rendering
3. ตรวจสอบ diff-based rendering สำหรับ partial updates
4. หลีกเลี่ยง unnecessary re-renders
5. ทำ `/improve-performance-tuning` สำหรับ performance

### 4. Accessibility

ปรับปรุง accessibility ใน terminal

1. รองรับ screen readers (NVDA, VoiceOver)
2. ตรวจสอบ color contrast สำหรับ colorblind users
3. จัดการ text-only mode สำหรับ non-color terminals
4. ตั้งค่า keyboard-only navigation
5. ทำ `/improve-accessibility` สำหรับ accessibility principles

### 5. Terminal Compatibility

ปรับปรุง compatibility ข้าม terminals

1. ตรวจสอบ ANSI escape code compatibility
2. รองรับ common terminals (xterm, iTerm2, Windows Terminal, Alacritty, kitty)
3. ตั้งค่า fallback สำหรับ limited terminal capabilities
4. ตรวจสอบ Unicode และ emoji rendering
5. จัดการ terminal resize events

### 6. State Management

ปรับปรุง state และ data flow

1. วิเคราะห์ state architecture (model-update-view pattern)
2. ตรวจสอบ async operations และ background tasks
3. ตั้งค่า event handling และ message passing
4. ทำ `/improve-state-management` สำหรับ state patterns

## Rules

### 1. Layout Quality

- Layout ต้อง responsive ตาม terminal size
- Color scheme อ่านง่าย และรองรับ terminal themes
- ไม่ overflow ขนาด terminal
- ใช้ panels และ borders อย่างมีประสิทธิภาพ

### 2. Input Responsiveness

- Key bindings ต้อง intuitive และ documented
- Focus management ชัดเจน
- Input validation พร้อม error feedback ทันที
- รองรับทั้ง keyboard และ mouse ถ้าเหมาะสม

### 3. Rendering Efficiency

- ใช้ double buffering ป้องกัน flicker
- Diff-based rendering สำหรับ partial updates
- 60fps สำหรับ animations
- หลีกเลี่ยง full re-render โดยไม่จำเป็น

### 4. Compatibility

- รองรับ common terminals อย่างน้อย 3 ตัว
- Fallback สำหรับ limited capabilities
- Unicode และ emoji แสดงผลถูกต้อง
- Terminal resize จัดการ gracefully

## Expected Outcome

- Layout responsive และอ่านง่าย ข้าม terminal sizes
- Input handling intuitive พร้อม key bindings ที่ documented
- Rendering flicker-free พร้อม diff-based updates
- Accessibility รองรับ screen readers และ colorblind users
- Terminal compatibility ครอบคลุม common terminals
- State management predictable และ traceable
