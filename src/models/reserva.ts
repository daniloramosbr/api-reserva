import mongoose from "mongoose";

const ReserveScheme = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  table: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
});

const reserve = mongoose.model("reserve", ReserveScheme);

export default reserve;
