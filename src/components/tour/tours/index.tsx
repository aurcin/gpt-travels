'use client';

import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState, MouseEvent } from 'react';

import TourList from '@/components/tour/list';
import { getAllTours } from '@/actions/tour';

export default function Tours() {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isPending } = useQuery({
    queryKey: ['tours', searchTerm],
    queryFn: () => getAllTours(searchTerm),
  });

  function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleSearchTermReset(_e: MouseEvent<HTMLButtonElement>) {
    setSearchTerm('');
  }

  return (
    <>
      <form className='max-w-lg mb-12'>
        <div className='join w-full'>
          <input
            className='input input-bordered join-item w-full'
            type='text'
            placeholder='London'
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button
            className='btn btn-primary join-item'
            type='button'
            disabled={searchTerm.length === 0}
            onClick={handleSearchTermReset}>
            Reset
          </button>
        </div>
      </form>
      {isPending ? <span className='loading'></span> : <TourList data={data} />}
    </>
  );
}
