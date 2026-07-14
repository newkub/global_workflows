---
trigger: always_on
description: แนวทางการพัฒนาโปรเจกต์ Python ด้วย best practices
instruction:
  - ใช้ Python 3.11+ พร้อม type hints
  - ใช้ ruff สำหรับ lint/format, pyright สำหรับ type checking
  - ใช้ pyproject.toml เป็น single source of truth
  - จัดโครงสร้างตาม Clean Architecture
title: Follow Python
auto_execution_mode: 3
---

## 1. Installation (ใช้เสมอ)

1.1. ติดตั้ง Python 3.11+
1.2. ติดตั้ง uv สำหรับ dependency management
1.3. ติดตั้ง development tools

```bash
pip install uv ruff pyright pytest
```

---

## 2. Configuration (ใช้เสมอ)

2.1. สร้าง `pyproject.toml` ใน root ของ project
2.2. ตั้งค่า Python version และ project metadata
2.3. ตั้งค่า ruff สำหรับ linting และ formatting
2.4. ตั้งค่า pyright สำหรับ type checking

```toml [pyproject.toml]
[project]
name = "my-python-app"
requires-python = ">=3.11"

[tool.ruff]
line-length = 100

[tool.pyright]
typeCheckingMode = "strict"
```

---

## 3. Project Structure (ใช้เสมอ)

3.1. สร้างโครงสร้างตาม Clean Architecture
3.2. แยก concerns ตาม layers (app, domain, infra, types, utils)

```plaintext
my-python-app/
├── pyproject.toml
├── src/
│   └── my_python_app/
│       ├── app/              # Orchestration (entry/use-cases)
│       ├── domain/           # Pure-ish business rules (types, logic)
│       ├── infra/            # I/O adapters (db/http/fs)
│       ├── types/            # Shared types/schemas
│       ├── utils/            # Pure helpers
│       └── __init__.py
└── tests/
```

---

## 4. Core Principles (ใช้เสมอ)

4.1. `Type Annotations` : เขียน function -> ใช้ `from __future__ import annotations` และ type hints ทุก function

4.2. `Type Safety` : กำหนด types -> หลีกเลี่ยง `Any` และใช้ type hints อย่างชัดเจน

4.3. `Performance` : เขียน code ที่มี performance สูง -> ใช้ `pathlib`, comprehensions, และแยก hot paths

4.4. `Workflow` : development workflow -> รัน `ruff → pyright → pytest`

4.5. `Rust Integration` : logic หนัก -> ใช้ **pyo3**, **maturin** ย้าย logic ไป Rust

---

## 5. Folder Rules (ใช้เสมอ)

5.1. `domain/` : เขียน business rules -> เก็บ business rules ที่พึ่งพา I/O ให้น้อยที่สุด

5.2. `domain/` : import dependencies -> ห้าม import จาก `infra/`

5.3. `infra/` : เขียน I/O adapters -> แยก adapter ตามชนิด I/O (http/db/fs)

5.4. `infra/` : business logic -> ห้ามปะปน business logic หนักๆ

5.5. `app/` : เขียน orchestration -> orchestration/use-cases, validate input, จัดการ error

5.6. `app/` : I/O operations -> ห้ามทำงาน I/O โดยตรง (ให้เรียกผ่าน `infra/`)

---

## 6. Code Examples (ใช้เมื่อจำเป็น)

6.1. `domain/` : dataclass สำหรับ domain models

```py [src/my_python_app/domain/user.py]
from dataclasses import dataclass


@dataclass(frozen=True)
class User:
    id: str
    email: str


def is_corporate(user: User) -> bool:
    return user.email.endswith("@company.com")
```

6.2. `infra/` : dataclass สำหรับ I/O responses

```py [src/my_python_app/infra/http.py]
from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class HttpResponse:
    status: int
    body: str


def fetch_health() -> HttpResponse:
    return HttpResponse(status=200, body="ok")
```

6.3. `app/` : orchestration/use-cases

```py [src/my_python_app/app/health.py]
from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class HealthResult:
    ok: bool


def check_health(body: str) -> HealthResult:
    return HealthResult(ok=(body == "ok"))
```

---

## 7. Import Rules (ใช้เสมอ)

7.1. `app` : import dependencies -> import จาก domain, infra, types

7.2. `domain` : import dependencies -> import จาก types, utils

7.3. `infra` : import dependencies -> import จาก types, utils

7.4. `types` : import dependencies -> ไม่มี internal dependencies

7.5. `utils` : import dependencies -> ไม่มี internal dependencies

```plaintext
app     <-- domain, infra, types
domain  <-- types, utils
infra   <-- types, utils
types   <-- (no internal dependencies)
utils   <-- (no internal dependencies)
```

---

## 8. Libraries (ใช้เสมอ)

8.1. `Runtime` : Python version -> ใช้ Python 3.11+

8.2. `Lint / Format` : code quality -> ใช้ ruff

8.3. `Type Safety` : type checking -> ใช้ pyright

8.4. `Data / Schema` : data structures -> ใช้ dataclass, pydantic v2

8.5. `Dependency / Tooling` : package management -> ใช้ uv, pyproject.toml เป็น single source of truth

8.6. `Testing` : test framework -> ใช้ pytest

