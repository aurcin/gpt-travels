import { SiOpenaigym } from 'react-icons/si';

import ThemeToggle from '@/components/ui/theme-toggle';

export default function SidebarHeader() {
  return (
    <div className='flex items-center gap-4 mb-4 px-4'>
      <SiOpenaigym className='w-10 h-10 text-primary' />
      <div className='text-xl font-extrabold text-primary'>GPT Travels</div>
      <ThemeToggle />
    </div>
  );
}
