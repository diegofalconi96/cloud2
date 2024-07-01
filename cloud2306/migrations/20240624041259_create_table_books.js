/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('books', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.date('publicationdate').notNullable();
        table.timestamps(true, true);
        table.integer('author_id').unsigned().notNullable();
        table.integer('genre_id').unsigned().notNullable();
        table.foreign('author_id').references('id').inTable('authors');
        table.foreign('genre_id').references('id').inTable('genres');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('books');
};
