const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();
const axios = require("axios");

async function sms({ phone, message }) {
  console.log("sms");
  try {
    console.log("in try catch");
    const url = `http://prodnd.bulkssms.com/httpapi/smsapi?uname=RUDRAYATI&password=Rud@1122&sender=WEBSMS&receiver=${phone}&route=TA&msgtype=1&sms=${message}`;

    const s = await axios.get(url);

    return { flag: true, message: "sent" };
  } catch (e) {
    console.log(e);
    return { flag: false, message: `ERROR : ${e}` };
  }
}

module.exports = { sms };
