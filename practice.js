// // //variables
// // name = 'Lama Urgen'
// // console.log(name);
// //  structure  = 'urfgen urgen urgen urgen urgen'
// //  console.log(structure)

// //  //operators

// //  loan = Number(prompt('how much is your loan?'))
// //  interestRate = Number(prompt('Interest %')/100)
// //  perMonth= Number(loan * interestRate / 12)
// //  console.log( 'Monthly:Rs.', perMonth)
// // //  total = loan+interestRate+perMonth
// // //  alert(total)



// // Weather App
// // let answer  = prompt('Is there anyone in washroom?')

// // if( answer =='no'){
// //     console.log('You can go')
// // }

// // else{
// //     console.log('Wait for some time')
// // }

// // Functions
// // function sayMyName(name){
// //     console.log('name')
    
// // }
// // sayMyName()

// // arrays
// // const equipments =['laptop', 'desktop', 'charger', 'mouse']
// // // console.log(equipments)
// // // console.log(equipments[3])

// // equipments.push('fan', 'pen', 'phone')
// // // console.log(equipments)

// // // array slice
// // // console.log(equipments.slice(0,3))

// // console.log(equipments.indexOf('desktop'))
// // console.log(equipments.length)
// // console.log(equipments)

// const vegetables = {
//     name: 'carrot',
//     color: 'red',
//     weight: '15gm'
// }
// // . notation vs [] notation
// console.log(vegetables.name)
// console.log(vegetables.color)
// console.log(vegetables.weight)

// console.log(vegetables['name'])
// console.log(vegetables)
// const introducer = (name, address)=>{
//     const person= {
//         name: 'Urgen',
//         address: 'Bouddha',
//         phone: '9860355628'
//     }
// }
 
// // console.log(person)
// // console.log(person.name)
// // console.log(person['name'])
// Nov 24

// name = 'Lama Urgen'
// console.log(name)

// structure = 'Hi, how are you doing today. Nice to meet you'
// console.log(structure)

// // operators

// loan = Number(prompt('How much is your loan?'))
// interestRate= Number(prompt('Iterest%')/100)
// perMonth = Number(loan *interestRate /12)
// console.log('PerMonth: Rs.',perMonth);
// total = ('Total:Rs.', loan + interestRate + perMonth)
// console.log(total)

// if else
//  let age = prompt('How old are you?')
//  if (age>=18) console.log('You can vvote')
//  else {
//     console.log('You cannot')
// }
// functions
// function called 'person with zero arguments'
// function person(name){
//     console.log(name)
  
// }
// person('Urgen')
// // function called meeting with 3 arguments


// function meeting(name,age,address){
//     sentence= `hi my name is ${name}. I'am ${age} years old.
//     I'm from ${address}`
//     console.log(sentence)
// }
// meeting('Urgen', '16', 'Bouddha')

 
// function sub (a,b,c){
//     return (a-b-c)
// }
// lama= sub(3,5,8)
// console.log(lama)

// function calculateInterest(loan, interestRate){
// interestRate= interestRate/100
// perMonth =(loan * interestRate /12)
// console.log('PerMonth: Rs.',perMonth);
// total = ('Total:Rs.', loan + interestRate + perMonth)
// return total
// }
// console.log(calculateInterest(2500,12))

// objects
//  const per ={
//     name: 'Johnny',
//     caste: 'Depp'
//  }
//  console.log(per.name)
//  console.log(per.caste)

//  console.log(per['name']), 
//  per.phone= '1233434'
//  console.log(per.phone)
//  console.log(per)
//  //es6 arrow functions 

//  const introduce = (name,address) =>{
//  const pe={
//     name:name,
//     address:address,
//     income:100000,
//     expenses: 500
//  }
//  const intro = `Hi, my name is ${pe.name} and I'm from ${pe.address}
//  and my income is $${pe.income-pe.expenses}`
 
//  return intro
//  }
//  console.log(introduce('Urgen','Bouddha'))
// For Loops
 
// const materails = [ 'laptop', 'desktop', 'charger','notebook','phone','table',
// 'people']
 
// // for(let i=0; i<materails.length;i++){
// //     console.log(i, materails[i])
// }
// for (const materail of materails){
//     console.log(materail *2)
// }

// const digits =[1,12,3,223,12,121,3,1]
// // for(let i=0; i<digits.length;i++){
// //     console.log(digits[i])
// // }
// let result =[]
// for(const digit of digits){
//     console.log(digit)
//     result.push(digit*2)
// }
// console.log(result)
// map

// let result= [2,4,6,8,1,0,22,34].map(number=>number*10)
// console.log (result)

// const doubleMaps=(numbers)=>{
//     return numbers.map(number=>number*2)
// }
// console.log(doubleMaps([1,2,3]))


// const employee= [
//     {

//     },
//     {

//     },
// ]
// let digit = [1,2,3,4,5,3,2] .map(digit=>console.log(digit*2))

// filter
const urg=(numbers,greaterThan)=>{
    let result=[]
    for (const number of numbers){
     if (number> greaterThan)
     result.push(number)
 }
 return result
 }
 
 console.log(filter([12,34,21,34,553,21,22],21))