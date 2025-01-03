class Circle{
    constructor(radius){
        this._radius = radius;  // _radius shows to other dev "don't change the property" its private 
    }

    get diameter(){
        return this._radius * 2;
    }
}

class Circle {
    constructor(radius){
        this._radius = radius;
    }

    //Setter for the radius
    set radius(value){
        if(value < 0){
            throw new Error ("RAdius cannot be negative");
        }else{
            this._radius = value;
        }
    }
}
const circle = new Circle(5);
circle.radius = -3; //Error : Radius cannot be negative
