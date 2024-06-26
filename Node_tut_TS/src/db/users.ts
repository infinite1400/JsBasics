import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});
const UserModel = mongoose.model("User", UserSchema);
export default UserModel;

// functions !
export const getUsers = () => {
  return UserModel.find();
};

export const getUserByEmail = (email: string) => {
  return UserModel.findOne({ email: email });
};

export const getUserBySessionToken = (sessionToken: string) => {
  return UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
};

export const getUserById = (id: string) => {
  return UserModel.findById(id);
};

export const createUser = (values: Record<string, any>) => {
  return new UserModel(values).save().then((user) => user.toObject());
};

export const deleteUserById = (id: string) => {
  return UserModel.findByIdAndDelete(id);
};

const updateUserById = (id: string, values: Record<string, any>) => {
  return UserModel.findByIdAndUpdate(id, values);
};
