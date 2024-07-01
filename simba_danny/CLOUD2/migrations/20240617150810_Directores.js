/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Directores", (table) => {
        table.increments("id_director").primary();
        table.string("nombre").notNullable();
        table.string("apellido", 10, 2).notNullable();
        table.string("origen").notNullable();
        table.integer("edad").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Directores");
};
