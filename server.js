const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PlaceRoutes = express.Router();
const PORT = 4000;

let Place = require('./models/model.place');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Places', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

placeRoutes.route('/').get(function(req, res){
    Place.find(function(err, place){
        if (err){
            console.log(err);
        }
        else{
            res.json(place);
        }
    });
});

placeRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Place.findById(id, function(err, place){
        res.json(place);
    });
});

placeRoutes.route('/update/:id').post(function(req, res){
    Place.findById(req.parms.id, function(err, place){
        if (!place)
            res.status(404).send("data is not found");
        else
            place.place_name = req.body.place_name;
            place.place_description = req.body.place_description;
            place.place_address = req.body.place_address;
            place.place_owner = req.body.place_owner;
            place.place_type = req.body.place_type;

            place.save().then(place => {
                res.json('Place updated!');
            })
                .catch(err =>{
                    res.status(400).send("Update not possible");
                });
    });
});

placeRoutes.route('/add').post(function(req, res){
    let place = new place(req.body);
    place.save()
        .then(place => {
            res.status(200).json({'place': 'place added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new place failed');
        });
});

app.use('/places', placeRoutes);

app.listen(PORT, function(){
    console.log("Server is running on port: " + PORT);
});