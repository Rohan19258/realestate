const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/realEstateDb")
.then(()=>{console.log("connected to database")})
.catch((e)=>{console.log(e)})