import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dmvf35ngw",
  api_key: process.env.CLOUDINARY_API_KEY || "568677266699284",
  api_secret: process.env.CLOUDINARY_API_SECRET || "zLnkjFc2chDN5fZEf6aghxo-BnY",
});

export default cloudinary;
