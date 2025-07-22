const { Resend } = require('resend');
const { NotificationEmailAltTemplateAlt } = require('../src/emails/notificationAlt');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    // Parse JSON body from request stream
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const data = Buffer.concat(buffers).toString();
    const body = JSON.parse(data);

    const {
      type,
      email,
      applicantName,
      refereeName,
      position,
    } = body;

    const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);
    const displayType = type.charAt(0).toUpperCase() + type.slice(1);

    const response = await resend.emails.send({
      from: 'Sarat Healthcare <support@sarathealthcare.co.uk>',
      to: email,
      subject: `New ${displayType} Reference Received for ${applicantName}`,
      react: NotificationEmailAltTemplateAlt({ type, applicantName, refereeName, position })
    });

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Resend Email Error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}

module.exports = handler;