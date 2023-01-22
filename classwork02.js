const unreadMessagesCount = 56;
const isUserregistered = true;
const userFavouriteGenres = 'science fiction';

const user = "Admin";
const adminRole = "Anonymus";

if (user == adminRole) {
    console.log("Привет, Admin")
} else {console.log("Привет, Anonymus")
}

let isAdmin = (user == adminRole) ? console.log("Привет, Admin"): console.log("Привет, Anonymus"); 
