import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <span className="font-semibold text-sm text-neutral-900 dark:text-white">AI Learning System</span>
      </>
    ),
  },
  links: [
    {
      text: '快速上手',
      url: '/docs/getting-started',
      active: 'nested-url',
    },
    {
      text: '能力扩展',
      url: '/docs/capabilities',
      active: 'nested-url',
    },
    {
      text: 'AE 实战',
      url: '/docs/ae-practice',
      active: 'nested-url',
    },
    {
      text: 'SE 实战',
      url: '/docs/se-practice',
      active: 'nested-url',
    },
  ],
};