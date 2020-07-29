const data = require("./data.json");
const Cities = require("../models/Cities");

const cityData = data.map((item) => {
  const city = {};
  city.city = item.city;
  city.state = item.state;
  city.district = item.district;
  return city;
});
console.log(cityData);

Cities.deleteMany({}).then(() => {
  Cities.create(cityData)
    .then((cities) => {
      console.log(cities);
      process.exit();
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
});
