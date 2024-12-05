/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.table('pedidos', function(table) {
        // Agregar la columna deCustomer
        table.integer('idproducto').unsigned();
    
        // Configurar la clave foránea
        table.foreign('idproducto').references('id').inTable('producto');
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('pedidos', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('idproducto');
    
        // Eliminar la columna deCustomer
        table.dropColumn('idproducto');
      });
  
};