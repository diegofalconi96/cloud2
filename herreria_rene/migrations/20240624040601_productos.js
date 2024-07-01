/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('productos', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.decimal('precio', 10, 2).notNullable(); // Decimal con 10 dígitos en total y 2 decimales
        table.boolean('Estado').defaultTo(true); // Valor booleano para indicar disponibilidad
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('productos')
  
};
