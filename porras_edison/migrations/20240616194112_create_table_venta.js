/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('venta', table => {
        table.increments('id_vent').primary();
        table.integer('cliente_id').unsigned().notNullable();
        table.integer('producto_id').unsigned().notNullable();
        table.integer('cantidad_vent').notNullable();
        table.decimal('total_vent', 10, 2).notNullable();
        table.timestamps(true, true);
        // Definir las llaves foráneas
        //table.foreign('cliente_id').references('id_cli').inTable('cliente');
        //table.foreign('producto_id').references('id_emp').inTable('producto');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('venta');
};
