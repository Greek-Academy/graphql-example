import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Knex } from 'knex';
import { UserType } from "../types/user-type";

export type GetImagesOption = {
  category: string;
};

export class ImageService {
  constructor(
    private readonly db: Knex,
  ) {}

  async getImages() {
    
  }
}