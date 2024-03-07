export interface TourDestination {
  city: string;
  country: string;
}

export interface TourBase {
  city: string;
  country: string;
  title: string;
  description: string;
}

export interface Tour extends TourBase {
  id: string;

  stops: string[];
  image?: string;

  createdAt: string;
  updatedAt: string;
}

export interface TourDB extends TourBase {
  stops: string;
  image?: string;
}

export interface TourAI extends TourBase {
  stops: string[];
}

export interface TourListItem {
  id: string;
  city: string;
  country: string;
  title: string;
  description: string;
  stops: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}
