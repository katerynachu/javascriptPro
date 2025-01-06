class Cat {
constructor(name){
    this.name = name;
}
static getRandomCAt(){
    console.log('this is',this)
}
dance(style="tango"){
    console.log('this is',this)
return `Meow,I am ${this.name} and I like ${style}`
}

}

let newCatBlue = new Cat('blue');

newCatBlue.dance();
console.log(newCatBlue.dance() //Not Error
)

let dancingBlue = newCatBlue.dance; 

console.log(dancingBlue())//Error


//* newCatBlue.dance('salsa);

//Find the dance menthod on Blue
//call the dance nethod on Blue - yay!

//* let dancingBlue = newCatBlue.dance; 

//Find the dance methon on Blue
//Call the dance method on ...undefined

//* When you call a function on nothing,but the function comes from inside class,the value of this will be undefuned,not the window

//* In either case,you'll see this referred to as "losing the this context"
//* Fortunately,there are ways to force the value of this to be whatever we want.