import { Link } from '@/types/links';
import * as paths from '@/utils/paths';

export const links: Link[] = [
  {
    href: paths.chat(),
    label: 'chat',
  },
  {
    href: paths.tours(),
    label: 'tours',
  },
  {
    href: paths.toursNew(),
    label: 'new tour',
  },
  {
    href: paths.profile(),
    label: 'profile',
  },
];
