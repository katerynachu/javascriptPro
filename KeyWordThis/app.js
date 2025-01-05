//Learn how stop worrying and love the keyword textEmphasis
//explain what *.call* does
//explain what *.bind* does
//Use .call and .bind to reassing the value of the keyword textEmphasis: 



//* Keyword This


const person ={     //Can use in Object
    name:"Conan",
    city:'Los Angeles',
    sing:function (){
        return `${this.name} sing la la la`
    }
}

console.log(person.sing()) //Conan sing la la la

//BUT if 
    
const ConanSing = person.sing;
console.log(ConanSing())// sing la la la


class Cat {
    constructor(name){
        this.name = name;
    }

    dance(style = 'tango'){
        return `Meow ,I am ${this.name} and I like to dance ${style}`
    }

}
const catfluffy = new Cat('fluffy');
// console.log(catfluffy.dance())

const catFluffyDance = catfluffy.dance;
// console.log(catFluffyDance())//Cannot read properties of undefined (reading 'name')


function greet(){
    console.log('hello') 
}
greet();//When you call a function on nothing...you call it on the "global object"
//So its the same if 
window.greet() //Window - global object in a Browser

//In browser Js,that's typically window (the browser window)
//in Node.js that's global (where some Node utilities are)





