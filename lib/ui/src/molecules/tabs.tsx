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
        'flex items-center gap-[5px] md:gap-[10px] overflow-x-auto md:rounded-tile [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:h-[70px] md:justify-center md:gap-0 md:bg-background md:px-[10px]',
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
        'flex h-[40px] md:h-[60px] shrink-0 items-center justify-center rounded-[5px] md:rounded-[10px] text-base md:text-lg leading-[30px] font-bold tracking-[-0.9px] whitespace-nowrap outline-none transition-colors md:w-[200px] px-6 md:px-[10px] focus-visible:ring-[3px] focus-visible:ring-ring/50',
        isActive
          ? 'bg-ink text-brand-green-bright'
          : 'bg-background text-foreground hover:text-muted-foreground md:bg-transparent',
        className,
      )}
      {...props}
    />
  );
}

function TabsPanels({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="tabs-panels" className={cn('grid', className)} {...props} />;
}

function TabsPanel({
  className,
  value,
  ...props
}: React.ComponentProps<'div'> & { value: string }) {
  const { value: activeValue, baseId } = useTabs();
  const isActive = activeValue === value;

  return (
    <div
      data-slot="tabs-panel"
      data-state={isActive ? 'active' : 'inactive'}
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      inert={!isActive}
      className={cn('col-start-1 row-start-1', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsPanels, TabsPanel, useTabs };
