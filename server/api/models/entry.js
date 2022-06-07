const db = require('../dbConfig');

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
                const { sleep_entry, exercise_entry, water_entry, smoking_entry, money_entry, date_entry } = entryData;
                console.log(entry);
                let createdEntry = await db.query(`INSERT INTO entries (sleep_entry, exercise_entry, water_entry, smoking_entry, money_entry, date_entry ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`, [sleep_entry, exercise_entry, water_entry, smoking_entry, money_entry, date_entry]);
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
                const { sleep_entry, exercise_entry, water_entry, smoking_entry, money_entry, date_entry } = entry;
                
                let updatedEntryData = await db.query(`UPDATE entires 
                                                       SET 
                                                       sleep_entry = $2, exercise_entry = $3, water_entry = $4, smoking_entry = $5, money_entry = $6, date_entry = $7
                                                       WHERE user_id = $1
                                                       RETURNING *;`, [ sleep_entry, exercise_entry, water_entry, smoking_entry, money_entry, date_entry ]);
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




  
