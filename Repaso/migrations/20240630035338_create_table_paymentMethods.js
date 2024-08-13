/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('paymentMethods',table => { /**metodo de pago */
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('type').notNullable();/**tipo de pago*/
        table.string('card_number').nullable();/**numero de tarjeta */
        table.string('expiry_date').nullable(); /**fecha de caducidad */
        table.timestamps(true, true);
        
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('paymentMethods')
};