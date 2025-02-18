import mongoose from "mongoose";  // Importing Mongoose library

const User = mongoose.Schema({  // Creating a Mongoose schema for User collection
  name: {                       // Name property of User collection
    type: String,              // Type is String
    required: true             // Name is a required field
  },
  email: {                      // Email property of User collection
    type: String,              // Type is String
    required: true             // Email is a required field
  },
  age: {                        // Age property of User collection
    type: Number,              // Type is Number
    required: true             // Age is a required field
  },
  status: {                     // Status property of User collection
    type: String,              // Type is String
    required: true             // Status is a required field
  }
});

export default mongoose.model("Users", User);  // Exporting User schema as a Mongoose model named "Users"
