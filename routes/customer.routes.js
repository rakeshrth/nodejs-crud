module.exports = app =>{
    const customers = require("../controller/customer.controller")

    //create new customr
    app.post("/customers", customers.create)

    //retrieve all
    app.get('/customers', customers.findAll)

    // Retrieve a single Customer with customerId
    app.get("/customers/:customerId", customers.findOne);

    // Update a Customer with customerId
    app.put("/customers/:customerId", customers.update);

    // Delete a Customer with customerId
    app.delete("/customers/:customerId", customers.delete);
}
