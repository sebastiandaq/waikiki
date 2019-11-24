import mongoose from 'mongoose';

export default function db_connection() {
  const mongoDB = 'mongodb://sebs:Alianza1@cluster0-shard-00-00-dybvr.mongodb.net:27017,cluster0-shard-00-01-dybvr.mongodb.net:27017,cluster0-shard-00-02-dybvr.mongodb.net:27017/Waikiki?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
  mongoose.connect(mongoDB, {
    useMongoClient: true
  });
  const db = mongoose.connection;
  return db;
}
