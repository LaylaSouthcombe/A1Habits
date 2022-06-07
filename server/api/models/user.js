const db = require('../dbConfig');

class User {
    constructor(data){
        this.id = data.id
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
    static create({ username, email, passwordDigest }){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query('INSERT INTO users (username, email, password_digest) VALUES ($1, $2, $3) RETURNING *;', [ username, email, passwordDigest ]);
                const user = new User(result.rows[0]);
                resolve(user)
            } catch (err) {
                reject(`Error creating user: ${err}`)
            }
        })
    }
    static findByUsername(username){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query('SELECT * FROM users WHERE username = $1;', [ username ]);
                let user = new User(userData.rows[0]);
                resolve(user);
            } catch (err) {
                reject('User not found');
            };
        });
    };
}
module.exports = User