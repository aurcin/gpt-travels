import { links } from '@/utils/links';
import Link from 'next/link';

export default function NavLinks() {
  const renderLinks = links.map(link => {
    const { href, label } = link;
    return (
      <li key={href}>
        <Link href={href} className='capitalize'>
          {label}
        </Link>
      </li>
    );
  });
  return (
    <nav>
      <ul className='menu text-base-content'>{renderLinks}</ul>
    </nav>
  );
}
