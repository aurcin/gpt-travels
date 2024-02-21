'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers(props: ProvidersProps) {
  const { children } = props;

  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: { queries: { staleTime: 60 * 1000 } },
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position='top-center' />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
