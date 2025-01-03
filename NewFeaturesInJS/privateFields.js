class MyClass{
        //Public Field
        publicField = 'Public Field';
    
        //Private Field
        #privateField = 'Private Field';
    
    
        getPrivateField(){
            return this.#privateField;
        }
    
    }
    
    let instance = new MyClass();
    // console.log(instance.publicField)
    // console.log(instance.privateField)
    // console.log(instance.getPrivateField())


    class Circle{
        #radius;

        constructor(radius){
            this.#radius = radius;
        }

        getRadius(){
            return this.#radius;
        }
    }

    const myCircle = new Circle(6);
// console.log(myCircle.getRadius())//6
    // console.log(myCircle.#radius)//Error