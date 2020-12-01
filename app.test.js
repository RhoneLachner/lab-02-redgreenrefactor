const { 
    getName,
    spot,
    character
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
