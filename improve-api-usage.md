---
description: ปรับปรุง API usage ให้ใช้งานง่ายและมีประสิทธิภาพมากขึ้น
---

# Improve API Usage

Workflow สำหรับปรับปรุงการใช้งาน API ให้ดีขึ้น ทั้งด้าน usability, performance, และ developer experience

## ขั้นตอนการทำงาน

### 1. วิเคราะห์ API ปัจจุบัน
```bash
# ค้นหา API endpoints และ functions ทั้งหมด
find . -name "*.ts" -o -name "*.js" | xargs grep -l "export.*function\|export.*async\|router\|endpoint"
```

### 2. ตรวจสอบการใช้งาน API
- ดูว่ามีการใช้ API แบบไหนบ้างใน codebase
- หา patterns ที่ซ้ำกันและสามารถทำเป็น utility ได้
- ตรวจสอบ error handling และ response types

### 3. ปรับปรุง API Surface
- สร้าง type definitions ที่ชัดเจน
- เพิ่ม input validation และ error handling
- ทำ auto-completion และ documentation

### 4. 优化 Usage Patterns
- สร้าง helper functions สำหรับ operations ที่ใช้บ่อย
- ทำ composables/hooks สำหรับ frontend
- เพิ่ม examples และ usage documentation

### 5. ทดสอบและ Validate
- เขียน unit tests สำหรับ API functions
- ทดสอบ integration scenarios
- ตรวจสอบ performance impact

## การใช้งาน

```bash
# รัน workflow สำหรับปรับปรุง API usage
/improve-api-usage
```

## Output ที่ได้

- API functions ที่มี type safety สูง
- Helper functions สำหรับ common operations
- Documentation และ examples ที่ชัดเจน
- Test coverage สำหรับ API usage

