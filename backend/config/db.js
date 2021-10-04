const mongoose = require('mongoose');
require('dotenv/config');

console.log(process.env.MONGOOSE_CONNECTING_URL)
mongoose.connect(process.env.MONGOOSE_CONNECTING_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(ok=>console.log("Database is connected"))
.catch(err=>console.log(err))

module.exports = mongoose 