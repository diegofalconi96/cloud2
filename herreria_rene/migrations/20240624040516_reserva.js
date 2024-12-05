/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('reserva', table => {
        table.increments('id').primary();
        table.integer('cliente_id').unsigned().notNullable(); // unsigned() --> El campo no puede contener valores negativos y solo puede almacenar valores positivos
        table.foreign('cliente_id').references('registro.id'); // Definición de la clave foránea
        table.date('fecha').notNullable();
        table.string('estado').notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('reserva')
  
};
