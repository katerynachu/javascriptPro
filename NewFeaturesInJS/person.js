class User {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullname){
        // const parts = fullname.split(' ',2)
        // const index =str.indexOf(' ');
        // if(index !== -1){
        //      this.firstNamename = fullname.slice(0,index);
        //     this.lastName =fullname.slice(index + 1);

        // }else{
        //     throw new Error ('Add space between first and last name')
        // }
        const [first,last] = fullname.split(' ');
        this.firstName = first;
        this.lastName = last;
    }
}
