//NOT CHECKED

const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();
async function updateCustomerData(data) {
  let { applicantId, updatedData, token } = data; //updatedData is an object

  console.log(applicantId);
  const usr = await db.users.findUnique({
    where: {
      token: token,
    },
  });

  if (!usr) {
    return { flag: false, message: "Bad Request" };
  } else if (usr.role == 2 || usr.role == 3 || usr.role == 6 || usr.role == 4) {
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
