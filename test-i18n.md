---
title: Test I18n
description: ทดสอบ internationalization แล localization สำหรับ multi-language support
auto_execution_mode: 3
related_workflows:
  - /test-e2e
  - /test-component
---

## Goal

ทดสอบ internationalization ให้ครอบคลุม รวม RTL languages, date/time formatting, แล translation completeness

## Execute

### 1. Setup I18n Testing

1. ติดตั้ง i18n library (vue-i18n, react-i18next)
2. Configure locale files สำหรับแต่ละ language
3. Setup locale switching mechanism
4. Configure fallback language

### 2. Test Translation Completeness

1. Verify ทุก keys มี translations ในทุก locales
2. Check สำหรับ missing translations
3. Verify ไม่มี unused translation keys
4. Test translation file format validity

### 3. Test RTL Languages

1. Test Arabic layout (right-to-left)
2. Test Hebrew layout
3. Verify text direction ถูกต้อง
4. Test layout mirroring สำหรับ RTL

### 4. Test Date And Time Formatting

1. Test date formats สำหรับแต่ละ locale
2. Test time formats สำหรับแต่ละ locale
3. Test timezone handling
4. Verify relative time formatting

### 5. Test Number And Currency Formatting

1. Test number formats (decimal separators)
2. Test currency symbols แล positions
3. Test percentage formatting
4. Verify large number formatting

### 6. Test Text Direction

1. Test LTR (left-to-right) languages
2. Test RTL (right-to-left) languages
3. Verify mixed direction text
4. Test layout adjustments

### 7. Test Locale Switching

1. Test dynamic locale switching
2. Verify state preservation ระหว่าง switches
3. Test locale persistence (localStorage, URL)
4. Verify fallback to default locale

### 8. Test Pluralization

1. Test singular/plural forms
2. Test language-specific plural rules
3. Test zero/one/many forms
4. Verify context-aware translations

### 9. Test Character Encoding

1. Test UTF-8 support
2. Test special characters (accents, emojis)
3. Test Asian characters (CJK)
4. Verify encoding consistency

### 10. Run I18n Tests

1. Execute translation completeness tests
2. Execute RTL layout tests
3. Execute formatting tests
4. Document i18n issues

## Rules

### 1. Translation File Structure

```json
{
  "en": {
    "common": {
      "save": "Save",
      "cancel": "Cancel"
    }
  },
  "th": {
    "common": {
      "save": "บันทึก",
      "cancel": "ยกเลิก"
    }
  }
}
```

### 2. RTL Support

- ใช้ `dir="rtl"` สำหรับ RTL languages
- Mirror layouts สำหรับ RTL (margin-left ↔ margin-right)
- Test กับ Arabic แล Hebrew
- Verify text alignment ถูกต้อง

### 3. Formatting Libraries

| Type | Library | Use Case |
|------|---------|----------|
| Date | date-fns, dayjs | Date/time formatting |
| Number | Intl.NumberFormat | Number/currency formatting |
| Plural | i18next plural | Pluralization rules |

### 4. Locale Detection

- Detect locale จาก browser language
- Allow manual locale selection
- Persist locale preference
- Fallback to default locale

### 5. Translation Best Practices

- ใช้ descriptive keys ไม่ใช้ English text
- Group translations ตาม feature
- Avoid concatenating translations
- Use interpolation สำหรับ dynamic values

## Expected Outcome

- [ ] Translations complete สำหรับทุก locales
- [ ] RTL languages supported
- [ ] Date/time formatting correct
- [ ] Number/currency formatting correct
- [ ] Locale switching works
- [ ] Character encoding validated

## Common Mistakes

- ไม่ test RTL languages
- ใช้ English text เป็น translation keys
- ไม่ handle pluralization
- ไม่ test special characters
- Hardcode dates แล numbers
- ไม่ validate translation completeness

## Anti-Patterns

- ❌ ใช้ English text เป็น translation keys
- ❌ ไม่ test RTL languages
- ❌ Hardcode dates แล numbers
- ❌ Concatenate translations
- ❌ ไม่ handle pluralization
