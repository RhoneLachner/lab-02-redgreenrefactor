const request = require('superagent')


const getName = (obj) => {
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




const copyAndPush = (arr, newNumber) => {
  
    arr1 = [ ...arr, newNumber ];

    return arr1   
}; 
const numbers = [1, 2, 3];



// const nameArr = [
//     'spot',
//     'rover',
//     'bingo',
//     'fred'
// ]
// allCapsNoF(nameArr)

//    const allCapsNoF = (nameArr) => {
    
//     for (let i = 0; i < nameArr.length; i++) {
//         nameArr[i] = nameArr[i].toUpperCase();
//        }

//     return allCapsNoF    
// }; 


module.exports = {
    getName,  
    spot,
    character,
    copyAndPush,
    numbers,
    // nameArr,
    // allCapsNoF,
    // arr
  };
