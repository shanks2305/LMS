import { models, model, Schema } from "mongoose";

const schema: Schema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN", "INSTRUCTOR"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

const Users = models.Users || model("Users", schema);

export default Users;
