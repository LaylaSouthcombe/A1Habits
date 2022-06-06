const db = require('../dbConfig');

class Entry {
    constructor(data){
        this.user_id = data.user_id
        this.sleep = data.sleep
        this.exercise = data.exercise
        this.water = data.water
        this.smoking = data.smoking
        this.money = data.money
        this.date = data.date
    }
    
    static get all(){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM entries;');
                const entries = result.rows.map(r => new Entry(r))
                resolve(entries)
            } catch (err) {
                reject(`Error retrieving entries: ${err}`)
            }
        })
    }
}
module.exports = Entry