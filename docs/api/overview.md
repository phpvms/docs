---
id: overview
title: Overview
---

phpVMS includes a REST API that can be used for retrieving or saving
information.

---

## Pagination

Where indicated, pagination is enabled/available. When calling those APIs, the
data is returned in this format:

- `data` contains a list of all of the objects (for example, the airports)
- `links` contains the links to navigate through the paginated list
- `meta` contains information about the current dataset

```json
{
  "data": [ ... ],
  "links": {
    "first":"http://phpvms.test/api/airports?page=1",
    "last":"http://phpvms.test/api/airports?page=3",
    "prev":null,
    "next":"http://phpvms.test/api/airports?page=2"
  },
  "meta": {
    "current_page": 1,
    "from":1,
    "last_page":3,
    "path":"http://phpvms.test/api/airports",
    "per_page":50,
    "to":50,
    "total":120
  }
}
```

---

## Rate Limiting

Laravel's API Middleware includes a rate limiter, which, by default, it set to
60 requests per minute, per-IP.

### Response Code

If you exceed the throttling, you'll have a `429 Too Many Requests` HTTP
response code. You'll also have a `Retry-After` header included, indicating the
number of seconds to wait:

```http
Retry-After: 60
```

The below headers will also be included.

### Response Headers

When a request is made, several headers are returned to show you where you are
in terms of throttling:

```http
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
```

### More Information

To read some more information about how the throttling works in Laravel,
[check out this page](https://mattstauffer.com/blog/api-rate-limiting-in-laravel-5-2/)

---

## Errors

Where possible, the standard HTTP error codes are followed and returned, with
extra information in the body, if available.

### Unauthorized

`401` is returned if the API key is invalid, or the user is disallowed from API
access. The `message` parameter will offer more error.

### Not Found

`404` is returned if an entity is not found

### Validation Errors

`400`, with details in the `message` parameter about the bad input.
