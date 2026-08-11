import * as React from 'react';

import { cn } from '../lib/utils';

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
  baseId: string;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error('Tabs parts must be used within a <Tabs />');
  }

  return context;
}

function Tabs({
  className,
  defaultValue,
  value: controlledValue,
  onValueChange,
  ...props
}: Omit<React.ComponentProps<'div'>, 'defaultValue' | 'onChange'> & {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
}) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const baseId = React.useId();
  const value = controlledValue ?? uncontrolledValue;

  const setValue = React.useCallback(
    (next: string) => {
      if (controlledValue === undefined) {
        setUncontrolledValue(next);
      }

      onValueChange?.(next);
    },
    [controlledValue, onValueChange],
  );

  const contextValue = React.useMemo(
    () => ({ value, setValue, baseId }),
    [baseId, setValue, value],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div data-slot="tabs" className={cn('flex flex-col', className)} {...props} />
    </TabsContext.Provider>
  );
}

function TabsList({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="tabs-list"
      role="tablist"
      className={cn(
        'flex h-[70px] items-center justify-center rounded-tile bg-background px-[10px]',
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  value,
  ...props
}: React.ComponentProps<'button'> & { value: string }) {
  const { value: activeValue, setValue, baseId } = useTabs();
  const isActive = activeValue === value;

  return (
    <button
      data-slot="tabs-trigger"
      data-state={isActive ? 'active' : 'inactive'}
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-selected={isActive}
      aria-controls={`${baseId}-panel-${value}`}
      onClick={() => setValue(value)}
      className={cn(
        'flex h-[60px] w-[200px] items-center justify-center rounded-[10px] px-[10px] text-lg leading-[30px] font-bold tracking-[-0.9px] whitespace-nowrap outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50',
        isActive ? 'bg-ink text-brand-green-bright' : 'text-foreground hover:text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}

function TabsPanel({
  className,
  value,
  ...props
}: React.ComponentProps<'div'> & { value: string }) {
  const { value: activeValue, baseId } = useTabs();

  if (activeValue !== value) {
    return null;
  }

  return (
    <div
      data-slot="tabs-panel"
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      className={cn(className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsPanel, useTabs };
