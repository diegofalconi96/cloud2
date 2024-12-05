/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('vehiculo', function(table) {
        // Agregar la columna conductor_id
        table.integer('conductor_id').unsigned();
    
        // Configurar la clave foránea
        table.foreign('conductor_id').references('conductor.id');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('vehiculo', function(table) {
        // Agregar la columna conductor_id
        table.dropForeign('conductor_id');
    
        // Configurar la clave foránea
        table.dropColumn('conductor_id');
      });
};
