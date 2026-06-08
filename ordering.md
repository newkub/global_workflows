---
trigger: manual
description: กฏในการเรียงลำดับรายการให้เหมาะสม
instruction:
  - ต้องมี frontmatter
  - content เขียนตาม example
  - กฏต้องสามารถ VALIDATE และ VERIFY ได้
---

## 1. หลักการ ORDERING (ใช้เสมอ)

1.1. วัตถุประสงค์
    - เรียงลำดับรายการตามลำดับที่เหมาะสม
    - ทำให้ค้นหาและอ่านง่ายขึ้น
    - สนับสนุนการทำงานตามลำดับที่ถูกต้อง

1.2. หลักการจาก Order Theory
    - **Set**: รายการทั้งหมดที่ต้องเรียงลำดับ
    - **Order Relation**: ความสัมพันธ์สำหรับการเปรียบเทียบรายการ
    - **Partial Order**: ลำดับที่บางรายการอาจเปรียบเทียบไม่ได้ มี properties:
        - Reflexive: รายการ equivalent กับตัวเองเสมอ
        - Antisymmetric: ถ้า A มาก่อน B และ B มาก่อน A แล้ว A ต้องเท่ากับ B
        - Transitive: ถ้า A มาก่อน B และ B มาก่อน C แล้ว A ต้องมาก่อน C
    - **Total Order**: ลำดับที่ทุกรายการสามารถเปรียบเทียบกันได้
    - **Topological Order**: ลำดับที่เคารพความสัมพันธ์ขึ้นต่อกัน

1.3. ขั้นตอน ORDERING
    - DEFINE รายการทั้งหมดที่ต้องเรียงลำดับ
    - DEFINE ความสัมพันธ์สำหรับการเปรียบเทียบ
    - VERIFY ว่าความสัมพันธ์เป็น order relation
    - COMPUTE ลำดับของรายการ
    - VALIDATE ว่าลำดับถูกต้อง
    - VERIFY ว่าอ่านง่ายและเข้าใจ

---

## 2. การวิเคราะห์ (ใช้เสมอ)

2.1. ตรวจสอบรายการ
    - IDENTIFY รายการทั้งหมดที่ต้องเรียงลำดับ
    - CHECK ว่ามีรายการอย่างน้อย 1 รายการ
    - IDENTIFY คุณสมบัติของแต่ละรายการ

2.2. ตรวจสอบความสัมพันธ์
    - DEFINE criteria สำหรับการเปรียบเทียบ
    - VERIFY Reflexive: ทุกรายการ equivalent กับตัวเอง
    - VERIFY Antisymmetric: ถ้า A มาก่อน B และ B มาก่อน A แล้ว A ต้องเท่ากับ B
    - VERIFY Transitive: ถ้า A มาก่อน B และ B มาก่อน C แล้ว A ต้องมาก่อน C

2.3. Example
    - ไฟล์ในโปรเจกต์: ไฟล์ A มาก่อน B ถ้า A ถูกใช้ใน B
    - tasks ใน project: task A มาก่อน B ถ้า A มี priority สูงกว่า B
    - items ใน list: item A มาก่อน B ถ้า A มีชื่อน้อยกว่า B ตามตัวอักษร

---

## 3. การเรียงลำดับ (ใช้เสมอ)

3.1. กำหนดความสัมพันธ์
    - DEFINE relation ที่ชัดเจนและเป็น objective
    - ใช้ relation เดียวหรือหลาย relations ตามความเหมาะสม
    - relation ควรสอดคล้องกับวัตถุประสงค์

3.2. เลือก Order Type
    - **Total Order**: ทุกรายการสามารถเปรียบเทียบกันได้ เช่น ตามตัวอักษร ตามเวลา
    - **Partial Order**: บางรายการอาจเปรียบเทียบไม่ได้ เช่น ตาม dependency
    - **Topological Order**: เรียงตามความสัมพันธ์ขึ้นต่อกัน

3.3. คำนวณลำดับ
    - FOR EACH รายการ:
        - COMPARE กับรายการอื่นๆ ตาม relation ที่กำหนด
        - DETERMINE ลำดับของรายการ
    - ใช้ primary relation ถ้าเท่ากัน ใช้ secondary relation
    - รักษาความสัมพันธ์ระหว่างรายการ

3.4. Example
    ```
    // Set: ไฟล์ในโปรเจกต์
    // Relation: ไฟล์ A มาก่อน B ถ้า A ถูกใช้ใน B (Dependency Order)

    รายการทั้งหมด = {config.ts, types.ts, utils.ts, Button.vue, Layout.vue, pages/index.vue}

    ความสัมพันธ์:
    - config.ts ถูกใช้ใน types.ts, utils.ts, Button.vue, Layout.vue, pages/index.vue
    - types.ts ถูกใช้ใน utils.ts, Button.vue, Layout.vue
    - utils.ts ถูกใช้ใน Button.vue, Layout.vue
    - Button.vue ถูกใช้ใน Layout.vue
    - Layout.vue ถูกใช้ใน pages/index.vue

    Topological Order:
    1. config.ts          # ไม่มี dependency
    2. types.ts           # ขึ้นกับ config.ts
    3. utils.ts           # ขึ้นกับ config.ts, types.ts
    4. Button.vue         # ขึ้นกับ config.ts, types.ts, utils.ts
    5. Layout.vue         # ขึ้นกับ config.ts, types.ts, utils.ts, Button.vue
    6. pages/index.vue    # ขึ้นกับ config.ts, types.ts, utils.ts, Button.vue, Layout.vue
    ```

---

## 4. การ VALIDATE (ใช้เสมอ)

4.1. ตรวจสอบลำดับ
    - ปฏิบัติตามขั้นตอนใน /validate-goal
    - CHECK ว่าลำดับสอดคล้องกับ relation ที่กำหนด
    - CHECK ว่าไม่มีรายการที่ผิดลำดับ

4.2. ตรวจสอบความสัมพันธ์
    - CHECK ว่า relation เป็น order relation
    - CHECK ว่า relation ใช้งานได้จริง
    - CHECK ว่า relation สอดคล้องกับวัตถุประสงค์

---

## 5. การ VERIFY (ใช้เสมอ)

5.1. ตรวจสอบความชัดเจน
    - ปฏิบัติตามขั้นตอนใน /verify-rules
    - CHECK ว่าลำดับอ่านง่าย
    - CHECK ว่าสามารถค้นหารายการได้ง่าย

5.2. ตรวจสอบความเหมาะสม
    - ASK ผู้ใช้ว่าลำดับเข้าใจง่ายไหม
    - CHECK ว่าลำดับสนับสนุนการทำงาน
    - CHECK ว่าลำดับสอดคล้องกับ best practices

---

## 6. หมายเหตุ (ใช้เมื่อมีข้อยกเว้น)

| เงื่อนไข | การกระทำ |
|---|---|
| รายการมีความสัมพันธ์ซับซ้อน | ใช้ topological sort หรือ dependency resolution |
| รายการมีจำนวนมาก | ใช้ grouping ก่อน แล้วค่อย ordering ภายในกลุ่ม |
| relation ขัดแย้งกัน | ใช้ primary relation และ secondary relation |
| ไม่มีลำดับที่ชัดเจน | ใช้ alphabetical order เป็น default |
