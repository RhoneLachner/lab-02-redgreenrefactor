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
    
    arr = arr.filter(item => item.indexOf('f') !== 0);  
    arr1 = arr.map(arr1 => arr1.toUpperCase())

    return arr1
}; 

const nameArr = [
    'spot',
    'rover',
    'bingo',
    'fred'
]

const fetchQuotes = async() => {
  const { body } = await request.get('futuramaapi.herokuapp.com/api/quotes/1');

  return{
  name: body[0].character,
  text: body[0].quote,
  image: body[0].image
    };
};

module.exports = {
    getName,  
    spot,
    character,
    copyAndPush,
    numbers,
    nameArr,
    allCapsNoF,
    fetchQuotes
  };
