//for easy db connection
const mongoose=require("mongoose"); 
//for showing colourful messages in terminal
const colors=require("colors");

//connects server to db
const connectDb= async () => {
    try {
        //wait for server to connect to db
        await mongoose.connect(process.env.MONGO_URL);
        //after successfull connection , display host on terminal with text white and bg cyan color
        console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);   
    } catch (error) {
        //if error occurs , then display error message with bg red color
        console.log(`${error}`.bgRed);
    }
};

//export connectDb functions so other modules can use it
module.exports=connectDb;