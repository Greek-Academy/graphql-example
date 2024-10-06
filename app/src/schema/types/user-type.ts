import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    username: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString, },
    stars: { type: GraphQLInt, },
    avatar_url: { type: GraphQLString, },
  }),
});

