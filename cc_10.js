// Task 1: Creating a Product Class //

class Product { // defines the class Product
    constructor (name, id, price, stock) { // defines the properties for the class
    this.name = name; 
    this.id = id;
    this.price = price;
    this.stock = stock;
    }

    getDetails () { // creates getDetails method
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`; // Returns the properties as a string
    }

    updateStock(quantity) { // creates updateStock method
        this.stock -= quantity; // removes the order quantity from the stock amount
    }
}

const prod1 = new Product("Laptop", 101, 1200, 10); // creates constant with properties to be used
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3); // removes 3 from the stock quantity
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"