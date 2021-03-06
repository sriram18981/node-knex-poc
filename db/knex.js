'use strict';

const knex = require('./dbInit');

knex.schema
  .createTable('users', function(table) {
    table.increments('id');
    table.string('user_name');
  })
 
  // ...and another
  .createTable('accounts', function(table) {
    table.increments('id');
    table.string('account_name');
    table
      .integer('user_id')
      .unsigned()
      .references('users.id');
  })
 
  // Then query the table...
  .then(function() {
    return knex('users').insert({ user_name: 'Tim' });
  })
 
  // ...and using the insert id, insert into the other table.
  .then(function(rows) {
    return knex('accounts').insert({ account_name: 'knex', user_id: rows[0] });
  })
 
  // Query both of the rows.
  .then(function() {
    return knex('users')
      .join('accounts', 'users.id', 'accounts.user_id')
      .select('users.user_name as user', 'accounts.account_name as account');
  })
 
  // .map over the results
  .map(function(row) {
    console.log(row);
  })
 
  // Finally, add a .catch handler for the promise chain
  .catch(function(e) {
    console.error(e);
  });


  module.exports = {knex};

