const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://mongo:CKoVoFrKg0mAcI9E@cluster0.sni6euq.mongodb.net/real-estate?retryWrites=true&w=majority")
.then(()=>{console.log("connected to database")})
.catch((e)=>{console.log(e)})