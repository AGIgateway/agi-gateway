import { Resend } from 'resend';

const resend = new Resend('re_Zy8BbU9a_FELSPiqVDoYA4MDvwAYuGpR4');

resend.emails.send({
    from: 'no-reply@agigateway.co.nz',
    to: 'info.agigateway@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});