const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function csc({ token, category_id }) {
  application = await db.master_customer_sub_classification.findUnique({
    where: {
      category_id: category_id,
    },
  });

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

module.exports = { csc };
