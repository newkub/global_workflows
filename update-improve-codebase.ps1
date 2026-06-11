$content = Get-Content "c:\Users\Veerapong\.codeium\windsurf\global_workflows\improve-codebase-everything.md" -Raw

# Section 1: Change /optimize-config to /improve-config
$content = $content -replace "ทำ `/optimize-config` เพื่อปรับปรุง configuration files", "ทำ `/improve-config` เพื่อปรับปรุง configuration files"

# Section 3: Add API contracts and documentation
$content = $content -replace "(ทำ `/improve-api-versioning` เพื่อปรับปรุง API versioning`r`n)", "$1   - ทำ `/improve-api-contracts` เพื่อปรับปรุง API contracts`r`n   - ทำ `/improve-api-documentation` เพื่อปรับปรุง API documentation`r`n"

# Section 4: Add database and caching strategy
$content = $content -replace "(ทำ `/improve-caching` เพื่อปรับปรุง caching strategy`r`n)", "$1   - ทำ `/improve-database` เพื่อปรับปรุง database schema และ queries`r`n   - ทำ `/improve-caching-strategy` เพื่อปรับปรุม caching strategy และ invalidation`r`n"

# Section 5: Add data validation, file organization, environment config
$content = $content -replace "(ทำ `/no-use-ignore` เพื่อลบ ignore comments/attributes`r`n)", "$1   - ทำ `/improve-data-validation` เพื่อปรับปรุง data validation`r`n   - ทำ `/improve-file-organization` เพื่อปรับปรุม file organization`r`n   - ทำ `/improve-environment-config` เพื่อปรับปรุม environment configuration`r`n"

# Section 6: Add data structures
$content = $content -replace "(Benchmark และ validate improvements`r`n)", "$1   - ทำ `/improve-data-structures` เพื่อปรับปรุม data structures และ algorithms`r`n"

# Section 7: Add testing coverage
$content = $content -replace "(ทำ `/improve-code-coverage` เพื่อเพิ่ม code coverage`r`n)", "$1   - ทำ `/improve-testing-coverage` เพื่อปรับปรุม test coverage ครบถ้วน`r`n"

# Section 8: Change optimize-* to improve-* and add async operations, monitoring
$content = $content -replace "ทำ `/optimize-bundle`", "ทำ `/improve-bundle`"
$content = $content -replace "ทำ `/optimize-perf`", "ทำ `/improve-perf`"
$content = $content -replace "ทำ `/optimize-rendering`", "ทำ `/improve-web-rendering`"
$content = $content -replace "ทำ `/optimize-ram-usage`", "ทำ `/improve-ram-usage`"
$content = $content -replace "(ทำ `/improve-error-tracking` เพื่อเพิ่ม Sentry/error boundaries`r`n)", "$1   - ทำ `/improve-async-operations` เพื่อปรับปรุม async operations`r`n   - ทำ `/improve-monitoring` เพื่อปรับปรุม monitoring และ alerting`r`n"

# Section 9: Add deployment and backup strategy
$content = $content -replace "(ทำ `/add-pr-templates` เพื่อเพิ่ม PR/issue templates`r`n)", "$1   - ทำ `/improve-deployment` เพื่อปรับปรุม deployment process`r`n   - ทำ `/improve-backup-strategy` เพื่อปรับปรุม backup และ recovery`r`n"

# Section 10: Change check-vulnerability to improve-security and add other security workflows
$content = $content -replace "ทำ `/check-vulnerability`", "ทำ `/improve-security`"
$content = $content -replace "(ทำ `/improve-accessibility``r`n)", "$1   - ทำ `/improve-websocket` เพื่อปรับปรุม WebSocket implementation`r`n   - ทำ `/improve-file-upload` เพื่อปรับปรุม file upload/download`r`n   - ทำ `/improve-search` เพื่อปรับปรุม search functionality`r`n   - ทำ `/improve-notification` เพื่อปรับปรุม notification system`r`n   - ทำ `/improve-internationalization` เพื่อปรับปรุม i18n/l10n`r`n"

# Section 12: Add routing-ux, seo, state-management
$content = $content -replace "(ทำ `/improve-uxui` เพื่อปรับปรุง user experience`r`n)", "$1   - ทำ `/improve-routing-ux` เพื่อปรับปรุม routing และ navigation UX`r`n   - ทำ `/improve-seo` เพื่อปรับปรุง SEO และ search ranking`r`n"

$content = $content -replace "(ทำ `/improve-dx` เพื่อปรับปรุม developer experience`r`n)", "$1   - ทำ `/improve-state-management` เพื่อปรับปรุม state management patterns`r`n"

# Update Expected Outcome
$content = $content -replace "- API contracts ชัดเจนและมี versioning", "- API contracts ชัดเจนและมี versioning`r`n- API documentation ครบถ้วน"
$content = $content -replace "- Data layer optimize แล้ว \(queries, caching\)", "- Data layer optimize แล้ว \(database, queries, caching\)"
$content = $content -replace "- Code quality ปรับปรุงครบถ้วน \(type safety, naming, error handling\)", "- Code quality ปรับปรุงครบถ้วน \(type safety, naming, error handling, validation\)`r`n- File organization ปรับปรุงแล้ว`r`n- Environment configuration ปรับปรุงแล้ว"
$content = $content -replace "- Algorithms และ data structures ปรับปรุงแล้ว", "- Algorithms และ data structures ปรับปรุงแล้ว`r`n- State management ปรับปรุงแล้ว"
$content = $content -replace "- Testing ปรับปรุงครบถ้วน \(testability, test cases, coverage\)", "- Testing ปรับปรุงครบถ้วน \(testability, test cases, coverage\)"
$content = $content -replace "- Performance ปรับปรุงแล้ว \(bundle, perf, rendering, RAM\)", "- Performance ปรับปรุงแล้ว \(bundle, perf, web rendering, RAM, async operations\)"
$content = $content -replace "- Observability ครบถ้วน \(logging, telemetry, error tracking\)", "- Observability ครบถ้วน \(logging, telemetry, error tracking, monitoring\)"
$content = $content -replace "- CI/CD และ Git workflow ปรับปรุงแล้ว", "- CI/CD และ deployment ปรับปรุงแล้ว`r`n- Backup strategy ปรับปรุงแล้ว"
$content = $content -replace "- Security vulnerabilities ถูกตรวจสอบและแก้ไข", "- Security ปรับปรุงแล้ว \(authentication, authorization, data protection, monitoring\)"
$content = $content -replace "- Accessibility ปรับปรุงแล้ว", "- Accessibility ปรับปรุงแล้ว`r`n- WebSocket ปรับปรุงแล้ว`r`n- File upload/download ปรับปรุงแล้ว`r`n- Search functionality ปรับปรุงแล้ว`r`n- Notification system ปรับปรุงแล้ว`r`n- Internationalization ปรับปรุงแล้ว"
$content = $content -replace "- UX ปรับปรุงแล้ว \(user experience, flows, accessibility\)", "- UX ปรับปรุงแล้ว \(user experience, flows, routing UX, SEO, accessibility\)"

Set-Content "c:\Users\Veerapong\.codeium\windsurf\global_workflows\improve-codebase-everything.md" -Value $content -NoNewline
