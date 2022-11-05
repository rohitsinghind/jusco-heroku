const { PrismaClient } = require("@prisma/client");
const { sms } = require("./sendMessage");
const cloudinary = require("cloudinary");

const db = new PrismaClient();

async function createApplication(usrData, applicationNo) {
  const dateTime = new Date();

  // let appno = await db.track.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log(appno);
  // let addedval = appno.lastApplicationNo + 1;
  // const applicationNo = db.track.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     ApplicationNo: addedval,
  //   },
  // });
  // console.log(appno.lastApplicationNo, applicationNo);
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
    signature_acknowlegement
  } = usrData;
  console.log(docFile1);
  try {

    const myCloud1 = docFile1?await cloudinary.v2.uploader.upload(docFile1, {
      folder: "documents",
    }):""
    const myCloud2 = docFile2?await cloudinary.v2.uploader.upload(docFile2, {
      folder: "documents",
    }):""
    const myCloud3 = docFile3?await cloudinary.v2.uploader.upload(docFile3, {
      folder: "documents",
    }):""
    const docUrl1 = myCloud1?.secure_url
    const docUrl2 = myCloud2?.secure_url
    const docUrl3 = myCloud3?.secure_url

    const appliNo = `ph/${applicationNo}-${Math.floor(
      Math.random() * 1000
    )}/${dateTime.getFullYear()}`;
    const as = await db.customer.create({
      data: {
        id:
          `${Math.floor(Math.random() * 1000)}/${dateTime.getTime()}` ||
          "undefined",
        application_no: appliNo || "undefined",
        customer_id: appliNo || "undefined",
        status: "depo",
        salutation: salutation || "undefined",
        first_name: Fname || "undefined",
        last_name: Lname || "undefined",
        mobile_no: mobile || "undefined",
        email_id: email || "undefined",
        designation: designation || "undefined",
        document_type_1: doctype1 || "undefined",
        document_no_1: doc1No || "undefined",
        document_file_name_1: docUrl1 || "undefined",
        document_type_2: doctype2 || "undefined",
        document_no_2: doc2No || "undefined",
        document_file_name_2: docUrl2 || "undefined",
        document_type_3: doctype3 || "undefined",
        document_no_3: doc3No || "undefined",
        document_file_name_3: docUrl3 || "undefined",
        billing_estb_name: nameBa || "undefined",
        billing_street: streetHouseNoBa || "undefined",
        billing_zone: zoneBa || "undefined",
        billing_area: areaBa || "undefined",
        billing_locality: localityBa || "undefined",
        billing_postal_code: postalCodeBa || "undefined",
        billing_city: cityBa || "undefined",
        billing_region: regionBa || "undefined",
        billing_country: countryBa || "undefined",
        pickup_estb_name: namePa || "undefined",
        pickup_street: streetHouseNoPa || "undefined",
        pickup_zone: zonePa || "undefined",
        pickup_area: areaPa || "undefined",
        pickup_locality: localityPa || "undefined",
        pickup_postal_code: postalCodePa || "undefined",
        pickup_city: cityPa || "undefined",
        pickup_region: regionPa || "undefined",
        pickup_country: countryPa || "undefined",
        daily_wastage: qty || "undefined",
        remarks: remarks || "undefined",
        auth: "undefined",
        application_status: "started",
        freq: "Undefined",
        category: "undefined",
        mobileAck: "Undefiend",
        area: "Undefined",
        rate: "undefined",
        medium_lang: medium_lang||"undefined",
        latitude: latitude||"none",
        longitude: longitude||"none",
        house_id: "none",
        qr_code_proof_img: "none",
        signature_acknowlegement: signature_acknowlegement||"none",
      },
    });
    const ab = await sms({
      phone: `${mobile}`,
      message: `${salutation} ${Fname} ${Lname}, Your application No 
    ${appliNo} to TSUIL for Collection waste is submitted.`,
    });
    const mn = await sms({
      phone: `${mobile}`,
      message: `${"Track Your Application at http://bulk.jusco.rudrayati.in/trackYourApplication for more details"}`,
    });

    return {
      status: "success",
      message: `Application Created For User ${salutation} ${Fname} `,
      applicationNo: appliNo,
    };
  } catch (e) {
    return {
      status: "Failed",
      message: `No Application Created ${e}`,
    };
  }
}

module.exports = { createApplication };
