const { PrismaClient } = require("@prisma/client");
const { sms } = require("./sendMessage");
const cloudinary = require("cloudinary");
const path = require("path");

const db = new PrismaClient();

async function createInvoice(usrData) {
  const dateTime = new Date();
  console.log("creating user invoice "+usrData.id);

  const { id } = usrData;

  try {
    const application = await db.customer.findUnique({
      where: {
        customer_id: id,
      },
    });
    let uniqId = `O${application.application_no}-${Math.floor(
      Math.random() * 1000
    )}`;
    if (application) {
      const as = await db.invoice_table.create({
        data: {
          id: uniqId,
          invoice_no: uniqId,
          hsn_code: `#HSN-${Math.random() * 10000}`,
          quantiy: `${application.daily_wastage}`,
          uom: "TRP",
          rate_per_unit: `${application.rate}.00`,
          discount: "0",
          value: `${application.rate}.00`,
          taxable: `${application.rate}.00`,
          cgst_rate: "9.00",
          cgst_amount: `${(9 / 100) * application.rate}`,
          sgst_rate: "9.00",
          sgst_amount: `${(9 / 100) * application.rate}`,
          igst_rate: "0.00",
          igst_amount: "0.00",
          total_value: `${
            application.daily_wastage * application.rate +
            (9 / 100) * application.rate * 2
          }`,
        },
      });

      const ab = await sms({
        phone: `${application.mobile_no}`,
        message: `Your invoice is generated Total payble: ${
          application.daily_wastage * application.rate +
          (9 / 100) * application.rate * 2
        }.00 Rs only.`,
      });
      const wab = await sms({
        phone: `${application.mobile_no}`,
        message: `Please download your invoice from https://bulkgen.herokuapp.com/invoicePdf, your invoice_id is ${uniqId}`,
      });

      return {
        status: "success",
        message: `Invoice Created For User ${application.salutation} ${application.Fname} `,
        applicationNo: application.application_no,
        data: {
          id: uniqId,
          invoice_no: uniqId,
          hsn_code: `#HSN-${Math.random() * 10000}`,
          quantiy: `${application.daily_wastage}`,
          uom: "TRP",
          rate_per_unit: `${application.rate}.00`,
          discount: "0",
          value: `${application.rate}.00`,
          taxable: `${application.rate}.00`,
          cgst_rate: "9.00",
          cgst_amount: `${(9 / 100) * application.rate}`,
          sgst_rate: "9.00",
          sgst_amount: `${(9 / 100) * application.rate}`,
          igst_rate: "0.00",
          igst_amount: "0.00",
          total_value: `${
            application.daily_wastage * application.rate +
            (9 / 100) * application.rate * 2
          }`,
        },
      };
    } else {
      return {
        status: "Failed",
        message: `No User Exist`,
      };
    }
  } catch (e) {
    return {
      status: "Failed",
      message: `No Invoice Created ${e}`,
    };
  }
}

module.exports = { createInvoice };
