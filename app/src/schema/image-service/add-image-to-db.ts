import { GraphQLString } from "graphql";
import { Knex } from "knex";
import { AddImageResponseType } from "../types/add-image-response-type";



export const addImageMutation = {
  type: AddImageResponseType,
  args: {
    title: { type: GraphQLString },
    url: { type: GraphQLString },
  },
  resolve: (_source: any, args: any, context: { db: Knex }) => {
    console.log(args);
    return {
      success: true,
    };
  },
}