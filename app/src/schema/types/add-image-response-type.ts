import { GraphQLBoolean, GraphQLObjectType } from "graphql";

export const AddImageResponseType = new GraphQLObjectType({
  name: 'AddImageResponse',
  fields: {
    success: {
      type: GraphQLBoolean,
      description: 'true if success. Otherwise false'
    }
  }
});