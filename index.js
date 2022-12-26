"use strict";
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender || (Gender = {}));
const genderName = {
    "1": Gender.Male,
    "2": Gender.Female,
    "3": Gender.Other,
};
const userName = prompt("Enter username : (example: Name)");
const surName = prompt("Enter surname : (example: Surname)");
const birthday = prompt("Enter birthday : (example: DD/MM/YYYY)");
const gender = prompt("Select gender: \n1.Male \n2.Female \n3.Other \n(example: 1)");
const password = prompt("Enter password : (example: password)");
const getUserAge = () => {
    if (birthday) {
        try {
            const newBirthday = birthday.split("/").reverse().join("-"); // Change input data to "YYYY-MM-DD"
            const date = new Date(newBirthday); // Find birthday date
            const ageDifMs = Date.now() - date.getTime(); // Compare current date and get different with ms
            const ageDate = new Date(ageDifMs); // get ms date
            return Math.abs(ageDate.getUTCFullYear() - 1970); // Find age
        }
        catch (error) {
            return 0;
        }
    }
    return 0;
};
const age = getUserAge();
const isCreate = () => {
    return age > 14 ? true : false;
};
const selectGender = () => {
    switch (gender) {
        case "1":
            return genderName[gender];
        case "2":
            return genderName[gender];
        case "3":
            return genderName[gender];
        default:
            return "Unknown";
    }
};
const createUser = () => {
    if (userName && surName && birthday && gender && password && age) {
        return {
            data: {
                name: userName,
                surname: surName,
                age: age,
                gender: selectGender(),
                isEligible: isCreate(),
            },
            msg: "User created successfully",
        };
    }
    return { msg: "User can't created" };
};
const { data, msg } = createUser();
data ? console.log(msg, data) : console.log(msg);
