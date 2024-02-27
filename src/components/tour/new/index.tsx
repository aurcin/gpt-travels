'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import TourInfo from '@/components/tour/info';
import {
  createNewTour,
  generateTourData,
  getExistingTour,
} from '@/actions/tour';
import { TourDestination } from '@/types/tour';

export default function NewTour() {
  const queryClient = useQueryClient();
  const { mutate, isPending, data } = useMutation({
    mutationFn: async (destination: TourDestination) => {
      const existingTour = await getExistingTour(destination);
      if (existingTour) {
        return existingTour;
      }

      const newTour = await generateTourData(destination);

      if (newTour) {
        await createNewTour(newTour);
        queryClient.invalidateQueries({ queryKey: ['tours'] });
        return newTour;
      }

      toast.error('No matching city found...');
      return null;
    },
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination: TourDestination = Object.fromEntries(
      formData.entries()
    ) as unknown as TourDestination;
    mutate(destination);
  }

  if (isPending) {
    return <span className='loading loading-lg'></span>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='max-w-2xl'>
        <h2 className='mb-4'>Select your dream destination</h2>
        <div className='join w-full'>
          <input
            type='text'
            className='input input-bordered join-item w-full'
            placeholder='city'
            name='city'
            required
          />
          <input
            type='text'
            className='input input-bordered join-item w-full'
            placeholder='country'
            name='country'
            required
          />
          <button className='btn btn-primary join-item' type='submit'>
            Generate Tour
          </button>
        </div>
      </form>
      <div className='mt-16'>{data && <TourInfo tour={data} />}</div>
    </>
  );
}
