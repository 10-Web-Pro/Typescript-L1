const userForm = document.querySelector("#user-form") as HTMLFormElement;

interface formTypes {
  username: string | null | FormDataEntryValue;
  surname: string | null | FormDataEntryValue;
  birthday?: string | null | FormDataEntryValue;
  gender: string | null | FormDataEntryValue;
  password: string | null | FormDataEntryValue;
  age?: number | null | FormDataEntryValue;
}

const state: formTypes = {
  username: "",
  surname: "",
  gender: "",
  password: "",
  age: "",
};

const getAge = (birthday: any): number => {
  if (birthday) {
    try {
      const forAgeData = birthday.get("birthday");
      const date = new Date(forAgeData);
      const ageDifMs = Date.now() - date.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    } catch (error) {
      return 0;
    }
  }
  return 0;
};

const passAge = (age: number): boolean => {
  return age > 14 ? true : false;
};

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(event.target as HTMLFormElement);
  if (getAge(data) >= 14) {
    alert("Registartion is successfully submitted");
    state.username = data.get("name");
    state.surname = data.get("surname");
    state.gender = data.get("gender");
    state.password = data.get("password");
    state.age = getAge(data);
    console.log("Age is elligable for registration");
    console.log(state);
  }else{
    console.log("Age is not elligable for registration");
  }

});
