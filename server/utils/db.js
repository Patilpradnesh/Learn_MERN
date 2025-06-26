const mongoose = require("mongoose");
const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection to the Database is successful");
    } catch (error) {
        console.error("Error connecting to the Database",error);
        // process.exit(1);
    }
};

module.exports= ConnectDb;
