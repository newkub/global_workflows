---
title: Follow Solid TanStack
description: พัฒนา @tanstack/solid-start app ด้วย oRPC, Query/Store/Form, Vite และ Biome
auto_execution_mode: 3
related_workflows:
  - /follow-solidjs
  - /follow-solid-start-architecture
  - /follow-tsconfig-json
  - /follow-vite
  - /follow-vitest
  - /follow-biome
  - /follow-unocss
  - /follow-zod
  - /follow-orpc
---

## Goal

พัฒนา application ด้วย `@tanstack/solid-start` meta-framework พร้อม file-based routing, SSR/CSR, oRPC API layer, TanStack Query/Store/Form และ Vite (Rolldown)

## Scope

ใช้สำหรับ projects ที่ใช้ `@tanstack/solid-start` (ไม่ใช่ `@solidjs/start`)

## Execute

### 1. Setup Project

1. ติดตั้ง dependencies: `bun add @tanstack/solid-start @tanstack/solid-router @tanstack/solid-query @tanstack/solid-store solid-js`
2. ถ้า project มี forms ติดตั้ง `@tanstack/solid-form`
3. ถ้า project มี AI features ติดตั้ง `@tanstack/ai` และ `@tanstack/ai-openai`
4. ติดตั้ง dev dependencies: `bun add -d vite vite-plugin-solid @tanstack/router-plugin typescript`
5. ถ้าใช้ Vite (Rolldown) ตั้งค่า `"vite": "npm:rolldown-vite@latest"` ใน `package.json`
6. ตั้งค่า `package.json` scripts: `dev` → `vite`, `build` → `vite build`, `typecheck` → `tsgo --noEmit`, `test` → `vitest`

### 2. Configure Vite And TypeScript

1. สร้าง `vite.config.ts` พร้อม `tanstackStart()` จาก `@tanstack/solid-start/plugin/vite`, `viteSolid({ ssr: true })`, `UnoCSS()` - **`viteSolid` ต้องอยู่หลัง `tanstackStart()` เสมอ**
2. ตั้งค่า `router.routeFileIgnorePattern` สำหรับไฟล์ที่ไม่ใช่ route
3. ตั้งค่า `resolve.tsconfigPaths: true` สำหรับ path aliases (Vite 8+ built-in, Vite 7 ใช้ `vite-tsconfig-paths`)
4. ตั้งค่า `manualChunks` สำหรับ vendor splitting: `solid-vendor`, `tanstack-router`, `tanstack-query`, แยก major dependencies
5. ตั้งค่า `server.warmup.clientFiles` สำหรับ pre-transform ไฟล์ที่ใช้บ่อย (ทำ `/follow-vite`)
6. เปิดใช้ `experimental.rolldown: true` สำหรับ Rolldown bundler ถ้าใช้ Vite 7+
7. ตั้งค่า `tsconfig.json` ตาม `/follow-tsconfig-json`: `jsx: "preserve"`, `jsxImportSource: "solid-js"`, `moduleResolution: "Bundler"`, `module: "ESNext"`, `target: "ES2022"`, `paths: { "~/*": ["./src/*"] }`, `strict: true`, `skipLibCheck: true`
8. **ห้ามเปิด `verbatimModuleSyntax`** เพราะทำให้ server bundles รั่วเข้า client bundles

### 3. Setup Entry Points And Router

1. สร้าง `src/client.tsx`: import `uno.css`/`theme.css`, ใช้ `hydrateStart()` จาก `@tanstack/solid-start/client`, `StartClient` พร้อม router, `SolidQueryDevtools`, `hydrate()` จาก `solid-js/web`
2. สร้าง `src/server.ts`: import `uno.css`/`theme.css`, ใช้ `createServerEntry` จาก `@tanstack/solid-start/server-entry`
3. สร้าง `src/router.tsx` พร้อม `getRouter()`: ใช้ `createRouter` จาก `@tanstack/solid-router`, ส่ง `routeTree` จาก `./routeTree.gen.ts`, ตั้งค่า `defaultPreload: "intent"`, `scrollRestoration: true`
4. อย่าแก้ไข `routeTree.gen.ts` (auto-generated โดย `@tanstack/router-plugin`) แต่ **commit ไฟล์นี้ใน git** และ **ignore ใน Biome/ESLint formatter**

### 4. Implement Root Route

สร้าง `src/routes/__root.tsx` ด้วย `createRootRoute`

1. ตั้งค่า `head` สำหรับ meta tags, links, favicons
2. ตั้งค่า `beforeLoad` สำหรับ route guards (เช่น `checkRouteAccess`)
3. ตั้งค่า `shellComponent` เป็น HTML wrapper: `<HydrationScript />`, `<HeadContent />`, `<Suspense>`, `<Scripts />`
4. ตั้งค่า `component` เป็น layout: `<QueryClientProvider>`, `<AuthProvider>`, `<Outlet />`, `createMemo` สำหรับ layout conditions, `lazy()` สำหรับ code-splitting

### 5. Implement File-Based Routing

1. ใช้ `export const Route = createFileRoute("/path")({ ... })` สำหรับทุก route
2. ใช้ `$id/` สำหรับ dynamic segments, `_layout.tsx` สำหรับ layout routes, `[...rest].tsx` สำหรับ catch-all
3. ใช้ pathless layout route (เช่น `_authenticated.tsx`) สำหรับ protect subtree ทั้งหมด
4. ใช้ `beforeLoad` สำหรับ auth guards (`requireAuth()`, `requireProviderPermission()`) และ redirects (`throw redirect()`)
5. ใช้ `Route.useParams()`, `useNavigate()`, `useLocation()`, `<Outlet />`
6. ตั้งค่า `head` ในแต่ละ route สำหรับ SEO meta tags รองรับ dynamic ผ่าน `loader` data
7. เปิดใช้ `autoCodeSplitting` ใน router plugin สำหรับ automatic route code-splitting

### 6. Implement API Routes

1. ใช้ `createFileRoute` พร้อม `server.handlers` สำหรับ API endpoints: ตั้งค่า `POST`/`GET`/`PUT`/`PATCH`/`DELETE`, แต่ละ handler รับ `{ request }` และ return `Response`
2. สร้าง `src/routes/api/rpc/[...rest].tsx` สำหรับ oRPC catch-all: ใช้ `RPCHandler`, ตั้งค่า interceptors, resolve auth context, export ทุก HTTP methods
3. สำหรับ webhooks ใช้ `createFileRoute` พร้อม `server.handlers.POST`

### 7. Setup oRPC API Layer

1. ติดตั้ง `bun add @orpc/server @orpc/client @orpc/tanstack-query`
2. สร้าง `src/server/index.ts` เป็น root router ด้วย `os.router()`, รวม sub-routers, export `type Router`
3. สร้าง sub-routers ใน `src/server/<domain>/index.ts`
4. สร้าง procedures ใน `src/server/<domain>/<feature>.ts`: ใช้ `authOS.input(zodSchema).handler()`, `requireAuth`/`requireProviderOwnership` สำหรับ guards
5. ตั้งค่า `src/server/lib/`: `auth/` (context, guards, `authOS`), `middleware.ts`, `rpc-types.ts`, `schemas.ts`, `security-headers.ts`
6. สร้าง `src/lib/orpc-client.ts`: ใช้ `RPCLink` จาก `@orpc/client/fetch` กับ `createIsomorphicFn` - client ใช้ `window.location.origin`, server ใช้ `getRequestHeaders()`
7. สร้าง `src/lib/orpc-query.ts`: ใช้ `createTanstackQueryUtils` จาก `@orpc/tanstack-query`, export `orpc` สำหรับ type-safe `.queryOptions()`/`.mutationOptions()`
8. ใช้ `isDefinedError` จาก `@orpc/client` สำหรับ type-safe error handling
9. ใช้ `experimental_defaults` สำหรับ default query/mutation options เช่น `staleTime`, `retry`, `onSuccess` invalidate

### 8. Setup TanStack Query, Store, And Form

1. สร้าง `src/lib/query-client.ts` พร้อม `QueryClient` (ตั้งค่า `staleTime`, `gcTime`, `retry`), ใช้ `<QueryClientProvider>` ใน root layout
2. ใช้ `useQuery(() => orpc.<path>.queryOptions({ input: { ... } }))` ด้วย **function arguments** สำหรับ reactive tracking
3. **ห้าม destructure** query return value - access ใน JSX reactive context ผ่าน `<Switch>`/`<Match>`
4. ใช้ `orpc.<path>.queryOptions()` สำหรับ type-safe queries, `.mutationOptions()` สำหรับ mutations, `.streamedOptions()` สำหรับ Event Iterator
5. ใช้ `isDefinedError(error)` สำหรับ type-safe error handling ใน `onError` callbacks
6. สร้าง stores ใน `src/modules/<feature>/stores/`, re-export จาก `src/stores/index.ts`, ใช้ `use<Name>Store()` hooks
7. ถ้า project มี forms ใช้ `@tanstack/solid-form` พร้อม `asFormValidator(schema)` สำหรับ Zod v4 bridge, สร้าง form types ใน `src/lib/form-types.ts`

### 9. Configure Biome And Testing

1. ทำ `/follow-biome` สำหรับ linting และ formatting Solid/TypeScript
2. เพิ่ม `routeTree.gen.ts` ใน Biome `ignore` patterns
3. ทำ `/follow-vitest` สำหรับ testing setup - Vitest ใช้ Vite config โดยตรง
4. ใช้ `@solidjs/testing-library` สำหรับ component testing
5. ใช้ `vi.mock` สำหรับ mock oRPC client ใน tests
6. รัน `vitest run --coverage` สำหรับ coverage report

### 10. Organize Module Structure

1. Feature modules ใน `src/modules/<feature>/`: `components/`, `stores/`, `schemas.ts`, `index.ts`
2. Server modules ใน `src/server/<domain>/`: `index.ts` (sub-router), `<feature>.ts` (procedures), `__tests__/`
3. Shared utilities ใน `src/lib/`: `format.ts`, `orpc-client.ts`, `query-client.ts`, `index.ts`
4. Routes ใน `src/routes/` ตาม file-based routing

## File Structure

```
src/
├── client.tsx              # hydrateStart + StartClient
├── server.ts               # createServerEntry
├── router.tsx              # createRouter + routeTree.gen
├── routes/                 # File-based routes
│   ├── __root.tsx          # Root route
│   ├── provider/$id/       # Dynamic params + _layout
│   └── api/rpc/[...rest]   # oRPC catch-all
├── server/                 # oRPC routers + lib/
├── modules/<feature>/      # Components + stores + schemas
├── stores/                 # Re-exports from modules
└── lib/                    # orpc-client, query-client, format
```

## Rules

### 1. Framework Selection

- ใช้ `@tanstack/solid-start` ไม่ใช่ `@solidjs/start`
- ใช้ `tanstackStart()` plugin, `createFileRoute`, `hydrateStart`, `StartClient`, `createServerEntry`
- อย่าแก้ไข `routeTree.gen.ts` (auto-generated โดย `@tanstack/router-plugin`)

### 2. Routing Constraints

- ใช้ `createFileRoute("/path")` สำหรับทุก route เสมอ
- ใช้ `beforeLoad` สำหรับ guards และ `throw redirect()` สำหรับ redirects
- ใช้ `head` ในแต่ละ route สำหรับ per-route SEO meta tags
- ใช้ `$id/` สำหรับ dynamic segments, `_layout.tsx` สำหรับ layouts, `[...rest].tsx` สำหรับ catch-all

### 3. API Layer Constraints

- ใช้ `@orpc/server/fetch` สำหรับ `RPCHandler`, `@orpc/client/fetch` สำหรับ `RPCLink`
- ใช้ `@orpc/tanstack-query` สำหรับ `createTanstackQueryUtils` แทนการสร้าง custom query utils
- ใช้ `authOS` (ไม่ใช่ `os` ตรง) สำหรับ procedures ที่ต้องการ auth
- ใช้ Zod สำหรับ input validation เสมอ (ทำ `/follow-zod`)
- ใช้ `isDefinedError` จาก `@orpc/client` สำหรับ type-safe error handling
- ใช้ `createIsomorphicFn` สำหรับ environment-specific RPCLink config (client vs server headers)
- ใช้ `server.handlers` พร้อม `ANY` หรือ `POST`/`GET`/`PUT`/`PATCH`/`DELETE` สำหรับ API endpoints

### 4. State Management Constraints

- ไม่ใช้ Redux, Zustand, หรือ state libraries อื่น
- ใช้ `@tanstack/solid-store` สำหรับ global state, `@tanstack/solid-query` สำหรับ server state
- ใช้ `orpc.<path>.queryOptions()` สำหรับ type-safe oRPC queries ผ่าน `@orpc/tanstack-query`
- ใช้ `experimental_defaults` สำหรับ default query/mutation options
- สร้าง stores ใน `src/modules/<feature>/stores/`, re-export จาก `src/stores/`

### 5. Auth Constraints

- ใช้ `resolveAuthContext(request)` ใน API handlers
- ใช้ `requireAuth`/`requireProviderOwnership`/`requirePermission` ใน procedures
- ใช้ `beforeLoad` ใน routes สำหรับ client-side guards
- ใช้ `AuthProvider` ใน root layout

### 6. Performance And Import Protection

- ใช้ `lazy()` พร้อม `<Suspense>` สำหรับ heavy components
- ใช้ `manualChunks` ใน Vite config สำหรับ vendor splitting
- ใช้ `defaultPreload: "intent"` และ `scrollRestoration: true` ใน router config
- เปิด `autoCodeSplitting` ใน router plugin สำหรับ automatic code-splitting
- ใช้ `server.warmup.clientFiles` สำหรับ pre-transform ไฟล์ที่ใช้บ่อย
- หลีกเลี่ยง barrel files - import จากไฟล์ตรงๆ ตาม `/follow-vite`
- ใช้ `.server.ts`/`.client.ts` naming convention สำหรับ environment-specific files (import protection เปิดโดย default)
- ใช้ `import type` สำหรับ type-only imports ข้าม environment boundaries (ถูก ignore โดย import protection)
- แยก type และ value imports ถ้ามีเฉพาะ type ที่ปลอดภัยข้าม boundary

### 7. TypeScript Constraints

- ใช้ `jsx: "preserve"` ไม่ใช่ `"react-jsx"` สำหรับ Solid.js
- **ห้ามเปิด `verbatimModuleSyntax`** เพราะทำให้ server bundles รั่วเข้า client
- ใช้ `moduleResolution: "Bundler"` และ `module: "ESNext"`
- ตั้งค่า `paths` ใน `tsconfig.json` และ `resolve.tsconfigPaths: true` ใน Vite
- ทำ `/follow-tsconfig-json` สำหรับ TypeScript config มาตรฐาน

### 8. Biome And Testing Constraints

- ทำ `/follow-biome` สำหรับ linting และ formatting
- เพิ่ม `routeTree.gen.ts` ใน Biome `ignore` patterns
- ทำ `/follow-vitest` สำหรับ testing setup
- ใช้ `@solidjs/testing-library` สำหรับ component testing
- ใช้ function arguments ใน `useQuery(() => ({ ... }))` สำหรับ reactive tracking
- ห้าม destructure query return value - access ใน JSX reactive context

### 9. Related Workflows

- ทำ `/follow-solidjs` สำหรับ component patterns
- ทำ `/follow-solid-start-architecture` สำหรับ architecture reference
- ทำ `/follow-tsconfig-json` สำหรับ TypeScript configuration
- ทำ `/follow-vite` สำหรับ Vite configuration และ performance
- ทำ `/follow-vitest` สำหรับ testing setup
- ทำ `/follow-biome` สำหรับ linting และ formatting
- ทำ `/follow-unocss` สำหรับ styling
- ทำ `/follow-zod` สำหรับ validation schemas

## Expected Outcome

- `@tanstack/solid-start` project ตั้งค่าครบถ้วน
- `tsconfig.json` ถูกต้องสำหรับ Solid (`jsx: "preserve"`, ไม่มี `verbatimModuleSyntax`)
- Vite config ถูกต้อง (`viteSolid` หลัง `tanstackStart()`, Rolldown, warmup)
- File-based routing ทำงานด้วย `createFileRoute` และ `autoCodeSplitting`
- SSR และ CSR modes ทำงานได้
- oRPC API layer type-safe ครบถ้วน
- TanStack Query/Store/Form ทำงานได้ด้วย reactive patterns
- Auth guards ทำงานทั้ง client และ server side
- Biome ตั้งค่าครบ พร้อม `routeTree.gen.ts` ignore
- Vitest ทำงานด้วย `@solidjs/testing-library`
- Module structure เป็นระเบียบตาม feature-based architecture
