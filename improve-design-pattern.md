---
title: Improve Design Pattern
description: ปรับปรุงการใช้ design pattern ให้เหมาะสมกับปัญหาและบริบท
auto_execution_mode: 3
---

## Goal

ปรับปรุงการใช้ design pattern ให้เหมาะสมกับปัญหาและบริบท

## Scope

ใช้สำหรับปรับปรุงการใช้ design pattern ใน codebase ทั้งหมด

## Execute

### 1. Analyze Problem

วิเคราะห์ปัญหาที่ต้องแก้ไข

1. ทำ `/debug-issue` เพื่อระบุปัญหาที่ต้องแก้ไข
2. วิเคราะห์ `requirements` และ `constraints`
3. ประเมิน `trade-offs` ระหว่าง solutions
4. ตรวจสอบว่าปัญหาควรใช้ pattern หรือไม่

### 2. Select Pattern

เลือก pattern ที่เหมาะสม

1. พิจารณา `design patterns` ที่เกี่ยวข้อง
2. เลือก pattern ที่ตรงกับปัญหามากที่สุด
3. ตรวจสอบว่า pattern เหมาะกับบริบท
4. พิจารณา `language-specific patterns` สำหรับภาษาที่ใช้

### 3. Implement Pattern

นำ pattern ไปใช้ในระบบ

1. ปรับ pattern ให้เข้ากับระบบ
2. เขียน code ตามโครงสร้าง pattern
3. ทำให้ `maintainable` และ `readable`
4. เขียน `tests` สำหรับ pattern implementation
5. เพิ่ม `documentation` อธิบายการใช้งาน

## Rules

### 1. Pattern Selection

ใช้ pattern เมื่อจำเป็นจริงๆ

- ใช้ pattern เมื่อจำเป็นจริงๆ
- หลีกเลี่ยงการใช้ pattern เกินความจำเป็น
- เลือก pattern ที่ทีมเข้าใจ

### 2. Common Patterns

รู้จัก patterns ที่ใช้บ่อย

- Creational: `Factory`, `Builder`, `Singleton`, `Prototype`, `Abstract Factory`
- Structural: `Adapter`, `Decorator`, `Proxy`, `Facade`, `Composite`, `Bridge`
- Behavioral: `Strategy`, `Observer`, `Command`, `State`, `Chain of Responsibility`, `Mediator`

### 3. Anti-Patterns

หลีกเลี่ยงการใช้ pattern ที่ไม่เหมาะสม

- หลีกเลี่ยง pattern ที่ซับซ้อนเกินไป
- ไม่บังคับใช้ pattern ทุกที่
- หลีกเลี่ยง pattern ที่ไม่เหมาะกับขนาดโปรเจกต์

### 4. Principles

ใช้หลักการเป็นฐาน

- ใช้ `SOLID principles` เป็นฐาน
- ให้ความสำคัญกับ `readability`
- เน้น `maintainability` มากกว่า `complexity`
- ใช้ `YAGNI` (You Aren't Gonna Need It)
- ใช้ `KISS` (Keep It Simple, Stupid)

## Expected Outcome

- เลือกใช้ design pattern ที่เหมาะสมกับปัญหาและบริบท
- Code มีความชัดเจนและบำรุงรักษาง่าย
- ไม่มี over-engineering หรือ pattern เกินความจำเป็น
- มี tests และ documentation ครบถ้วน
- ทีมเข้าใจและสามารถบำรุงรักษาได้

