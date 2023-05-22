"use strict";

// --------------- DESTRUCTURE ----------------
var js = {
  creator: "Javidan",
  date: 1997,
  family: "C",
  compileType: "interpretator",
  uni: {
    name: 'aiPlane MMc',
    date: 2013
  }
}; // const {creator ,family} = js
// console.log(js.creator ,js.family )

function writeInfo(_ref) {
  var creator = _ref.creator,
      date = _ref.date;
  console.log("my name is ".concat(creator, "  ,  ").concat(date, "  "));
}

writeInfo(js);
var laptop = {
  name: "Dell",
  model: "Latitude",
  country: {
    name: "USA",
    capital: {
      name: "Vashington",
      address: "sgsgdsf"
    },
    year: 2015
  }
};

function laptopFind(_ref2) {
  var _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? "Dell" : _ref2$name,
      model = _ref2.model,
      _ref2$country = _ref2.country,
      countryName = _ref2$country.name,
      _ref2$country$capital = _ref2$country.capital,
      capitalName = _ref2$country$capital.name,
      address = _ref2$country$capital.address,
      year = _ref2$country.year;
  console.log("my name is ".concat(name, "  , my model is ").concat(model, " , i arrived is ").concat(name, "  my country capital adress ").concat(address));
}

laptopFind(laptop); // ------------- CLOSURE --------------