const db = require('../dbConfig');

class User {
    constructor(data){
        this.username = data.username
        this.email = data.email
        this.passwordDigest = data.password_digest
    }
    
    static get all(){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM users;');
                const users = result.rows.map(r => new User(r))
                resolve(users)
            } catch (err) {
                reject(`Error retrieving users: ${err}`)
            }
        })
    }
    static create({ username, email, password }){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query('INSERT INTO users (username, email, password_digest) VALUES ($1, $2, $3) RETURNING *;', [ username, email, password ]);
                const user = new User(result.rows[0]);
                resolve(user)
            } catch (err) {
                reject(`Error creating user: ${err}`)
            }
        })
    }
}
module.exports = User