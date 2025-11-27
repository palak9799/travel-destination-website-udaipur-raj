export interface Place {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  location: string;
  price?: string;
  rating: number;
  tags: string[];
}

export interface DiningSpot {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  priceRange: string;
  imageUrl: string;
  rating: number;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  duration: string;
  cost: string;
  imageUrl: string;
}

export enum Section {
  HOME = 'home',
  ATTRACTIONS = 'attractions',
  DINING = 'dining',
  SHOPPING = 'shopping',
  ACTIVITIES = 'activities',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
