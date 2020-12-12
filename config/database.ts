import config from 'config';
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI: string = config.get('mongoURI');
    await mongoose.connect(
      mongoURI.concat('enviro'),
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      () => console.log('🍃 conected to mongo.')
    );
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
