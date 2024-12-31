class Triangle {   

    constructor(a,b){
        this.a = a;
        this.a.b = b;
    }

    getArea(){
        return (this.a * this.b) / 2; 
    }

    getHypotenuse(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);

    }
}

let tri = new Triangle(3,4); //<--- call constructor
let tri2 = new Triangle(5,7);

// Any method name constructor will be called on making a new instance .


//Basic validation  for constructor

if(!Number.isFinite(a) || a<=0){
    throw new Error (`Invalid a:${a}`) 
}
if(!Number.isFinite(b) || b<=0){
    throw new Error (`Invalid a:${b}`) 
}


class Triangle {   

    constructor(a,b){
        if(!Number.isFinite(a) || a <= 0){
            throw new Error (`Invalid a:${a}`) 
        }
        if(!Number.isFinite(b) || b <= 0){
            throw new Error (`Invalid a:${b}`) 
        }
        this.a = a;
        this.a.b = b;
    }

    getArea(){
        return (this.a * this.b) / 2; 
    }

    getHypotenuse(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);

    }
}
    