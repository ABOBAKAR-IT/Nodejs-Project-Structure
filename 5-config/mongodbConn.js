const mongoose = require("mongoose");
//const db = `mongodb+srv://abobakar-it:ranag1234@cluster0.y01jn.mongodb.net/naqsh-o-tameer?retryWrites=true&w=majority`;
const dblocal='mongodb://127.0.0.1:27017/user'
const connection = async () => await mongoose.connect(dblocal);
module.exports = connection;