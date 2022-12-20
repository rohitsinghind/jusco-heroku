const { PrismaClient } = require("@prisma/client");
const { application } = require("express");
const db = new PrismaClient();

async function rate_category({sub_category_id}) {
 

    application = await db.master_customer_sub_classification.findUnique({
        where:{
            sub_category_id:sub_category_id
        }
    });
    
    if (!application) {
        return { flag: false, message: "Bad Request" };
      } else {
        return { flag: true, data: application };
      }
}

module.exports = { rate_category };

