---
title: Follow VueUse
description: แนวทางการใช้งาน VueUse composables สำหรับ Vue 3 applications
auto_execution_mode: 3
---

## Goal

กำหนดแนวทางการใช้งาน VueUse composables สำหรับ Vue 3 applications ให้มีประสิทธิภาพและเป็นมาตรฐานเดียวกัน

## Execute

### 1. Setup VueUse

1. ติดตั้ง VueUse dependency ด้วย `bun add @vueuse/core @vueuse/nuxt`
2. ตั้งค่า Nuxt module ใน `nuxt.config.ts`
3. ใช้ auto-imports สำหรับ VueUse composables
4. กำหนด imports ที่ต้องการใช้บ่อยใน config

### 2. VueUse Composables by Category (200+ functions)

**@vueuse/core & @vueuse/shared - Core Package (~140+ functions)**

#### State (12 functions)
- `createGlobalState` - สร้าง global state ที่แชร์ได้
- `createInjectionState` - สร้าง injection state
- `createSharedComposable` - แชร์ composable instance
- `injectLocal/provideLocal` - Local inject/provide
- `useAsyncState` - จัดการ async state
- `useLastChanged` - Track last changed value
- `useLocalStorage` - LocalStorage reactive
- `useSessionStorage` - SessionStorage reactive
- `useStorage` - Universal storage (local/session)
- `useStorageAsync` - Async storage operations
- `useRefHistory/useManualRefHistory` - Track ref changes
- `useDebouncedRefHistory/useThrottledRefHistory` - Debounced/throttled history

#### Elements (16 functions)
- `useActiveElement` - Track active element
- `useDocumentVisibility` - Track document visibility
- `useDraggable` - ทำ element draggable
- `useDropZone` - สร้าง drop zone
- `useElementBounding` - ขนาด element bounding
- `useElementSize` - ขนาด element
- `useElementVisibility` - ตรวจสอบ element visibility
- `useIntersectionObserver` - Intersection observer
- `useMouseInElement` - Mouse position in element
- `useMutationObserver` - Mutation observer
- `useParentElement` - หา parent element
- `useResizeObserver` - Resize observer
- `useWindowFocus` - Track window focus
- `useWindowScroll` - Track window scroll
- `useWindowSize` - ขนาด window

#### Browser (28 functions)
- `useBluetooth` - Web Bluetooth API
- `useBreakpoints` - Responsive breakpoints
- `useBroadcastChannel` - BroadcastChannel API
- `useBrowserLocation` - Browser location
- `useClipboard/useClipboardItems` - Clipboard API
- `useColorMode` - Color mode (light/dark)
- `useCssSupports` - CSS.supports check
- `useCssVar` - CSS variables
- `useDark` - Dark mode toggle
- `useEventListener` - Event listener management
- `useEyeDropper` - EyeDropper API
- `useFavicon` - Favicon management
- `useFileDialog` - File dialog
- `useFileSystemAccess` - File System Access API
- `useFullscreen` - Fullscreen API
- `useGamepad` - Gamepad API
- `useImage` - Image loading
- `useMediaControls` - Media controls
- `useMediaQuery` - Media queries
- `useMemory` - Memory monitoring
- `useObjectUrl` - Object URL
- `usePerformanceObserver` - Performance observer
- `usePermission` - Permissions API
- `usePreferredColorScheme` - Preferred color scheme
- `usePreferredContrast` - Preferred contrast
- `usePreferredDark` - Preferred dark mode
- `usePreferredLanguages` - Preferred languages
- `usePreferredReducedMotion` - Reduced motion preference
- `usePreferredReducedTransparency` - Reduced transparency
- `useScreenOrientation` - Screen orientation
- `useScreenSafeArea` - Safe area insets
- `useScriptTag` - Dynamic script loading

#### Sensors (24 functions)
- `onClickOutside` - Click outside handler
- `onElementRemoval` - Element removal handler
- `onKeyStroke` - Keyboard events
- `onLongPress` - Long press gesture
- `onStartTyping` - Start typing detection
- `useBattery` - Battery status
- `useDeviceMotion` - Device motion
- `useDeviceOrientation` - Device orientation
- `useDevicePixelRatio` - Device pixel ratio
- `useDevicesList` - Media devices list
- `useDisplayMedia` - Display media
- `useElementByPoint` - Element by point
- `useElementHover` - Element hover state
- `useFocus` - Focus management
- `useFocusWithin` - Focus within element
- `useFps` - FPS counter
- `useGeolocation` - Geolocation API
- `useIdle` - Idle detection
- `useInfiniteScroll` - Infinite scroll
- `useKeyModifier` - Key modifiers (ctrl, alt, shift)
- `useMagicKeys` - Keyboard shortcuts
- `useMouse` - Mouse position
- `useMousePressed` - Mouse pressed state
- `useNavigatorLanguage` - Navigator language
- `useNetwork` - Network status
- `useOnline` - Online status
- `usePageLeave` - Page leave detection
- `useParallax` - Parallax effect
- `usePointer` - Pointer events
- `usePointerLock` - Pointer lock
- `usePointerSwipe` - Pointer swipe
- `useScroll` - Scroll position
- `useScrollLock` - Scroll lock
- `useSpeechRecognition` - Speech recognition
- `useSpeechSynthesis` - Speech synthesis
- `useSwipe` - Swipe gestures
- `useTextSelection` - Text selection
- `useUserMedia` - User media (camera/mic)

#### Network (3 functions)
- `useEventSource` - Server-Sent Events
- `useFetch` - Fetch API wrapper
- `useWebSocket` - WebSocket

#### Animation (9 functions)
- `useAnimate` - Web Animations API
- `useInterval/useIntervalFn` - Interval management
- `useNow` - Current time
- `useRafFn` - RequestAnimationFrame
- `useTimeout/useTimeoutFn` - Timeout management
- `useTimestamp` - Timestamp
- `useTransition` - Transitions/animations

#### Component (13 functions)
- `computedInject` - Computed inject
- `createReusableTemplate` - Reusable templates
- `createTemplatePromise` - Template promises
- `templateRef` - Template ref
- `tryOnBeforeMount/tryOnMounted` - Safe lifecycle hooks
- `tryOnBeforeUnmount/tryOnUnmounted` - Safe cleanup hooks
- `tryOnScopeDispose` - Scope dispose
- `unrefElement` - Unref element
- `useCurrentElement` - Current element
- `useMounted` - Mounted state
- `useTemplateRefsList` - Template refs list (v-for)
- `useVirtualList` - Virtual scrolling
- `useVModel/useVModels` - v-model helpers

#### Watch (12 functions)
- `until` - Wait until condition
- `watchArray` - Watch array changes
- `watchAtMost` - Watch at most N times
- `watchDebounced` - Debounced watch
- `watchDeep` - Deep watch
- `watchIgnorable` - Ignorable watch
- `watchImmediate` - Immediate watch
- `watchOnce` - Watch once
- `watchPausable` - Pausable watch
- `watchThrottled` - Throttled watch
- `watchTriggerable` - Triggerable watch
- `watchWithFilter` - Watch with filter
- `whenever` - Watch when condition

#### Reactivity (21 functions)
- `computedAsync` - Async computed
- `computedEager` - Eager computed
- `computedWithControl` - Controlled computed
- `createRef` - Create ref variants
- `extendRef` - Extend ref
- `reactify/reactifyObject` - Make functions reactive
- `reactiveComputed` - Reactive computed
- `reactiveOmit/reactivePick` - Reactive omit/pick
- `refAutoReset` - Auto-reset ref
- `refDebounced` - Debounced ref
- `refDefault` - Ref with default
- `refManualReset` - Manual reset ref
- `refThrottled` - Throttled ref
- `refWithControl` - Controlled ref
- `syncRef/syncRefs` - Sync refs
- `toReactive` - Convert to reactive
- `toRef/toRefs` - Convert to ref(s)

#### Array (13 functions)
- `useArrayDifference` - Array difference
- `useArrayEvery` - Array every
- `useArrayFilter` - Array filter
- `useArrayFind` - Array find
- `useArrayFindIndex` - Array findIndex
- `useArrayFindLast` - Array findLast
- `useArrayIncludes` - Array includes
- `useArrayJoin` - Array join
- `useArrayMap` - Array map
- `useArrayReduce` - Array reduce
- `useArraySome` - Array some
- `useArrayUnique` - Array unique
- `useSorted` - Sort array

#### Time (4 functions)
- `useCountdown` - Countdown timer
- `useDateFormat` - Date formatting
- `useTimeAgo` - Time ago
- `useTimeAgoIntl` - Intl time ago

#### Utilities (24 functions)
- `createDisposableDirective` - Disposable directive
- `createEventHook` - Event hook
- `createUnrefFn` - Unref function
- `get/set` - Get/set ref value
- `isDefined` - Check defined
- `makeDestructurable` - Make destructurable
- `useAsyncQueue` - Async queue
- `useBase64` - Base64 encoding
- `useCached` - Cached value
- `useCloned` - Clone value
- `useConfirmDialog` - Confirm dialog
- `useCounter` - Counter
- `useCycleList` - Cycle list
- `useDebounceFn` - Debounced function
- `useEventBus` - Event bus
- `useMemoize` - Memoization
- `useOffsetPagination` - Offset pagination
- `usePrevious` - Previous value
- `useStepper` - Stepper
- `useSupported` - Feature detection
- `useThrottleFn` - Throttled function
- `useTimeoutPoll` - Timeout poll
- `useToggle` - Toggle boolean
- `useToNumber` - Convert to number
- `useToString` - Convert to string

**@vueuse/integrations - Third-party Integrations (12 functions)**
- `useAsyncValidator` - async-validator integration
- `useAxios` - Axios integration
- `useChangeCase` - change-case integration
- `useCookies` - universal-cookie integration
- `useDrauu` - Drauu (drawing) integration
- `useFocusTrap` - focus-trap integration
- `useFuse` - Fuse.js (fuzzy search) integration
- `useIDBKeyval` - idb-keyval (IndexedDB) integration
- `useJwt` - jwt-decode integration
- `useNProgress` - NProgress integration
- `useQRCode` - QR code generation
- `useSortable` - SortableJS integration

**@vueuse/router - Vue Router (3 functions)**
- `useRouteHash` - Route hash
- `useRouteParams` - Route params
- `useRouteQuery` - Route query

**@vueuse/rxjs - RxJS Integration (6 functions)**
- `from` - Convert to observable
- `toObserver` - Convert to observer
- `useExtractedObservable` - Extracted observable
- `useObservable` - Observable to ref
- `useSubject` - Subject as ref
- `useSubscription` - Subscription management
- `watchExtractedObservable` - Watch extracted observable

**@vueuse/firebase - Firebase (3 functions)**
- `useAuth` - Firebase Auth
- `useFirestore` - Firestore
- `useRTDB` - Realtime Database

**@vueuse/electron - Electron (4 functions)**
- `useIpcRenderer` - IPC Renderer
- `useIpcRendererInvoke` - IPC Invoke
- `useIpcRendererOn` - IPC On
- `useZoomFactor/useZoomLevel` - Zoom control

**@vueuse/math - Math (17 functions)**
- `createGenericProjection/createProjection` - Projection
- `logicAnd/logicNot/logicOr` - Logic operations
- `useAbs` - Math.abs
- `useAverage` - Average
- `useCeil` - Math.ceil
- `useClamp` - Clamp value
- `useFloor` - Math.floor
- `useMath` - Math operations
- `useMax` - Math.max
- `useMin` - Math.min
- `usePrecision` - Precision
- `useProjection` - Projection
- `useRound` - Math.round
- `useSum` - Sum
- `useTrunc` - Math.trunc

**@vueuse/motion - Motion (6 functions)**
- `useElementStyle` - Element style
- `useElementTransform` - Element transform
- `useMotion` - Motion animations
- `useMotionProperties` - Motion properties
- `useMotionVariants` - Motion variants
- `useSpring` - Spring animations

**@vueuse/head - Head Management (2 functions)**
- `createHead` - Create head manager
- `useHead` - Manage document head

**@vueuse/sound - Sound (1 function)**
- `useSound` - Sound effects

**@vueuse/schema-org - Schema.org (2 functions)**
- `createSchemaOrg` - Create schema
- `useSchemaOrg` - Schema.org management

### 3. Component Integration

1. ใช้ VueUse composables ใน `<script setup>` components
2. แยก logic ที่ใช้ VueUse ออกเป็น composables ของโปรเจกต์
3. ใช้ TypeScript สำหรับ type inference จาก VueUse
4. ทดสอบ composables ที่ใช้ VueUse ด้วย Vitest

### 4. Custom Composables with VueUse

1. สร้าง composables ที่ extend จาก VueUse
2. ใช้ VueUse เป็น base สำหรับ business logic composables
3. สร้าง wrappers สำหรับ VueUse composables ที่ใช้ซ้ำ

### 5. Performance Optimization

1. ใช้ `shallowRef` ร่วมกับ VueUse เมื่อไม่ต้องการ deep reactivity
2. ใช้ `computed` จาก VueUse getters
3. ลด watchers ที่ไม่จำเป็น
4. ใช้ `useThrottle` และ `useDebounce` สำหรับ event handling

## Rules

### 1. Import Conventions

- ใช้ auto-imports สำหรับ VueUse composables ที่ configured
- ใช้ named imports สำหรับ composables ที่ไม่ได้ configure auto-import
- ไม่ import VueUse composables ที่ไม่ได้ใช้

### 2. Naming Conventions

- ใช้ชื่อ composables ตามที่ VueUse กำหนด
- สร้าง wrappers ด้วย prefix ของโปรเจกต์ เช่น `useProjectFetch`
- ใช้ camelCase สำหรับชื่อ composables เสมอ

### 3. Usage Patterns

- ใช้ VueUse composables ใน `<script setup>` เท่านั้น
- แยก logic ที่ซับซ้อนออกเป็น composables ของโปรเจกต์
- ใช้ destructuring สำหรับ return values จาก VueUse
- ใช้ TypeScript types จาก VueUse composables

### 4. Performance

- ใช้ `useThrottle` สำหรับ scroll/resize events
- ใช้ `useDebounce` สำหรับ input/search
- ใช้ `useLazy` สำหรับ expensive operations
- หลีกเลี่ยงการเรียก VueUse composables ใน loops

### 5. Testing

- Mock VueUse composables ใน unit tests
- ใช้ `flushPromises` สำหรับ async composables
- ทดสอบ composables ที่ extend จาก VueUse อย่างละเอียด

## Expected Outcome

- VueUse composables ที่ใช้อย่างมีประสิทธิภาพ
- Code ที่ clean และ maintainable
- Type safety จาก VueUse TypeScript support
- Performance ที่ดีขึ้นด้วย optimized composables
- Testing coverage สำหรับ custom composables

