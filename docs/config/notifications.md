---
id: notifications
title: Notification Integrations
---

# Notification Integrations

phpVMS can send event notifications to different places. Currently, Discord is supported. Some of the events that are supported:

* PIREP prefile notifications
* PIREP state changes (boarding, taxi, landed, etc)
* PIREP filed
* News added

You can also setup a private webhook, going to another channel, which might have more restricted permissions:

* User Registrations

---
## Discord

phpVMS can send notifications to a Discord channel. To configure this, you need to create a webhook. [See the documentation for webhooks from Discord](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks). This requires a webhook for the notification of public events, and an optional for private events (user registrations)

#### 1. Create a Webhook(s)

To create a webhook, edit the channel you want the webhook to go into (you can move the webhook to another channel later)

![](img/discord/edit-channel.png)

Then select integrations, and then "View Webhooks", then select integrations

![](img/discord/integrations.png)

Then click "Add Webhook", and fill in the information. Copy the webhook, URL, you'll need this for the admin panel

![](img/discord/create-webhook.png)

#### 2. Add the webhook(s) into settings

Next, go to your admin panel and add the webhook into the settings:

![](img/discord/discord-setting.png)
