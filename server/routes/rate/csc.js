const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function csc({ token, category_id }) {
  application = await db.master_customer_sub_classification.findMany({
    where: {
      category_id: category_id,
    },
  });

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

module.exports = { csc };
