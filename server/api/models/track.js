const db = require('../dbConfig');
const User = require('./user');

class Tracking {
    constructor(data){
        this.id = data.id
        this.user_id = data.user_id
        this.sleep = data.sleep
        this.sleep_goal = data.sleep_goal
        this.exercise = data.exercise
        this.exercise_goal = data.exercise_goal
        this.exercise_freq = data.exercise_freq
        this.water = data.water
        this.water_goal = data.water_goal
        this.smoking = data.smoking
        this.smoking_goal = data.smoking_goal
        this.money = data.money
        this.money_goal = data.money_goal
        this.money_begin_date = data.money_begin_date
        this.money_end_date = data.money_end_date
    }
    
    static get all(){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM tracking;');
                const trackings = result.rows.map(r => new Tracking(r))
                resolve(trackings)
            } catch (err) {
                reject(`Error retrieving trackings: ${err}`)
            }
        })
    }
    static async create({ username, sleep, sleep_goal, exercise, exercise_goal, exercise_freq, water, water_goal, smoking, smoking_goal, money, money_goal, money_begin_date, money_end_date } ){
        return new Promise (async (resolve, reject) => {
            try {
                let user = await User.findByUsername(username);
                console.log(user)
                let result = await db.query(`INSERT INTO tracking (user_id, sleep, sleep_goal, exercise, exercise_goal, exercise_freq, water, water_goal, smoking, smoking_goal, money, money_goal, money_begin_date, money_end_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;`, [ user.id, sleep, sleep_goal, exercise, exercise_goal, exercise_freq, water, water_goal, smoking, smoking_goal, money, money_goal, money_begin_date, money_end_date ])
                resolve (result.rows[0]);
            } catch (err) {
                reject('Tracking could not be created');
            }
        });
    };
}
module.exports = Tracking