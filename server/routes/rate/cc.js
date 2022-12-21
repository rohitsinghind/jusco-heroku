const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function cc({ token }) {
  application = await db.master_customer_classification.findMany();

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

module.exports = { cc };
