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




const allCapsNoF = (arr) => {
    // arr.map(arr1 => arr1.toUpperCase())
    arr = arr.filter(item => item.indexOf('f') !== 0);
    // arr = arr.toUpperCase()
  
    arr1 = arr.map(arr1 => arr1.toUpperCase())


    // arr = arr.filter(function (item) {
    //     return item.indexOf('f') !== 0;
    //  });

    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i].toUpperCase();
    //    }

    return arr1
}; 

const nameArr = [
    'spot',
    'rover',
    'bingo',
    'fred'
]





module.exports = {
    getName,  
    spot,
    character,
    copyAndPush,
    numbers,
    nameArr,
    allCapsNoF,
    // arr
  };
