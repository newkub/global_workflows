---
title: Choose Tech Stack
description: เลือก tech stack ที่เหมาะสมสำหรับ project ตาม requirements และ constraints
auto_execution_mode: 3
related_workflows:
  - /use-rust-in-ts
  - /design-system
---

## Goal

เลือก tech stack ที่เหมาะสมสำหรับ project โดยพิจารณาจาก requirements, constraints, และ best practices

## Scope

ครอบคลุมการเลือก programming language, frameworks, libraries, build tools, และ deployment platforms

## Execute

### 1. วิเคราะห์ Requirements

#### Functional Requirements
- ประเภท application (web, mobile, desktop, CLI, TUI, etc.)
- Features หลักที่ต้องการ
- Scale ที่คาดหวัง (users, data, requests)
- Real-time requirements (WebSocket, streaming, etc.)

#### Non-Functional Requirements
- Performance requirements (latency, throughput)
- Security requirements
- Availability/Reliability
- Maintainability
- Time-to-market

#### Constraints
- Team expertise
- Budget
- Timeline
- Infrastructure constraints
- Regulatory requirements

### 2. เลือก Programming Language

#### Web Applications
- **TypeScript/JavaScript** - Default choice, ecosystem ใหญ่
- **Rust** - High performance, memory safety
- **Go** - Simple, fast, good for backend
- **Python** - AI/ML, rapid prototyping

#### Mobile Applications
- **React Native** - Cross-platform, large ecosystem
- **Flutter** - Cross-platform, good performance
- **Swift/Kotlin** - Native, best performance

#### Desktop Applications
- **Electron** - Web technologies, cross-platform
- **Tauri** - Rust + Web, smaller bundle
- **Flutter** - Cross-platform

#### CLI/TUI Applications
- **Rust** - Performance, single binary
- **Go** - Simple, fast
- **Node.js** - Easy to write, large ecosystem

### 3. เลือก Frameworks & Libraries

#### Web Frontend
- **Next.js** - React framework, SSR/SSG
- **Nuxt** - Vue framework, SSR/SSG
- **SvelteKit** - Svelte framework, SSR/SSG
- **Vite** - Build tool, fast HMR

#### Web Backend
- **Nitro** - Universal web framework
- **Express/Fastify** - Node.js frameworks
- **Actix/Axum** - Rust frameworks
- **Gin/Echo** - Go frameworks

#### Database
- **PostgreSQL** - Relational, feature-rich
- **MySQL** - Relational, popular
- **MongoDB** - NoSQL, flexible
- **SQLite** - Embedded, simple

#### State Management
- **Pinia** - Vue state management
- **Zustand** - React state management
- **Redux** - React state management (complex)

### 4. เลือก Build Tools

#### JavaScript/TypeScript
- **Vite** - Fast, modern
- **Turbopack** - Rust-based, fast
- **Rolldown** - Rust-based Rollup alternative
- **SWC** - Fast compiler

#### Rust
- **Cargo** - Official build tool
- **Moon** - Task runner for monorepos

#### Go
- **Go build** - Official build tool

### 5. เลือก Deployment Platform

#### Serverless
- **Cloudflare Workers** - Edge computing
- **Vercel** - Easy deployment
- **AWS Lambda** - Mature ecosystem

#### Containers
- **Docker** - Standard containerization
- **Kubernetes** - Orchestration

#### Traditional
- **VPS** - Full control
- **PaaS** - Heroku, Railway

### 6. สร้าง Decision Matrix

สร้างตารางเปรียบเทียบ tech options ตาม criteria:
- Development speed
- Performance
- Scalability
- Ecosystem maturity
- Learning curve
- Cost
- Maintenance burden

### 7. ทดสอบและ Validate

- Build MVP/prototype
- Measure performance
- Evaluate developer experience
- Check long-term viability

## Rules

### 1. Start Simple

- ใช้ tech stack ที่ team คุ้นเคย
- ไม่ over-engineering ด้วย tech ล้ำสมัย
- เริ่มจาก solutions ที่พิสูจน์แล้ว

### 2. Consider Trade-offs

- ทุก tech มี pros และ cons
- วัด impact ต่อ development speed, performance, maintenance
- พิจารณา long-term viability

### 3. Prototype First

- ทดลอง build MVP/prototype
- วัด performance จริง
- ประเมิน developer experience

### 4. Think Long-term

- maintenance สำคัญกว่า initial speed
- พิจารณา ecosystem maturity
- ตรวจสอบ community support

## Expected Outcome

- Tech stack ที่เหมาะสมกับ requirements
- Decision matrix ที่ชัดเจน
- Prototype ที่ทดสอบแล้ว
- Risk assessment ที่ครบถ้วน

## Common Mistakes

- เลือก tech เพราะ trend โดยไม่ fit requirements
- ไม่พิจารณา team expertise
- เลือก over-engineered solutions
- ไม่ทดสอบก่อน commit

## Examples

| Project Type | Recommended Stack |
|--------------|------------------|
| Small Web App | Next.js + TypeScript + Tailwind CSS + Vercel |
| High-Performance API | Rust + Axum + PostgreSQL + Docker |
| CLI Tool | Rust + Clap + Directories |
| Cross-Platform Desktop | Tauri + React + TypeScript |

## References

- [Tech Stack Decision Framework](https://github.com/collections/tech-stack)
- [Choose Your Boring Technology](https://mcfunley.com/choose-your-boring-technology)

