
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('sales', function(table) {
        // Agregar la columna 
        table.integer('deOrders').unsigned();
    
        // Configurar la clave foránea
        table.foreign('deOrders').references('id').inTable('orders');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('sales', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('deOrders');
    
        // Eliminar la columna 
        table.dropColumn('deOrders');
    });
  
};