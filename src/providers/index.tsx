import { Toaster } from 'react-hot-toast';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers(props: ProvidersProps) {
  const { children } = props;
  return (
    <>
      <Toaster position='top-center' />
      {children}
    </>
  );
}
