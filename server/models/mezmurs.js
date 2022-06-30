import mongoose from "mongoose";
const { Schema, model } = mongoose;

const mezmurSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  langetext: {
    type: String,
    required: true,
  },
 
  
});

const Mezmur = model("Mezmur", mezmurSchema);
export default Mezmur;