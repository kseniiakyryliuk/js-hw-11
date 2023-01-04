//Завдання 2
console.log('\n Завдання 1. With hello world');
let a='helloworld';;
console.log(...a);

//Завдання 2
console.log('\n Завдання 2. Унікальні значення');
let array=[1,1,5,6,'d', 'h', 'k', 'g', 'k'];
let set = [...new Set(array)];
console.log(array);
console.log(set);



//Завдання 3
console.log('\n Завдання 3.Конкатенація');
console.log('A)');
let arr1=[1,2,3,4];
let arr2=[5,7,89,9];
let collectionTwoArrays= [...arr1, ...arr2];
console.log(arr1);
console.log(arr2);
console.log(collectionTwoArrays);

let user={
  name:'Vasya',
  married:true,
  age:25
}
let user2={
  name:'Iryna',
  surname:'Harchuk'
}
let collectionTwoObject={...user, user2};

console.log('B)');
console.log(collectionTwoObject);


//Завдання 4
console.log('\n Завдання 4. Значення, які повторюються');
let arr4=[1,1,5,6,7,7,8,9,3,4,4];
console.log(arr4);
let arr5=[...new Set(arr4)];
let correctArray=[];
let count=0;
//перевірка
for(let i=0; i<arr5.length; i++){
   for(let j=0; j<arr4.length; j++)
     {
      if (arr5[i]===arr4[j]) count++;
      }
  if(count>1) correctArray.push(arr5[i]);
count=0;
}
console.log(correctArray);

//Завдання 5
let friends=[{
  name: 'Anna',
  books:['Bible','Harry Potter'],
  age: 21},
{ name: 'Bob',
books:['War and peace','Romeo and Juliet'],
age: 26},
{ name: 'Alice',
books:['The Lord of the Rings','The Shining'],
age: 18}
]

const booksMap=friends.flatMap(friends=>{
  return friends.books
});
console.log(booksMap);



//Завдання 8
let str='(   )  { }';
console.log(str);
str=str.replaceAll(/ /gi, ''); // регулярний вираз

console.info(isValid(str)); // false

console.info(isValid('({})')); // true

console.info(isValid('))}}{{((')); // true

function isValid(s) {
  const stack = [];
  const openBraces = ['(', '{', '[']
  const closingBraces = [')', '}', ']']
  
  for (const char of s.split('')) {
    if (openBraces.includes(char)) {
      stack.push(char);
    }
    if (closingBraces.includes(char)) {
      if (!stack.length) {
        return false;
      }
      const lastChar = stack.pop();
      if (openBraces.indexOf(lastChar) !== closingBraces.indexOf(char)) {
        return false;
      }
    }
  }
  return !stack.length;
}
