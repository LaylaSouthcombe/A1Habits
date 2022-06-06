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
}
module.exports = User