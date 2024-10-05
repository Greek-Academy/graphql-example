import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { createSchema, } from './schema';
import knex, { Knex } from 'knex';

class MyApp {

  private server: express.Express;
  private constructor(conn: Knex) {

    this.server = express();

    const schema = createSchema(conn);
    this.server.post('/graphql', createHandler({ schema }));
  }

  start() {
    this.server.listen({ port: 4000 }, () => {
      console.log('Listening to port 4000');
    });
  }

  static readonly create = async () => {
    // MySQLに接続
    const conn = knex({
      client: 'mysql2',
      connection: {
        host: 'mysql',
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      }
    });

    // インスタンスを作成
    const app = new MyApp(conn);
    return app;
  };
}

// アプリケーションを開始
(async () => {
  const myApp = await MyApp.create();
  myApp.start();
})();