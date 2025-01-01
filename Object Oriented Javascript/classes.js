class Triangle {   //blueprint

    getArea(){
        return (this.a * this.b) / 2; 
    }

    getHypotenuse(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);

    }
}

const firstTri = new Triangle(); //undefined

firstTri.getArea() //NaN

firstTri.a = 3;
firstTri.b=4;

firstTri.getArea() // 6


//* Defines the methods each instance of Triangle will have

//*  Make a new triangle with  ** new Triangle() **

//* Can still add/look at arbitrary properties 
// *this* is "the actual triangle in question"

//! Class names should be *UpperCamelCase*
//! Reduces confusion between triangle(individual = still object) and TRIANGLE (class)

fisrtTri instanceof Triangle; // true 
typeof firstTri ; //object 