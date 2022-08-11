import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) {
    return console.log("mongodb connected already");
  }

  return mongoose.connect(
    "mongodb+srv://nononcrust:nononmongodb123@cluster0.wo4rqpi.mongodb.net/?retryWrites=true&w=majority",
    () => {
      console.log("mongodb connected");
    }
  );
};

export default connectMongo;
