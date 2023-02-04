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

let isAdmin = (currentUser == adminRole) ? console.log("Привет, Admin"): console.log("Привет, Anonymus"); //тернарный оператор 

const User = "admin";
const user_roles = {
  admin: "admin",
  anonym: "anonym"
};

// if (User == user_roles.admin) {
//   console.log(`hello ${ user_roles.admin} `);
// } else {
//   console.log(`hello ${ user_roles.anonym} `);
// };

const greetingMessage = 
User == user_roles.admin 
? console.log(`hello ${ user_roles.admin} `)
: console.log(`hello ${ user_roles.anonym} `);

for (i = 10; i > 0; i--) {
  console.log(i);
}