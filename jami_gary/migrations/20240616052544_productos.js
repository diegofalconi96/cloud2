/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('producto', table =>
    {
        table.increments('id_producto').primary();
        table.string('nombre', 100).notNullable();
        table.text('descripcion');
        table.string('categoria', 100);
        table.decimal('precio', 10, 2).notNullable();
        table.integer('cantidad_nventario');
        table.string('proveedor', 100);
        table.date('fecha_adquisicion');
    }
    )
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('producto')
  
};
