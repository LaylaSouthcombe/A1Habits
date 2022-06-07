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


    //FIND BY USER ID 

    static findById(user_id){
        return new Promise (async (resolve, reject) => {
            try {
                let entryData = await db.query(`SELECT * FROM entries WHERE user_id = $1;`, [ user_id ]);
                let entry = new Event(entryData.rows[0]);
                resolve (entry);
            } catch (err) {
                reject('Entry not found');
                console.log(err);
            }
        })
    }

    // CREATE

    static async create(entry){
        return new Promise (async (resolve, reject) => {
            try {
                const { sleep, exercise, water, smoking, money, date } = entryData;
                console.log(entry);
                let createdEntry = await db.query(`INSERT INTO entries (sleep, exercise, water, smoking, money, date ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`, [sleep, exercise, water, smoking, money, date]);
                let newEntry = new Entry(createdEntry.rows[0]);
                console.log(newEntry);
                resolve  (newEntry);
            } catch (err) {
                console.log(err);
                reject('Entry could not be created');
            }
        })
    }

    // //ANOTHER COPY OF CREATE DRAFT


    // static async create(entry) {
    //     return new Promise(async (resolve, reject) => {
    //       try {
    //         const { sleep, exercise, water, smoking, money, date } = entryData;
    
    //         let result = await db.query(
    //           `INSERT INTO entries (sleep, exercise, water, smoking, money, date) VALUES($1, $2, $3, $4, $5, $6) RETURNING * ;`,
    //           [ sleep, exercise, water, smoking, money, date ]
    //         );
    //         let newEntry = new Entry(result.rows[0]);
    //         console.log(newEntry);
    //         resolve(newEntry);
    //       } catch (err) {
    //         reject(`Entry could not be created, error: ${err}`);
    //       }
    //     });
    //   }



    //UPDATE  


    static update(entry) {
        return new Promise (async (resolve, reject) => {
            try {
                const { sleep, exercise, water, smoking, money, date } = entry;
                
                let updatedEntryData = await db.query(`UPDATE entires 
                                                       SET 
                                                       sleep = $2, exercise = $3, water = $4, smoking = $5, money = $6, date = $7
                                                       WHERE user_id = $1
                                                       RETURNING *;`, [ sleep, exercise, water, smoking, money, date]);
                let updatedEntry = new Entry(updatedEntryData.rows[0]);
                resolve (updatedEntry);
            } catch (err) {
                console.log(err);
                reject('Error updating Entry');
            }
        });
    };


    //DELETE

    static deleteEntry(id) {
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.query('DELETE FROM entries WHERE id = $1 RETURNING *;', [ id ]);
                resolve('Entry was deleted')
            } catch (err) {
                reject('Entry could not be deleted')
                console.log(err)
            }
        })
    };
}
module.exports = Entry




  
