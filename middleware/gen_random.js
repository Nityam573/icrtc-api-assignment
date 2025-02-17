import crypto from "crypto";

const generateRandomString = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
};

const accessTokenSecret = generateRandomString(32);

const apiKey = generateRandomString(32);

console.log(`ACCESS_TOKEN_SECRET=${accessTokenSecret}`);
console.log(`API_KEY=${apiKey}`);