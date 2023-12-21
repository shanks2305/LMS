import Mongoose from "mongoose";
import { config } from "./config";

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null };

const connectMongo = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await Mongoose.connect(config.db_uri);

  return cached.conn;
};

export default connectMongo;
