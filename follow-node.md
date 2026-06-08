
1. ทำตาม package.json

```json
{
  "type": "module",
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "watch": "bun --watch src/index.ts",
    "dev": "bun run src/index.ts",
    "build": "tsdown", 
    "lint": "tsc --noEmit && oxlint --fix --type-aware",
    "test": "vitest"
  }
}
```
