---
id: ivao
title: IVAO
sidebar_title: IVAO
---

Go to the [Create OAuth Application](https://developers.ivao.aero/create) page and create a new app, he application type must be "Virtual Airline App". To choose this type, you need to be logged in with the account of the owner of the virtual airline on IVAO.
In the redirect URL, enter: `https://yourdomain.com/oauth/ivao/callback`

![](img/create-ivao.png)

In the `.env` file, add the following:

```shell title=".env"
IVAO_OAUTH_ENABLED=true
IVAO_CLIENT_ID={your_client_id}
IVAO_CLIENT_SECRET={your_client_secret}
```
You can retrieve your client ID and your client secret from the OAuth clients page after creating the client as explained above.

Now, your users can link their IVAO account to their phpVMS account and use their IVAO account to log in. The link between the two accounts is automatically established when clicking the "Login with IVAO" button on the login page. However, if the email address of the IVAO account is different from the email address of the phpVMS account, it must be done manually on the profile page.
