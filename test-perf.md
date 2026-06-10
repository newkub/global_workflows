---
title: Test Perf
description: ทดสอบ performance ของ functions, components และ operations เพื่อ identify bottlenecks
auto_execution_mode: 3
---

## Goal

ทดสอบ performance ให้ครบถ้วน รวม execution time, memory usage, performance bottlenecks และ performance baseline

## Execute

### 1. Identify Benchmark Targets

1. วิเคราะห์ hot paths
2. หา complex functions
3. ระบุ critical operations
4. กำหนด priorities

### 2. Profile Current Code

1. Run profiler
2. Identify hot spots
3. Find slow functions
4. Check allocations

### 3. Create Benchmark Utilities

1. Build timer helpers
2. Create memory trackers
3. Add data generators
4. Setup reporters

### 4. Write Function Benchmarks

1. Benchmark algorithms
2. Test utilities
3. Compare implementations
4. Test edge cases

### 5. Write Component Benchmarks

1. Test render time
2. Measure re-renders
3. Check memory
4. Test with props

### 6. Add Regression Tests

1. Compare to baseline
2. Alert on regression
3. Track trends
4. Document changes

### 7. Profile Memory

1. Track allocations
2. Find leaks
3. Check GC pressure
4. Optimize memory

### 8. Run and Analyze Benchmarks

1. Execute all benchmarks
2. Compare to baseline
3. Identify regressions
4. Verify statistical significance

## Rules

1. Ensure benchmarks reproducible ด้วย same environment
2. Use realistic data sizes และ multiple runs for statistics
3. Measure: execution duration, heap allocations, CPU, throughput, latency (P50, P95, P99)
4. Setup baseline for comparison และ alert on regression

## Expected Outcome

1. Performance baseline established
2. Regression detection enabled
3. Bottlenecks identified
4. Optimization targets clear
5. CI integration for performance monitoring

