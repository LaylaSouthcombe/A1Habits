const db = require('../dbConfig');

class Tracking {
    constructor(data){
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
        this.money_start_date = data.money_start_date
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
}
module.exports = Tracking