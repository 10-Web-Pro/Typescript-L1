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
//       msg: "User created successfully",
//     };
//   }
//   return { msg: "User can't created" };
// };
// const { data, msg } = createUser();
// data ? console.log(msg, data) : console.log(msg);

//Bonus TasK
const userNameInput = document.getElementById("name") as HTMLInputElement;
const surNameInput = document.getElementById("surname") as HTMLInputElement;
const birthdayInput = document.getElementById("birthday") as HTMLInputElement;
const genderInput = document.getElementById("gender") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const submit = document.getElementById("submit") as HTMLInputElement;

interface State {
  userName: string;
  surName: string;
  birthday: string;
  gender: string;
  password: string;
}

const state: State = {
  userName: "",
  surName: "",
  birthday: "",
  gender: "",
  password: "",
};

userNameInput.onchange = (e) => {
  const target = e.target as HTMLInputElement;
  state.userName = target.value;
};

surNameInput.onchange = (e) => {
  const target = e.target as HTMLInputElement;
  state.surName = target.value;
};

birthdayInput.onchange = (e) => {
  const target = e.target as HTMLInputElement;
  state.birthday = target.value;
};

genderInput.onchange = (e) => {
  const target = e.target as HTMLInputElement;
  state.gender = target.value;
};

passwordInput.onchange = (e) => {
  const target = e.target as HTMLInputElement;
  state.password = target.value;
};

const getUserAge = (): number => {
  if (state.birthday) {
    try {
      const newBirthday = state.birthday.split("/").reverse().join("-"); // Change input data to "YYYY-MM-DD"
      const date = new Date(newBirthday); // Find birthday date
      const ageDifMs = Date.now() - date.getTime(); // Compare current date and get different with ms
      const ageDate = new Date(ageDifMs); // get ms date
      return Math.abs(ageDate.getUTCFullYear() - 1970); // Find age
    } catch (error) {
      return 0;
    }
  }
  return 0;
};

const isCreate = (age: number): boolean => {
  return age > 14 ? true : false;
};

type User = {
  name: string;
  surname: string;
  age: number;
  gender: string;
  isEligible: boolean;
};

const createUser = (age: number): { data?: User; msg: string } => {
  if (
    state.userName &&
    state.surName &&
    state.birthday &&
    state.gender &&
    state.password &&
    age
  ) {
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
