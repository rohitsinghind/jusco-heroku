const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function applicationStatus({ application_no }) {
  console.log(application_no);
  if (application_no[0] == "p") {
    const application = await db.customer.findUnique({
      where: {
        application_no: application_no,
      },
    });
  } else {
    const application = await db.customer.findUnique({
      where: {
        id: application_no,
      },
    });
  }
  console.log(application);
  if (!application) {
    return { flag: false, message: "no application exists" };
  } else {
    return {
      flag: true,
      message: "Success",
      data: application,
    };
  }
}

module.exports = { applicationStatus };
