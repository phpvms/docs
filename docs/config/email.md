---
id: email
title: Email
sidebar_title: Email
---

phpvms sends transactional email (registration, PIREP receipts, password
resets, etc). Use a third-party email provider — they handle SMTP,
deliverability, logging, and analytics.

:::warning

On shared hosting, email is often locked down. A "naughty neighbor" can
get your shared IP blacklisted in hours. Use a provider over SMTP — and
prefer a provider's API integration over plain SMTP, since API calls are
faster than blocking SMTP handshakes.

:::

### Supported providers

Laravel ships first-class drivers for these:

| Provider                                  | Free tier                          |
| ----------------------------------------- | ---------------------------------- |
| [Mailgun](http://www.mailgun.com)         | Up to 10k messages/month           |
| [Postmark](https://postmarkapp.com)       | First month free (mention referral) |
| [Amazon SES](https://aws.amazon.com/ses/) | Very cheap, free from EC2          |

:::warning

After editing `.env`, clear the application cache. Otherwise your new
mail settings won't load:

```bash
php artisan config:clear
```

:::

---

## SMTP

Generic SMTP — works with any provider that exposes SMTP credentials.

```bash title=".env"
MAIL_MAILER=smtp
MAIL_FROM_NAME='phpvms No-Reply'
MAIL_FROM_ADDRESS='no-reply@phpvms.net'
MAIL_HOST=
MAIL_PORT=
MAIL_ENCRYPTION=
MAIL_USERNAME=
MAIL_PASSWORD=
```

Host, port, and encryption values come from your hosting control panel
or VPS provider — they vary per host, so there's no generic default.

## Mailgun

```bash title=".env"
MAIL_MAILER=mailgun
MAILGUN_DOMAIN='your mailgun domain'
MAILGUN_SECRET='your mailgun secret'
```

## Postmark

```bash title=".env"
MAIL_MAILER=postmark
POSTMARK_TOKEN='your postmark token'
```

## Amazon SES

```bash title=".env"
MAIL_MAILER=ses
AWS_ACCESS_KEY_ID='key id'
AWS_SECRET_ACCESS_KEY='access key'
AWS_DEFAULT_REGION='the region if not us-east-1'
```

---

## Debugging with Mailtrap

[mailtrap.io](https://mailtrap.io) catches all outgoing mail in a fake
inbox so you can test registrations, password resets, and PIREP receipts
without spamming real users. Mailtrap gives you Laravel-ready creds:

```bash title=".env"
MAIL_MAILER=smtp
MAIL_FROM_NAME='phpvms Admin'
MAIL_FROM_ADDRESS='no-reply@phpvms.net'
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_ENCRYPTION=tls
MAIL_USERNAME='as provided'
MAIL_PASSWORD='as provided'
```
