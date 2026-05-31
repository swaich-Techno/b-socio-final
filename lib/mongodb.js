import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.bSocioMongo;

if (!cached) {
  cached = global.bSocioMongo = { conn: null, promise: null };
}

export default async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!MONGODB_URI) throw new Error("Missing MONGODB_URI");

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      connectTimeoutMS: 2500,
      serverSelectionTimeoutMS: 2500
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}
