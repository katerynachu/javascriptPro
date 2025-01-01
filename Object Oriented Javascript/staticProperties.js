class CatWIthStaticProp {
    constructor(name){
        this.name= name;

    }
    //good example of a static property -- 
    //all instances of cats are the same species
    //it doesn't vary from one cat another

    static genusSpecies = "feline catus";

    describe(){
        return `${this.name} is a ${CatWIthStaticProp.genusSpecies}`
    }
}
//Other OO languages often call this idea a "class attribute"

//Static methods
//* JS gives us "static methids",where the method is called on a Class,not an object -
//*therefore it cannot have access to individual objects attributes

class Cat {
    constructor(fname){
        this.fname= fname;

    }
    static myStaticMethod(){
        console.log("myStaticMethod this = ",this)
    }
    myMethod(){
        console.log("myMethod this = ",this)
    }

}

const fluffyCat = new Cat('fluffy');
fluffyCat.myMethod(); //log the instance
Cat.myStaticMethod(); //log the class

//Almost every other OO language more properly call this a "class method" not a static method -
//since it does have access to this class itself(that's what the "this" is in a JS "static method" )