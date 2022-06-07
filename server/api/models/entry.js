const db = require('../dbConfig');
const User = require('./user');
class Entry {
    constructor(data){
        this.id = data.id
        this.user_id = data.user_id
        this.sleep_entry = data.sleep_entry
        this.exercise_entry = data.exercise_entry
        this.water_entry = data.water_entry
        this.smoking_entry = data.smoking_entry
        this.money_entry = data.money_entry
        this.date_entry = data.date_entry
    }
    
    // Get All
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



    //create
    static async create(entry){
        return new Promise (async (resolve, reject) => {
            try {
                const { plant_name, nickname, frequency, count } = entry;
                console.log(entry);
                let createdEntry = await db.query(`INSERT INTO entry (sleep, exercise, water, smoking, money, date ) VALUES ($1, $2, $3, $4) RETURNING *;`, [sleep, exercise, water, smoking, money, date]);
                let newEntry = new Entry(createdEntry.rows[0]);
                console.log(newEntry);
                resolve  (newEntry);
            } catch (err) {
                console.log(err);
                reject('Entry could not be created');
            }
        })
    }


//Find by user_ID

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let entryData = await db.query(`SELECT * FROM entry WHERE user_id = $1;`, [ id ]);
                let entry = new Event(entryData.rows[0]);
                resolve (entry);
            } catch (err) {
                reject('Entry not found');
                console.log(err);
            }
        })
    }




    //Destroy

    static deleteEntry(id) {
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.query('DELETE FROM entry WHERE id = $1 RETURNING *;', [ id ]);
                resolve('Entry was deleted')
            } catch (err) {
                reject('Entry could not be deleted')
                console.log(err)
            }
        })
    };









    static async getCurrentSleepStreak(username){
        return new Promise(async (resolve, reject) => {
            try {
                let counter = 0;
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                console.log(entries)
                for( let i = 0; i < entries.length; i++) {
                    if(entries[i].sleep_entry === false) { break; }
                    counter += 1
                }
                console.log(counter)
                resolve (result.rows[0]);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
}
module.exports = Entry




  
