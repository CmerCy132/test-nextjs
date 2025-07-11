export interface Item {
  id: number;
  title: string;
  description: string;
  isFavorite: boolean;
  date: string;
  addedBy: string;
  imageUrl: string;
}

export const dummyData: Item[] = [
  {
    id: 1,
    title: 'Delicious Rice',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isFavorite: true,
    date: 'March 6, 2024',
    addedBy: 'Johnny',
    imageUrl: '/food1.jpg',
  },
  {
    id: 2,
    title: 'Spicy Dish',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text.',
    isFavorite: false,
    date: 'March 6, 2024',
    addedBy: 'Johnny',
    imageUrl: '/food2.jpg',
  },
  {
    id: 3,
    title: 'Mixed Platter',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    isFavorite: true,
    date: 'March 6, 2024',
    addedBy: 'Johnny',
    imageUrl: '/food3.jpg',
  },
];
