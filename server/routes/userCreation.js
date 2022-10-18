const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const { createTokens } = require("../auth/jwtToken");

const db = new PrismaClient();

async function createUser(usrDetails) {
  const dateTime = new Date();
  let Pass;
  const { username, password, role, application_no, id, mod_by } = usrDetails;
  const token = await createTokens(username);
  const hassPass = await bcrypt.hash(password, 15).then(async (hashPass) => {
    Pass = hashPass;
  });

  try {
    const a = await db.user.create({
      data: {
        username: username || "Undefined",
        password: Pass || "Undefined",
        role: role || "Undefined",
        application_no: application_no || "Undefined",
        id: id || "Undefined",
        entry_date: dateTime || "Undefined",
        mod_date: dateTime || "Undefined",
        mod_by: mod_by || "Undefined",
        token: token,
      },
    });
    return {
      status: "Success",
      message: `user Created ${username}`,
      token: token,
    };
  } catch (e) {
    return {
      status: "Failed",
      message: `No user Created`,
    };
  }
}

module.exports = { createUser };
