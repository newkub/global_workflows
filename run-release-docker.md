---
title: Run Release Docker
description: Release Docker image ไปยัง Docker Hub ด้วยการตั้งค่าที่ถูกต้อง
auto_execution_mode: 3
---

Release Docker image ไปยัง Docker Hub ด้วยการตั้งค่าที่ถูกต้อง

## Goal

Release Docker image ไปยัง Docker Hub ด้วยการตั้งค่าที่ถูกต้องและตรวจสอบคุณภาพโค้ด

## Scope

Release Docker images ไปยัง Docker Hub

## Execute

### 1. Check Package Configuration

ตรวจสอบ Dockerfile มีข้อมูลครบถ้วน

1. ตรวจสอบ Dockerfile มี FROM, WORKDIR, COPY, RUN
2. ตรวจสอบ .dockerignore มีการ exclude files ที่ไม่จำเป็น
3. ตรวจสอบ docker-compose.yml ถ้ามี
4. ตรวจสอบ environment variables ใน Dockerfile

### 2. Setup Authentication

ตั้งค่า authentication สำหรับ Docker Hub publish

1. รับ credentials จาก Docker Hub
2. ตั้งค่า DOCKER_USERNAME, DOCKER_PASSWORD ใน GitHub Secrets ด้วย:
   ```bash
   gh secret set DOCKER_USERNAME
   gh secret set DOCKER_PASSWORD
   ```
3. ตรวจสอบว่า DOCKER_USERNAME, DOCKER_PASSWORD มีอยู่ใน GitHub Secrets
4. ตรวจสอบว่า credentials มีสิทธิ์ push ไปที่ repository

### 3. Run Verify

ตรวจสอบคุณภาพโค้ดก่อน release

1. ทำ `/run-verify` เพื่อตรวจสอบคุณภาพโค้ด
2. ตรวจสอบว่า scan, typecheck, lint, และ test ผ่านทั้งหมด
3. ถ้า verify ไม่ผ่าน ให้แก้ไขก่อนดำเนินการต่อ

### 4. Setup Release Tool

ตั้งค่า release tool สำหรับ Docker

1. ทำ `/release-docker` เพื่อตั้งค่า release tool
2. ตรวจสอบ installation สำเร็จ
3. ตรวจสอบ configuration ใน Dockerfile

### 5. Run Release

รัน release ไปยัง Docker Hub

1. รัน `docker build` เพื่อ build image
2. รัน `docker push` เพื่อ push image ไปยัง Docker Hub
3. ตรวจสอบว่า release สำเร็จ
4. ถ้า release ไม่สำเร็จ ให้ทำข้อ 1 ใหม่จนกว่าจะผ่าน

## Rules

### 1. Package Configuration

ตรวจสอบ configuration ครบถ้วนก่อน release

- ต้องมี Dockerfile
- ต้องมี .dockerignore
- ต้องมี base image ที่เหมาะสม
- ต้องมี tag ที่ชัดเจน

### 2. Authentication

ตรวจสอบว่ามีสิทธิ์ publish

- ต้องมี DOCKER_USERNAME, DOCKER_PASSWORD ใน GitHub Secrets
- Credentials ต้องมีสิทธิ์ push ไปที่ repository
- ใช้ Docker Hub credentials จาก account

### 3. Tool Usage

ใช้ release tool ที่เหมาะสม

- ใช้ `/release-docker` สำหรับตั้งค่า release tool
- ใช้ `docker build` และ `docker push`
- รัน docker build ด้วย --no-cache เพื่อ build ใหม่ทั้งหมด

## Expected Outcome

- Docker image ถูก build และ push สำเร็จไปยัง Docker Hub
- Image มี tag ที่ถูกต้อง
- Git tags ถูกสร้างอัตโนมัติ
