/*global axios*/

var app = new Vue({
  el: '#app',
  data: {
    prefix: '',
    Car: {},
    text: '',
    make: '',
    model: 'balls',
    url4: 'parkermurrayengineering.com:4200',
    inventory: [],
    car2: {},
    hasInventory: false,
    imgUrl: "images/red-civic-2017.jpg",
    inventoryDisplay: false,
    
    
  },
  created: function(){
  },
  methods: {
    async addCar(){
    //var axios = axios;
     axios.post('/addCar', {
            make: this.Car.make,
            model: this.Car.model,
            year: this.Car.year,
            mileage: this.Car.mileage,
            cleanTitle: this.Car.cleanTitle,
            color: this.Car.color,
            condition: this.Car.condition,
            description: this.Car.description,
            acquisitionCost: this.Car.acquisitionCost,
            listPrice: this.Car.listPrice,
            dateAcquired: this.Car.dateAcquired,
            dateSold: this.Car.dateSold,
            
          }).then(function (response) {
            //console.log(response);
            //this.inventory = response;
          })
          .catch(function (error) {
            console.log(error);
          });
          
    },
          
      
      async getInventory(){
        this.inventoryDisplay= true;
        var inventory=[];
        this.car2 = {};
        let that = this;
        console.log("inside getInventory");
        axios.get('/getInventory')
          .then(function (response) {
          var carInventory = response.data.inventory;
           console.log(response);
           that.inventory=[];
            for(let i = 0; i < response.data.inventory.length; i++){
              //console.log(this.inventory[i].model);
              let car2 = carInventory[i];
              console.log(car2.model);
              that.inventory.push(car2);
            }
            
          })
          .catch(function (error) {
            console.log(error);
            
          });
          
          
          
      },
  },

});