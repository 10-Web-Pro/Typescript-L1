var userForm = document.querySelector("#user-form");
var state = {
    username: "",
    surname: "",
    gender: "",
    password: "",
    age: ""
};
var getAge = function (birthday) {
    if (birthday) {
        try {
            var forAgeData = birthday.get("birthday");
            var date = new Date(forAgeData);
            var ageDifMs = Date.now() - date.getTime();
            var ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        catch (error) {
            return 0;
        }
    }
    return 0;
};
var passAge = function (age) {
    return age > 14 ? true : false;
};
userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(event.target);
    if (getAge(data) >= 14) {
        alert("Registartion is successfully submitted");
        state.username = data.get("name");
        state.surname = data.get("surname");
        state.gender = data.get("gender");
        state.password = data.get("password");
        state.age = getAge(data);
        console.log("Age is elligable for registration");
        console.log(state);
    }
    else {
        console.log("Age is not elligable for registration");
    }
});
