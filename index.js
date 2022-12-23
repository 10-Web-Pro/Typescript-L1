"use strict";
// enum Gender {
//   Male = "Male",
//   Female = "Female",
//   Other = "Other",
// }
// const genderName = {
//   "1": Gender.Male,
//   "2": Gender.Female,
//   "3": Gender.Other,
// };
// const userName: string | null = prompt("Enter username : (example: Name)");
// const surName: string | null = prompt("Enter surname : (example: Surname)");
// const birthday: string | null = prompt(
//   "Enter birthday : (example: DD/MM/YYYY)"
// );
// const gender: string | null = prompt(
//   "Select gender: \n1.Male \n2.Female \n3.Other \n(example: 1)"
// );
// const password: string | null = prompt("Enter password : (example: password)");
// const getUserAge = (): number => {
//   if (birthday) {
//     try {
//       const newBirthday = birthday.split("/").reverse().join("-"); // Change input data to "YYYY-MM-DD"
//       const date = new Date(newBirthday); // Find birthday date
//       const ageDifMs = Date.now() - date.getTime(); // Compare current date and get different with ms
//       const ageDate = new Date(ageDifMs); // get ms date
//       return Math.abs(ageDate.getUTCFullYear() - 1970); // Find age
//     } catch (error) {
//       return 0;
//     }
//   }
//   return 0;
// };
// const age = getUserAge();
// const isCreate = (): boolean => {
//   return age > 14 ? true : false;
// };
// const selectGender = () => {
//   switch (gender) {
//     case "1":
//       return genderName[gender];
//     case "2":
//       return genderName[gender];
//     case "3":
//       return genderName[gender];
//     default:
//       return "Unknown";
//   }
// };
// type User = {
//   name: string;
//   surname: string;
//   age: number;
//   gender: Gender | "Unknown";
//   isEligible: boolean;
// };
// const createUser = (): { data?: User; msg: string } => {
//   if (userName && surName && birthday && gender && password && age) {
//     return {
//       data: {
//         name: userName,
//         surname: surName,
//         age: age,
//         gender: selectGender(),
//         isEligible: isCreate(),
//       },
//       msg: "User created successfully",Task
//     };
//   }
//   return { msg: "User can't created" };
// };
// const { data, msg } = createUser();
// data ? console.log(msg, data) : console.log(msg);
//Bonus Task
const userNameInput = document.getElementById("name");
const sInput = document.getElementById("surname");
const birthdayInput = document.getElementById("birthday");
const genderInput = document.getElementById("gender");
const passwordInput = document.getElementById("password");
const submit = document.getElementById("submit");
const state = {
    userName: "",
    surName: "",
    birthday: "",
    gender: "",
    password: "",
};
userNameInput.onchange = (e) => {
    const target = e.target;
    state.userName = target.value;
};
sInput.onchange = (e) => {
    const target = e.target;
    state.surName = target.value;
};
birthdayInput.onchange = (e) => {
    const target = e.target;
    state.birthday = target.value;
};
genderInput.onchange = (e) => {
    const target = e.target;
    state.gender = target.value;
};
passwordInput.onchange = (e) => {
    const target = e.target;
    state.password = target.value;
};
const getUserAge = () => {
    if (state.birthday) {
        try {
            const newBirthday = state.birthday.split("/").reverse().join("-"); // Change input data to "YYYY-MM-DD"
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
const isCreate = (age) => {
    return age > 14 ? true : false;
};
const createUser = (age) => {
    if (state.userName &&
        state.surName &&
        state.birthday &&
        state.gender &&
        state.password &&
        age) {
        return {
            data: {
                name: state.userName,
                surname: state.surName,
                age: age,
                gender: state.gender,
                isEligible: isCreate(age),
            },
            msg: "User created successfully",
        };
    }
    return { msg: "User can't created" };
};
submit.onclick = (e) => {
    e.preventDefault();
    const age = getUserAge();
    const { data, msg } = createUser(age);
    !data && alert("User not eligible to create account");
};
