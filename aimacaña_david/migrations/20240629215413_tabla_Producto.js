

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('producto',table =>{
        table.increments('id').primary();
        table.string('nombre',255).notNullable();
        table.text('descripcion').nullable();
        table.decimal('precio',10,2).notNullable();
        table.integer('stock').notNullable();
        table.integer('bodega_id').unsigned().notNullable().references('id').inTable('bodega').onDelete('CASCADE');
    })
        
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('producto')
  
};
