const { PrismaClient } = require("@prisma/client");
// const { sms } = require("./sendMessage");
const cloudinary = require("cloudinary");
const base64ToImage = require("base64-to-image");
const path = require("path");

const db = new PrismaClient();

async function createApplication(usrData, applicationNo) {
  const dateTime = new Date();

  const {
    salutation,
    Fname,
    Lname,
    mobile,
    email,
    designation,
    doctype1,
    doc1No,
    docFile1,
    doctype2,
    doc2No,
    docFile2,
    doctype3,
    doc3No,
    docFile3,
    nameBa,
    streetHouseNoBa,
    zoneBa,
    areaBa,
    localityBa,
    postalCodeBa,
    cityBa,
    regionBa,
    countryBa,
    namePa,
    streetHouseNoPa,
    postalCodePa,
    cityPa,
    regionPa,
    countryPa,
    zonePa,
    areaPa,
    localityPa,
    qty,
    remarks,
    medium_lang,
    latitude,
    longitude,
    signature_acknowlegement,
    customer_category,
    bp_no,
  } = usrData;

  // async function imgUpload(base64, { file }) {
  // console.log(file);
  // const base64Str = docFile1;
  // const rasta = path.join(__dirname, "images/i.png");
  // const sign_info = await base64ToImage(base64Str, rasta);
  // console.log(sign_info);
  // return sign_info;
  // }
  // ${Fname}-${file}-.png
  // const upload1 = await imgUpload(docFile1, { file: doctype1 });

  // if (docFile2) {
  //   const upload2 = await imgUpload(docFile2, { file: doctype2 });
  // }
  // if (docFile3) {
  //   const upload3 = await imgUpload(docFile3, { file: doctype3 });
  // }
  // if (signature_acknowlegement) {
  //   const signature = await imgUpload(signature_acknowlegement, {
  //     file: "signature",
  //   });
  // }

  const daate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const appliNo = `ph${applicationNo}${Math.floor(
    Math.random() * 1000
  )}${dateTime.getFullYear()}`;
  const id = Math.floor(Math.random() * 100) + dateTime.getTime().toString();
  console.log(Math.floor(Math.random() * 100) + dateTime.getTime());
  // console.log(appliNo);
  const as = await db.customer.create({
    data: {
      id: id,
      application_no: appliNo,
      customer_id: appliNo,
      house_id: appliNo,
      status: 1,
      salutation: salutation,
      first_name: Fname,
      last_name: Lname,
      mobile_no: mobile,
      email_id: email,
      designation: designation,
      bp_no: bp_no,
      medium_of_communication: medium_lang,
      document_type_1: doctype1,
      document_no_1: doc1No,
      document_file_name_1: docFile1,
      document_type_2: doctype2,
      document_no_2: doc2No,
      document_file_name_2: docFile2,
      document_type_3: doctype3,
      document_no_3: doc3No,
      document_file_name_3: docFile3,
      billing_estb_name: nameBa,
      billing_street: streetHouseNoBa,
      billing_zone: zoneBa,
      billing_area: areaBa,
      billing_locality: localityBa,
      billing_postal_code: postalCodeBa,
      billing_city: cityBa,
      billing_region: regionBa,
      billing_country: countryBa,
      pickup_estb_name: namePa,
      pickup_street: streetHouseNoPa,
      pickup_zone: zonePa,
      pickup_area: areaPa,
      pickup_locality: localityPa,
      pickup_postal_code: postalCodePa,
      pickup_city: cityPa,
      pickup_region: regionPa,
      pickup_country: countryPa,
      daily_wastage: qty,
      remarks: remarks,
      longitude: longitude,
      latitude: latitude,
      frequency: 000,
      customer_category: customer_category,
      signature_on_device: "",
      signature_file_name: "undefined",
      depot_area: "undefined",
      rate_proposed: 0,
      qr_code: "",
      qr_code_by: 1,
      qr_code_at: "",
      qr_code_time: `${new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")}`,
      qr_code_image: "",
      entry_date: daate,
      last_modified_by: 3,
      last_modified_date: daate,
      activity_log: `account Created on ${new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")}`,
    },
  });
  // const ab = await sms({
  //   phone: `${mobile}`,
  //   message: `${salutation} ${Fname} ${Lname}, Your application No
  //   ${appliNo} to TSUIL for Collection waste is submitted.`,
  // });
  // const mn = await sms({
  //   phone: `${mobile}`,
  //   message: `${"Track Your Application at http://bulk.jusco.rudrayati.in/trackYourApplication for more details"}`,
  // });

  return {
    status: "success",
    message: `Application Created For User ${salutation} ${Fname} `,
    applicationNo: appliNo,
  };
  // } catch (e) {
  //   return {
  //     status: "Failed",
  //     message: `No Application Created`,
  //     e: e.message,
  //   };
  // }
}

module.exports = { createApplication };
