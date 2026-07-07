# M3 AE深化 — 学习路径

## 概述

M3 基于 **ae-skills 插件**，将 M2 的技能体系翻译成 AE 工程师的日常工作语言。按 **AE-SKILLS 工作流**排序：从理解需求（Define）→ 规划设计（Plan）→ 配置上下文（Context）→ 编写代码（Implement）→ 验证质量（Verify）→ 交付方案（Deliver）。

> 覆盖从"理解客户问题"到"写代码解决"到"交付客户方案"的完整链路。

---

## 推荐阅读顺序

```
3-0 路径入口（先看地图）
  │
  ├── 阶段一：Define（理解问题 — 从"客户要什么"开始）
  │   3-1 interview-me              ← 澄清需求，一问一答直击本质
  │   3-2 idea-refine                ← 精炼方向，发散+对比+推荐
  │   3-3 spec-driven-development    ← 编写规格，含验收条件
  │
  ├── 阶段二：Plan（规划 — 拆成可执行的任务）
  │   3-4 planning-and-task-breakdown ← 任务拆解，依赖排序
  │
  ├── 阶段三：Context（上下文 — 让 AI 理解你的项目）
  │   3-5 context-engineering        ← CLAUDE.md + 项目规则配置
  │
  ├── 阶段四：Implement（实现 — 写代码）
  │   3-6 test-driven-development    ← 测试先行，红→绿→重构
  │   3-7 incremental-implementation ← 薄垂直切片，每片编译+测试通过
  │   3-8 source-driven-development  ← 官方文档验证 API 正确性
  │
  ├── 阶段五：Verify（验证 — 代码对吗？）
  │   3-9 code-review-and-quality    ← 五维度系统化审查
  │   3-10 doubt-driven-development  ← 对抗审查，全新视角找问题
  │   3-11 debugging-and-error-recovery ← 从现象到根因的系统化调试
  │
  ├── 阶段六：Deliver（交付 — 给客户的方案）
  │   3-12 documentation-and-adrs    ← 方案文档 + 架构决策记录
  │   3-13 shipping-and-launch       ← 交付前检查清单 + 回滚方案
  │
  └── 参考
      3-14 环境配置详解             ← MCP/skill 清单 + 排查指南
```

> **最少必读**：3-0 → 3-1 → 3-2 → 3-3。覆盖从"理解需求"到"写出规格"的完整 Define 阶段。

---

## 页面清单

| # | 页面 | 阶段 | 预计耗时 | 前置依赖 |
|---|------|------|---------|---------|
| 3-0 | 路径入口 | — | 5 分钟 | M1+M2 关键页 |
| 3-1 | interview-me | Define | 15 分钟（含实操） | 无 |
| 3-2 | idea-refine | Define | 3 分钟 | 3-1 |
| 3-3 | spec-driven-development | Define | 10 分钟 | 3-1 |
| 3-4 | planning-and-task-breakdown | Plan | 5 分钟 | 3-3 |
| 3-5 | context-engineering | Context | 25 分钟（含实操） | M2 2-3（CLAUDE.md） |
| 3-6 | test-driven-development | Implement | 10 分钟 | 3-5 |
| 3-7 | incremental-implementation | Implement | 与 3-6 串讲 | 3-6 |
| 3-8 | source-driven-development | Implement | 2 分钟 | M2 2-5（context7） |
| 3-9 | code-review-and-quality | Verify | 25 分钟（含实操） | 3-7 |
| 3-10 | doubt-driven-development | Verify | 5 分钟 | 3-9 |
| 3-11 | debugging-and-error-recovery | Verify | 25 分钟（含实操） | 3-9 |
| 3-12 | documentation-and-adrs | Deliver | 20 分钟 | 3-3 |
| 3-13 | shipping-and-launch | Deliver | 15 分钟 | 3-12 |
| 3-14 | 环境配置详解 | 参考 | 10 分钟（课后自查） | 全部 |
| — | M3 全部 | — | ~180 分钟 | M1+M2 全部完成 |

---

## 自学路径建议

### 🚀 快速通道（2-3 小时）

按工作流从头走到尾，覆盖 Define → Implement → Verify → Deliver 核心阶段：

1. 3-0（路径入口）— 5 分钟
2. 3-1（interview-me）— 用自己的项目练习需求澄清（20 分钟）
3. 3-3（spec-driven）— 为当前任务写一份规格（15 分钟）
4. 3-5（context-engineering）— 完善自己项目的 CLAUDE.md（20 分钟）
5. 3-6（TDD）— 写一个测试并让它通过（15 分钟）
6. 3-9（code-review）— 审查自己项目的一个模块（25 分钟）
7. 3-11（debugging）— 定位一个已知 bug（30 分钟）
8. 3-12（documentation-and-adrs）— 为当前方案写一份文档（20 分钟）
9. 3-13（shipping-and-launch）— 方案交付前走一遍检查清单（15 分钟）

### 📚 完整通道（6-8 小时）

按本页"推荐阅读顺序"从上到下读完全部 15 篇。每篇跟着做实操练习。

### 🎯 按需通道（遇到再看）

- 需求不清楚 → 3-1（interview-me）
- 方向不明确 → 3-2（idea-refine）
- 要写规格 → 3-3（spec-driven）
- 大功能怎么拆 → 3-4（planning）
- 让 AI 理解项目 → 3-5（context-engineering）
- 要写测试 → 3-6（TDD）
- 大功能分步实现 → 3-7（incremental）
- AI 给的 API 好像不对 → 3-8（source-driven）
- 提交前审查 → 3-9（code-review）
- 代码写完了不放心 → 3-10（doubt-driven）
- 代码挂了要排查 → 3-11（debugging）
- 客户方案文档 → 3-12（documentation-and-adrs）
- 方案要交付了 → 3-13（shipping-and-launch）

---

## 前置依赖

进入 M3 前，确保你已完成：

- [ ] M1 全部（至少 1-6 桥梁篇已实操——能独立用 Claude Code 解决一个真实问题）
- [ ] M2 关键页：
  - [ ] 2-0（skill 体系全景图——知道 42 个 skill 各自是什么）
  - [ ] 2-1（ae-skills 融入日常——知道什么场景触发什么 skill）
  - [ ] 2-3（CLAUDE.md 怎么写——项目 CLAUDE.md 已写好）
- [ ] M2 推荐页：
  - [ ] 2-5（MCP 插件使用——至少 codegraph 能正常使用）
- [ ] ae-skills 插件已安装（V1.0+）
- [ ] 有一个自己的嵌入式项目作为实操对象

---

## 下一步

> **M3 AE深化 完成。**
>
> 继续学习：[M4-SE实战](../M4-SE实战/)（SE 系统工程师路径）
>
> 如果你需要集成到 CI 或自动化流程，返回参考 M2 的 [2-8-编程方式运行](../M2-能力扩展/2-8-编程方式运行.md)。
