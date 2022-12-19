const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function sendToHod(data) {
  let { frequency, id, token, signature_on_device, depot_area, rate_proposed } =
    data;



  const usr = await db.users.findUnique({
    where: {
      token: token,
    },
  });

  if (!usr) {
    return { flag: false, message: "Bad Request" };
  } else if (usr.user_role == 2) {
    const application = await db.customer.update({
      where: {
        id: id,
      },
      data: {
        status: 3, //means hod approval
        signature_on_device: signature_on_device,
        depot_area: depot_area,
        rate_proposed: rate_proposed,
        frequency: parseInt(frequency),
      },
    });

    return {
      flag: true,
      message: `Success, Sent to hod`,
    };
  } else {
    return {
      flag: false,
      message: "Access Denied",
    };
  }
}

module.exports = { sendToHod };
