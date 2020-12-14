const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/mern", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`Connection Sucessful`);
}).catch((e) => {
    console.log(`no connection`);
})