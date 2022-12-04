const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const db = new PrismaClient();

async function checkUser(user, password) {
  let flag;
  if (user) {
    const as = await bcrypt.compare(password, user.password).then((match) => {
      flag = match;
      console.log(match);
    });
    if (!flag) {
      return { flag: false, message: "wrong password" };
    } else {
      return {
        flag: true,
        message: "Logged In",
        token: user.token,
        data: user,
      };
    }
  } else {
    return { flag: false, message: "no user exists" };
  }
}

async function loginUser(data) {
  const { user_name, password } = data;
  console.log(user_name, password);
  const user = await db.users.findUnique({
    where: {
      login_id: user_name,
    },
  });
  const dataa = await checkUser(user, password);
  return dataa;
}

module.exports = { loginUser };
