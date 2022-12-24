
// declare
const username = document.querySelector('#name') as HTMLInputElement;
const surname = document.querySelector('#surname') as HTMLInputElement;
const date = document.querySelector('#date') as HTMLInputElement;
const gender = document.querySelector("#gender") as HTMLSelectElement;
const password = document.querySelector("#pass") as HTMLInputElement;
const btn = document.querySelector("#btn") as HTMLButtonElement;
const form = document.querySelector("#form") as HTMLFormElement;




// method for getting age
// Date.now() returns the number of milliseconds since January 1, 1970.
const ageFromDateOfBirthday = (valueofdate: any): number => {
    let birthdate = new Date(valueofdate)
    var diff_ms = Date.now() - birthdate.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
let age:number;
// check function
const isElligible = (age: number): boolean => {
    console.log(age)
    return age >= 14 ? true : false
}

// obj

type myObj= {
    name: string,
    surname: string,
    age: number,
    iselligible: boolean
}

let usersaarr:myObj[]=[];
// form submit

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
   age = ageFromDateOfBirthday(date.value);
    if (isElligible(age)) {
        let newuser = {
            name: username.value,
            surname: surname.value,
            age:age,
            iselligible:true
        };
        alert("accout created!");
        usersaarr.push(newuser)
        console.log(usersaarr)
    }
    else alert("you are under the age of 14.that is why we can not create an acoount for you!") 
})

