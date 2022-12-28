"use strict";
const userNameInput = document.getElementById("name");
const surNameInput = document.getElementById("surname");
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
surNameInput.onchange = (e) => {
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
            console.log(Math.abs(ageDate.getUTCFullYear() - 1970));
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
    console.log(data);
    !data && alert("User not eligible to create account");
};
