// class MyClass{
//     //Public Field
//     publicField = 'Public Field';

//     //Private Field
//     #privateField = 'Private Field';


//     getPrivateField(){
//         return this.#privateField;
//     }

// }

// let instance = new MyClass();
// console.log(instance.publicField)
// console.log(instance.privateField)
// console.log(instance.getPrivateField)


class Cat {
    static numberOfCats = 0;//static field

    name; //public field
    breed;//public field
    numberOfLegs = 4;//public field
    hasTail = true;//public field

    constructor(name,breed){
        this.name = name;
        this.breed =breed;
        Cat.numberOfCats +=1;
    }
    amputate(){
        this.numberOfLegs -=1;
    }
}
