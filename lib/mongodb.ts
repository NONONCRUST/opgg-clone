import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) {
    return console.log("mongodb connected already");
  }

  return mongoose.connect(process.env.MONGODB_URI!, () => {
    console.log("mongodb connected");
  });
};

export default connectMongo;
