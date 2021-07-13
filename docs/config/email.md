---
id: email
---
# Email

I recommend using a 3rd party service for sending email. They usually offer SMTP support, and great logging and analytics. Especially on a shared host, where email is locked down, and a "naughty neighbor" can quickly get the server/IP you're emailing from blacklisted. I highly recommend using a service over SMTP, because SMTP slows response times down.

These services are supported by Laravel natively; 

* [Mailgun](http://www.mailgun.com) - Free, up to 10k messages/month
* [Postmark](https://postmarkapp.com) - Tell their support you were referred for a free month
* [Amazon SES](https://aws.amazon.com/ses/) - Super cheap, free if you're using EC2

---

### SMTP Configuration

To configure SMTP, in your `env.php` file, you need to configure the following options:

```bash title="env.php"
MAIL_MAILER=smtp
MAIL_FROM_NAME='phpVMS No-Reply'
MAIL_FROM_ADDRESS='no-reply@phpvms.net'
MAIL_HOST=
MAIL_PORT=
MAIL_ENCRYPTION=
MAIL_USERNAME=
MAIL_PASSWORD=
```

### Mailgun Configuration

To use Mailgun, set your `env.php` like:

```bash title="env.php"
MAIL_MAILER=mailgun
MAILGUN_DOMAIN='your mailgun domain'
MAILGUN_SECRET='your mailgun secret',
```

### Postmark Configuration

To use Postmark, set your `env.php` like:

```bash title="env.php"
MAIL_MAILER=postmark
POSTMARK_TOKEN='your postmark token'
```

### SES Configuration

To use SES, set your `env.php` like:

```bash title="ses.php"
MAIL_MAILER=postmark
AWS_ACCESS_KEY_ID='key id'
AWS_SECRET_ACCESS_KEY='access key'
AWS_DEFAULT_REGION='the region if not us-east-1'
```
