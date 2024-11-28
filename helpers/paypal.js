const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: process.env.client_secret,
  client_secret: process.env.client_id,
});

module.exports = paypal;
