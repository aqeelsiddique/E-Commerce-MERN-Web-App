const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/Database')
//////////////handling uncaught expection error\//
process.on("uncaughtExpection" , (err) => {
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to uncaught expection`);
   process.exit(1)
})
//configg
dotenv.config({path:"backend/config/confi.env"});
// Connecting to database
connectDatabase()
 app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
 })
//unhandled promise rejection
process.on("unhandledrejection" , (err) => {
   console.log(`error:${err.message}`);
   console.log(`shutting down the server due to unhandled promise rejection`);
   server.close(() => {
      process.exit(1)
   });
});
