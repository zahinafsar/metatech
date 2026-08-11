import * as React from 'react';

import { cn } from '../lib/utils';

const glyphPaths = {
  'arrow-right': 'M4 12h15m0 0-6-6m6 6-6 6',
  'chevron-left': 'm15 5-7 7 7 7',
  'chevron-right': 'm9 5 7 7-7 7',
} as const;

type GlyphName = keyof typeof glyphPaths;

function Glyph({
  className,
  name,
  label,
  ...props
}: React.ComponentProps<'svg'> & { name: GlyphName; label?: string }) {
  return (
    <svg
      data-slot="glyph"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? 'img' : undefined}
      aria-hidden={label ? undefined : true}
      className={cn('size-4 shrink-0', className)}
      {...props}
    >
      {label ? <title>{label}</title> : null}
      <path d={glyphPaths[name]} />
    </svg>
  );
}

export { Glyph, glyphPaths, type GlyphName };
