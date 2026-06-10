---
trigger: manual
description: ตัวอย่างการใช้งาน Markdown Format สำหรับ Workflows
---

## 1. Basic Formatting (ใช้สำหรับจัดรูปแบบข้อความพื้นฐาน)

### Emphasis

````markdown
_This text will be italic_
_This will also be italic_

**This text will be bold**
**This will also be bold**

_You **can** combine them_
````

### Strikethrough

````markdown
~~This text is strikethrough~~
````

### Blockquotes

````markdown
> This is a blockquote.
> It can span multiple lines.
````

### Links

````markdown
[Visit Google](https://www.google.com)
````

### Images

````markdown
![Alt text for image](https://via.placeholder.com/150)
````

### Horizontal Rule

````markdown
---
---

---
````

---

## 2. Lists (ใช้สำหรับสร้างรายการ)

### Task Lists

````markdown
- [x] Task 1 (Completed)
- [ ] Task 2 (Incomplete)
````

---

## 3. Code & Structures (ใช้สำหรับแสดงโค้ดและโครงสร้างต่างๆ)

### Code Block

````typescript
export default defineEventHandler(async () => {
    // This route is protected by the admin-api middleware
    const allUsers = await db.select().from(users).orderBy(desc(users.createdAt));
    return allUsers;
});
````

### Table

````markdown
| Component | Status      |
|-----------|-------------|
| Button    | `Completed` |
| Input     | `In Progress` |
````

### File Structure

````text
.windsurf/
├── workflows/
│   ├── deploy.md
│   └── test.md
└── rules.md
````

### Markdown Diagram

````text
[Start] --> [Is it?]
  |
  +-- Yes --> [OK] --> [End]
  |
  +-- No ---> [KO] --> [End]
````

---

## 4. Before & After Example (ใช้สำหรับเปรียบเทียบโค้ดก่อนและหลังการเปลี่ยนแปลง)

### Refactoring Code

**Before**

```typescript
function old_function(data) {
    if (data) {
        return process(data);
    } else {
        return null;
    }
}
```

**After**

```typescript
function new_function(data) {
    return data ? process(data) : null;
}
```

