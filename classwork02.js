const unreadMessagesCount = 56;
const isUserregistered = true;
const userFavouriteGenres = 'science fiction';

const currentUser = "Admin";
const anonymusRole = "Anonymus";
const adminRole = "Admin";

if (currentUser === adminRole) {
    console.log("Привет, Admin")
} else {console.log("Привет, Anonymus")
}

let isAdmin = (currentUser == adminRole) ? console.log("Привет, Admin"): console.log("Привет, Anonymus"); 
function sum (a, b) {
    alert (a+b);
}
sum(1 , 2);

// function log() {
//     for (var i = 0; i < arguments.length; i++)
// }

let sum = (a, b) => a + b;

function min (a, b) {
    if (a < b) {
      return a
    }
    else {
      return b
    }
 }
console.log(min(5, 4))


function range (Start, max, number) {
    if (number < Start && number > max ){
      alert ("true")
    }
   else {
    alert ("false")
  }
  }

  const user = {
    name: "John",
    surname: "Smith"
  }
    user.name = 'Pete';
    delete user.name

    console.log(user)

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    function countTotalSalaries(salaries) {
        let res = 0;
        for ( let key in salaries) {
            res += salaries[key]
        }
        return res;
    }
    countTotalSalaries(salaries)




const sum = (a, b) => a + b;

module.exports = {
    sum,
    join
};


// const concat = (arr, ...rest) => {
//    // return [...arr, ...rest];
//    const result = [];
//    for (let let i = 0; i < rest.length; i++ )
//    for (let i = 0; i < rest.length; i++) {
//     arr[arr.length + i ]
//    }
// };

// const arr = ['a', 'b', 'c'];

// const join = (arr, separator) => {
//     let result = '';
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         result += element + separator
//     }
//     return result
// };

// console.log(join(arr, '======'))

// const array = [1, 2, 3];
// const reverse = (array) => {
//     let result = [];
//     let last = " ";
//     for (let i = 0; i < array.length; i++) {
//         let last = array.pop(i);
//         result.push(last);
//         return result;
// }
// };

// console.log(reverse(array))



// const string = 'let it be the text about something that does not matter';
// const newString = "";
// const truncate = (string, ) => {
//     const newString = string.splice(10);
//     return newString;
// }
// console.log(newString)

 const users = [
    {name : "name1", age : 36 },
    {name : "name2", age : 46 },
    {name : "name3", age : 56 },
    {name : "name4", age : 66 }
 ];


const find =  (arr, callback) => {
    for (i=0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i]
        }
    }
}

const user = find(users, (item) => {
        item.age < 46 
        return user
})

console.log(user)
