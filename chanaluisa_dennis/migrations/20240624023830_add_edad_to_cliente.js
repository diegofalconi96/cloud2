/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    //crear nueva columna
    return knex.schema.table('clientes', function(table){
    table.integer('edad');
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
        return knex.schema.table('clientes',function(table){
        table.dropColumn('edad');
    });
  
};
