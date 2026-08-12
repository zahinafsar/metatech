import { DataProvider } from 'metatech-state';

import { HomePage } from './pages';

export function App() {
  return (
    <DataProvider staleTime={60000}>
      <HomePage />
    </DataProvider>
  );
}
