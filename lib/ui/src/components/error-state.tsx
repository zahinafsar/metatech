import * as React from 'react';

import { cn } from '../utils';

function ErrorState({
  title = 'We could not load this content',
  message,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  title?: string;
  message?: string;
}) {
  return (
    <div
      data-slot="error-state"
      role="alert"
      className={cn(
        'flex w-full flex-col items-center justify-center gap-5 px-6 py-[80px] text-center',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-[10px]">
        <p className="font-display text-[21px] leading-[27px] font-extrabold tracking-[-0.96px] md:text-[28px] md:leading-[34px]">
          {title}
        </p>
        {message ? (
          <p className="max-w-[520px] text-sm leading-[23px] font-light">{message}</p>
        ) : null}
      </div>
    </div>
  );
}

export { ErrorState };
