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
