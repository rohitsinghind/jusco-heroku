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









  'data:image/png;base64,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'