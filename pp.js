//create application formate
const s =  {
    "salutation":"Ms.",
    "Fname":"Aniket",
    "Lname":"Kumar",
    "mobile":"7481042783",
    "email":"rohit@gmail.com",
    "designation":"manager",
    "doctype1":1,
    "doc1No":"20KVHKJ6548H",
    "docFile1":"",
    "doctype2":0,
    "doc2No":"8347593",
    "docFile2":"",
    "doctype3":3,
    "doc3No":"9809798",
    "docFile3":5,
    "nameBa":"Aniket",
    "streetHouseNoBa":"Diagonal Road, Bistupur",
    "zoneBa":"adityapur",

    "areaBa":"adityapur",
    
    "localityBa":"adityapur",
    "postalCodeBa":"831013",
    "cityBa":"Jamshedpur",
    
    "regionBa":"adityapur",
    "countryBa":"IN",
    "namePa":"Pickup",
    "streetHouseNoPa":"Kagalnagar, Sonari",
    
    "postalCodePa":"831013",
    "cityPa":"Jamshedpur",
   
    "regionPa":"adityapur",
    "countryPa":"IN",
    
    "zonePa":"adityapur",
    "areaPa":"adityapur",
    
    "localityPa":"adityapur",
    
    "qty":"80",
    "remarks":"good work",
    "medium_lang":"Eng",
    "latitude":"3342423423",
    "longitude":"3242343423",
    "signature_acknowlegement":"yes",
    "customer_category":0,
    "bp_no":"65237682"
  }

// 1
// admin


// 2
// depot manager


// 3
// hod


// 4
// accounts


// 5
// customer


// 6
// d2d



user_name
login_id
password
user_role
active
entry_by
entry_date
mod_by
mod_date


// depomanager creation
{"user_name": "root",
"password": "root",
"user_role": 2,
"application_no": "1231",
"entry_by":1,
"mod_by": 1}



//Send to hod
{ "frequency":11,
    "id":1669174867,
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb290IiwiaWF0IjoxNjcxMDI3NDczfQ.Ga1m0w0P8to_D2YcZ1zMNdjQbgvE8ekDCXIKFV872DQ",
    "signature_on_device":"yes",
    "depot_area":8,
    "rate_proposed":500.00
    }


    
    // const rateTable = await db.matrix_customer_rate.create({
    //   data: {
    //     customer_id: id,
    //     matrix_rate_id: matrix_rate_id,
    //     rate_value: rate_value,
    //     rate_category: rate_category,
    //     remarks: "good",
    //     effective_date: new Date().toISOString().slice(0, 19).replace("T", " "),
    //     entry_by: 2,
    //     entry_date: new Date().toISOString().slice(0, 19).replace("T", " "),
    //     mod_by: 2,
    //     mod_date: new Date().toISOString().slice(0, 19).replace("T", " "),
    //   },
    // });




    
  // try {
  // console.log(signature_acknowlegement);
  // const base64Str =
  //   signature_acknowlegement ||
  //   `data:image/png;base64,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`;
  // const rasta = path.join(__dirname, "signature/signature.png");
  // const sign_info = base64ToImage(base64Str, rasta);
  // console.log(sign_info);
  // const myCloud1 = docFile1
  //   ? await cloudinary.v2.uploader.upload(docFile1, {
  //       folder: "documents",
  //     })
  //   : "";

  // const myCloud2 = docFile2
  //   ? await cloudinary.v2.uploader.upload(docFile2, {
  //       folder: "documents",
  //     })
  //   : "";
  // const myCloud3 = docFile3
  //   ? await cloudinary.v2.uploader.upload(docFile3, {
  //       folder: "documents",
  //     })
  //   : "";
  // const docUrl1 = myCloud1?.secure_url;
  // const docUrl2 = myCloud2?.secure_url;
  // const docUrl3 = myCloud3?.secure_url;