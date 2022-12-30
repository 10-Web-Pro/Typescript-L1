var userName = prompt('Enter your username : (example: Name)');
var userSurname = prompt('Enter your surname : (example: Surname)');
var birthday = prompt('Enter your birthday : (example: DD/MM/YYYY)');
var gender = prompt('Select your gender: \n1.Male \n2.Female \n3.Other \n(example: 1)');
var password = prompt('Enter your password : (example: password)');
var getAge = function () {
    if (birthday) {
        try {
            var newFormat = birthday.split('/').reverse().join('-');
            var date = new Date(newFormat);
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
var age = getAge();
var isEligibleAge = function () {
    return age >= 14 ? true : false;
};
var genders = ['Male', 'Female', 'Other'];
var selectGender = function () {
    if (gender) {
        return genders[+gender - 1];
    }
};
var createUser = function () {
    if (userName && userSurname && gender && birthday && password && age) {
        return {
            data: {
                name: userName,
                surname: userSurname,
                age: age,
                gender: selectGender(),
                isEligible: isEligibleAge()
            },
            message: 'User successfully created'
        };
    }
    return { message: 'User did not created!' };
};
var _a = createUser(), data = _a.data, message = _a.message;
data ? console.log(data, message) : console.log(message);
