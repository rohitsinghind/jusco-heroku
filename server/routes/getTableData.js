const { PrismaClient } = require("@prisma/client");
const { application } = require("express");
const db = new PrismaClient();

async function getCustomerClassification() {
 

    application = await db.master_customer_classification.findMany();
    
    if (!application) {
        return { flag: false, message: "Bad Request" };
      } else {
        return { flag: true, data: application };
      }
}

module.exports = { getCustomerClassification };

