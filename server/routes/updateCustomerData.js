const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function updateCustomerData(data) {
  let { applicantId, updatedData, token } = data; //updatedData is an object

  console.log(applicantId);
  const usr = await db.user.findUnique({
    where: {
      token: token,
    },
  });

  if (!usr) {
    return { flag: false, message: "Bad Request" };
  } else if (
    usr.role == "depot_manager" ||
    usr.role == "hod" ||
    usr.role == "d2d" ||
    usr.role == "account_manager"
  ) {
    const application = await db.customer.update({
      where: {
        id: applicantId,
      },
      data: updatedData, //key value pair should match database fields name
    });

    return {
      flag: true,
      message: `data Updated`,
    };
  } else {
    return {
      flag: false,
      message: "Access Denied",
    };
  }
}

module.exports = { updateCustomerData };
