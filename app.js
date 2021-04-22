class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        //this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    // calculateAge(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }

    // getsMarried(newLastName){
    //     this.lastName = newLastName;
    // }

    // static addNumbers(x, y){
    //     return x + y;
    // }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;

    }
    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-444-3333', 'Standard')

console.log(john.greeting());
console.log(Customer.getMembershipCost());
// const mary = new Person('Mary', 'Williams', '11-12-1980');

// mary.getsMarried('Thompson');

// console.log(mary);

// console.log(Person.addNumbers(3,4));