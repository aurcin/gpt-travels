import Header from '@/components/layout/sidebar/header';
import Links from '@/components/layout/sidebar/links';
import Profile from '@/components/layout/sidebar/profile';

export default function Sidebar() {
  return (
    <aside className='px-4 py-12 w-80 min-h-full bg-base-300 grid grid-rows-[auto,1fr,auto]'>
      <Header />
      <Links />
      <Profile />
    </aside>
  );
}
