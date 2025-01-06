
//*Rule Left Of The Dot 
//this - its always = directly to something from left . 

function whatIsTHis(){
    console.log("The value of this is :" , this)
}

window.whatIsTHis();  // window

const obj ={
    color:"purple",
    age:2,
    whatIsTHis:whatIsTHis
}
obj.whatIsTHis() // my object



const person = {     
    name:"Conan",
    city:'Los Angeles',
    sing:function (){
        return `${this.name} sing la la la`
    }
}

//*Rule is 
