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

  async getImages(args: { category: string }) {
    // SELECT
    //   image.*, category.name AS category, image.id as id
    //   JSON_OBJECT(
    //     'id', user.id,
    //     'name', user.name,
    //     'username', user.username,
    //     'stars', user.stars,
    //     'avatar_url', user.avatar_url
    //   ) as user
    // FROM
    //   image
    //   JOIN category ON image.category_id = category.id
    //   JOIN user ON image.user_id = user.id
    const selectAll = this.db('image')
      .join('category', 'image.category_id', 'category.id')
      .join('user', 'image.user_id', 'user.id')
      .select('image.*')
      .select('category.name as category')
      .select('image.id as id')
      .select(this.db.raw(`
        JSON_OBJECT(
          "id", user.id,
          "name",user.name,
          "username",user.username,
          'stars', user.stars,
          'avatar_url', user.avatar_url
        ) as user`))
    if (!args.category) {
      return selectAll;
    }
  
    return selectAll.where({
      'category.name': args.category
    });
  }
}
