import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = 
  "mongodb://Admin:admin123@hamna-hina-shard-00-00.eoojw.mongodb.net:27017,hamna-hina-shard-00-01.eoojw.mongodb.net:27017,hamna-hina-shard-00-02.eoojw.mongodb.net:27017/Hamna-Hina?ssl=true&replicaSet=atlas-flmgik-shard-0&authSource=admin&retryWrites=true&w=majority"
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};
