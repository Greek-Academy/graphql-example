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
  const selectAll = params.db('image')
    .join('category', 'image.category_id', 'category.id')
    .join('user', 'image.user_id', 'user.id')
    .select('image.*')
    .select('category.name as category')
    .select('image.id as id')
    .select(params.db.raw(`
      JSON_OBJECT(
        "id", user.id,
        "name",user.name,
        "username",user.username,
        'stars', user.stars,
        'avatar_url', user.avatar_url
      ) as user`))
  if (!params.args.category) {
    return selectAll;
  }

  return selectAll.where({
    'category.name': params.args.category
  });
}

export const imagesField = {
  type: new GraphQLList(ImageType),
  args: {
    category: {
      description: 'category filtering',
      type: GraphQLString,
    },
  },
  resolve: (_source: any, args: any, context: { db: Knex }) => {
    return getImagesFromDb({
      db: context.db,
      args,
    });
  },
};
