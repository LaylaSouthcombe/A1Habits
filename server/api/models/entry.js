const db = require('../dbConfig');
const User = require('./user');
const Tracking = require('./track');
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
    
    // Get All for a user
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

    static findByUserId(user_id){
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

    
    static async incompleteSleepHabit(username){
        return new Promise(async (resolve, reject) => {
            try {
                let user = await User.findByUsername(username);

                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);

                const entries = result.rows.map(r => new Entry(r))
                const entryId = entries[0].id
                let updatedEntryData = await db.query(`UPDATE entries 
                                                       SET 
                                                       sleep_entry = $2
                                                       WHERE id = $1
                                                       RETURNING *;`, [ entryId, false ]);
                resolve (updatedEntryData);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async completeSleepHabit(username){
        return new Promise(async (resolve, reject) => {
            try {
                let user = await User.findByUsername(username);

                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);

                const entries = result.rows.map(r => new Entry(r))
                const entryId = entries[0].id
                let updatedEntryData = await db.query(`UPDATE entries 
                                                       SET 
                                                       sleep_entry = $2
                                                       WHERE id = $1
                                                       RETURNING *;`, [ entryId, true ]);
                resolve (updatedEntryData);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async incompleteExerciseHabit(username){
        return new Promise(async (resolve, reject) => {
            try {
                let user = await User.findByUsername(username);

                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);

                const entries = result.rows.map(r => new Entry(r))
                const entryId = entries[0].id
                let updatedEntryData = await db.query(`UPDATE entries 
                                                       SET 
                                                       exercise_entry = $2
                                                       WHERE id = $1
                                                       RETURNING *;`, [ entryId, false ]);
                resolve (updatedEntryData);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async completeExerciseHabit(username){
        return new Promise(async (resolve, reject) => {
            try {
                let user = await User.findByUsername(username);

                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);

                const entries = result.rows.map(r => new Entry(r))
                const entryId = entries[0].id
                let updatedEntryData = await db.query(`UPDATE entries 
                                                       SET 
                                                       exercise_entry = $2
                                                       WHERE id = $1
                                                       RETURNING exercise_entry;`, [ entryId, true ]);
                console.log(updatedEntryData.rows[0])
                resolve (updatedEntryData);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }

//adds one to the most recent smoking entry
    static async addOneToCurrentSmokingNum(username){
        return new Promise(async (resolve, reject) => {
            try {
                let user = await User.findByUsername(username);

                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);

                const entries = result.rows.map(r => new Entry(r))

                const recentEntry = entries[0].smoking_entry
                const newEntry = recentEntry + 1

                const entryId = entries[0].id
                let updatedEntryData = await db.query(`UPDATE entries 
                                                       SET 
                                                       smoking_entry = $2
                                                       WHERE id = $1
                                                       RETURNING *;`, [ entryId, newEntry ]);
                resolve (updatedEntryData);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async removeOneFromCurrentSmokingNum(username){
        return new Promise(async (resolve, reject) => {
            try {
                let user = await User.findByUsername(username);
    
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
    
                const entries = result.rows.map(r => new Entry(r))
    
                const recentEntry = entries[0].smoking_entry
                const newEntry = recentEntry - 1
    
                const entryId = entries[0].id
                let updatedEntryData = await db.query(`UPDATE entries 
                                                       SET 
                                                       smoking_entry = $2
                                                       WHERE id = $1
                                                       RETURNING *;`, [ entryId, newEntry ]);
                resolve (updatedEntryData);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    //adds one to the most recent water entry
    //GOAL: Find latest entry-->add 1 to latest water entry(by pressing + button)-->update
    static async addOneToCurrentWaterNum(username){
        return new Promise(async (resolve, reject) => {
            try {
                let user = await User.findByUsername(username); // find user by taking username (from client side)

                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]); //we order by date entry to make it easier 

                const entries = result.rows.map(r => new Entry(r)) // each row that comes as a result make it into a new entry (constructor data)

                const recentEntry = entries[0].water_entry //we access first object (0 index) from recent entry (see query line 189) --> then we access key (water_entry) and get value from it
                const newEntry = recentEntry + 1 // add 1 to value

                const entryId = entries[0].id // we find entry id and we want to update it in below query
                let updatedEntryData = await db.query(`UPDATE entries 
                                                        SET 
                                                        water_entry = $2
                                                        WHERE id = $1
                                                        RETURNING *;`, [ entryId, newEntry ]);
                resolve (updatedEntryData);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    
    //removes one to the most recent water entry    
    static async removeOneFromCurrentWaterNum(username){
    return new Promise(async (resolve, reject) => {
        try {
            let user = await User.findByUsername(username);

            const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);

            const entries = result.rows.map(r => new Entry(r))

            const recentEntry = entries[0].water_entry
            const newEntry = recentEntry - 1

            const entryId = entries[0].id
            let updatedEntryData = await db.query(`UPDATE entries 
                                                    SET 
                                                    water_entry = $2
                                                    WHERE id = $1
                                                    RETURNING *;`, [ entryId, newEntry ]);
            resolve (updatedEntryData);
        } catch (err) {
            reject(`Error retrieving trackings: ${err}`)
        }
    })
    }
    


//streak functions
    static async getCurrentSleepStreak(username){
        return new Promise(async (resolve, reject) => {
            try {
                let counter = 0;
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))

                for( let i = 0; i < entries.length; i++) {
                    if(entries[i].sleep_entry === false) { break; }
                    counter += 1
                }
                resolve (counter);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async getCurrentExerciseStreak(username){
        return new Promise(async (resolve, reject) => {
            try {
                let counter = 0;
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                for( let i = 0; i < entries.length; i++) {
                    if(entries[i].exercise_entry === false) { break; }
                    counter += 1
                }
                resolve (counter);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async getCurrentMoneyStreak(username){
        return new Promise(async (resolve, reject) => {
            try {
                let counter = 0;
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                for( let i = 0; i < entries.length; i++) {
                    if(entries[i].money_entry <= 0) { break; }
                    counter += 1
                }
                resolve (counter);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async getCurrentWaterStreak(username){
        return new Promise(async (resolve, reject) => {
            try {
                let counter = 0;
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                const goal = await db.query('SELECT water_goal, user_id FROM tracking WHERE user_id = $1', [ user.id ])
                console.log(goal.rows[0].water_goal)
                for( let i = 0; i < entries.length; i++) {
                    if(entries[i].water_entry < goal.rows[0].water_goal) { break; }
                    counter += 1
                }
                resolve (counter);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async getCurrentSmokingStreak(username){
        return new Promise(async (resolve, reject) => {
            try {
                let counter = 0;
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                const goal = await db.query('SELECT smoking_goal, user_id FROM tracking WHERE user_id = $1', [ user.id ])
                for( let i = 0; i < entries.length; i++) {
                    if(entries[i].smoking_entry > goal.rows[0].smoking_goal) { break; }
                    counter += 1
                }
                resolve (counter);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async getCurrentAllHabitStreak(username){
        return new Promise(async (resolve, reject) => {
            try {
                //going to put all streak into this array and chose smallest
                let streakArray = [];
                //finding user_id by username
                let user = await User.findByUsername(username);
                //finding tracking info by username
                const trackingInfo = await db.query('SELECT * FROM tracking WHERE user_id = $1;', [user.id]);
                //finding all entries for a user by user_id
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                //if statements that get the streak for each habit if tracking is set to true and push to array
                if(trackingInfo.rows[0].sleep_track === true){
                    let sleepCounter = 0;
                    for( let i = 0; i < entries.length; i++) {
                        if(entries[i].sleep_entry === false) { break; }
                        sleepCounter += 1
                    }
                    streakArray.push(sleepCounter)
                }
                if(trackingInfo.rows[0].exercise_track === true){
                    let exerciseCounter = 0;
                    for( let i = 0; i < entries.length; i++) {
                        if(entries[i].exercise_entry === false) { break; }
                        exerciseCounter += 1
                    }
                    streakArray.push(exerciseCounter)
                }
                if(trackingInfo.rows[0].money_track === true){
                    let moneyCounter = 0;
                    for( let i = 0; i < entries.length; i++) {
                        if(entries[i].money_entry <= 0) { break; }
                        moneyCounter += 1
                    }
                    streakArray.push(moneyCounter)
                }
                if(trackingInfo.rows[0].water_track === true){
                    const waterGoal = await db.query('SELECT water_goal, user_id FROM tracking WHERE user_id = $1', [ user.id ])
                    let waterCounter = 0;
                    for( let i = 0; i < entries.length; i++) {
                        if(entries[i].water_entry < waterGoal.rows[0].water_goal) { break; }
                        waterCounter += 1
                    }
                    streakArray.push(waterCounter)
                }
                if(trackingInfo.rows[0].smoking_track === true){
                    let smokingCounter = 0;
                    const smokingGoal = await db.query('SELECT smoking_goal, user_id FROM tracking WHERE user_id = $1', [ user.id ])
                    for( let i = 0; i < entries.length; i++) {
                        if(entries[i].smoking_entry > smokingGoal.rows[0].smoking_goal) { break; }
                        smokingCounter += 1
                    }
                    streakArray.push(smokingCounter)
                }
                //sort array to have smallest first
                streakArray.sort()
                //send smallest streak
                resolve(streakArray[0]);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }

    static async findAllHabitsEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                //going to put all streak into this array and chose smallest
                let recentAllEntries = [0,0,0,0,0,0,0];
                let trackingNum = 0;
                //finding user_id by username
                let user = await User.findByUsername(username);
                //finding tracking info by username
                const trackingInfo = await db.query('SELECT * FROM tracking WHERE user_id = $1;', [user.id]);
                //finding all entries for a user by user_id
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))

                //if statements that get the number of tracked habits and how many completed each day
                if(trackingInfo.rows[0].sleep_track === true){
                    trackingNum += 1;
                    for( let i = 0; i < 7; i++) {
                        if(entries[i].sleep_entry === true) {
                            recentAllEntries[i] += 1;
                        }
                    }
                }
                if(trackingInfo.rows[0].exercise_track === true){
                    trackingNum += 1;
                    for( let i = 0; i < 7; i++) {
                        if(entries[i].exercise_entry === true) {
                            recentAllEntries[i] += 1;
                        }
                    }
                }
                if(trackingInfo.rows[0].money_track === true){
                    trackingNum += 1;
                    for( let i = 0; i < 7; i++) {
                        if(entries[i].money_entry >= 0) {
                            recentAllEntries[i] += 1;
                        }
                    }
                }
                if(trackingInfo.rows[0].water_track === true){
                    const waterGoal = await db.query('SELECT water_goal, user_id FROM tracking WHERE user_id = $1', [ user.id ])
                    trackingNum += 1;
                    for( let i = 0; i < 7; i++) {
                        if(entries[i].water_entry >= waterGoal.rows[0].water_goal) {
                            recentAllEntries[i] += 1;
                        }
                    }
                }
                if(trackingInfo.rows[0].smoking_track === true){
                    const smokingGoal = await db.query('SELECT smoking_goal, user_id FROM tracking WHERE user_id = $1', [ user.id ])
                    trackingNum += 1;
                    for( let i = 0; i < 7; i++) {
                        if(entries[i].smoking_entry <= smokingGoal.rows[0].smoking_goal) {
                            recentAllEntries[i] += 1;
                        }
                    }
                }
                const percentAchievedHabits = recentAllEntries.map(element => Math.round((element / trackingNum)*100));
                resolve(percentAchievedHabits);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async findExerciseEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                const recentExerciseEntries = [];
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                for( let i = 0; i < 7; i++) {
                    recentExerciseEntries.push(entries[i].exercise_entry)
                }
                resolve (recentExerciseEntries);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async findSmokingEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                const recentSmokingEntries = [];
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                for( let i = 0; i < 7; i++) {
                    recentSmokingEntries.push(entries[i].smoking_entry)
                }
                resolve (recentSmokingEntries);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async findWaterEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                const recentWaterEntries = [];
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                for( let i = 0; i < 7; i++) {
                    recentWaterEntries.push(entries[i].water_entry)
                }
                resolve (recentWaterEntries);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async findMoneyEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                const recentMoneyEntries = [];
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                for( let i = 0; i < 7; i++) {
                    recentMoneyEntries.push(entries[i].money_entry)
                }
                resolve (recentMoneyEntries);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async findSleepEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                const recentSleepEntries = [];
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                for( let i = 0; i < 7; i++) {
                    recentSleepEntries.push(entries[i].sleep_entry)
                }
                resolve (recentSleepEntries);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }

    static async findMoneyCalendarEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                const calendarMoneyEntries = [];
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                for(let i = 0; i < 28; i++) {
                    if(entries[i].money_entry === 0){
                        calendarMoneyEntries[i] = 1;
                    }else if(entries[i].money_entry > 0){
                        calendarMoneyEntries[i] = 2;
                    }else{
                        calendarMoneyEntries[i] = 0;
                    }
                }
                // console.log(calendarMoneyEntries)
                resolve (calendarMoneyEntries);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async findSleepCalendarEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                const calendarSleepEntries = [];
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                console.log(entries[0].sleep_entry)
                for(let i = 0; i < 28; i++) {
                    if(entries[i].sleep_entry === false){
                        calendarSleepEntries[i] = 1;
                        console.log(calendarSleepEntries[i])
                    }else if(entries[i].sleep_entry === true){
                        calendarSleepEntries[i] = 2;
                    }else{
                        calendarSleepEntries[i] = 0;
                    }
                }
                resolve (calendarSleepEntries);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async findExerciseCalendarEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                const calendarExerciseEntries = [];
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                console.log(entries[0].exercise_entry)
                for(let i = 0; i < 28; i++) {
                    if(entries[i].exercise_entry === false){
                        calendarExerciseEntries[i] = 1;
                        console.log(calendarExerciseEntries[i])
                    }else if(entries[i].exercise_entry === true){
                        calendarExerciseEntries[i] = 2;
                    }else{
                        calendarExerciseEntries[i] = 0;
                    }
                }
                resolve (calendarExerciseEntries);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async findWaterCalendarEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                const calendarWaterEntries = [];
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                const goal = await db.query('SELECT water_goal, user_id FROM tracking WHERE user_id = $1', [ user.id ])
                console.log(entries[0].water_entry)
                for(let i = 0; i < 28; i++) {
                    if(entries[i].water_entry > 0 && entries[i].water_entry < goal.rows[0].water_goal){
                        calendarWaterEntries[i] = 1;
                        console.log(calendarWaterEntries[i])
                    }else if(entries[i].water_entry >= goal.rows[0].water_goal){
                        calendarWaterEntries[i] = 2;
                    }else{
                        calendarWaterEntries[i] = 0;
                    }
                }
                // console.log(calendarMoneyEntries)
                resolve (calendarWaterEntries);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async findSmokingCalendarEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                const calendarSmokingEntries = [];
                let user = await User.findByUsername(username);
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))
                const goal = await db.query('SELECT smoking_goal, user_id FROM tracking WHERE user_id = $1', [ user.id ])
                console.log(entries[0].smoking_entry)
                for(let i = 0; i < 28; i++) {
                    if(entries[i].smoking_entry > goal.rows[0].smoking_goal){
                        calendarSmokingEntries[i] = 1;
                        console.log(calendarSmokingEntries[i])
                    }else if(entries[i].smoking_entry > 0 && entries[i].smoking_entry <= goal.rows[0].smoking_goal){
                        calendarSmokingEntries[i] = 2;
                    }else{
                        calendarSmokingEntries[i] = 0;
                    }
                }
                // console.log(calendarMoneyEntries)
                resolve (calendarSmokingEntries);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async findAllCalendarEntries(username){
        return new Promise(async (resolve, reject) => {
            try {
                //going to put all streak into this array and chose smallest
                //add function that does for loop
                let recentAllEntries = [];
                for(let i = 0; i < 28; i++) {
                        recentAllEntries[i] = 0;
                }

                let trackingNum = 0;
                //finding user_id by username
                let user = await User.findByUsername(username);
                //finding tracking info by username
                const trackingInfo = await db.query('SELECT * FROM tracking WHERE user_id = $1;', [user.id]);
                //finding all entries for a user by user_id
                const result = await db.query('SELECT * FROM entries WHERE user_id = $1 ORDER BY (date_entry) DESC;', [user.id]);
                const entries = result.rows.map(r => new Entry(r))

                //if statements that get the number of tracked habits and how many completed each day
                if(trackingInfo.rows[0].sleep_track === true){
                    trackingNum += 1;
                    for(let i = 0; i < 28; i++) {
                        if(entries[i].sleep_entry === false){
                            recentAllEntries[i] += 1;
                        }if(entries[i].sleep_entry === true){
                            recentAllEntries[i] += 2;
                        }
                    }
                }
                if(trackingInfo.rows[0].exercise_track === true){
                    trackingNum += 1;
                    for(let i = 0; i < 28; i++) {
                        if(entries[i].exercise_entry === false){
                            recentAllEntries[i] += 1;
                        }if(entries[i].exercise_entry === true){
                            recentAllEntries[i] += 2;
                        }
                    }
                }
                if(trackingInfo.rows[0].money_track === true){
                    trackingNum += 1;
                    for(let i = 0; i < 28; i++) {
                        if(entries[i].money_entry === 0){
                            recentAllEntries[i] += 1;
                        }if(entries[i].money_entry > 0){
                            recentAllEntries[i] += 2;
                        }
                    }
                }
                if(trackingInfo.rows[0].water_track === true){
                    const waterGoal = trackingInfo.rows[0].water_goal
                    trackingNum += 1;
                    for(let i = 0; i < 28; i++) {
                        if(entries[i].water_entry >= 0 && entries[i].water_entry < waterGoal){
                            recentAllEntries[i] += 1;
                        }if(entries[i].water_entry >= waterGoal){
                            recentAllEntries[i] += 2;
                        }
                    }
                }
                if(trackingInfo.rows[0].smoking_track === true){
                    const smokingGoal = trackingInfo.rows[0].smoking_goal
                    
                    trackingNum += 1;
                    for(let i = 0; i < 28; i++) {
                        if(entries[i].smoking_entry > smokingGoal){
                            recentAllEntries[i] += 1;
                        }if(entries[i].smoking_entry >= 0 && entries[i].smoking_entry < smokingGoal){
                            recentAllEntries[i] += 2;
                        }
                    }
                }
                const achievedHabits = recentAllEntries.map(element => Math.round((element / trackingNum)));
                console.log(achievedHabits);
                resolve(achievedHabits);
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
}
module.exports = Entry




  
