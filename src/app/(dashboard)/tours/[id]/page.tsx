import { redirect } from 'next/navigation';
import Link from 'next/link';

import TourInfo from '@/components/tour/info';
import { Tour } from '@/types/tour';
import { getTour } from '@/actions/tour';
import * as paths from '@/utils/paths';
import { getCityImage } from '@/utils/queries/image';
import Image from 'next/image';

interface TourPageProps {
  params: {
    id: string;
  };
}

export default async function TourPage(props: TourPageProps) {
  const { id } = props.params;

  const tour = await getTour(id);
  if (!tour) {
    return redirect(paths.tours());
  }

  const tourImage = await getCityImage(tour.city);

  return (
    <div>
      <Link className='btn btn-secondary mb-12' href={paths.tours()}>
        Back To Tours
      </Link>
      {tourImage && (
        <Image
          src={tourImage}
          width={300}
          height={300}
          className='rounded-xl shadow-xl mb-16 h-96 object-cover'
          alt={tour.title}
          priority
        />
      )}
      <TourInfo tour={tour as Tour} />
    </div>
  );
}
