---
title: Analyze Video
description: วิเคราะห์ video streaming, transcoding, adaptive bitrate, DRM, captions
auto_execution_mode: 3
related_workflows:
  - /analyze-asset
  - /analyze-performance
  - /use-scripts
  - /report-format-table
  - /deep-analyze-with-use-scripts
---

## Goal

วิเคราะห์ video integration เพื่อระบุ streaming และ accessibility gaps

## Scope

Video streaming, transcoding, adaptive bitrate, DRM, captions, video player, video storage, video analytics

## Execute

### 1. Deep Analyze With Scripts

1. ทำ `/deep-analyze-with-use-scripts` เพื่อรวบรวม video metrics ผ่าน scripts (video element detection, streaming config scan)

### 2. Check Video Streaming

1. ระบุ missing adaptive bitrate streaming (HLS, DASH)
2. ระบุ missing video CDN integration
3. ระบุ missing video preloading strategy
4. ระบุ missing video poster images
5. ระบุ missing video lazy loading
6. ระบุ missing video quality selection

### 3. Check Transcoding

1. ระบุ missing video transcoding pipeline
2. ระบุ missing multi-resolution encoding
3. ระบุ missing codec optimization (H.264, H.265, AV1)
4. ระบุ missing thumbnail extraction
5. ระบุ missing transcoding job queue
6. ระบุ missing transcoding error handling

### 4. Check Accessibility

1. ระบุ missing closed captions (SRT, WebVTT)
2. ระบุ missing audio descriptions
3. ระบุ missing video transcript
4. ระบุ missing video player keyboard controls
5. ระบุ missing video player ARIA labels
6. ระบุ missing sign language overlay

### 5. Check Video Player

1. ระบุ missing custom video player controls
2. ระบุ missing playback speed control
3. ระบุ missing picture-in-picture support
4. ระบุ missing fullscreen support
5. ระบุ missing AirPlay/Cast support
6. ระบุ missing player analytics

### 6. Check DRM And Security

1. ระบุ missing DRM integration (FairPlay, Widevine, PlayReady)
2. ระบุ missing signed video URLs
3. ระบุ missing video token expiration
4. ระบุ missing domain restrictions
5. ระบุ missing download prevention

### 7. Check Video Storage

1. ระบุ missing video storage optimization
2. ระบุ missing video lifecycle policies
3. ระบุ missing video archival
4. ระบุ missing video deduplication
5. ระบุ missing video metadata management

### 8. Report Findings

1. ทำ `/report-format-table` เพื่อจัดรูปแบบผลลัพธ์
2. จัดลำดับตาม impact: streaming → accessibility → transcoding → player → DRM → storage

## Rules

### 1. Analysis Only

- เน้นการวิเคราะห์และระบุ ไม่ใช่ implement
- รายงาน issues ทั้งหมดพร้อม severity

### 2. Severity Classification

- **Critical**: no adaptive streaming, missing captions, no DRM สำหรับ premium
- **High**: missing transcoding, missing CDN, missing player controls
- **Medium**: missing transcripts, missing PiP, missing quality selection
- **Low**: missing AirPlay, missing analytics, missing archival

### 3. Framework Awareness

- ตรวจสอบ Cloudflare Stream integration
- ตรวจสอบ HTML5 video patterns
- ระบุ video processing libraries

### 4. Use Scripts For Video Analysis

- ใช้ `/deep-analyze-with-use-scripts` เสมอ
- ใช้ `/use-scripts` สำหรับ video element scanning

## Expected Outcome

- Video gaps ระบุพร้อม severity
- Streaming และ accessibility issues จัดลำดับตาม impact
- พร้อมสำหรับ further improvement
