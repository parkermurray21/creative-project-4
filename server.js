const express = require('express');
const app = express();
const bodyParser = require("body-parser");
var inventory = [];
var car= {};

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/getInventory', (req, res) => {
  console.log("inside /getInventory function");
  res.send({inventory});
});

app.post('/addCar', (req, res) => {
  console.log('inside add car post');
  //console.log(req.body.make);
  //console.log(req.body);
    let car = {
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            mileage: req.body.mileage,
            cleanTitle: req.body.cleanTitle,
            color: req.body.color,
            condition: req.body.condition,
            description: req.body.description,
            acquisitionCost: req.body.acquisitionCost,
            listPrice: req.body.listPrice,
            dateAcquired: req.body.dateAcquired,
            dateSold: req.body.dateSold,
    }
    //console.log(car);
    inventory.push(car);
    car = {};
    console.log(inventory.length);
    for(let i = 0; i < inventory.length; i++){
      console.log(inventory[i].model);
    }
    
    res.send(inventory);
  
  
    
});

app.put('/updateCar', (req, res) => {
  res.send('I am updated.\n');
});

app.delete('/removeCar', (req, res) => {
  res.send('All my memories have been deleted. Are you happy now?\n');
});

app.listen(4201, () => console.log('Server listening on port 4201!'));