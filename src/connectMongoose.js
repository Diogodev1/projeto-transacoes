import mongoose from "mongoose";

const connectMongoose = (dbURI) => {
    mongoose.connect(dbURI)
    mongoose.connection.on('connected', function () {  
        console.log('Mongoose default connection open to ' + dbURI);
    }); 
    mongoose.connection.on('error',function (err) {  
        console.log('Mongoose default connection error: ' + err);
    }); 
}

export default connectMongoose
