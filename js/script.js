"use strict";

let countOfFilms;

init();

function init() {
  countOfFilms = +prompt(" Քանի՞ ֆիլմ եք վերջերս դիտել");

  while (countOfFilms == "" || countOfFilms == null || isNaN(countOfFilms)) {
    countOfFilms = +prompt(" Քանի՞ ֆիլմ եք վերջերս դիտել");
  }
}

const DB = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genrer: [],
  status: null,
  privat: false
};


function rememberAndCreateUserFilms() {
  for (let i = 0; i < 1; i++) {
    const filmName = prompt("1) Ո՞ր ֆիլմն եք վերջերս դիտել");
    const filmRate = +prompt(`1) Ինչքա՞ն եք գնահատում ${filmName} ֆիլմը`);

    if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
      DB.movies[filmName] = filmRate;
      console.log("Resolve");
    } else {
      console.log("Reject");
      i--;
    }
  }
  for (let i = 0; i < 1; i++) {
    const filmName = prompt("2) Ո՞ր ֆիլմն եք վերջերս դիտել");
    const filmRate = +prompt(`2) Ինչքա՞ն եք գնահատում ${filmName} ֆիլմը`);

    if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
      DB.movies[filmName] = filmRate;
      console.log("Resolve");
    } else {
      console.log("Reject");
      i--;
    }
  }
}

function userFavoriteGenres(){
  for (let i = 0; i < 1; i++) {
    const filmGenres = prompt("1) Ձեր սիրելի ֆիլմի ժանրը");
    const filmGenres2 = +prompt("2) Ձեր սիրելի ֆիլմի ժանրը");
    
    
    if (filmGenres != null && filmGenres2 != null && filmGenres != "" && filmGenres2 != "" && filmGenres.length < 50) {
      DB.movies[filmGenres] = filmGenres2;
      console.log("Resolve");
    } else {
      console.log("Reject");
      i--;
    }
  }
}
  for (let i = 0; i < 1; i++) {
    const filmTime = prompt("Ո՞ր ժամն եք նախընտրում: ֆիլմ դիտելու համար");
    
    if (filmTime != null && filmTime != ""  && filmTime.length < 50) {
      DB.movies[filmTime] = filmTime ;
      console.log("Resolve");
    } else {
      console.log("Reject");
      i--;
    }
  }

function detectUserPersonalLevel() {
  if (DB.count < 10) {
    DB.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
  } else if (DB.count >= 10 && DB.count < 30) {
    DB.status = "Դուք դասական ֆիլմ դիտող եք";
  } else if (DB.count >= 30) {
    DB.status = "Դուք կինոման եք !"
  } else {
    console.log("Տեղի է ունեցել խնդիր․");
  }
}

function checkDBPrivatStatus(state) {
  state ? console.log("Sorry but DB is not visible") : console.log(DB);
}

 rememberAndCreateUserFilms();
 userFavoriteGenres();
 detectUserPersonalLevel();
checkDBPrivatStatus(DB.privat);
