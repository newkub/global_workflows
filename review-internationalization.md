---

title: Review Internationalization

description: Review i18n/l10n support, translations และ locale handling

auto_execution_mode: 3

related_workflows:
  - /review-uxui
  - /review-api
  - /review-data

---

## Goal

Review internationalization layer ทั้งหมมเพื่อระบุและแก้ไข issues ตาม priority

## Scope

ครอบคลุม i18n/l10n support, translations, date/time formats, RTL support

## Execute

### 1. Analyze I18n Support

1. ตรวจสอบ i18n framework
2. Review locale support
3. Check translation files
4. Validate locale detection

### 2. Review Translations

1. Check translation completeness
2. Review translation accuracy
3. Validate translation context
4. Check translation updates

### 3. Review Date/Time Formats

1. Check date localization
2. Review time localization
3. Validate number formatting
4. Check currency formatting

### 4. Review RTL Support

1. Check RTL support
2. Review layout direction
3. Validate text direction
4. Check RTL testing

### 5. Prioritize And Report

1. Group issues ตาม impact
2. ใช้ `/report` เพื่อสรุปผล
3. รอ user confirmation

### 6. Execute Fixes

1. Add missing translations
2. Fix translation issues
3. Improve RTL support
4. Optimize i18n performance

## Rules

### 1. I18n Support

ตรวจสอบ i18n support:

- I18n framework ดี
- Locale support ครบถ้วน
- Translation files organized
- Locale detection ดี
- Locale switching ง่าย

### 2. Translations

ตรวจสอบ translations:

- Translations complete
- Translations accurate
- Translation context ดี
- Translations up to date
- ไม่ hardcoded strings

### 3. Date/Time Formats

ตรวจสอบ date/time formats:

- Date localization ดี
- Time localization ดี
- Number formatting ดี
- Currency formatting ดี
- Timezone handling ดี

### 4. RTL Support

ตรวจสอบ RTL support:

- RTL support มี
- Layout direction ถูกต้อง
- Text direction ถูกต้อง
- RTL testing มี
- Mirroring ดี

### 5. Character Encoding

ตรวจสอบ character encoding:

- UTF-8 ใช้
- Character encoding ถูกต้อง
- Special characters รองรับ
- Emoji รองรับ
- ไม่ encoding issues

## Expected Outcome

- I18n support ดี
- Translations ครบถ้วน
- Date/time formats ถูกต้อง
- RTL support ดี
- Character encoding ถูกต้อง

## Common Mistakes

ข้อผิดพลาดที่พบบ่อย:

- Hardcoded strings
- Translations ไม่ครบถ้วน
- ไม่ support RTL
- Date/time formats ผิด
- Encoding issues

## Anti-Patterns

รูปแบบที่ไม่ควรทำ:

- ❌ Hardcoded strings
- ❌ Translations ไม่ครบถ้วน
- ❌ ไม่ support RTL
- ❌ Date/time formats ผิด
- ❌ Encoding issues

