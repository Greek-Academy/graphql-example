import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Knex } from 'knex';
import { UserType } from "./user";

type ImageRow = {
  id: number;
  title: string;
  category_id: number;
  user_id: number;
};

export const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: GraphQLString, },
    category: { type: GraphQLString, },
    user_id: { type: GraphQLInt, },
    url: { type: GraphQLString, },
  }),
});

export class ImageService {
  constructor(
    private readonly conn: Knex,
  ) {

  }

  async getImageById(imageId: number) {
    const rows = await this.conn<ImageRow>('images')
      .select('*')
      .where({
        'id': imageId
      })
      .limit(1);
    if (rows.length === 0) {
      return null;
    }

    return rows[0];
  }
}

// export const getImageById = (imageId: number) => {
//   return imageMap.get(imageId);
// };

// export const getImages = (category: string) => {
//   const values = Array.from(imageMap.values());
//   if (!category) {
//     return values;
//   }
//   category = category.toLowerCase();

//   return values.filter(
//     (image) => image.category.toLowerCase() === category,
//   );
// };
