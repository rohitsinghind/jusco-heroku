const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function applicationStatus({ application_no }) {
  console.log(application_no);
  var application;
  if (application_no[0] == "p") {
    application = await db.customer.findUnique({
      where: {
        application_no: application_no,
      },
    });
  } else {
    if (typeof application_no != String)
      application_no = application_no.toString();

    application = await db.customer.findUnique({
      where: {
        id: application_no,
      },
    });
  }

  if (!application) {
    return { flag: false, message: "no application exists" };
  } else {
    application.id = application.id.toString();
    return {
      flag: true,
      message: "Success",
      data: application,
    };
  }
}

module.exports = { applicationStatus };
