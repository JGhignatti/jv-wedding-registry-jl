import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';
import type { RequestHandler } from './$types';
import { LOG_EMAIL, MAILERSEND_TOKEN } from '$env/static/private';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.text();
  const {
    userInfo: { name, email },
    items,
    totalPrice,
  } = JSON.parse(body);

  const mailer = new MailerSend({
    apiKey: MAILERSEND_TOKEN,
  });
  const fromSender = new Sender(
    'nao-responda@casamentoluizaejoao.com.br',
    'Luiza & João Henrique',
  );

  const emailParams = new EmailParams()
    .setFrom(fromSender)
    .setTo([new Recipient(email, name)])
    .setSubject('Nosso sincero agradecimento pelo seu presente!')
    .setTemplateId('x2p0347m8qp4zdrn')
    .setPersonalization([
      {
        email,
        data: {
          name,
          items,
          totalPrice,
        },
      },
    ]);

  try {
    await mailer.email.send(emailParams);

    sendLogEmail(mailer, fromSender, name, email, items, totalPrice);

    return json({ status: 'success' });
  } catch {
    return json({ status: 'failed' });
  }
};

async function sendLogEmail(
  mailer: MailerSend,
  fromSender: Sender,
  name: string,
  email: string,
  items: string[],
  totalPrice: string,
): Promise<void> {
  try {
    const emailParams = new EmailParams()
      .setFrom(fromSender)
      .setTo([new Recipient(LOG_EMAIL)])
      .setSubject(`${name} presenteou vocês!`).setHtml(`
        <p>${name} (${email}) presentou com:</p>
        <ul>
          ${items.map((item) => `<li>${item}</li>`)}
        </ul>
        <p>${totalPrice}</p>
      `);

    await mailer.email.send(emailParams);

    return;
  } catch {
    return;
  }
}
