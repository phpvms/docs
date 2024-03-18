---
id: auth
title: Authentication
---

Each user is given an API key (and can regenerate it) when they register. Requests to a phpVMS API will require an `X-API-Key` header, with this key. Addons can take advantage of this by adding the `api.auth` middleware to their route group.

---

## Headers Example

```http
X-API-Key: {user API key}
Content-type: application/json
```

#### Sample cURL Request

```php
$api_key = 'YOUR API KEY';
$url = "http://your-site.com/api/user";
$headers = [
    'X-API-Key:' . $api_key,
    'Content-type:application/json',
];

$ch = curl_init();

curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$json_response = \json_decode(curl_exec($ch));
curl_close($ch);

echo $json_response;
```
