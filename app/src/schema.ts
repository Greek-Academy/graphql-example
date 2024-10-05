import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';
import { Knex } from 'knex';
import { ImageService, ImageType } from './images';


export const createSchema = (conn: Knex) => {
  const imageService = new ImageService(conn);

  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        // ここにフィールドを追加
        images: {
          type: GraphQLString,
          args: {
            category: {
              description: '(optional)filtering category',
              type: GraphQLString,
            },
          },
          resolve: (source, args, context, info) => {
            return 'hello';
            // return imageService.getImageById(1);
          } 
        },
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
            first: 'Naoki',
            last: 'Ishihara',
            age: 32,
          }},
        },
      }
    }),
  });

  return schema;
};


