const { PrismaClient } = require("@prisma/client");
const { application } = require("express");
const db = new PrismaClient();

async function getCustomerSubClassification({category_id}) {
 

    application = await db.master_customer_sub_classification.findUnique({
        where:{
            category_id:category_id
        }
    });
    
    if (!application) {
        return { flag: false, message: "Bad Request" };
      } else {
        return { flag: true, data: application };
      }
}

module.exports = { getCustomerSubClassification };

