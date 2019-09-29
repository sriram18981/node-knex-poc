'use strict';

var knex = require('knex')({
    client: 'mysql',
    debug: true,
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'password',
      database: 'knex'
    },
    pool: {min: 0, max: 10}
  });


  knex.schema.withSchema('knex').createTable('users', function(table){
    table.increments('id').primary();
    table.string('name', 255).notNullable().comment('user name');
    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

  module.exports = knex;
