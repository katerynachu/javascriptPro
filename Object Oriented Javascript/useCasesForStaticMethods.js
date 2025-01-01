class MyMath {

    static add(a, b) {
        return a + b
    }

    static multiply(a, b) {
        return a * b
    }
}

class Cat {
    constructor(name, bread) {
        this.name = name;
        this.bread = bread;

    }
    meow() {
        return ` ${this.name} says meow`
    }
}

function choice(arr) {
    const randIdx = Math.floor(MAth.random() * arr.length);
    return arr(randIdx)
}
//Call this Factory function
function registerStray() {
    const names = ["Muffin", "Biscuit", "Sleepy", "Dodo", "Princess"];

    const name = choice(names);

    return new Cat(name, "unknown");

}

//We can use static instead
class CatExample {
    constructor(name, bread) {
        this.name = name;
        this.bread = bread;

    }
    static registerStray() {
        const names = ["Muffin", "Biscuit", "Sleepy", "Dodo", "Princess"];
        const name = choice(names);
        return new Cat(name, "unknown");

    }
    meow() {
        return ` ${this.name} says meow`
    }
}

class User{
    static registerUser(username,password){
        
    }
}