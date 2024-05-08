
import fs from "fs";

import {v2 as cloudinary} from 'cloudinary';
          
    // Configuration
    cloudinary.config({ 
      cloud_name: "dqfe5hrzp", 
      api_key: "855675894695159", 
      api_secret: "4fBDx-sh-bBPSyDW1Hx7e8t9Pg4" // Click 'View Credentials' below to copy your API secret
  });

// cloudinary.config({
//     cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//     api_key:process.env.CLOUDINARY_API_KEY ,
//     api_secret:process.env.CLOUDINARY_API_SECRET
//   });

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // FILE HAS BEEN UPLOADED
    console.log("File is uploaded on cloudinary");
    // File Upload ho chuki hai abb use unlink kar denge
    fs.unlinkSync(localFilePath);
    return response.url;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(localFilePath); // Remove the locally saved temporary files
    return null;
  }
};

export { uploadOnCloudinary };
