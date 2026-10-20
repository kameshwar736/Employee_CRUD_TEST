import mongoose from "mongoose";


export const db = async() => {
    try {
        const connectDB =await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database Connected Successfully ${connectDB.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}

