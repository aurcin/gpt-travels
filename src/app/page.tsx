import Link from 'next/link';

import * as paths from '@/utils/paths';

export default function HomePage() {
  return (
    <main className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>GPT Travels</h1>
          <p className='py-6 text-lg leading-loose'>
            GPT Travels: Your AI travel planning assistant!
          </p>
          <Link href={paths.chat()} className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
