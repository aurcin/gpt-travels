import axios from 'axios';

import * as paths from '@/utils/paths';

export async function getCityImage(city: string) {
  const unsplash_URL = paths.unsplash(city);
  const { data } = await axios.get(unsplash_URL);

  const tourImage = data?.results[0]?.urls?.raw;
  return tourImage || null;
}
