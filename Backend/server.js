const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/Database')

const express = require('express');



//////////////handling uncaught expection error//
process.on("uncaughtExpection" , (err) => {
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to uncaught expection`);
   process.exit(1)
})
//config
dotenv.config({path:"config/config.env"});
connectDatabase();

// Connecting to database
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//    console.log(`Server is working on http://localhost:${PORT}`);
// });

 
// Connecting to database
// PORT=6780
// const port = 3000;
// app.listen(port, (err) => {
//    // err handling
//    console.log('server started on port: '+port);
// });
// connectDatabase()
//  app.listen(process.env.PORT,()=>{
//    const PORT = 3001;  
//     console.log(`Server is working on http://localhost:${PORT}`)
//  })

const server = app.listen(process.env.PORT, () => {
   console.log(`Server is working on http://localhost:${process.env.PORT}`);
 });
 
//unhandled promise rejection
process.on("unhandledrejection" , (err) => {
   console.log(`error:${err.message}`);
   console.log(`shutting down the server due to unhandled promise rejection`);
   server.close(() => {
      process.exit(1)
   });
});
