import { Schema, model } from "mongoose";

interface IUser {
  name: String;
  email: String;
  avatar?: String;
}
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: String,
});
const user = model("User", userSchema);

export default user;
