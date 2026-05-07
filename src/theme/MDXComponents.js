/**
 * Global MDX component registry.
 *
 * Every component exported from the default object becomes available as a
 * tag in any .mdx file without needing an explicit import. Useful for
 * small, frequently-referenced primitives like <StatusDot />.
 *
 * Docusaurus swizzle target: theme/MDXComponents (wrap).
 *
 * Note: components only work in `.mdx` files (not `.md`) — Docusaurus's
 * MD parser does not evaluate JSX. If you want StatusDot in a Markdown
 * file, rename it to .mdx.
 */
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import StatusDot from '@site/src/components/StatusDot';

export default {
  ...MDXComponents,
  StatusDot,
};
