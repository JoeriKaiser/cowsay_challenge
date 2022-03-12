const campusTable = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
  text : `Hello i'm ${campusTable.name} from ${campusTable.city} Campus`
}));