const request = require('superagent')


const getName = (obj) => {
    // const objName = obj.name

    // const objName = { obj: {name} } 
    // return objName

    const { name } = obj
    return name

    
}; 


const spot = { 
    name: 'spot', 
    age: '5', 
    weight: '20 lbs' }
getName(spot)

const character = { 
    _id: '5cf5679a915ecad153ab68c9', 
    name: 'Aang' };
getName(character) 


// const getName = (spot, character)['name']







module.exports = {
  getName,  
  spot,
  character,
};
