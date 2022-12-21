const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function rate({ token, sub_category_id }) {
  application = await db.matrix_rate_category.findFirst({
    where: {
      sub_category_id: sub_category_id,
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

module.exports = { rate };
