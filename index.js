const app = require("express")();
const Cities = require("./models/Cities");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//get routes

app.get("/", (req, res) => {
  Cities.find({}).then(() => {
    res.redirect("/cities");
  });
});
app.get("/cities", (req, res) => {
  Cities.find({}).then((cities) => {
    res.json(cities);
  });
});
app.get("/cities/:id", (req, res) => {
  Cities.findById(req.params.id).then((city) => {
    res.json(city);
  });
});
app.get("/cities/city/:city", (req, res) => {
  Cities.find({ City: req.params.city }).then((city) => {
    res.json(city);
  });
});
app.get("/cities/district/:district", (req, res) => {
  Cities.find({ District: req.params.district }).then((cities) => {
    res.json(cities);
  });
});
app.get("/cities/state/:state", (req, res) => {
  Cities.find({ State: req.params.state }).then((cities) => {
    res.json(cities);
  });
});
//query string route
// app.get("/cities/search", (req, res) => {
//   if (req.query.city) {
//     Cities.find({ City: req.query.city }).then((city) => {
//       res.json(city);
//     });
//   } else if (req.query.state) {
//     Cities.find({ State: req.query.state }).then((cities) => {
//       res.json(cities);
//     });
//   } else if (req.query.District) {
//     Cities.find({ District: req.query.district }).then((cities) => {
//       res.json(cities);
//     });
//   } else {
//     Cities.find({}).then((cities) => {
//       res.json(cities);
//     });
//   }
// });
// app.get("/cities/search", (req, res) => {
//   Cities.find({ State: req.query }).then((cities) => {
//     res.json(req.query);
//   });
// });

//update route

app.put("/cities/:id", (req, res) => {
  Cities.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    (city) => {
      res.json(city);
    }
  );
});

//post route

app.post("/cities", (req, res) => {
  console.log("req.body: ", req.body);
  Cities.create(req.body).then((city) => {
    res.json(city);
  });
});

//delete route

app.delete("/cities/:id", (req, res) => {
  Cities.findOneAndRemove({ _id: req.params.id }).then((city) => {
    res.json(city);
  });
});

//listening port

app.listen(4000, () => {
  console.log("listening on port 4000... indian cities");
});
