const { 
    getName,
    spot,
    character,
    numbers,
    copyAndPush,
    arr,
    nameArr,
    allCapsNoF
} = require ('./app.js'); 

describe('getName', () => {
it('returns the name of the object', () => {
    const name = getName(spot);

    expect(name)
    .toEqual('spot')
});
it('returns the name of the object', () => {
    const name = getName(character);

    expect(name)
    .toEqual('Aang')
});
})

describe('copyAndPush', () => {

    it('returns array and adds 4 to the end', () => {
        let response = copyAndPush(numbers, 4);
        
        expect(response)
        .toEqual([1, 2, 3, 4])
    });
    it('array returned is same as original', () => {
         expect(numbers)
        .toEqual([1, 2, 3])
    });
    })



// describe('allCapsNoF', () => {
//     it('returns array items in all caps, and filters out strings starting with f', () => {
//         const newArray = allCapsNoF(nameArr);
    
//         expect(newArray)
//         .toEqual('SPOT', 'ROVER', 'BINGO', 'FRED')
//     });
// })
