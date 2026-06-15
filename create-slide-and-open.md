---

title: Create Slide And Open

description: สร้าง Slidev project และเปิด browser อัตโนมัติ

auto_execution_mode: 3

---

## Goal

สร้าง Slidev project ใน drive D ตามชื่อที่ระบุ และเปิด browser เพื่อดู slides ทันที

## Scope

ติดตั้ง Slidev dependencies ด้วย Bun และสร้าง slides.md เอง แล้วเปิด browser อัตโนมัติ

## Execute

### 1. Create Project Directory

1. รับชื่อ project เป็น parameter (เช่น `solidjs`)
2. สร้าง directory `D:/newkub/slides/{project-name}` ถ้ายังไม่มี
3. เข้าไปใน directory นั้น

### 2. Initialize Project

1. สร้าง `package.json` ด้วย Bun
2. ติดตั้ง Slidev dependencies ด้วย `bun add @slidev/cli @slidev/theme-seriph`

### 3. Create Slides File

1. สร้าง `slides.md` ด้วย frontmatter มาตรฐาน
2. เขียน content ตามต้องการ
3. ตั้งค่า theme, title, info ใน frontmatter
4. ตั้งค่า transition สำหรับ slide transitions (slide-left, slide-right, fade-out, fade-in, slide-up, slide-down)
5. เพิ่ม animation directives (v-click, v-motion) ตามต้องการ

### 4. Run Dev Server

1. รัน dev server ด้วย `bunx slidev`
2. รอให้ dev server เริ่มทำงาน

### 5. Open Browser

1. เปิด browser ไปที่ `http://localhost:3030`
2. ตรวจสอบว่า slides แสดงผลได้ถูกต้อง
3. ใช้ `browser_preview` tool หรือเปิด browser ด้วยคำสั่ง `open` ของ OS

## Rules

### 1. Project Setup

- สร้าง project ใน `D:/newkub/slides/{project-name}` เท่านั้น
- ใช้ Bun เป็น package manager ตาม global rules
- ใช้ Bun shell สำหรับ automation
- ไม่ใช้ `bun create slidev` แต่ติดตั้ง dependencies เอง

### 2. Dependencies Installation

- ใช้ `bun add @slidev/cli @slidev/theme-seriph` สำหรับติดตั้ง Slidev
- สร้าง `package.json` ด้วย Bun ก่อนติดตั้ง dependencies
- ใช้ `bunx slidev` สำหรับรัน dev server

### 3. Animation Transitions

#### Click Animations

- ใช้ `v-click` สำหรับ basic click animations
- ใช้ `v-after` สำหรับ show เมื่อ previous v-click triggered
- ใช้ `v-click.hide` หรือ `v-after.hide` สำหรับ hide after clicking
- ใช้ `v-clicks` component สำหรับ apply v-click ทั้งหมดใน children (รองรับ `depth`, `every` props)
- ใช้ `at` prop สำหรับ positioning (relative '+1', '-1' หรือ absolute 1, 2)
- ใช้ array value `[2, 4]` สำหรับ enter/leave indices
- ใช้ `v-switch` สำหรับ switch content ตาม click count
- ใช้ `clicks` frontmatter สำหรับ custom total clicks count
- ใช้ `clickAnimation` frontmatter สำหรับ default animation preset
- ใช้ directive modifiers เช่น `v-click.scale`, `v-click.fade.right`, `v-click.none`
- Built-in presets: fade, fade-in, up, down, left, right, scale, none
- สร้าง custom presets ด้วย CSS rules สำหรับ `.slidev-vclick-anim-{presetName}`

#### Motion Animations

- ใช้ `v-motion` สำหรับ motion effects (powered by @vueuse/motion)
- กำหนด states: `initial`, `enter`, `leave`, `click-N`, `click-N-M`
- ใช้ร่วมกับ `v-click` บน element เดียวกันเพื่อ trigger motion ตาม click states
- ใช้ `preload: false` ใน frontmatter สำหรับเปิดใช้ motion (ก่อน v0.48.9)

#### Slide Transitions

- ใช้ `transition` ใน frontmatter สำหรับ slide transitions
- Built-in transitions: fade, fade-out, slide-left, slide-right, slide-up, slide-down, view-transition
- ใช้ `view-transition-name` CSS property สำหรับ View Transitions API
- สร้าง custom transitions ด้วย CSS classes (`.my-transition-enter-active`, `.my-transition-leave-to`)
- ใช้ `|` separator สำหรับ forward/backward transitions (เช่น `go-forward | go-backward`)
- ใช้ object format สำหรับ advanced options (name, enterFromClass, enterActiveClass, duration)

### 4. Browser Opening

- เปิด browser หลังจาก dev server เริ่มทำงาน
- ใช้ `http://localhost:3030` เป็น default URL
- ตรวจสอบว่า browser เปิดได้สำเร็จ

### 5. Error Handling

- ถ้า dev server ไม่เริ่มทำงาน ให้แก้ไขก่อนเปิด browser
- ถ้า browser เปิดไม่ได้ ให้ตรวจสอบ port และ process

## Expected Outcome

- Slidev project สร้างใน `D:/newkub/slides/{project-name}`
- Dev server ทำงานได้ที่ port 3030
- Browser เปิดอัตโนมัติและแสดง slides
- สามารถแก้ไข slides แบบ real-time
