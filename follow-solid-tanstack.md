---
title: Follow Solid TanStack
description: พัฒนา SolidStart + TanStack Start app ด้วย @tanstack/solid-start, oRPC, Query/Store/Form และ Vite
auto_execution_mode: 3
related_workflows:
  - /follow-solidjs
  - /follow-solid-start-architecture
  - /follow-unocss
  - /follow-vite
  - /follow-zod
  - /follow-vitest
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

1. สร้าง `vite.config.ts` พร้อม `tanstackStart()` จาก `@tanstack/solid-start/plugin/vite`, `viteSolid({ ssr: true })`, `UnoCSS()`
2. ตั้งค่า `router.routeFileIgnorePattern` สำหรับไฟล์ที่ไม่ใช่ route
3. ตั้งค่า `resolve.tsconfigPaths: true` สำหรับ path aliases
4. ตั้งค่า `manualChunks` สำหรับ vendor splitting: `solid-vendor`, `tanstack-router`, `tanstack-query`, แยก major dependencies
5. ตั้งค่า `tsconfig.json`: `jsx: "react-jsx"`, `jsxImportSource: "solid-js"`, `moduleResolution: "bundler"`, `paths: { "~/*": ["./src/*"] }`, `strict: true`

### 3. Setup Entry Points And Router

1. สร้าง `src/client.tsx`: import `uno.css`/`theme.css`, ใช้ `hydrateStart()` จาก `@tanstack/solid-start/client`, `StartClient` พร้อม router, `SolidQueryDevtools`, `hydrate()` จาก `solid-js/web`
2. สร้าง `src/server.ts`: import `uno.css`/`theme.css`, ใช้ `createServerEntry` จาก `@tanstack/solid-start/server-entry`
3. สร้าง `src/router.tsx` พร้อม `getRouter()`: ใช้ `createRouter` จาก `@tanstack/solid-router`, ส่ง `routeTree` จาก `./routeTree.gen.ts`, ตั้งค่า `defaultPreload: "intent"`, `scrollRestoration: true`
4. อย่าแก้ไข `routeTree.gen.ts` (auto-generated โดย `@tanstack/router-plugin`)

### 4. Implement Root Route

สร้าง `src/routes/__root.tsx` ด้วย `createRootRoute`

1. ตั้งค่า `head` สำหรับ meta tags, links, favicons
2. ตั้งค่า `beforeLoad` สำหรับ route guards (เช่น `checkRouteAccess`)
3. ตั้งค่า `shellComponent` เป็น HTML wrapper: `<HydrationScript />`, `<HeadContent />`, `<Suspense>`, `<Scripts />`
4. ตั้งค่า `component` เป็น layout: `<QueryClientProvider>`, `<AuthProvider>`, `<Outlet />`, `createMemo` สำหรับ layout conditions, `lazy()` สำหรับ code-splitting

### 5. Implement File-Based Routing

1. ใช้ `export const Route = createFileRoute("/path")({ ... })` สำหรับทุก route
2. ใช้ `$id/` สำหรับ dynamic segments, `_layout.tsx` สำหรับ layout routes, `[...rest].tsx` สำหรับ catch-all
3. ใช้ `beforeLoad` สำหรับ auth guards (`requireAuth()`, `requireProviderPermission()`) และ redirects (`throw redirect()`)
4. ใช้ `Route.useParams()`, `useNavigate()`, `useLocation()`, `<Outlet />`
5. ตั้งค่า `head` ในแต่ละ route สำหรับ SEO meta tags

### 6. Implement API Routes

1. ใช้ `createFileRoute` พร้อม `server.handlers` สำหรับ API endpoints: ตั้งค่า `POST`/`GET`/`PUT`/`PATCH`/`DELETE`, แต่ละ handler รับ `{ request }` และ return `Response`
2. สร้าง `src/routes/api/rpc/[...rest].tsx` สำหรับ oRPC catch-all: ใช้ `RPCHandler`, ตั้งค่า interceptors, resolve auth context, export ทุก HTTP methods
3. สำหรับ webhooks ใช้ `createFileRoute` พร้อม `server.handlers.POST`

### 7. Setup oRPC API Layer

1. สร้าง `src/server/index.ts` เป็น root router ด้วย `os.router()`, รวม sub-routers, export `type Router`
2. สร้าง sub-routers ใน `src/server/<domain>/index.ts`
3. สร้าง procedures ใน `src/server/<domain>/<feature>.ts`: ใช้ `authOS.input(zodSchema).handler()`, `requireAuth`/`requireProviderOwnership` สำหรับ guards, `tryHandler`/`safeResult` สำหรับ error handling
4. ตั้งค่า `src/server/lib/`: `auth/` (context, guards, `authOS`), `middleware.ts`, `rpc-types.ts`, `schemas.ts`, `try-handler.ts`, `security-headers.ts`
5. สร้าง `src/lib/orpc-client.ts`: `createORPCClient` กับ `RPCLink`, headers จาก `getRequestEvent()`, export `orpc` และ `orpcQuery`

### 8. Setup TanStack Query, Store, And Form

1. สร้าง `src/lib/query-client.ts` พร้อม `QueryClient` (ตั้งค่า `staleTime`, `gcTime`, `retry`), ใช้ `<QueryClientProvider>` ใน root layout
2. ใช้ `orpcQuery` สำหรับ type-safe queries, `selectData<T>()`/`selectList<T>()` สำหรับ safe data extraction
3. สร้าง stores ใน `src/modules/<feature>/stores/`, re-export จาก `src/stores/index.ts`, ใช้ `use<Name>Store()` hooks
4. ถ้า project มี forms ใช้ `@tanstack/solid-form` พร้อม `asFormValidator(schema)` สำหรับ Zod v4 bridge, สร้าง form types ใน `src/lib/form-types.ts`

### 9. Organize Module Structure

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

- ใช้ `authOS` (ไม่ใช่ `os` ตรง) สำหรับ procedures ที่ต้องการ auth
- ใช้ Zod สำหรับ input validation เสมอ
- ใช้ `tryHandler`/`safeResult` สำหรับ error handling
- ใช้ `resolveAuthContext` ใน API route handler, `securityHeadersInterceptor` ใน RPCHandler
- ใช้ `server.handlers` พร้อม `POST`/`GET`/`PUT`/`PATCH`/`DELETE` สำหรับ API endpoints

### 4. State Management Constraints

- ไม่ใช้ Redux, Zustand, หรือ state libraries อื่น
- ใช้ `@tanstack/solid-store` สำหรับ global state, `@tanstack/solid-query` สำหรับ server state
- ใช้ `selectData`/`selectList` สำหรับ safe data extraction จาก queries
- สร้าง stores ใน `src/modules/<feature>/stores/`, re-export จาก `src/stores/`

### 5. Auth Constraints

- ใช้ `resolveAuthContext(request)` ใน API handlers
- ใช้ `requireAuth`/`requireProviderOwnership`/`requirePermission` ใน procedures
- ใช้ `beforeLoad` ใน routes สำหรับ client-side guards
- ใช้ `AuthProvider` ใน root layout

### 6. Performance Constraints

- ใช้ `lazy()` พร้อม `<Suspense>` สำหรับ heavy components
- ใช้ `manualChunks` ใน Vite config สำหรับ vendor splitting
- ใช้ `defaultPreload: "intent"` และ `scrollRestoration: true` ใน router config

### 7. Related Workflows

- ทำ `/follow-solidjs` สำหรับ component patterns
- ทำ `/follow-solid-start-architecture` สำหรับ architecture reference
- ทำ `/follow-unocss` สำหรับ styling
- ทำ `/follow-vite` สำหรับ Vite configuration
- ทำ `/follow-zod` สำหรับ validation schemas
- ทำ `/follow-vitest` สำหรับ testing

## Expected Outcome

- `@tanstack/solid-start` project ตั้งค่าครบถ้วน
- File-based routing ทำงานด้วย `createFileRoute`
- SSR และ CSR modes ทำงานได้
- oRPC API layer type-safe ครบถ้วน
- TanStack Query/Store/Form ทำงานได้
- Auth guards ทำงานทั้ง client และ server side
- Module structure เป็นระเบียบตาม feature-based architecture
