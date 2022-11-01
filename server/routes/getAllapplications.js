const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function getAllApplication({ token }) {
  const usr = await db.user.findUnique({
    where: {
      token: token,
    },
  });
  console.log(usr);

  if (!usr) {
    return { flag: false, message: "Bad Request" };
  } else if (usr.role == "depot_manager") {
    const applicants = await db.customer.findMany();
    console.log(applicants);
    return {
      flag: true,
      message: "Success",
      data: applicants,
    };
  } else if (usr.role == "hod") {
    const applicants = await db.customer.findMany({
      where: {
        status: "HOD",
      },
    });

    console.log(applicants);
    return {
      flag: true,
      message: "Success",
      data: applicants,
    };
  } else if (usr.role == "account_manager") {
    const applicants = await db.customer.findMany({
      where: {
        status: "customerAccepted",
      },
    });
    console.log(applicants);
    return {
      flag: true,
      message: "Success",
      data: applicants,
    };
  } else if (usr.role == "d2d") {
    const applicants = await db.customer.findMany({
      //d2d get all applicatios
      where: {
        status: "customerCreated",
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
