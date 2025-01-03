class MyClass{
    #privateMethod(){
        console.log('very private'); // no access
    }

    publicMethod(){
        this.#privateMethod();// happy to show you iNFO
    }

}

const myClass = new MyClass();

console.log(myClass.publicMethod())//very private