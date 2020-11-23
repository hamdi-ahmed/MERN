const express = require("express");
const router = express.Router();
let House = require('../models/house.model');

router.use(express.json());

//find => to retrive all houses from DB and display it, find() return pomises . 
router.route('/').get((req, res) => {
    House.find()
        .then(house => res.json(house))
        .catch(err => res.status(400).json(`Error ${err}`));
});


//Add
router.route('/add').post((req, res) => {

    const city = req.body.city
    const price = req.body.price
    const numberOfGuests = req.body.numberOfGuests
    const numberOfBedroom = req.body.numberOfBedroom
    const numberOfBathroom = req.body.numberOfBathroom

    //to save in DB
    const newHouse = new House({
        city,
        price,
        numberOfGuests,
        numberOfBedroom,
        numberOfBathroom
    });
    newHouse.save()
        .then(() => res.send("House Added ! "))
        .catch((err => res.status(400).send(`Error ${err}`)));
});

//Search in DB by id
router.route("/:id").get((req, res) => {
    House.findById(req.params.id)
        .then(House => res.send(House))
        .catch(err => res.status(400).send(`Error: ${err}`));
});

//delete
router.route("/:id").delete((req, res) => {
    House.findByIdAndDelete(req.params.id)
        .then(() => res.send("Deleted ! "))
        .catch(err => res.status(400).send(`Eroor: ${err}`));
});

//update
router.route('/update/:id').post((req, res) => {
    House.findById(req.params.id)
        .then(house => {
            house.city = req.body.city,
                house.price = req.body.price,
                house.numberOfGuests = req.body.numberOfGuests,
                house.numberOfBedroom = req.body.numberOfBedroom,
                house.numberOfBathroom = req.body.numberOfBedroom
            house.save()
                .then(() => res.send("Updated ! "))
                .catch((err) => res.status(400).send(`Error: ${err}`));
        })
        .catch((err) => res.status(400).send(`Error: ${err}`));
})

module.exports = router;