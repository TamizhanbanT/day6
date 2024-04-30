class Person {
    constructor(firstName, lastName, age, gender, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails() {
        return {
            fullName: this.getFullName(),
            age: this.age,
            gender: this.gender,
            occupation: this.occupation
        };
    }
}

const tam = new Person("Tamizh", "Anban", 26, "Male", "Software Engineer");
console.log(tam.getDetails());
