const usertable = require("../../Models/usertable.js");
const userlist = async (req, res) => {
  try {
    const users = await usertable.find().sort({ createdAt: -1 });
    res.send({ status: "successfully", data: users });
  } catch (err) {
    console.log(`  here is errror ${err}`);
    res.send({ status: "faild", errors: err.errors });
  }
};

module.exports = userlist;
