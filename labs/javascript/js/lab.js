// Put your JavaScript lab code here!

// Strings
let stringvar = 'I like JavaScript more than I like to party.';
console.log(stringvar.slice(-16));
let newstringvar = stringvar.slice(-16);

let washington = 'I love Washington State University';
console.log(washington.replace('Washington State University', 'The University of Washington'));
let newwashington = washington.replace('Washington State University', 'The University of Washington');
let combine = newstringvar.concat(newwashington);
console.log(combine);

// Functions
let sum = 0;
function sumUpTo(n){
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
console.log(sumUpTo(5));


function vowelCount(target){
    let count = 0;
    for(let i = 0; i < target.length; i++){
        if(target.charAt(i) === 'a' || target.charAt(i) === 'e' || target .charAt(i) === 'i' || target.charAt(i) === 'o' || target.charAt(i) === 'u'){
            count++;
        }
        console.log(count, i, target.charAt(i));
    }
    return count;
}
console.log(vowelCount("kookaburra"));

// Arrays
function findMin(numArr){
    let min = numArr[0];
    for(let i = 1; i < numArr.length; i++){
        if(numArr[i] < min){
            min = numArr[i];
        }
    }
    return min;
}
let arr = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8];
console.log(findMin(arr));

function longestWord(stringArr){
    let longestString = stringArr[0];
    for(let i = 1; i < stringArr.length; i++){
        if(stringArr[i].length > longestString.length){
            longestString = stringArr[i];
        }
    }
    return longestString;
}

let example = ["Java", "PHP", "JavaScript", "SML", "C", "Python", "Ruby"];
console.log(longestWord(example));

// Objects
let booklist = [
    {title:'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    read: true},
    {title: 'The Great Gastby',
    author: 'F.Scott Fitzgerald',
    read: false},
    {title: 'The Hunger Games',
    author: 'Suzanne Collins', 
    read: false}
]
let book1984 = {title:'1984', author:'George Orwell', read:true};
booklist.push(book1984);
console.log(booklist);

for(let i = 0; i < booklist.length; i++){
    if(booklist[i].read === true){
        console.log('I have read ' + booklist[i].title + ' by ' + booklist[i].author + '.');
    } else {
        console.log('I really want to read ' + booklist[i].title + ' by ' + booklist[i].author);
    }
}





