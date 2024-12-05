/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    //crear nueva columna
    return knex.schema.table('proveedores', function(table){
    table.string('direccion');
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
        return knex.schema.table('proveedores',function(table){
        table.dropColumn('direccion');
    });
  
};
