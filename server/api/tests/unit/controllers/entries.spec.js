const entriesController = require('../../../controllers/entries')
const Entry = require('../../../models/entry');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('entries controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());




      // // test to delete

      describe('del', () => {
        test('it resolves with updated entry on successful db query', async () => {
            let testEntry = new Entry({
                user_id: 2, sleep_entry: false, exercise_entry: true, water_entry: 5, smoking_entry: 8, money_entry: 3, date_entry: '2022-06-07'
            });
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{ ...testEntry }] });
            const result = await testEntry.del();
            expect(result).toBe('The entry has been deleted')
        })
    });



    // describe('index', () => {
    //     test('it returns users with a 200 status code', async () => {
    //         let testEntries = ['d1', 'd2']
    //         jest.spyOn(Entry, 'all', 'get')
    //              .mockResolvedValue(testEntries);
    //         await entriesController.index(null, mockRes);
    //         expect(mockStatus).toHaveBeenCalledWith(200);
    //         expect(mockJson).toHaveBeenCalledWith(testEntries);
    //     })
    // });

    // describe('show', () => {
    //     test('it returns a dog with a 200 status code', async () => {
    //         let testDog = {
    //             id: 1, name: 'Test Dog', age: 2
    //         }
    //         jest.spyOn(Dog, 'findById')
    //             .mockResolvedValue(new Dog(testDog));
                
    //         const mockReq = { params: { id: 1 } }
    //         await dogsController.show(mockReq, mockRes);
    //         expect(mockStatus).toHaveBeenCalledWith(200);
    //         expect(mockJson).toHaveBeenCalledWith(new Dog(testDog));
    //     })
    // });

    // describe('create', () => {
    //     test('it returns a new dog with a 201 status code', async () => {
    //         let testDog = {
    //             id: 1, name: 'Test Dog', age: 2
    //         }
    //         jest.spyOn(Dog, 'create')
    //             .mockResolvedValue(new Dog(testDog));
                
    //         const mockReq = { body: testDog }
    //         await dogsController.create(mockReq, mockRes);
    //         expect(mockStatus).toHaveBeenCalledWith(201);
    //         expect(mockJson).toHaveBeenCalledWith(new Dog(testDog));
    //     })
    // });

    // describe('destroy', () => {
    //     test('it returns a 204 status code on successful deletion', async () => {
    //         jest.spyOn(Dog.prototype, 'destroy')
    //             .mockResolvedValue('Deleted');
            
    //         const mockReq = { params: { id: 1 } }
    //         await dogsController.destroy(mockReq, mockRes);
    //         expect(mockStatus).toHaveBeenCalledWith(204);
    //     })
    // });
    
})
