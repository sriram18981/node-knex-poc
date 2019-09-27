'use strict';

var knex = require('knex')({
    client: 'mysql',
    debug: true,
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'password',
      database : 'knex'
    },
    pool: {min: 0, max: 10}
  });