"use strict";
const nodemailer = require("nodemailer");

const smtpEndpoint = "email-smtp.ap-northeast-1.amazonaws.com";
const port = 587;
const senderAddress = `ポートフォリオサイトのContactメール <${process.env.E_MAIL}>`;
var toAddresses = process.env.E_MAIL;

async function main(event) {
  // Create the SMTP transport.
  const body = JSON.parse(event.body);
  let transporter = nodemailer.createTransport({
    host: smtpEndpoint,
    port: port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER_NAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Specify the fields in the email.
  let mailOptions = {
    from: senderAddress,
    to: toAddresses,
    subject: `[ 名前:${body.name}] React ポートフォリオサイトからフォームメール`,
    text: 
`
メールフォームから以下内容が送信されました。
Email: ${body.email}
本文:
${body.contents}`
  };

  // Send the email.
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent! Message ID: ", info.messageId);
    let response = {
    "statusCode": 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
    };
  return response;
}


exports.handler = async (event) => {
  return await main(event).catch((error) => {
    console.error(error);
    let response = {
    "statusCode": 501,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
    };
    return response;
  });
};
