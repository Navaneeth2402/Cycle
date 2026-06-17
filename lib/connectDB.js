import mongoose from 'mongoose';


const MONGODB_URI ="mongodb://navaneeth9940_db_user:Nava2402@ac-y6hm3p2-shard-00-00.xakqnev.mongodb.net:27017,ac-y6hm3p2-shard-00-01.xakqnev.mongodb.net:27017,ac-y6hm3p2-shard-00-02.xakqnev.mongodb.net:27017/?ssl=true&replicaSet=atlas-w9k1rr-shard-0&authSource=admin&appName=Cluster0" || process.env.MONGODB_URI;


if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}


// Cache for mongoose connection
let cached = global.mongoose;


if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}


async function connectDB() {
  // If already connected, return the existing connection
  if (cached.conn) {
    return cached.conn;
  }


  // If there's no promise, create a new connection
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };


    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }


  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }


  return cached.conn;
}


export default connectDB;
