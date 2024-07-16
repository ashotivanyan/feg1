"use strict";

const countOfFilms = +prompt("How many movies have you watche ever ?");

const DB = {
    count: countOfFilms,
    movies: {},
    actors: {},
    genrer: [],
    privat: false
};

const a = prompt("What movie did you watch recently?");
const b = +prompt("How much do you rate that movie?");
const c = prompt("What movie did you watch recently?");
const d = +prompt("How much do you rate that movie?");
const e = prompt("What movie did you watch recently?");
const f = +prompt("How much do you rate that movie?");

DB.movies[a] = b;
DB.movies[c] = d;
DB.movies[e] = f;

console.log(DB);