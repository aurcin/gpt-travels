import { TourDestination } from '@/types/tour';

export function tourQuery(destination: TourDestination) {
  const { city, country } = destination;
  return `You are a tour guide,
  find a ${city} in country ${country}.
  If ${city} in ${country} exists, create a list of things families can do in this ${city}.
  Once you have a list, create a one day tour. Response should be in the following JSON format:
  
  {
    "tour":{
        "city":"${city}",
        "country":"${country}",
        "title":"title of the tour",
        "description":"description of the city and tour",
        "stops":["short pharagraph on the stop 1", "short pharagraph on the stop 2", "short pharagraph on the stop 3"]
    }
  }

  your answer should start with { and end with }. Each stop pharagraph must start and end with quotations "" and no quotes inside.
  Answer is so strict because I want to use JSON.parse(your answer), and if you add something, it fails my parse.

  If you can't find info on exact ${city}, or ${country} does not exist, or it's population is less than 1, or it is not located in the following ${country} return 
 
  {
    "tour":null
  }
  
  with no additional characters.
    `;
}
