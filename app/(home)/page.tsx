import { ChevronRight, BookOpen, Braces, Terminal, Blocks, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center bg-[#0a0a0b]">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0b] sm:min-h-[90vh]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-orb absolute -top-[10%] right-[5%] h-[30vmax] w-[30vmax] rounded-full blur-[100px] bg-[radial-gradient(circle,rgba(100,200,220,0.10)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(0,200,255,0.18)_0%,transparent_70%)]" />
          <div className="hero-orb absolute -bottom-[15%] -left-[5%] h-[28vmax] w-[28vmax] rounded-full blur-[90px] bg-[radial-gradient(circle,rgba(160,120,220,0.07)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(100,60,200,0.13)_0%,transparent_70%)]" />
          <div className="hero-orb absolute left-[30%] top-[20%] h-[20vmax] w-[20vmax] rounded-full blur-[120px] bg-[radial-gradient(circle,rgba(100,200,180,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(0,180,200,0.10)_0%,transparent_70%)]" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-16 text-center sm:px-8 sm:py-20">
          <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">Claude Code + AE Skills</p>
          <h1 className="text-balance font-sans text-5xl font-extrabold leading-[1.06] tracking-[-0.04em] text-neutral-900 dark:text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
            从 AI 使用者到<span className="text-cyan-400"> AI 驾驭者</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-xl">
            系统化地学习 Claude Code 与 AE Skills 实战体系，让你的 AI 编程从"碰运气"到"可复现"。
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              className="inline-flex h-12 items-center gap-2 rounded-full bg-neutral-900 px-8 text-sm font-semibold text-white transition-all duration-300 hover:bg-black hover:scale-[1.03] active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              href="/docs/getting-started/"
            >
              快速上手 <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              className="inline-flex h-12 items-center rounded-full border border-neutral-300 px-8 text-sm font-semibold text-neutral-700 transition-all duration-300 hover:border-neutral-900 hover:text-black hover:scale-[1.03] active:scale-[0.98] dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white"
              href="/docs/capabilities/"
            >
              浏览文档
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/80 px-4 py-2 text-sm font-medium text-neutral-600 backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/80 dark:hover:text-white" href="/docs/getting-started/">
              <BookOpen className="h-4 w-4" /> 快速上手
            </Link>
            <Link className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/80 px-4 py-2 text-sm font-medium text-neutral-600 backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/80 dark:hover:text-white" href="/docs/capabilities/">
              <Braces className="h-4 w-4" /> 能力扩展
            </Link>
            <Link className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/80 px-4 py-2 text-sm font-medium text-neutral-600 backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/80 dark:hover:text-white" href="/docs/ae-practice/">
              <Blocks className="h-4 w-4" /> AE 实战
            </Link>
            <Link className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/80 px-4 py-2 text-sm font-medium text-neutral-600 backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/80 dark:hover:text-white" href="/docs/se-practice/">
              <Terminal className="h-4 w-4" /> SE 实战
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <div className="w-full bg-[#f5f5f7] dark:bg-[#0d0d0f]">
        <div className="mx-auto max-w-4xl px-6 py-28 sm:px-10 sm:py-36">
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
            四大模块，从入门到精通
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
            不只是"会用 AI"，而是学会如何<strong className="font-semibold text-neutral-900 dark:text-white">驾驭 AI</strong> 完成真实工程任务。
          </p>
          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">M1 快速上手</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">从安装 Claude Code 到完成第一个真实任务——掌握基础对话、常用命令、权限与沙箱机制。</p>
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">M2 能力扩展</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">Skills、CLAUDE.md、MCP 插件、Hooks、Workflow 多 Agent 编排——构建你的 AI 工具链。</p>
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">M3 AE 实战</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">从 Spec 到 Review 的完整工程流：Interview Me、TDD、增量实施、Code Review、调试与发布。</p>
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">M4 SE 实战</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">系统工程师视角：需求分析、架构设计、详细设计、测试评审、可追溯性矩阵。</p>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <Link className="inline-flex h-12 items-center gap-2 rounded-full bg-neutral-900 px-8 text-sm font-semibold text-white transition-all duration-300 hover:bg-black hover:scale-[1.03] active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-neutral-200" href="/docs/getting-started/">
              开始学习 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-200 bg-[#f5f5f7] py-8 text-center text-xs text-neutral-400 dark:border-neutral-800 dark:bg-[#0d0d0f] dark:text-neutral-600">
        AI Learning System  |  Powered by Fumadocs
      </footer>
    </main>
  );
}