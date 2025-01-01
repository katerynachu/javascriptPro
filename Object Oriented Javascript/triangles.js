function getTriangleArea(a,b){
    return (a * b) / 2;
}

function getTriangleHypotenuse(a,b){
    return Math.sqrt(a ** 2 + b ** 2);
}


//Using a POJO

let myTri ={
    a:3,
    b:4, 
    getArea:function(){
        return (this.a * this.b) / 2; //this = "this object"
    },
    getHypotenuse:function(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);

    }
}