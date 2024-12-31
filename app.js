const pet = {
    species:"Dog",
    name:"Chuka",
    age:5
}

pet.age === pet["age"] //same thing
//All keys get "stringified" :

//Property that don't exist evaluate to undefined;

//A property where key is "SayHi" and the value is a function
pet.bark = function(){
    return "woof woof"
};
pet.bark() //woof woof