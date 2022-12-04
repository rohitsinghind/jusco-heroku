const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function sendToHod(data) {
  let { freq, applicantId, token, category, mobileAck, area, rate } = data;

  mobileAck = toString(mobileAck);
  console.log(applicantId);
  const usr = await db.user.findUnique({
    where: {
      token: token,
    },
  });

  if (!usr) {
    return { flag: false, message: "Bad Request" };
  } else if (usr.role == 2) {
    const application = await db.customer.update({
      where: {
        id: parseInt(applicantId),
      },
      data: {
        status: "HOD",
        category: category,
        mobileAck: mobileAck,
        area: area,
        rate: rate,
        freq: freq,
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
