import { Fragment } from 'react';

import { cn } from '../utils';

const escapeRegExp = (value: string) => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

function HighlightedText({
  text,
  highlights,
  className,
}: {
  text: string;
  highlights?: string[];
  className?: string;
}) {
  if (!highlights || highlights.length === 0) {
    return <>{text}</>;
  }

  const pattern = new RegExp(`(${highlights.map(escapeRegExp).join('|')})`, 'g');
  const parts = text.split(pattern).filter((part) => part.length > 0);

  return (
    <>
      {parts.map((part, index) => {
        if (!highlights.includes(part)) {
          return <Fragment key={index}>{part}</Fragment>;
        }

        return (
          <span key={index} className={cn('text-brand-green', className)}>
            {part}
          </span>
        );
      })}
    </>
  );
}

export { HighlightedText };
