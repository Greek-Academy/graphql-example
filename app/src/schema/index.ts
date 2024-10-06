import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // ここにQueryフィールドを追加
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // ここにMutationフィールドを追加
  }
});

export const schema = new GraphQLSchema({
  query,
});