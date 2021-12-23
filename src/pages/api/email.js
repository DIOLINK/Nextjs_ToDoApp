import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { email, subject, message } = req.body;
  const msg = {
    to: email,
    from: process.env.SEND_EMAIL_FROM,
    subject,
    name: 'ToDo App',
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    console.error(
      'Error sgMail-API:>> ',
      error,
      error.response.body.errors,
    );
    res.status(500).json({ error: 'Error sending email' });
  }
};
