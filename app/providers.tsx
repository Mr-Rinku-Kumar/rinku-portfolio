'use client';

import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="h-full">
        {children}
      </div>
    </AnimatePresence>
  );
}
