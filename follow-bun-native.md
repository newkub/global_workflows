---
title: Follow Bun Native APIs
description: ตั้งค่าและใช้งาน Bun native APIs อย่างเต็มประสิทธิภาพ
auto_execution_mode: 3
---

## Goal

ใช้ Bun native APIs แทน Node.js libraries สำหรับ performance และ simplicity

## Execute

### 1. Use Filesystem APIs

1. ใช้ `Bun.file` แทน `node:fs` สำหรับอ่านไฟล์
2. ใช้ `Bun.write` สำหรับเขียน, copy, pipe, send, clone ไฟล์
3. ใช้ `Bun.mmap` สำหรับ memory-mapped files
4. ใช้ `Bun.read` สำหรับ stream reading

### 2. Use Database APIs

1. ใช้ `bun:sqlite` สำหรับ SQLite (in-memory หรือ file-based)
2. ใช้ `Bun.sql` และ `Bun.Postgres` สำหรับ PostgreSQL
3. ใช้ `Bun.RedisClient` และ `Bun.redis` สำหรับ Redis/Valkey
4. ใช้ `Bun.S3Client` และ `Bun.s3` สำหรับ S3-compatible storage

### 3. Use Server APIs

1. ใช้ `Bun.serve` แทน Express สำหรับ HTTP server
2. ใช้ WebSockets ผ่าน `Bun.serve` options
3. ใช้ HTTPS ด้วย `Bun.serve` และ certificates
4. ใช้ `Bun.FileSystemRouter` สำหรับ file-system routing

### 4. Use Networking APIs

1. ใช้ `Bun.listen` และ `Bun.connect` สำหรับ TCP sockets
2. ใช้ `Bun.udpSocket` สำหรับ UDP sockets
3. ใช้ `Bun.dns.lookup`, `Bun.dns.prefetch`, `Bun.dns.getCacheStats` สำหรับ DNS

### 5. Use Shell and Process APIs

1. ใช้ `Bun.$` สำหรับ shell commands
2. ใช้ `Bun.spawn` และ `Bun.spawnSync` สำหรับ child processes
3. ใช้ `Bun.which` สำหรับ locate executables

### 6. Use Compression APIs

1. ใช้ `Bun.gzipSync`, `Bun.gunzipSync` สำหรับ GZIP
2. ใช้ `Bun.deflateSync`, `Bun.inflateSync` สำหรับ DEFLATE
3. ใช้ `Bun.zstdCompressSync`, `Bun.zstdDecompressSync` สำหรับ ZSTD

### 7. Use Crypto and Hashing APIs

1. ใช้ `Bun.password` สำหรับ password hashing
2. ใช้ `Bun.hash`, `Bun.CryptoHasher`, `Bun.sha` สำหรับ hashing
3. ใช้ `Bun.randomUUIDv7` สำหรับ UUID generation

### 8. Use Utility APIs

1. ใช้ `Bun.sleep`, `Bun.sleepSync` สำหรับ async/sync sleep
2. ใช้ `Bun.nanoseconds` สำหรับ high-precision timing
3. ใช้ `Bun.deepEquals`, `Bun.inspect` สำหรับ debugging
4. ใช้ `Bun.escapeHTML`, `Bun.stringWidth` สำหรับ string utilities
5. ใช้ `Bun.readableStreamTo*` สำหรับ stream conversion (toBytes, toBlob, toFormData, toJSON, toArray)
6. ใช้ `Bun.ArrayBufferSink`, `Bun.allocUnsafe`, `Bun.concatArrayBuffers` สำหรับ memory operations
7. ใช้ `Bun.version`, `Bun.revision`, `Bun.env`, `Bun.main` สำหรับ runtime info
8. ใช้ `Bun.peek`, `Bun.openInEditor` สำหรับ development utilities
9. ใช้ `Bun.resolveSync`, `Bun.fileURLToPath`, `Bun.pathToFileURL` สำหรับ path resolution
10. ใช้ `Bun.stripANSI`, `Bun.wrapAnsi` สำหรับ terminal formatting

### 9. Use Advanced APIs

1. ใช้ `bun:ffi` สำหรับ Foreign Function Interface
2. ใช้ `Bun.Transpiler` สำหรับ JSX/TypeScript transpilation
3. ใช้ `Bun.build` สำหรับ native bundling
4. ใช้ `bun:test` สำหรับ testing
5. ใช้ `Bun.gc`, `Bun.generateHeapSnapshot` สำหรับ garbage collection
6. ใช้ `bun:jsc` สำหรับ JavaScriptCore engine APIs

### 10. Use Data Format APIs

1. ใช้ `Bun.TOML.parse` สำหรับ TOML parsing
2. ใช้ `Bun.semver.satisfies`, `Bun.semver.order` สำหรับ semantic versioning
3. ใช้ `Bun.markdown` สำหรับ markdown processing
4. ใช้ `Bun.color` สำหรับ terminal color detection

## Rules

1. ใช้ Bun native APIs เสมอเมื่อมีให้ใช้
2. ใช้ `Bun.file` แทน `node:fs` เสมอ
3. ใช้ `Bun.serve` แทน Express/Fastify
4. ใช้ `bun:sqlite`, `Bun.sql`, `Bun.redis` แทน external drivers
5. ใช้ Web-standard APIs ก่อน Bun-specific APIs
6. ตรวจสอบ compatibility กับ Web standards
7. ใช้ Bun APIs เฉพาะสำหรับ server-side tasks

## Expected Outcome

- Code ที่เร็วขึ้นด้วย native performance
- ลด dependencies ด้วย built-in APIs
- Code ที่กระชับและ maintainable
- Performance optimization อัตโนมัติ
- Full-stack development ด้วย runtime เดียว
