"use strict";

const countOfFilms = +prompt("How many movies have you watche ever ?");

const DB = {
    count: countOfFilms,
    movies: {},
    actors: {},
    genrer: [],
    privat: false
};

for (let i = 0; i < 2; i++ ){
    const filmName = prompt("What movie did you watch recently?");
  const filmRate = +prompt(`How much do you rate ${filmName}?`);

  if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
    DB.movies[filmName] = filmRate;
    console.log("Resolve");
  } else {
    console.log("Reject");
    i--;
  }
}

if (DB.count < 10) {
  DB.status = "You've watched quite a few movies";
} else if (DB.count >= 10 && DB.count < 30) {
  DB.status = "Are you a fan of classic movies";
} else if (DB.count >= 30) {
  DB.status = "You're cinephile !"
} else {
  console.log("There is a problem․");
}

console.log(DB);
