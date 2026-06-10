---
title: Suggest Packages Usage
description: วิเคราะห์และแนะนำ use cases และ integration opportunities
auto_execution_mode: 3
---

วิเคราะห์และแนะนำการใช้งานทรัพยากรใน monorepo

## Goal

วิเคราะห์ทรัพยากรที่ระบุ และแนะนำ use cases, integration opportunities, และ migration paths

## Execute

### 1. Identify Resource

1. รับชื่อทรัพยากรจาก user input
2. ค้นหาทรัพยากรใน monorepo
3. ตรวจสอบว่าทรัพยากรมีอยู่จริง
4. ระบุ path ของทรัพยากร

### 2. Read Metadata

1. อ่าน manifest file ตามประเภท (package.json, Cargo.toml, ฯลฯ)
2. รวบรวม metadata: name, version, description, exports, dependencies
3. อ่าน README.md ถ้ามี
4. ตรวจสอบ source structure

### 3. Analyze Capabilities

1. อ่าน source code หลัก
2. ระบุ capabilities, features, usage patterns
3. ตรวจสอบ examples และ tests

### 4. Search Integration Opportunities

1. ค้นหาใน monorepo ว่ามีทรัพยากรไหนที่สามารถ integrate ได้
2. ใช้ grep ค้นหา patterns ที่เกี่ยวข้อง
3. ตรวจสอบ manifest files ของทรัพยากรอื่น

### 5. Generate Recommendations

1. แนะนำ use cases
2. ระบุ integration points
3. แนะนำ migration paths
4. แนะนำ features ใหม่
5. แนะนำ consolidation opportunities

### 6. Generate Report

1. สร้างรายงานในรูปแบบตารางพร้อม numbered columns
2. จัดกลุ่มและเรียงลำดับตามความสำคัญ
3. ระบุ effort และ impact
4. ตอบในแชทเป็น markdown table

## Rules

### 1. Analysis

- อ่าน metadata ให้ครบถ้วน
- อ่าน source code หลักให้เข้าใจ capabilities
- ค้นหา integration opportunities ทั่วทั้ง monorepo
- ใช้ grep ค้นหา patterns ที่เกี่ยวข้อง

### 2. Recommendations

- จัดลำดับความสำคัญ
- ระบุ effort และ impact ชัดเจน
- ให้ migration path ที่ชัดเจน
- แนะนำ features ใหม่ที่สมเหตุสมผล

### 3. Documentation

- ตอบในแชทเป็น markdown table
- ใช้รูปแบบตารางที่อ่านง่าย
- ระบุ reasons สำหรับแต่ละ recommendation
- ให้ actionable next steps

### 4. Cross-Reference

- ระบุทรัพยากรที่ควร integrate
- ตรวจสอบ dependencies conflicts
- พิจารณา impact ต่อ ecosystem ทั้งหมด

## Expected Outcome

- รายงานในแชทเป็น markdown table
- Use Cases ที่ชัดเจนพร้อม priority
- Integration Opportunities ทั่วทั้ง monorepo
- Migration Recommendations ที่ actionable
- New Feature Ideas ที่สมเหตุสมผล

