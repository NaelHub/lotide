// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`These two are the same: ${actual} vs ${expected}`)
  } else {
    console.log(`These two are not the same: ${actual} vs ${expected}`);
  }

};

module.exports = assertEqual;

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);