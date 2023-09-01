interface IPerson {
    id: number
    // name: string
    // age: number
    sayMyName(): string
}

class Person implements IPerson {
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }

    sayMyName(): string {
        return this.name
    }
}

// Mesma coisa que a class de cima.
class PersonRefact {
    constructor(
        readonly id: number,
        protected name: string,
        private age: number
    ) { }
}

class Employee extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age)
    }

    whoAmI() {
        return this.name
    }
}

const person1 = new Person(1, "Felipe", 38);
// person1.id = 123 //! Somente leitura.