const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function getAllApplication({ token }) {
  const usr = await db.users.findUnique({
    where: {
      token: token,
    },
  });
  console.log(usr);

  if (!usr) {
    return { flag: false, message: "Bad Request" };
  } else if (usr.user_role == 2) {
    const applicants = await db.customer.findMany();
    console.log(applicants);
    return {
      flag: true,
      message: "Success",
      data: applicants,
    };
  } else if (usr.user_role == 3) {
    const applicants = await db.customer.findMany({
      where: {
        status: 3,
      },
    });

    console.log(applicants);
    return {
      flag: true,
      message: "Success",
      data: applicants,
    };
  } else if (usr.user_role == 4) {
    const applicants = await db.customer.findMany({
      where: {
        status: 5,
      },
    });
    console.log(applicants);
    return {
      flag: true,
      message: "Success",
      data: applicants,
    };
  } else if (usr.user_role == 6) {
    const applicants = await db.customer.findMany({
      //d2d get all applicatios
      where: {
        status: 6,
        // qr_code_image: "",
      },
    });

    console.log(applicants);
    return {
      flag: true,
      message: "Success",
      data: applicants,
    };
  } else {
    return {
      flag: false,
      message: "Access Denied",
    };
  }
}

module.exports = { getAllApplication };
