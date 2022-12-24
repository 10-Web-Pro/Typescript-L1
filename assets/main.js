"use strict";
// declare
const username = document.querySelector('#name');
const surname = document.querySelector('#surname');
const date = document.querySelector('#date');
const gender = document.querySelector("#gender");
const password = document.querySelector("#pass");
const btn = document.querySelector("#btn");
const form = document.querySelector("#form");
// method for getting age
// Date.now() returns the number of milliseconds since January 1, 1970.
const ageFromDateOfBirthday = (valueofdate) => {
    let birthdate = new Date(valueofdate);
    var diff_ms = Date.now() - birthdate.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
};
let age;
// check function
const isElligible = (age) => {
    console.log(age);
    return age >= 14 ? true : false;
};
let usersaarr = [];
// form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    age = ageFromDateOfBirthday(date.value);
    if (isElligible(age)) {
        let newuser = {
            name: username.value,
            surname: surname.value,
            age: age,
            iselligible: true
        };
        alert("accout created!");
        usersaarr.push(newuser);
        console.log(usersaarr);
    }
    else
        alert("you are under the age of 14.that is why we can not create an acoount for you!");
});
