import { ClerkProvider } from '@clerk/nextjs';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers(props: ProvidersProps) {
  const { children } = props;
  return <ClerkProvider>{children}</ClerkProvider>;
}
