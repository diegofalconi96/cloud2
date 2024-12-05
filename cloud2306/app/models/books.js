const { Model } = require('objection');

class Books extends Model {
    static get tableName() {
        return 'books';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title', 'publicationdate', 'author_id', 'genre_id'],
            properties: {
                id: { type: 'integer' },
                title: { type: 'string', minLength: 1 },
                publicationdate: { type: 'string', format: 'date' },
                author_id: { type: 'integer' },
                genre_id: { type: 'integer' }
            }
        };
    }

    static get relationMappings() {
        const Authors = require('./authors'); // Asegúrate de tener el modelo Authors definido
        const Genres = require('./genres'); // Asegúrate de tener el modelo Genres definido

        return {
            author: {
                relation: Model.BelongsToOneRelation,
                modelClass: Authors,
                join: {
                    from: 'books.author_id',
                    to: 'authors.id'
                }
            },
            genre: {
                relation: Model.BelongsToOneRelation,
                modelClass: Genres,
                join: {
                    from: 'books.genre_id',
                    to: 'genres.id'
                }
            }
        };
    }

    static async getBooks() {
        return await Books.query();
    }

    static async insert(data) {
        return await Books.query().insert(data);
    }

    static async update(id, data) {
        return await Books.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Books.query().deleteById(id);
    }
}

module.exports = Books;
