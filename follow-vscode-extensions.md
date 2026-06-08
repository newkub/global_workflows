---
trigger: always_on
---

1. เพิ่ม bun add -d reactive-vscode

2. structure

``` md
packages/
    .vscode/
    src/
    test/
    .gitignore
    .vscodeignore
    README.md
    package.json
    tsconfig.json
```

3. package.json

เพิ่ม package, publish

```json [package.json]
{
    "scripts": {
       "package" : "vsce package",
       "publish" : "vsce publish"
    }
}
```

4. follow

- /follow-bun
- /follow-nuxt (ถ้าต้องใช้)
