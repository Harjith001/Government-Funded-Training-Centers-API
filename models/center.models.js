import mongoose from "mongoose";

const CenterSchema = new mongoose.Schema({
  centerName: {
    type: String,
    required: true,
    maxlength: 40
  },
  centerCode: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9]{12}$/ // Ensures exactly 12 alphanumeric characters
  },
  address: {
    detailedAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { 
      type: String, 
      required: true, 
      match: /^[1-9][0-9]{5}$/ // Validates a 6-digit pincode (Indian format)
    }
  },
  studentCapacity: {
    type: Number,
    required: true,
    min: 1 // Ensures at least one student capacity
  },
  coursesOffered: {
    type: [String], // List of text values
    default: []
  },
  createdOn: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000) // Stores Epoch time
  },
  contactEmail: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Email validation
      },
      message: props => `${props.value} is not a valid email!`
    },
    sparse: true // Allows field to be optional
  },
  contactPhone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/ // Validates a 10-digit phone number
  }
});

const Center = new mongoose.model('Center',CenterSchema);

export default Center;
