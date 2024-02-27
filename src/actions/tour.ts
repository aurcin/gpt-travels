'use server';

import { cohere } from '@/utils/ai-client';
import db from '@/db';
import { TourAI, TourDB, TourDestination } from '@/types/tour';
import { tourQuery } from '@/utils/ai-client/question';

export async function getExistingTour(destination: TourDestination) {
  const { city, country } = destination;

  const tour = await db.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
  if (!tour) {
    return null;
  }

  const stops = tour.stops.split('-|-');

  return { ...tour, stops };
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

export async function createNewTour(tour: TourAI) {
  const newTour: TourDB = { ...tour, stops: tour.stops.join('-|-') };

  return db.tour.create({
    data: newTour,
  });
}
