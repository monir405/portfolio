// netlify/functions/send-email.js

const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  // Configure the email transport using SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your SMTP server
    port: 587, // Replace with the SMTP port
    auth: {
      user: 'your-email@example.com', // Replace with your email address
      pass: 'your-email-password', // Replace with your email password
    },
  });

  // Set up email data
  const mailOptions = {
    from: email,
    to: 'your-email@example.com', // Replace with the email address where you want to receive messages
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};
