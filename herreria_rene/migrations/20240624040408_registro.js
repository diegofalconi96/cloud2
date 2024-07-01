/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    /* Estructura para crear la tabla  */

    return knex.schema.createTable('registro',table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('apellido').notNullable();
        table.integer('edad').notNullable();
        table.string('email').notNullable().unique();
        table.timestamp('dia_hora');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    /* Estructura para eliminar Tabla  */
    return knex.schema.dropTable('registro')
  
};
