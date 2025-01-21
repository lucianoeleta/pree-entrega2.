import mongoose from "mongoose";

const LINK_DB = 'mongodb+srv://Lucianomd:11223344@amd.cqejc72.mongodb.net/amd';

mongoose.connect(LINK_DB, {
    serverSelectionTimeoutMS: 5000,
  });
  
  console.log('Base de datos conectada....');
  
  export default mongoose;
