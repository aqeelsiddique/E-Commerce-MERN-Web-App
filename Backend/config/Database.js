const mongoose = require("mongoose");
const connectDatabase = () => {
mongoose.connect("mongodb://localhost:27017/E_commerce", {
    usenewUrlParser:true ,
    useUnifiedTopology:true
})
.then (
        (data)=> {
            console.log(`Mongodb connected with server: ${data.connection.host}`);

        }
    )
}
module.exports = connectDatabase
