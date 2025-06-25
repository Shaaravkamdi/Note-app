import mongoose from "mongoose";

const connectTOMongoDB = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017//note_app");
        console.log("connected to MongoDB")

    }catch (error){
        console.log("error connecting to MongoDB", error.message)
    }
};

export default connectTOMongoDB;