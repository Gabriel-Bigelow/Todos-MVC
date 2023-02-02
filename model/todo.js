const db = require('./database');

const create = async (description) => {
    const query = `INSERT INTO todo (description)
    VALUES ('${description}')
    RETURNING *`;

    return await db.query(query);
};

const get = () => {
    const query = `SELECT * FROM todo`;

    return db.query(query);
};

const remove = (id) => {
    const query = `DELETE FROM todo
    WHERE todo_id = ${id}`;

    return db.query(query);
};

module.exports = {
    create, get, remove
}
