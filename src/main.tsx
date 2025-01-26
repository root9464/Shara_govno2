import { HeroUIProvider } from '@heroui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider className='min-h-screen w-full'>{children}</HeroUIProvider>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
