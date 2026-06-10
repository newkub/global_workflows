---
title: Test Chaos
description: ทดสอบ system resilience ด้วย chaos engineering พื้นฐาน
auto_execution_mode: 3
related_workflows:
  - /test-load
  - /test-integration
url: https://principlesofchaos.org/
---

## Goal

ทดสอบ system resilience ต่อ failures ด้วย chaos engineering เพื่อยืนยัน reliability ใน production

## Execute

### 1. Setup Chaos Engineering Tools

1. ติดตั้ง Chaos Mesh หร Litmus สำหรับ Kubernetes
2. Configure chaos experiments safely
3. Setup monitoring แล alerting
4. Define blast radius สำหรับ experiments

### 2. Define Chaos Scenarios

1. ระบุ critical services แล dependencies
2. Define failure scenarios (network, pod, resource)
3. Set success criteria สำหรับแต่ละ experiment
4. Document rollback procedures

### 3. Test Network Failures

1. Simulate network latency
2. Simulate packet loss
3. Simulate network partition
4. Test DNS failures

### 4. Test Pod Failures

1. Kill pods randomly
2. Simulate pod crashes
3. Test pod restarts
4. Verify auto-scaling

### 5. Test Resource Failures

1. Simulate CPU exhaustion
2. Simulate memory pressure
3. Simulate disk I/O stress
4. Test resource limits

### 6. Test Dependency Failures

1. Simulate database downtime
2. Simulate cache failures
3. Simulate external API failures
4. Test fallback mechanisms

### 7. Run Chaos Experiments

1. Start with small blast radius
2. Gradually increase complexity
3. Monitor system behavior
4. Document findings

### 8. Analyze Results

1. Review system resilience
2. Identify weak points
3. Validate recovery mechanisms
4. Update system design

## Rules

### 1. Chaos Engineering Principles

- Start small แล increase gradually
- Define blast radius อย่างชัดเจน
- Never run in production without safeguards
- Always have rollback procedures ready
- Monitor continuously ระหว่าง experiments

### 2. Experiment Categories

| Category | Scenarios | Tools |
|----------|-----------|-------|
| Network | Latency, loss, partition | Chaos Mesh, Toxiproxy |
| Pod | Kill, crash, restart | Chaos Mesh, Litmus |
| Resource | CPU, memory, disk stress | Chaos Mesh, stress-ng |
| Dependency | DB, cache, API failures | Chaos Mesh, custom scripts |

### 3. Safety Measures

- Use canary deployments สำหรับ experiments
- Set automatic rollback triggers
- Limit experiment duration
- Monitor critical metrics continuously
- Have on-call engineers ready

### 4. Success Criteria

แต่ละ experiment ต้องมี:

- Defined success metrics (error rate, latency, availability)
- Thresholds สำหรับ rollback
- Expected recovery time
- Documentation ของ findings

## Expected Outcome

- [ ] System resilience validated
- [ ] Weak points identified
- [ ] Recovery mechanisms tested
- [ ] Chaos experiments documented
- [ ] Blast radius defined
- [ ] Rollback procedures ready

## Common Mistakes

- Run chaos experiments ใน production โดยไม่มี safeguards
- Start with large blast radius
- ไม่ monitor ระหว่าง experiments
- ไม่มี rollback procedures
- ไม่ document findings
- Experiments ซับซ้อนเกินไป

## Anti-Patterns

- ❌ Chaos experiments ใน production โดยไม่มี approval
- ❌ ไม่ define blast radius
- ❌ ไม่ monitor ระหว่าง experiments
- ❌ Experiments ที่ไม่มี success criteria
- ❌ ไม่มี rollback procedures

