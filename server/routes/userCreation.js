const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const { createTokens } = require("../auth/jwtToken");

const db = new PrismaClient();

async function createUser(usrDetails) {
  const dateTime = new Date();
  let Pass;

  const { user_name, password, user_role, active, entry_by, mod_by } =
    usrDetails;
  const Token = await createTokens(user_name);
  const hassPass = await bcrypt.hash(password, 15).then(async (hashPass) => {
    Pass = hashPass;
  });

  try {
    const a = await db.users.create({
      data: {
        user_name: user_name,
        login_id: user_name,
        password: Pass,
        user_role: user_role,
        active: active || "YES",
        entry_by: entry_by,
        entry_date: dateTime,
        mod_by: mod_by,
        mod_date: dateTime,
        token: Token,
      },
    });
    return {
      status: "Success",
      message: `user Created ${user_name}`,
      token: Token,
    };
  } catch (e) {
    console.log(e.message)
    return {
      status: "Failed",
      message: `No user Created`,
      error: e.message,
    };
  }
}

module.exports = { createUser };
