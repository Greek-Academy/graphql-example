import { GraphQLList, GraphQLString } from 'graphql';
import { Knex } from 'knex';
import { ImageType } from '../types/image-type';

export type GetImagesOption = {
  category: string;
};

export const getImagesFromDb = async (params: {
  db: Knex,
  args: { category: string }
}) => {
  
}

export const imagesField = {
  type: new GraphQLList(ImageType),
  resolve: (_source: any, args: any, context: { db: Knex }) => {
    
  },
};