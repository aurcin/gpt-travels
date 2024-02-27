'use server';

import { cohere } from '@/utils/ai-client';

import { TourDestination } from '@/types/tour';
import { tourQuery } from '@/utils/ai-client/question';

export async function getExistingTour(destination: TourDestination) {
  return null;
}

export async function generateTourData(destination: TourDestination) {
  const input = tourQuery(destination);

  try {
    const response = await cohere.chat({
      message: input,
      temperature: 0,
    });

    const tourData = JSON.parse(response.text);

    if (!tourData.tour) {
      return null;
    }

    return tourData.tour;
  } catch (error) {
    return null;
  }
}

export async function createNewTour(tour: any) {
  return null;
}
