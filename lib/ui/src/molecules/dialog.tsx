import * as React from 'react';

import { CloseIcon } from '../icons';
import { cn } from '../lib/utils';

function Dialog({
  className,
  open,
  onClose,
  closeLabel = 'Close',
  children,
  ...props
}: Omit<React.ComponentProps<'dialog'>, 'onClose'> & {
  open: boolean;
  onClose: () => void;
  closeLabel?: string;
}) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      data-slot="dialog"
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onClose();
        }
      }}
      className={cn('m-auto w-[calc(100vw-32px)] max-w-[1100px] bg-transparent p-0', className)}
      {...props}
    >
      <div data-slot="dialog-content" className="relative">
        <button
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
          className="absolute -top-11 right-0 flex size-9 items-center justify-center rounded-full bg-white/10 text-white outline-none transition-colors hover:bg-white/20 focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <CloseIcon className="size-4" />
        </button>
        {children}
      </div>
    </dialog>
  );
}

export { Dialog };
