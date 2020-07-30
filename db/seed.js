const data = require("./data.json");
const City = require("../models/City");

const cityData = data.map((item) => {
  const city = {};
  city.City = item.City;
  city.State = item.State;
  city.District = item.District;
  return city;
});
console.log(cityData);

City.deleteMany({}).then(() => {
  City.create(cityData)
    .then((cities) => {
      console.log(cities);
      process.exit();
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
});
