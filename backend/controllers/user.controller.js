import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send({
      msg: "fill all the parameters",
    });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    res.send("user not found");
  }
  const match = bcrypt.compare(password, user.password);
  if (!match) {
    res.send("incorrect password");
  }
};
