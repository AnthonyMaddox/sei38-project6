const fetch = require("node-fetch");
const fs = require("fs");
const url = "https://indian-cities-api-nocbegfhqg.now.sh/cities";

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let cities = JSON.stringify(res);
    console.log(cities);
    fs.writeFile("./data.json", cities, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  });
