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
        return `Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`; // returns data as a string
    }
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 3: Creating an Inventory Class //

class Inventory {  // creates inventory class
    constructor() {
        this.products = []; // creates array for products
        this.orders = []; // Task 4: Adding orders array
    }

    addProducts(product) {
        this.products.push(product); // adds new products to inventory
    }

    listProducts() { // List each product 
        this.products.forEach(product => {
            console.log(product.getDetails()); // Logs the results
        });
    }

    placeOrder(orderId, product, quantity) { // Task 4: Adding placeOrder method
        if (product.stock >= quantity) { // if there is stock available
            const newOrder = new Order(orderId, product, quantity); // Creates a new order
            this.orders.push(newOrder); // adds the new order to the array
        } else { // otherwise
            console.log(`Insufficient stock for order ID: ${orderId}`); // Error message that stock isn't available
        }
    }

    listOrders() { // Task 4: List orders method
         this.orders.forEach(order => {  // for each order
            console.log(order.getOrderDetails());  // Log the details
         });
    }

    restockProduct(productId, quantity) { // Task 5: adds restockProduct method
        const product = this.products.find(p => p.id === productId); // finds the product through the productId
        if (product) {
            product.stock += quantity; // adds the quantity to the stock
        }
    }
}

const inventory = new Inventory(); // creates the constant for new inventory
inventory.addProducts(prod1); // adds prod1 to inventory
inventory.listProducts(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 4: Implementing Order Management - See in task 3 for the code //

inventory.placeOrder(601, prod1, 2); // adds new order
inventory.listOrders(); // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

// Task 5: Implementing Product Restocking - see task 3 for code //

inventory.restockProduct(101, 5); // restocks product 101 by qty 5
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price $1200, Stock: 8"