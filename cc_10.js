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

// Task 2: Creating an Order Class //

class Order { // Creates class Order
    constructor (orderID, product, quantity) { // defines properties for the class
        this.orderID = orderID;
        this.product = product;
        this.quantity = quantity;

        this.product.updateStock(quantity); // updates product quantity when order is placed
    }

    getOrderDetails () {
        const totalPrice = this.product.price * this.quantity; // forumla to calculate total price for 1st test case
        return `Order ID: ${this.orderID}, ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`; // returns data as a string
    }
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"