import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import {
  getImageById,
  getImages,
  ImageType,
} from './images';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      image: {
        type: ImageType,
        args: {
          id: {
            description: 'id of the image',
            type: new GraphQLNonNull(GraphQLInt),
          },
        },
        resolve: (_source, { id }) => getImageById(id),
      },
      images: {
        type: new GraphQLList(ImageType),
        args: {
          category: {
            description: 'image category',
            type: GraphQLString,
          }
        },
        resolve: (_source, { category }) => getImages(category),
      }
    },
  }),
});

