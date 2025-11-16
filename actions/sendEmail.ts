'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const response = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'nishant200015@gmail.com',
        subject: 'New message from your website',
        html: `<p>Email: ${email}</p><p>Message: ${message}</p>`,
    });
    console.log(response);
}

export default sendEmail;