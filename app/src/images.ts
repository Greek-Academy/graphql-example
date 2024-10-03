import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } from "graphql";
import { OwnerType, getOwnerById } from "./owners";

const imagesData = [
  {
    id: 1,
    title: "Stacked Brwonies",
    owner: getOwnerById(572949),
    category: "Desserts",
    url: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
  },
  {
    id: 2,
    title: "Shallow focus photography of Cafe Latte",
    owner: getOwnerById(324989),
    category: "Coffee",
    url: "https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg",
  },
  {
    id: 3,
    title: "Sliced Cake on White Saucer",
    owner: getOwnerById(222549),
    category: "Desserts",
    url: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg",
  },
  {
    id: 4,
    title: "Beverage breakfast brewed coffee caffeine",
    owner: getOwnerById(545066),
    category: "Coffee",
    url: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
  },
  {
    id: 5,
    title: "Pancake with Sliced Strawberry",
    owner: getOwnerById(122861),
    category: "Desserts",
    url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  },
  {
    id: 6,
    title: "US One doller bills",
    owner: getOwnerById(545066),
    category: "Money",
    url: "https://images.pexels.com/photos/545064/pexels-photo-545064.jpeg",
  },
  {
    id: 7,
    title: "Fresh Assortment of Bananas, Grapes, and Pomegranate",
    owner: getOwnerById(545066),
    category: "Fruits",
    url: "https://images.pexels.com/photos/545027/pexels-photo-545027.jpeg",
  },
  {
    id: 8,
    title: "Berry Tarts Topped with Fresh Yogurt and Oats",
    owner: getOwnerById(572949),
    category: "Desserts",
    url: "https://images.pexels.com/photos/3026807/pexels-photo-3026807.jpeg",
  },
  {
    id: 9,
    title: "Fruit Salads in Plate",
    owner: getOwnerById(572949),
    category: "Food",
    url: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
  },
  {
    id: 10,
    title: "Person Holding Food Bowl",
    owner: getOwnerById(572949),
    category: "Food",
    url: "https://images.pexels.com/photos/1334128/pexels-photo-1334128.jpeg",
  },
  {
    id: 11,
    title: "St patrick cathedral",
    owner: getOwnerById(324989),
    category: "Scene",
    url: "https://images.pexels.com/photos/19403554/pexels-photo-19403554/free-photo-of-st-patrick-cathedral.jpeg",
  },
  {
    id: 12,
    title: "Sulawesi Utara, Indonesia",
    owner: getOwnerById(324989),
    category: "Scene",
    url: "https://images.pexels.com/photos/6626165/pexels-photo-6626165.jpeg",
  },
  {
    id: 13,
    title: "Minimalist Skylight Framing a Clear Blue Sky",
    owner: getOwnerById(324989),
    category: "Scene",
    url: "https://images.pexels.com/photos/6626100/pexels-photo-6626100.jpeg",
  },
  {
    id: 14,
    title: "Salami With Sunny Sideup Egg",
    owner: getOwnerById(122861),
    category: "Food",
    url: "https://images.pexels.com/photos/376463/pexels-photo-376463.jpeg",
  },
  {
    id: 15,
    title: "Outdoor Dining with a Stunning Mountain and Lake View",
    owner: getOwnerById(222549),
    category: "Scene",
    url: "https://images.pexels.com/photos/15621034/pexels-photo-15621034.jpeg",
  },
];

export const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: GraphQLString, },
    category: { type: GraphQLString, },
    owner: { type: OwnerType, },
    url: { type: GraphQLString, },
  }),
});

export const images = new Map<number, {}>();
imagesData.forEach(image => {
  images.set(image.id, image);
});

export const getImageById = (imageId: number) => {
  return images.get(imageId);
};

export const getImages = (category: string) => {
  if (!category) {
    return imagesData;
  }
  category = category.toLowerCase();

  return imagesData.filter(
    (image) => image.category.toLowerCase() === category,
  );
};
