const request = require("postman-request");
const geolocation = require("./utils/geolocation");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if(!address){
    return console.log('Enter a address');
}

geolocation(address, (error, {latitude, longitude}={}) => {

    if(error){
        return console.log(error);
    }
//   console.log(error);
//   console.log(data);

  forecast(latitude, longitude, (error, data) => {
      if(error){
          return console.log(error);
      }
    console.log(data);
    // console.log(dat);
  });
});
