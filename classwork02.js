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
