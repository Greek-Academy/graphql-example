import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import { addImageMutation, imagesField } from './image-service';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    images: imagesField,
    
    hello: {
      type: GraphQLString,
      resolve: () => { return "Hello World!!"; },
    },
    me: {
      type: new GraphQLObjectType({
        name: 'Human',
        fields: {
          first: { type: GraphQLString },
          last: { type: GraphQLString },
          age: { type: GraphQLInt }
        }
      }),
      resolve: () => { return {
        first: 'Masashi',
        last: 'Katsumata',
        age: 32,
      }},
    },
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addImage: addImageMutation
  }
});

export const schema = new GraphQLSchema({
  query,
  mutation,
});
