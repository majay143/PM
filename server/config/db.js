const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB=mongoose.connect('mongodb://0.0.0.0:27017/Graph')////, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB ');
  })
  .catch((error) => {
    console.error('Connection error:', error);
  });
  /*const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};
*/
////module.exports = connectDB;