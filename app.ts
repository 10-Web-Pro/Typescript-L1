const userName: string | null = prompt('Enter your username : (example: Name)');
const userSurname: string | null = prompt('Enter your surname : (example: Surname)');
const birthday: string | null = prompt('Enter your birthday : (example: DD/MM/YYYY)');
const gender: string | null = prompt(
  'Select your gender: \n1.Male \n2.Female \n3.Other \n(example: 1)',
);
const password: string | null = prompt('Enter your password : (example: password)');

const getAge = (): any => {
  if (birthday) {
    try {
      const newFormat = birthday.split('/').reverse().join('-');
      const date = new Date(newFormat);
      const ageDifMs = Date.now() - date.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    } catch (error) {
      return 0;
    }
  }
  return 0;
};

const age = getAge();

const isEligibleAge = () => {
  return age >= 14 ? true : false;
};

const genders: string[] = ['Male', 'Female', 'Other'];

const selectGender = () => {
  if (gender) {
    return genders[+gender-1];
  }
};

interface User {
  name: string;
  surname: string;
  age: number;
  gender: string;
  isEligable: boolean;
}

const createUser = () => {
  if (userName && userSurname && gender && birthday && password && age) {
    return {
      data: {
        name: userName,
        surname: userSurname,
        age: age,
        gender: selectGender(),
        isEligible: isEligibleAge(),
      },
      message: 'User successfully created',
    };
  }
  return { message: 'User did not created!' };
};

const { data, message } = createUser();

data ? console.log(data, message) : console.log(message);
