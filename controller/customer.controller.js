const Customer = require('../models/customer.model')

//create and save new custmr
exports.create = (req,res) => {
    if(!req.body) {
        res.status(400).send ({
            message: "content cannot be empty"
        })
    }
    //create new custmr
    const customer = new Customer ({
        email : req.body.email,
        first_name: req.body.first_name  
    })

    //saving to db
    Customer.create(customer, (err, data) => {
        if(err){
            res.status(500).send({
                message:err.message
            })
        } else res.send(data)

    })
    // Customer.create(customer)
    //     .then(data => {
    //         res.send(data)
    //     })
    //     .catch(err =>{
    //         res.status(500).send({
    //             message:err.message
    //         })
    //     })
    

}


// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message
            })
        } else {
            res.send(data)
        }
    })

};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
        if(err) {
            if(err.kind === "not_found") {
                res.status(404).send({
                    message: `customer with id ${req.params.customerId} not found`
                })
            } else{
                res.status(500).send({
                    message: "error getting customer with id" + res.params.customerId
                })
            }
        } else {
            res.send(data)
        }

    })
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "content cant be empty"
        })
        
    }

    console.log( req.body)

    Customer.updateById(req.params.customerId, new Customer(req.body), (err,data) => {
        if(err) {
            if(err.kind === "not_found") {
                res.status(404).send({
                    message : `customer by the id ${req.params.customerId} not found`
                })
            } else {
                res.status(500).send({
                    message: `error uodating the customer id ${req.params.customerId}`
                })
            }
        } else{
            res.send(data)
        }
    })

};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Customer.remove(req.params.customerId, (err,data) => {
        if(err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `customer with id ${req.params.customerId} not found`
                })
            } else {
                res.status(500).send({
                    message: `error dleting customer with id ${req.params.customerId}.`
                })
            }
        } else res.send({
            message: "customer removed suuccessfully"
        })
    })
  
};

