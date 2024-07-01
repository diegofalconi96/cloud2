/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('factura', table => {
        table.increments('id').primary();
        table.string('numero_factura').notNullable();
        table.date('fecha_emision').notNullable();
        table.string('cliente_nombre').notNullable();
        table.decimal('monto_total', 10, 2).notNullable();
        table.string('tipo_pago').notNullable(); // Tipo de pago
        table.timestamps(true, true);
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('factura');
  
};
