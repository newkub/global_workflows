---
title: Code Search
description: ค้นหา code patterns, symbols, และ references ด้วยหลาย tools ตามความเหมาะสม
auto_execution_mode: 3
related_workflows:
  - /use-ast-grep
  - /analyze-structure
  - /scan-codebase
---

## Goal

ค้นหา code patterns, symbols, functions, classes, และ references อย่างมีประสิทธิภาพด้วย tools ที่เหมาะสมกับแต่ละ use case

## Scope

ครอบคลุมการค้นหา:
- Text search ด้วย Grep
- File search ด้วย find_by_name
- AST-based search ด้วย ast-grep
- Structure navigation ด้วย ast-grep outline
- Symbol search และ references

## Execute

### 1. Choose Search Method

เลือก method ตามประเภทของการค้นหา

**Text Search:**
- ใช้ `Grep` สำหรับค้นหาข้อความ, strings, comments
- ใช้เมื่อต้องการค้นหา pattern ที่เป็น text ธรรมดา
- รองรับ regex patterns

**File Search:**
- ใช้ `find_by_name` สำหรับค้นหาไฟล์และ directories
- ใช้เมื่อต้องการค้นหาตามชื่อไฟล์, extension, หรือ path
- รองรับ glob patterns

**AST-based Search:**
- ทำ `/use-ast-grep` สำหรับค้นหาด้วย AST patterns
- ใช้เมื่อต้องการค้นหา code structures (functions, classes, imports)
- ใช้เมื่อต้องการ semantic search ไม่ใช่แค่ text

**Structure Navigation:**
- ใช้ `ast-grep outline` สำหรับดู structure ของไฟล์/directory
- ใช้เมื่อต้องการ explore codebase โดยไม่ต้องอ่านทั้งไฟล์
- ดูรายละเอียดจาก `/use-ast-grep`

### 2. Text Search with Grep

ใช้ `Grep` สำหรับ text-based search

**Basic Usage:**
```typescript
// ค้นหาข้อความ
Grep({ pattern: "function", path: "src" })

// ค้นหาด้วย regex
Grep({ pattern: "import.*from", path: "src" })

// ค้นหา case-sensitive
Grep({ pattern: "Function", path: "src", case_sensitive: true })
```

**Filter Options:**
- `type`: filter ตาม file type (js, ts, py, rust, etc.)
- `glob`: filter ตาม glob pattern (*.ts, **/*.test.ts)
- `path`: ระบุ directory ที่ต้องการค้นหา
- `output_mode`: content, files_with_matches, count

**Advanced Options:**
- `-A`, `-B`, `-C`: แสดง context ก่อน/หลัง match
- `head_limit`: จำกัดจำนวน results
- `multiline`: enable multiline matching

### 3. File Search with find_by_name

ใช้ `find_by_name` สำหรับ file/directory search

**Basic Usage:**
```typescript
// ค้นหาไฟล์ตามชื่อ
find_by_name({ SearchDirectory: "src", Pattern: "*.ts" })

// ค้นหา directory
find_by_name({ SearchDirectory: ".", Pattern: "*", Type: "directory" })

// ค้นหาตาม extension
find_by_name({ SearchDirectory: "src", Extensions: ["ts", "tsx"] })
```

**Filter Options:**
- `Pattern`: glob pattern สำหรับ matching
- `Extensions`: array ของ extensions ที่ต้องการ
- `Type`: file, directory, any
- `Excludes`: glob patterns ที่ต้องการ exclude
- `MaxDepth`: จำกัด depth ของการค้นหา
- `FullPath`: match full path แทน filename

### 4. AST-based Search with ast-grep

ทำ `/use-ast-grep` สำหรับ AST-based search

**Ad-hoc Search:**
```bash
# ค้นหา pattern
ast-grep run -p 'console.log($ARG)'

# ค้นหา function
ast-grep run -p 'function $NAME($$ARGS) {$$BODY}'

# ค้นหา class
ast-grep run -p 'class $NAME {$$BODY}'
```

**Structured Search:**
```bash
# ค้นหาด้วย config
ast-grep scan --config sgconfig.yml

# ค้นหา interactive
ast-grep run -p 'pattern' --interactive

# ค้นหาด้วย JSON output
ast-grep run -p 'pattern' --json
```

### 5. Structure Navigation with ast-grep outline

ใช้ `ast-grep outline` สำหรับ explore structure

**Basic Usage:**
```bash
# ดู structure ของ file
ast-grep outline src/file.ts

# ดู exports ของ directory
ast-grep outline src/modules --items exports

# ดู imports
ast-grep outline src/modules --items imports
```

**Filter Options:**
- `--items auto|structure|exports|imports|all`: เลือก items
- `--type class,enum,function`: filter ตาม type
- `--match <regex>`: filter ตาม pattern
- `--pub-members`: แสดงเฉพาะ public members

**View Options:**
- `--view auto|names|signatures|digest|expanded`: เลือก presentation
- `--json`: output เป็น JSON

### 6. Parallel Search

ค้นหาแบบ parallel เพื่อความเร็ว

```typescript
// ค้นหา patterns หลายอย่างพร้อมกัน
Grep({ pattern: "import", path: "src" })
Grep({ pattern: "export", path: "src" })
Grep({ pattern: "function", path: "src" })
Grep({ pattern: "class", path: "src" })

// ค้นหา files หลายอย่างพร้อมกัน
find_by_name({ SearchDirectory: "src", Pattern: "*.ts" })
find_by_name({ SearchDirectory: "src", Pattern: "*.tsx" })
find_by_name({ SearchDirectory: "src", Pattern: "*.js" })
```

## Rules

### 1. Tool Selection

เลือก tools ตาม use case:

- **Text Search**: ใช้ `Grep` สำหรับข้อความ, strings, comments
- **File Search**: ใช้ `find_by_name` สำหรับไฟล์, directories
- **Semantic Search**: ใช้ `ast-grep` สำหรับ code structures
- **Structure Navigation**: ใช้ `ast-grep outline` สำหรับ explore structure

### 2. Search Scope

กำหนด scope ของการค้นหา:

- ใช้ `path` ใน Grep เพื่อจำกัด directory
- ใช้ `SearchDirectory` ใน find_by_name เพื่อจำกัด directory
- ใช้ `type` หรือ `glob` เพื่อ filter file types
- ใช้ `MaxDepth` เพื่อจำกัด depth

### 3. Pattern Precision

ใช้ patterns ที่ precise:

- ใช้ regex patterns ที่ specific
- ใช้ meta variables ใน ast-grep: `$VAR`
- ใช้ kind ใน ast-grep สำหรับ specific node types
- ใช้ glob patterns ที่ specific ใน find_by_name

### 4. Output Format

เลือก output format ตามความต้องการ:

- `content`: แสดง matching lines
- `files_with_matches`: แสดงเฉพาะ file paths
- `count`: แสดงจำนวน matches
- `--json`: output เป็น JSON สำหรับ machine-readable

### 5. Performance Optimization

ปรับปรุง performance:

- ค้นหาแบบ parallel เมื่อมีหลาย patterns
- จำกัด scope ด้วย path, type, glob
- ใช้ `head_limit` เพื่อจำกัด results
- ใช้ `files_with_matches` ก่อน แล้วค่อยอ่าน content

### 6. ast-grep Best Practices

ทำตาม `/use-ast-grep`:

- เริ่มจาก simple patterns ก่อน
- ใช้ meta variables สำหรับ capture nodes
- ใช้ relational rules (inside, has, precedes, follows)
- ใช้ composite rules (all, any, not, matches)
- Test rules ก่อนใช้งานจริง

### 7. Grep Best Practices

แนวทางการใช้ Grep:

- ใช้ regex patterns ที่ specific
- ใช้ case-insensitive โดย default (เว้นแต่จำเป็น)
- ใช้ context options (-A, -B, -C) เมื่อต้องการ
- ใช้ `head_limit` เพื่อจำกัด results
- ระบุ `type` หรือ `glob` เพื่อ filter

### 8. find_by_name Best Practices

แนวทางการใช้ find_by_name:

- ใช้ glob patterns ที่ specific
- ใช้ `Extensions` แทน glob patterns สำหรับ extensions
- ใช้ `MaxDepth` เพื่อจำกัด depth
- ใช้ `Excludes` เพื่อ skip files/directories
- ใช้ `Type` เพื่อ filter file/directory

## Expected Outcome

- ค้นหา code patterns, symbols, references ได้อย่างมีประสิทธิภาพ
- เลือก tools ที่เหมาะสมกับแต่ละ use case
- ค้นหาแบบ parallel เพื่อความเร็ว
- ใช้ patterns ที่ precise และ specific
- จัดการ output ตามความต้องการ
