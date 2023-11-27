import  mongoose  from "mongoose";


const dbConnection = async () => {
    try {
        const dbConnection= await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB database Connected");
    } catch (error) {
        console.error("db error",error.message);
        // process.exit(1);
    }
};

export default dbConnection;