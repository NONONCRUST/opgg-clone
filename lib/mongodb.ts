import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("mongodb connected already");
  } else {
    mongoose.connect(process.env.MONGODB_URI!, () => {
      console.log("mongodb connected");
    });
  }
};

export default connectMongo;
