const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function getInvoice({ id }) {
  //   try {
  const invoice = await db.invoice_table.findUnique({
    where: {
      id: id,
    },
  });
  console.log(invoice);
  if (!invoice) {
    return { flag: false, message: "Bad Request" };
  } else {
    return { flag: true, message: "invoice found", data: invoice };
  }
  //   } catch (e) {
  //     return { flag: false, message: `error: ${e.message}` };
  //   }
}

module.exports = { getInvoice };
