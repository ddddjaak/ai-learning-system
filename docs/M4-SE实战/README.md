# M4 SE实战 — 学习路径

## 这个模块做什么

M4 是面向 **SE（系统工程师）** 的角色实战模块。基于 **se-skills 插件**，覆盖 SE 完整工作流中的全部 22 个 skill——从需求分解到发布审查，使用统一的 BLDC 电机控制器过温保护（OTP）子系统案例贯穿。

---

## 前置条件

| 条件 | 说明 |
|------|------|
| **必须完成 M1 + M2** | 需要知道 Claude Code 怎么用、skill 体系是什么 |
| **不需要学 M3** | SE 路径独立，基于 se-skills 插件 |
| **有系统设计经验** | 了解需求分解、架构设计、设计审查的基本概念 |

---

## 学习顺序

按 SE 的实际工作流排列——建议按顺序阅读：

```
4-0  路径入口（含 using-se-skills 元技能）
       │
       ▼
4-1  需求分解                        ← SE 的日常入口
       │
       ▼
4-2  架构设计                        ← 核心产出
       │
       ▼
4-3  规格与详细设计                  ← Document 阶段
       │
       ▼
4-4  设计审查                        ← 质量门禁
       │
       ▼
4-5  编码规范审查
       │
       ▼
4-6  测试审查                        ← test-plan + test-report
       │
       ▼
4-7  追溯矩阵                        ← 覆盖率验证
       │
       ▼
4-8  发布审查                        ← 最终门禁
       │
       ▼
4-9  SE Goal Mode                   ← 全自动模式
       │
       ▼
4-10 环境配置详解
```

| 页面 | Skill 覆盖 | 内容 |
|------|-----------|------|
| [4-0 路径入口](./4-0-路径入口.md) | `using-se-skills` | SE 工作流全景图、频率分组、元技能、两种工作模式 |
| [4-1 需求分解](./4-1-se-requirements.md) | `requirements-decompose` / `requirements-review` / `se-requirements` | 高层需求 → 结构化系统需求（FR/NFR/IR/CON） |
| [4-2 架构设计](./4-2-architecture-design.md) | `architecture-design` / `software-architecture-design` / `hardware-architecture-design` / `se-architecture` | HW/SW 分区、模块定义、接口设计、ADR |
| [4-3 规格与详细设计](./4-3-spec-and-detailed-design.md) | `spec-authoring` / `se-spec` / `software-detailed-design` / `hardware-detailed-design` / `algorithm-design` | SOD、HW-SW IF Spec、Test Plan、各模块详细设计 |
| [4-4 设计审查](./4-4-design-review.md) | `design-review` / `se-review` | 4 视角对抗审查——正确性/完整性/一致性/可行性 |
| [4-5 编码规范审查](./4-5-code-static-review.md) | `code-static-review` | MISRA-C:2012 + CERT C 编码规范审查 |
| [4-6 测试审查](./4-6-test-review.md) | `test-plan-review` / `test-report-review` | 测试方案完整性 + 测试报告正确性审查 |
| [4-7 追溯矩阵](./4-7-traceability-matrix.md) | `traceability-matrix` / `se-traceability` | 需求→设计→测试双向追溯 + 覆盖率缺口分析 |
| [4-8 发布审查](./4-8-release-review.md) | `release-review` | 发布前最终质量门禁 |
| [4-9 SE Goal Mode](./4-9-se-goal.md) | `se-goal` | 全自动 Define→Design→Document→Verify→Validate 流程 |
| [4-10 环境配置详解](./4-10-环境配置详解.md) | — | SE 角色的 skill/MCP 清单 + 配置步骤 + 常见问题 |

---

## 运行案例总览

整个 M4 使用统一的 OTP 子系统案例贯穿：

| 阶段 | 输入 | 输出 |
|------|------|------|
| 4-1 需求分解 | "为 BLDC 电机控制器增加过温保护，要满足 IEC 60730 Class B" | 23 条系统需求（FR×10 + NFR×5 + IR×5 + CON×3） |
| 4-2 架构设计 | 23 条已确认的需求 | 完整架构文档（HW/SW 分区 + 4 任务 + 数据流 + 3 个 ADR） |
| 4-3 规格与详细设计 | 架构文档 | SOD + HW-SW IF Spec + Test Plan + 各模块详细设计 |
| 4-4 设计审查 | 规格文档 | 10 条审查发现（4 HIGH / 4 MEDIUM / 2 LOW） |
| 4-5 编码规范审查 | otp_engine.c (240 行) | 10 条规范违规（含 1 个真实 bug） |
| 4-6 测试审查 | 测试方案 + 测试报告 | 覆盖缺口 + 失败用例分析 |
| 4-7 追溯矩阵 | 23 条需求 + 设计元素 + 测试用例 | 追溯矩阵 + 覆盖率报告 |
| 4-8 发布审查 | v1.0 全套文档 | APPROVED（有条件通过）+ 已知问题记录 |

---

## 和 M3（AE实战）的快速对比

| | M3 AE实战 | M4 SE实战 |
|--|----------|-------|
| **核心插件** | ae-skills | se-skills |
| **视角** | "这段代码怎么写" / "客户要什么方案" | "这个系统怎么设计才正确" |
| **入口** | Bug / 功能需求 / 客户模糊问题 | 产品需求文档（PRD） |
| **核心 skill** | debugging, code-review, TDD, interview-me | requirements-decompose, architecture-design, design-review |
| **输出** | 修复/功能代码 + 方案文档 | 需求规格 + 架构设计 + 审查报告 + 追溯矩阵 |
| **关注点** | 功能正确 + 代码质量 + 客户满意 | 系统完整 + 可追溯 + 合规 |

---

## 常见问题

### Q: 我主要是做软件架构——需要看硬件相关的部分吗？

不需要全看——但建议至少看 4-2 中的"HW/SW 分区"部分。SE 的核心价值是跨 HW/SW 边界的系统视角。

### Q: 我们的项目不需要功能安全认证——追溯矩阵和发布审查还有必要吗？

建议保留精简版。追溯矩阵在非安全项目中的价值是变更影响分析——"改这条需求会影响哪些设计和测试"。发布审查在任何有客户的场景都有价值。

### Q: 案例是 STM32G4——但我们用的是其他 MCU——这些 skill 还适用吗？

完全适用。SE skill 关注的是**系统工程方法和流程**——不是特定 MCU 的寄存器配置。所有 MCU 平台上方法论一致。

---

## 更新记录

| 版本 | 日期 | 更新内容 |
|------|------|---------|
| v26.3 | 2026-07-06 | M4 重构：文件编号统一 4-X；新增 `using-se-skills` 元技能；同步 se-skills V1.0 完整覆盖 22 个 skill |
