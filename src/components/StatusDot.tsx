/**
 * StatusDot — small colored indicator dot used inline in prose to signal
 * verified/warning/blocked/info state. Pairs well with system requirement
 * lists, feature stability tags ("stable" / "beta" / "deprecated"), and
 * compatibility matrices.
 *
 * Visual: 8px filled circle with a soft ring (current-color at 20%) for
 * a subtle glow. Inherits text color when `variant="auto"` so it can sit
 * inside colored badges; otherwise the variant picks the color.
 *
 * Usage in MDX:
 *   <StatusDot status="ok" /> Required
 *   <StatusDot status="warn" /> Optional but recommended
 *   <StatusDot status="bad" /> Deprecated
 *   <StatusDot status="info" /> Experimental
 *
 * Registered globally in src/theme/MDXComponents.js so docs files can
 * reference <StatusDot /> without importing.
 */
import React from 'react';

export type StatusDotProps = {
  /**
   * Semantic status. Maps to a CSS variable that controls fill + ring.
   * - 'ok'     → green   (verified, supported, stable)
   * - 'warn'   → amber   (caution, partial support, beta)
   * - 'bad'    → red     (unsupported, deprecated, blocked)
   * - 'info'   → blue    (informational, experimental)
   * - 'muted'  → gray    (n/a, optional)
   */
  status?: 'ok' | 'warn' | 'bad' | 'info' | 'muted';
  /** Accessible label. Falls back to a status-derived default. */
  label?: string;
  /** Optional inline style overrides (size, vertical-align, etc.) */
  style?: React.CSSProperties;
};

const DEFAULT_LABELS: Record<NonNullable<StatusDotProps['status']>, string> = {
  ok: 'Supported',
  warn: 'Caution',
  bad: 'Unsupported',
  info: 'Informational',
  muted: 'Not applicable',
};

export default function StatusDot({
  status = 'ok',
  label,
  style,
}: StatusDotProps): JSX.Element {
  return (
    <span
      className={`status-dot status-dot--${status}`}
      role="img"
      aria-label={label ?? DEFAULT_LABELS[status]}
      title={label ?? DEFAULT_LABELS[status]}
      style={style}
    />
  );
}
