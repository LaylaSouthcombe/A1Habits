const Entry = require('../../../models/entry');
const User = require('../../../models/user');
const Tracking = require('../../../models/track');

jest.mock('../../../models/track');
jest.mock('../../../models/entry');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('User', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with users on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}]});
            const all = await User.all;
            expect(all).toHaveLength(3)
        })
    });



      //  test for create 

  describe('create', () => {
    test('it resolves with user on successful db query', async () => {
        let userData = { username: 'testUser', password: 'testPassword', email: 'testEmail' };
        jest.spyOn(db, 'query')
            .mockResolvedValueOnce({ rows: [userData] });
        const result = await User.create(userData);
        expect(result).toHaveProperty('id')
    })
});

// test for findByEmail

describe('findByEmail', () => {
    test('it resolves with a user email on successful db query', async () => {
        let userData = { username: 'testUser', password: 'testPassword', email: 'testEmail' };
        jest.spyOn(db, 'query')
            .mockResolvedValueOnce({ rows: [userData] });
        const result = await User.findByEmail('testEmail');
        expect(result.email).toContain('testEmail')
    })

    test('the result should be an instance of User', async () => {
        let userData = { username: 'testUser', password: 'testPassword', email: 'testEmail' };
        jest.spyOn(db, 'query')
            .mockResolvedValueOnce({ rows: [userData] });
        const result = await User.findByEmail('testEmail');
        expect(result).toBeInstanceOf(User)
    });


});

    // describe('findById', () => {
    //     test('it resolves with dog on successful db query', async () => {
    //         let dogData = { id: 1, name: 'Test Dog' }
    //         jest.spyOn(db, 'query')
    //             .mockResolvedValueOnce({rows: [ dogData] });
    //         const result = await Dog.findById(1);
    //         expect(result).toBeInstanceOf(Dog)
    //     })
    // });

    // describe('create', () => {
    //     test('it resolves with dog on successful db query', async () => {
    //         let dogData = { name: 'Test Dog', age: 3 }
    //         jest.spyOn(db, 'query')
    //             .mockResolvedValueOnce({rows: [ { ...dogData, id: 1 }] });
    //         const result = await Dog.create(dogData);
    //         expect(result).toHaveProperty('id')
    //     })
    // });
    
})
