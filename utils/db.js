const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.mongoURI || "mongodb://localhost:27017/temp";
  await mongoose.connect(mongoURI, {useNewUrlParser : true});
}

const disconnectDB = () => {
  mongoose.disconnect()
}

module.exports = {connectDB, disconnectDB}