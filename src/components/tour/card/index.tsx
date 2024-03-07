import Link from 'next/link';

import * as paths from '@/utils/paths';
import { TourListItem } from '@/types/tour';

interface TourCardProps {
  tour: TourListItem;
}

export default function TourCard(props: TourCardProps) {
  const { city, id, country } = props.tour;
  return (
    <Link
      href={paths.tour(id)}
      className='card card-compact rounded-xl bg-base-100'>
      <div className='card-body items-center text-center'>
        <h2 className='card-title text-center'>
          {city}, {country}
        </h2>
      </div>
    </Link>
  );
}
