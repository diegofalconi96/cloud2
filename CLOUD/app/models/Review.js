const { Model } = require('objection');

class Review extends Model {
    static get tableName() {
        return 'reviews';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['rating', 'comment'],
            properties: {
                id: { type: 'integer' },
                rating: { type: 'integer' },
                comment: { type: 'string', minLength: 1 },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static async getReviews() {
        return await Review.query();
    }

    static async insert(data) {
        return await Review.query().insert(data);
    }

    static async update(data, id) {
        return await Review.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Review.query().deleteById(id);
    }
}

module.exports = Review;
