class MyClass {
    static {
        console.log('class is loaded') //run ONCE 
    }
}


class DatabaseConnection {
    static connection;

    static {
        if (proccess.env.Node_ENV === 'production') { // use when we need some logis when Class loaded
            this.connection = this.loadProductionConnection;
        }else{
            this.connection = this.loadDevelopmentconnection;
        }
    }
    static loadProductionConnection() {

    }
    static loadDevelopmentconnection() {

    }
}