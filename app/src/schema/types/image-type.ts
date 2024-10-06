import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UserType } from "./user-type";

export const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: GraphQLString, },
    category: { type: GraphQLString, },
    user: { type: UserType, },
    url: { type: GraphQLString, },
  }),
});
