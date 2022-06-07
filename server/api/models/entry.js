const db = require('../dbConfig');

class Entry {
    constructor(data){
        this.id = data.id
        this.user_id = data.user_id
        this.sleep = data.sleep
        this.exercise = data.exercise
        this.water = data.water
        this.smoking = data.smoking
        this.money = data.money
        this.date = data.date
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
        });
    };


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
        });
    };



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


    //Filter Entry by Date 
    
    // static filterHabitsByDate(data) {
    //     return new Promise(async (res, rej) => {
    //       try {
    //         const { date } = data;
    //         let result = await db.query(
    //           `SELECT * FROM entry WHERE date = $1 ORDER BY id DESC;`,
    //           [date]
    //         );
    //         let entry = result.rows;
    //         res(entry);
    //       } catch (err) {
    //         rej("Could not receive this entry ");
    //       }
    //     });
    //   }
    
module.exports = Entry




  
