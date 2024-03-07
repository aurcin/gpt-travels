import TourCard from '@/components/tour/card';
import { TourListItem } from '@/types/tour';

interface TourListProps {
  data?: TourListItem[];
}

export default function TourList(props: TourListProps) {
  const { data } = props;

  if (!data?.length) {
    return <h4 className='text-lg'>No tours found...</h4>;
  }

  const renderList = data.map(tour => {
    const { id } = tour;
    return <TourCard key={id} tour={tour} />;
  });

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>{renderList}</div>
  );
}
