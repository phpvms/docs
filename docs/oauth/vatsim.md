---
id: vatsim
title: VATSIM
sidebar_title: VATSIM
---

First, you need to [create a vatsim organization](https://auth.vatsim.net/organization/requirements) on the VATSIM website.

After your organization has been approved by VATSIM, you can create a new OAuth client.
Go to the [Organizations](https://auth-dev.vatsim.net/organization) tab and into the organization you created. Navigate to the 'OAuth clients' tab and add a new client.
In the redirect URL, enter: `https://yourdomain.com/oauth/vatsim/callback`

![](img/create-vatsim.png)

In the `.env` file, add the following:

```shell title=".env"
VATSIM_OAUTH_ENABLED=true
VATSIM_CLIENT_ID={your_client_id}
VATSIM_CLIENT_SECRET={your_client_secret}
```
You can retrieve your client ID and your client secret from the OAuth clients page after creating the client as explained above.

Now, your users can link their VATSIM account to their phpVMS account and use their VATSIM account to log in. The link between the two accounts is automatically established when clicking the "Login with VATSIM" button on the login page. However, if the email address of the VATSIM account is different from the email address of the phpVMS account, it must be done manually on the profile page.

## Customizing scopes

You can add scopes to the OAuth request in addition to the default scopes by adding your scopes to the `.env` file, separated by commas.
See [VATSIM Scopes List](https://vatsim.dev/api/connect-api/redirect)

```shell title=".env"
VATSIM_SCOPES=scope1,scope2
```
