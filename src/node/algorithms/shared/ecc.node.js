
try{
  module.exports = require("ecc");
} catch (e){
  module.exports = require("ecc-jsbn");
}
