import { Activity, DiningSpot, Place } from './types';

export const ATTRACTIONS: Place[] = [
  {
    id: '1',
    name: 'City Palace',
    description: 'A monumental complex of 11 palaces, courtyards and gardens, famed for its intricate peacock mosaics.',
    imageUrl: 'https://picsum.photos/id/1040/800/600',
    location: 'Old City, Udaipur',
    price: '₹400 per person',
    rating: 4.8,
    tags: ['History', 'Architecture', 'Lake View']
  },
  {
    id: '2',
    name: 'Lake Pichola',
    description: 'An artificial fresh water lake, created in the year 1362 AD, named after the nearby Picholi village.',
    imageUrl: 'https://picsum.photos/id/1015/800/600',
    location: 'Udaipur',
    price: 'Free (Boat rides chargeable)',
    rating: 4.7,
    tags: ['Nature', 'Boating', 'Sunset']
  },
  {
    id: '3',
    name: 'Jag Mandir',
    description: 'A palace built on an island in Lake Pichola. It is also called the "Lake Garden Palace".',
    imageUrl: 'https://picsum.photos/id/1039/800/600',
    location: 'Lake Pichola',
    price: '₹325 (includes boat ride)',
    rating: 4.6,
    tags: ['History', 'Island', 'Scenic']
  },
  {
    id: '4',
    name: 'Saheliyon Ki Bari',
    description: 'A major garden and popular tourist space in Udaipur, featuring fountains and kiosks, a lotus pool and marble elephants.',
    imageUrl: 'https://picsum.photos/id/1043/800/600',
    location: 'Panchwati',
    price: '₹10 (Indians), ₹50 (Foreigners)',
    rating: 4.5,
    tags: ['Garden', 'Nature', 'Relaxation']
  },
  {
    id: '5',
    name: 'Monsoon Palace (Sajjangarh)',
    description: 'A hilltop palatial residence offering panoramic views of the city\'s lakes, palaces and surrounding countryside.',
    imageUrl: 'https://picsum.photos/id/1018/800/600',
    location: 'Bansdara Mountain',
    price: '₹60 (Indians), ₹300 (Foreigners)',
    rating: 4.4,
    tags: ['Viewpoint', 'Sunset', 'Wildlife']
  },
  {
    id: '6',
    name: 'Jagdish Temple',
    description: 'A large Hindu temple in the middle of Udaipur in Rajasthan, just outside the royal palace.',
    imageUrl: 'https://picsum.photos/id/1067/800/600',
    location: 'Near City Palace',
    price: 'Free',
    rating: 4.8,
    tags: ['Spirituality', 'Architecture', 'Culture']
  }
];

export const DINING: DiningSpot[] = [
  {
    id: 'd1',
    name: 'Ambrai Restaurant',
    cuisine: 'North Indian, Rajasthani',
    description: 'Lakeside dining with a spectacular view of the City Palace and Lake Pichola.',
    priceRange: '₹1200 - ₹2000 for two',
    rating: 4.6,
    imageUrl: 'https://picsum.photos/id/431/800/600'
  },
  {
    id: 'd2',
    name: 'Upre by 1559 AD',
    cuisine: 'Mughlai, Rajasthani',
    description: 'Rooftop restaurant offering a romantic ambiance and traditional flavors.',
    priceRange: '₹1500 - ₹2500 for two',
    rating: 4.5,
    imageUrl: 'https://picsum.photos/id/292/800/600'
  },
  {
    id: 'd3',
    name: 'Jheel\'s Ginger Coffee Bar',
    cuisine: 'Cafe, Italian',
    description: 'A cozy cafe right by the water, perfect for breakfast and coffee.',
    priceRange: '₹400 - ₹800 for two',
    rating: 4.4,
    imageUrl: 'https://picsum.photos/id/425/800/600'
  }
];

export const MARKETS = [
  {
    id: 'm1',
    name: 'Hathi Pol Bazaar',
    specialty: 'Miniature paintings, Pichwai art, and authentic handicrafts.',
    timing: '9:30 AM - 5:30 PM (Closed on Sundays)',
    imageUrl: 'https://picsum.photos/id/364/800/600'
  },
  {
    id: 'm2',
    name: 'Bada Bazaar',
    specialty: 'Traditional Bandhani sarees, jewelry, and camel leather footwear.',
    timing: '10:00 AM - 8:00 PM',
    imageUrl: 'https://picsum.photos/id/395/800/600'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'a1',
    name: 'Dharohar Folk Dance Show',
    description: 'A vibrant hour-long cultural show at Bagore Ki Haveli featuring puppet shows and folk dances.',
    duration: '1 Hour (7:00 PM - 8:00 PM)',
    cost: '₹90 (Indians), ₹150 (Foreigners)',
    imageUrl: 'https://picsum.photos/id/453/800/600'
  },
  {
    id: 'a2',
    name: 'Sunset Boat Ride',
    description: 'Enjoy the golden hour on Lake Pichola with views of the illuminated palaces.',
    duration: '45 Mins',
    cost: '₹400 - ₹800',
    imageUrl: 'https://picsum.photos/id/384/800/600'
  }
];
