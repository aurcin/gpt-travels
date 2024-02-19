import { UserButton, auth, currentUser } from '@clerk/nextjs';

import { home } from '@/utils/paths';

export default async function Profile() {
  const user = await currentUser();
  // const { userId } = auth(); // we can access only id if its enough for us

  return (
    <div className='px-4 flex items-center gap-2'>
      <UserButton afterSignOutUrl={home()} />
      <p>{user?.emailAddresses[0].emailAddress}</p>
    </div>
  );
}
