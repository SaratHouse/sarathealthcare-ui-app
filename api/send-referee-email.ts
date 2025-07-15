// api/send-referee-email.ts
import { Resend } from 'resend';
import { RefereeEmailTemplate } from '../src/emails/referee';
import { NotificationEmailTemplate } from '../src/emails/notification';

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await req.json();

    const {
      type,
      email,
      applicantName,
      refereeName,
      position,
      link,
      isNotification = false
    } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: 'Sarat Healthcare <support@sarathealthcare.co.uk>',
      to: email,
      subject: isNotification
        ? `New Application: ${applicantName} for ${position}`
        : `${applicantName} has requested a ${type} reference`,
      react: isNotification
        ? NotificationEmailTemplate({ applicantName, position })
        : RefereeEmailTemplate({ type, applicantName, refereeName, position, link })
    });

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Resend Email Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
