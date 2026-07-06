---
title: Run Tsgo
description: รัน tsgo อย่างมีระบบ พร้อมแก้ไข errors จนผ่าน
auto_execution_mode: 3
related_workflows:
  - /follow-code-quality
---

## Goal

รัน `tsgo` compiler อย่างมีระบบเพื่อ type check และ build TypeScript code พร้อมแก้ไข errors จนผ่าน

## Execute

### 1. Run Tsgo

1. รัน `bunx tsgo --noEmit` สำหรับ type checking
2. รัน `bunx tsgo` สำหรับ compilation
3. รัน `bunx tsgo --watch` สำหรับ watch mode
4. รัน `bunx tsgo --build` สำหรับ project references
5. ตรวจสอบ output และ diagnostics

ตัวอย่าง `package.json` scripts:

```json
{
  "scripts": {
    "typecheck": "bunx tsgo --noEmit"
  }
}
```

### 2. Analyze Errors

1. ตรวจสอบ TypeScript errors จาก output
2. ตรวจสอบ configuration errors (tsconfig)
3. ตรวจสอบ module resolution errors
4. ตรวจสอบ type errors และ semantic errors
5. บันทึก error messages ทั้งหมด

### 3. Fix Errors

1. ใช้ `/resolve-errors` เพื่อแก้ไข errors อย่างเป็นระบบ
2. แก้ไข TypeScript errors ตาม priority
3. แก้ไข configuration issues
4. แก้ไข type errors ด้วย proper typing
5. แก้ไข module resolution issues

### 4. Verify Fixes

1. รัน `tsgo` ใหม่หลังแก้ไข
2. ตรวจสอบว่า errors หายไป
3. ตรวจสอบว่าไม่มี new errors
4. ตรวจสอบ output artifacts
5. ตรวจสอบ declaration files

### 5. Loop Until Complete

1. ทำตาม `/loop-until-complete` เพื่อทำซ้ำจนผ่าน
2. ทำซ้ำขั้นตอน 1-4 จนกว่าจะไม่มี errors
3. ตรวจสอบว่า build สำเร็จ
4. ตรวจสอบว่า type checking ผ่าน

## Rules

### 1. Execution Order

รัน tsgo ตามลำดับที่ถูกต้อง:

- เริ่มด้วย type checking (`--noEmit`)
- รัน compilation ถ้า type checking ผ่าน
- ใช้ watch mode สำหรับ development
- ใช้ build mode สำหรับ production
- แก้ไข errors ตาม priority

### 2. Error Resolution

แก้ไข errors อย่างเป็นระบบ:

- ใช้ `/resolve-errors` สำหรับ systematic error fixing
- แก้ไข configuration errors ก่อน type errors
- แก้ไข type errors ตาม severity
- แก้ไข module resolution errors ก่อน type errors
- ตรวจสอบ fixes ด้วยการรันใหม่

### 3. Performance Considerations

ปรับปรุง performance ของ tsgo:

- ใช้ `--incremental` สำหรับ faster builds
- ตั้งค่า `tsBuildInfoFile` สำหรับ cache
- ใช้ project references สำหรับ large codebases
- ใช้ watch mode สำหรับ development
- ตรวจสอบ memory usage

### 4. Compatibility Checks

ตรวจสอบ compatibility กับ TypeScript 6.0:

- ตรวจสอบว่า diagnostics เหมือนกับ tsc
- ตรวจสอบ JavaScript/JSDoc support limitations
- ตรวจสอบ module resolution behavior
- ตรวจสอบ path mapping และ aliases
- รายงาน compatibility issues ถ้ามี

### 5. Output Verification

ตรวจสอบ output อย่างละเอียด:

- ตรวจสอบ JavaScript output
- ตรวจสอบ declaration files (.d.ts)
- ตรวจสอบ source maps (.js.map)
- ตรวจสอบ build info (.tsbuildinfo)
- เปรียบเทียบกับ tsc output

## Expected Outcome

- tsgo รันสำเร็จไม่มี errors
- Type checking ผ่านทั้งหมด
- Output artifacts ถูกต้อง
- Performance ดีกว่า tsc
- Development workflow ราบรื่น

