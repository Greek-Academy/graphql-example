import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema';

// Create an express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.post('/graphql', createHandler({ schema }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');
