'use client';

import TourList from '@/components/tour/list';
import { getAllTours } from '@/actions/tour';
import { useQuery } from '@tanstack/react-query';

export default function Tours() {
  const { data, isPending } = useQuery({
    queryKey: ['tours'],
    queryFn: () => getAllTours(),
  });

  if (isPending) {
    return <span className='loading'></span>;
  }

  return <TourList data={data} />;
}
