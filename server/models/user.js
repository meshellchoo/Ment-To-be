const mongoose = require("../mongoose/mongoose-index");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const user_schema = new mongoose.Schema(
  {
    google_id: String,
    username: String,
    full_name: String,
    first_name: String,
    last_name: String,
    picture: String,
    email: String,
    mentee_profile_exists: Boolean,
    mentor_profile_exists: Boolean,
  },
  { timestamps: true }
); // schema for user logins

user_schema.plugin(passportLocalMongoose);
user_schema.plugin(findOrCreate);

const User = new mongoose.model("User", user_schema); // creating user model

module.exports = User;