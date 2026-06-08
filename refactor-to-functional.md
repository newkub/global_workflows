---
title: Refactor To Functional
description: แปลง OOP code เป็น functional programming style
auto_execution_mode: 3
connected_workflows:
  - /follow-functional-programming
  - /refactor-to-single-responsibility
---

## Goal

แปลง OOP code เป็น functional programming style เพื่อเพิ่ม testability, reduce complexity, และ improve maintainability

## Execute

### 1. Analyze OOP Code

ระบุ OOP patterns ที่ต้องแปลง

1. ระบุ `classes` หรือ `objects` ทั้งหมดใน codebase
2. ระบุ `inheritance` หรือ `subclassing` hierarchies
3. ระบุ `methods` ที่มี state dependency
4. ระบุ `initialization logic` และ dependencies
5. ระบุ `polymorphism` patterns (interfaces, abstract types)

### 2. Convert Classes to Functions

แปลง classes/objects เป็น functions

1. แปลง `class/object` เป็น standalone `functions`
2. แปลง `initialization logic` เป็น function parameters
3. แปลง `instance methods` เป็น pure functions ที่รับ data เป็น parameters
4. แปลง `static methods` เป็น utility functions
5. แปลง `object properties` เป็น data structures ที่ส่งผ่าน functions

### 3. Convert Inheritance to Composition

แปลง inheritance/subclassing เป็น composition

1. ระบุ inheritance หรือ subclassing relationships
2. แปลง inheritance เป็น function composition
3. ใช้ `higher-order functions` แทน inheritance chains
4. ใช้ function parameters สำหรับ strategy pattern
5. แยก shared logic เป็น reusable pure functions

### 4. Convert State to Immutable Data

แปลง mutable state เป็น immutable data

1. แปลง mutable fields เป็น immutable data structures
2. ใช้ immutable operations แทน direct mutation (copy-on-write)
3. ใช้ immutable types หรือ const declarations สำหรับ data
4. แปลง mutator operations เป็น functions ที่ return new state
5. ใช้ reducers หรือ state transition functions สำหรับ state updates

### 5. Convert Dependency Injection

แปลง OOP dependency injection เป็น functional DI

1. แปลง constructor/initialization dependencies เป็น function parameters
2. แปลง property dependencies เป็น function parameters
3. แปลง setter dependencies เป็น function parameters
4. ใช้ partial application หรือ currying สำหรับ dependencies
5. ใช้ function composition สำหรับ dependency chains

### 6. Convert Polymorphism to Algebraic Data Types

แปลง OOP polymorphism เป็น functional alternatives

1. แปลง interfaces/protocols เป็น algebraic data types หรือ sum types
2. แปลง abstract classes เป็น union types หรือ variant types
3. ใช้ tagged unions หรือ discriminated unions แทน polymorphism
4. ใช้ parametric polymorphism (generics) สำหรับ reusable logic
5. ใช้ pattern matching หรือ type checking สำหรับ type narrowing

### 7. Convert Methods to Pure Functions

แปลง methods เป็น pure functions

1. แยก business logic จาก object state
2. ทำให้ functions เป็น `pure functions` (no side effects)
3. แยก `side effects` ไปยัง outer layer (I/O boundary)
4. ใช้ dependency injection สำหรับ external dependencies
5. Test functions ด้วย input/output เท่านั้น

### 8. Verify Conversion

ตรวจสอบผลลัพธ์การแปลง

1. ทำตาม `/write-test` เพื่อเขียน tests สำหรับ refactored code
2. ตรวจสอบว่าไม่มี `classes/objects` ที่มี internal state เหลือ
3. ตรวจสอบว่าไม่มี `inheritance/subclassing` เหลือ
4. รัน tests เพื่อ verify behavior
5. ตรวจสอบ `test coverage`

## Rules

### No Classes

หลีกเลี่ยงการใช้ classes/objects ที่มี internal state

- ใช้ `functions` แทน classes
- ใช้ `pure functions` สำหรับ reusable logic
- ใช้ `utility functions` สำหรับ pure logic
- ใช้ `data structures` (records, structs, maps) แทน class instances
- ใช้ `modules` สำหรับ grouping related functions

### No Inheritance

หลีกเลี่ยง inheritance/subclassing

- ใช้ `composition` แทน inheritance
- ใช้ `higher-order functions` สำหรับ shared behavior
- ใช้ `function parameters` สำหรับ strategy pattern
- ใช้ `module imports` สำหรับ shared utilities
- ใช้ `function composition` สำหรับ behavior composition

### Immutability

ใช้ immutable data

- ใช้ `const` หรือ immutable declarations แทน mutable variables
- ใช้ immutable types หรือ read-only wrappers
- ใช้ immutable operations (copy-on-write) แทน mutation
- ใช้ functional collection operations (map, filter, reduce) ที่ไม่ mutate
- ใช้ reducers หรือ state transition functions สำหรับ state updates

### Pure Functions

ใช้ pure functions

- Functions ไม่มี `side effects` (no I/O, no state mutation)
- Return ค่าเดิมเสมอเมื่อ input เดิม (referential transparency)
- ไม่ access `external state` หรือ global variables
- ไม่ mutate input parameters
- แยก pure logic จาก `I/O` และ side effects

### Type Safety

ใช้ type systems อย่างเหมาะสมกับภาษา

- ใช้ type definitions หรือ algebraic data types แทน interfaces
- ใช้ parametric polymorphism (generics) สำหรับ reusability
- ใช้ sum types หรือ union types สำหรับ multiple types
- ใช้ tagged unions หรือ discriminated unions สำหรับ polymorphism
- ใช้ pattern matching หรือ type guards สำหรับ narrowing

## Expected Outcome

- ไม่มี classes/objects ที่มี internal state ใน codebase
- ไม่มี inheritance/subclassing
- Pure functions สำหรับ business logic
- Immutable data structures
- Function composition แทน inheritance
- Type-safe functional code
- Tests ที่เขียนง่าย
- Code ที่ maintain ได้ง่าย
