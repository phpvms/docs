---
id: apis
title: APIs
---

:::note
All of these calls require a valid API key
:::

## User APIs

### `GET /api/user`

Returns the user's information, including bids, etc. Example response:

**Sample Response:**

```json
{
	"data": {
       "id":2,
       "name":"Adam Lockman PhD",
       "email":"miles.sporer@example.net",
       "apikey":null,
       "rank_id":"1",
       "home_airport": "KJFK",
       "curr_airport": "KJFK",
       "last_pirep_id": 1,
       "flights":0,
       "flight_time":914,
       "balance":0,
       "timezone": "American/Chicago",
       "status":0,
       "state":1,
       "airline":{
          "id":1,
          "icao":"VMS",
          "iata":"VMS",
          "name":"phpVMS Airlines",
          "country":"United States",
          "logo":null
       },
       "bids":[

       ],
       "rank":{
          "name":"New Pilot",
          "subfleets":[

          ]
       }
    }
}
```

---

### `GET /api/user/fleet`

This returns the subfleets and aircraft that this user's rank gives them access to.

**Sample Response:**

```json
{
	"data": [
        {
            "id":1,
            "airline_id":1,
            "name":"Boeing 747-400",
            "type":"B744",
            "fuel_type":null,
            "cargo_capacity":null,
            "fuel_capacity":null,
            "gross_weight":null,
            "aircraft":[
            {
                "id":1,
                "subfleet_id":"1",
                "icao":"B744",
                "airport_id":"KJFK",
                "hex_code":null,
                "name":"Boeing 747 \"The Queen\"",
                "registration":"NC17",
                "tail_number":"17",
                "active":true,
                "created_at":"2018-01-08 21:37:13",
                "updated_at":"2018-01-08 21:37:13"
            }
            ]
        }
    ]
}
```

---

### `GET /api/user/bids`

This returns the user's bids, as a list of flights.

**Sample Response:**

```json
{
  "data": [
    {
      "id": "flightid_1",
      "airline": {
        "id": 1,
        "icao": "VMS",
        "iata": "VM",
        "name": "phpvms airlines",
        "country": null,
        "logo": null,
        "active": true,
        "total_flights": 0,
        "total_time": 0,
        "created_at": "2018-01-06 20:24:13",
        "updated_at": "2018-01-06 20:24:13"
      },
      "flight_number": 100,
      "route_code": null,
      "route_leg": null,
      "distance": {
          "mi": 2028,
          "nmi": 1762.283818574514,
          "km": 3263.749632
      },
      "dpt_airport_id": "KAUS",
      "arr_airport_id": "KJFK",
      "alt_airport_id": null,
      "route": "KAUS SID TNV J87 IAH J2 LCH J22 MEI J239 ATL J52 AJFEB J14 BYJAC Q60 JAXSN J14 COLIN J61 HUBBS J55 SIE STAR KJFK",
      "dpt_time": "6PM CST",
      "arr_time": "11PM EST",
      "flight_time": 360,
      "notes": "",
      "active": true,
      "subfleet": [
        {
          "id": 1,
          "airline_id": 1,
          "name": "747-400 Winglets",
          "type": "744W",
          "fuel_type": null,
          "cargo_capacity": null,
          "fuel_capacity": null,
          "gross_weight": null,
          "aircraft": [
            {
              "id": 1,
              "subfleet_id": "1",
              "icao": null,
              "airport_id": null,
              "hex_code": null,
              "name": "Boeing 747-400",
              "registration": "NC17",
              "tail_number": "17",
              "active": true,
              "created_at": null,
              "updated_at": null
            }
          ]
        }
      ]
    }
  ]
}
```

---

### `PUT /api/user/bids`

Add a bid for a flight for the user. Returns the current list of bids.

**Notes**

- If there already is a bid on a flight, a `409` HTTP response is returned

**Sample Request**

```json
{
    "flight_id": "flightid_1"
}
```

**Response**

See the `GET /api/user/bids` call

---

### `DELETE /api/user/bids`

Remove a bid for a flight for the user. Returns the current list of bids.

**Sample Request**

```json
{
    "flight_id": "flightid_1"
}
```

**Response**

See the `GET /api/user/bids` call

---

## Airlines

### `GET /api/airlines`

Get all of the airlines. Paginated

**Sample Response:**

```json
{
   "data":[
      {
         "id":1,
         "icao": "VMS",
         "iata": "VMS",
         "name": "phpVMS Airlines",
         "country": "United States",
         "logo": null
      }
   ],
   "links":{
      "first":"http://phpvms.test/api/airlines?page=1",
      "last":"http://phpvms.test/api/airlines?page=1",
      "prev":null,
      "next":null
   },
   "meta":{
      "current_page":1,
      "from":1,
      "last_page":1,
      "path":"http://phpvms.test/api/airlines",
      "per_page":50,
      "to":1,
      "total":1
   }
}
```

---

### `GET /api/airlines/{ID}`

Get information about a specific airline

**Sample Response:**

```json
{
	"data": {
        "id":1,
        "icao": "VMS",
        "iata": "VMS",
        "name": "phpVMS Airlines",
        "country": "United States",
        "logo": null
    }
}
```

---

## Airports

### `GET /api/airports`

Get all of the airports, paginated list

**Sample Response:**

```json
{
   "data":[
      {
         "id":"KJFK",
         "iata":"KJFK",
         "icao":"KJFK",
         "name":"John F Kennedy International Airport",
         "city":"New York",
         "country":"United States",
         "location":null,
         "hub": true,
         "fuel_100ll_cost": 0.00,
         "fuel_jeta_cost": 0.00,
         "fuel_mogas_cost": 0.00,
         "tz":"America/New_York",
         "lat":40.6398,
         "lon":-73.7789
      }
   ],
   "links":{
      "first":"http://phpvms.test/api/airports?page=1",
      "last":"http://phpvms.test/api/airports?page=2",
      "prev":null,
      "next":"http://phpvms.test/api/airports?page=2"
   },
   "meta":{
      "current_page":1,
      "from":1,
      "last_page":2,
      "path":"http://phpvms.test/api/airports",
      "per_page":50,
      "to":2,
      "total":2
   }
}
```

---

### `GET /api/airports/hubs`

Get all of the hubs, paginated list

**Sample Response:**

```json
{
   "data":[
      {
         "id":"KJFK",
         "iata":"KJFK",
         "icao":"KJFK",
         "name":"John F Kennedy International Airport",
         "city":"New York",
         "country":"United States",
         "location":null,
         "hub": true,
         "fuel_100ll_cost": 0.00,
         "fuel_jeta_cost": 0.00,
         "fuel_mogas_cost": 0.00,
         "tz":"America/New_York",
         "lat":40.6398,
         "lon":-73.7789
      }
   ],
   "links":{
      "first":"http://phpvms.test/api/airports?page=1",
      "last":"http://phpvms.test/api/airports?page=2",
      "prev":null,
      "next":"http://phpvms.test/api/airports?page=2"
   },
   "meta":{
      "current_page":1,
      "from":1,
      "last_page":2,
      "path":"http://phpvms.test/api/airports",
      "per_page":50,
      "to":2,
      "total":2
   }
}
```

------

### `GET /api/airports/{ICAO}`

Get the details about an airport

**Sample Response:**

```json
{
	"data": {
        "id":"KJFK",
        "iata":"KJFK",
        "icao":"KJFK",
        "name":"John F Kennedy International Airport",
        "city":"New York",
        "country":"United States",
        "location":null,
        "hub": true,
        "fuel_100ll_cost": 0.00,
        "fuel_jeta_cost": 0.00,
        "fuel_mogas_cost": 0.00,
        "tz":"America/New_York",
        "lat":40.6398,
        "lon":-73.7789
    }
}
```

---

## Fleet

### `GET /api/fleet`

Get all of the subfleets and aircraft under the fleet. Includes the fare and airline information. Paginated

**Sample Response:**

```json
{
   "data":[
      {
         "id":1,
         "airline_id":1,
         "name":"Boeing 747-400",
         "type":"B744",
         "fuel_type":null,
         "cargo_capacity":null,
         "fuel_capacity":null,
         "gross_weight":null,
         "aircraft":[
            {
               "id":1,
               "subfleet_id":"1",
               "icao":"B744",
               "airport_id":"KJFK",
               "hex_code":null,
               "name":"Boeing 747 \"The Queen\"",
               "registration":"NC17",
               "tail_number":"17",
               "active":true,
               "created_at":"2018-01-08 21:37:13",
               "updated_at":"2018-01-08 21:37:13"
            }
         ]
      }
   ],
   "links":{
      "first":"http://phpvms.test/api/fleet?page=1",
      "last":"http://phpvms.test/api/fleet?page=1",
      "prev":null,
      "next":null
   },
   "meta":{
      "current_page":1,
      "from":1,
      "last_page":1,
      "path":"http://phpvms.test/api/fleet",
      "per_page":50,
      "to":2,
      "total":2
   }
}
```

---

### `GET /api/fleet/aircraft/{id}`

Return information about an aircraft, including the subfleet information

Query string parameters: `?type=[parameter]`. Default/blank is the DB ID

- `registration`
- `tail_number`
- `icao`

**Sample Response:**

```json
{
	"data": {
        "id":1,
        "subfleet_id":"1",
        "icao":"B744",
        "airport_id":"KJFK",
        "hex_code":null,
        "name":"Boeing 747 \"The Queen\"",
        "registration":"NC17",
        "tail_number":"17",
        "active":true,
        "subfleet": {
            "id":1,
            "airline_id":1,
            "name":"Boeing 747-400",
            "type":"B744",
            "fuel_type":null,
            "cargo_capacity":null,
            "fuel_capacity":null,
            "gross_weight":null
        },
        "created_at":"2018-01-08 21:37:13",
        "updated_at":"2018-01-08 21:37:13"
    }
}
```

---

## Flights

#### `GET /api/flights`

Return all of the flights, paginated

- `flight_type`. See [Flight Types](/rest-api/types#flight-types) for possible values

**Sample Response:**

```json
{
  "data": [
    {
      "id": "flightid_1",
      "airline": {
        "id": 1,
        "icao": "VMS",
        "iata": "VM",
        "name": "phpvms airlines",
        "country": null,
        "logo": null,
        "active": true,
        "total_flights": 0,
        "total_time": 0,
        "created_at": "2018-01-06 20:24:13",
        "updated_at": "2018-01-06 20:24:13"
      },
      "flight_number": 100,
      "route_code": null,
      "route_leg": null,
      "distance": {
          "mi": 2028,
          "nmi": 1762.283818574514,
          "km": 3263.749632
      },
      "dpt_airport_id": "KAUS",
      "arr_airport_id": "KJFK",
      "alt_airport_id": null,
      "route": "KAUS SID TNV J87 IAH J2 LCH J22 MEI J239 ATL J52 AJFEB J14 BYJAC Q60 JAXSN J14 COLIN J61 HUBBS J55 SIE STAR KJFK",
      "dpt_time": "6PM CST",
      "arr_time": "11PM EST",
      "flight_time": 360,
      "flight_type": "J",
      "notes": "",
      "active": true,
      "subfleet": [
        {
          "id": 1,
          "airline_id": 1,
          "name": "747-400 Winglets",
          "type": "744W",
          "fuel_type": null,
          "cargo_capacity": null,
          "fuel_capacity": null,
          "gross_weight": null,
          "aircraft": [
            {
              "id": 1,
              "subfleet_id": "1",
              "icao": null,
              "airport_id": null,
              "hex_code": null,
              "name": "Boeing 747-400",
              "registration": "NC17",
              "tail_number": "17",
              "active": true,
              "created_at": null,
              "updated_at": null
            }
          ],
          "fares": [
            {
              "id":1,
              "code":"code",
              "name":"Fare name",
              "capacity":74,
              "cost":421,
              "price":"50",
              "type":0,
              "notes":null,
              "active":true
            }
          ]
        }
      ]
    }
  ],
  "links": {
    "first": "http://phpvms.test/api/flights?page=1",
    "last": "http://phpvms.test/api/flights?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http://phpvms.test/api/flights",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

---

### `GET /api/flights/{FLIGHT ID}`

Return details about a given flight

- `flight_type`. See [Flight Types](/rest-api/types#flight-types) for possible values

**Sample Response:**

```json
{
    "data": {
      "id": "flightid_1",
      "airline": {
        "id": 1,
        "icao": "VMS",
        "iata": "VM",
        "name": "phpvms airlines",
        "country": null,
        "logo": null,
        "active": true,
        "total_flights": 0,
        "total_time": 0,
        "created_at": "2018-01-06 20:24:13",
        "updated_at": "2018-01-06 20:24:13"
      },
      "flight_number": 100,
      "route_code": null,
      "route_leg": null,
      "dpt_airport_id": "KAUS",
      "arr_airport_id": "KJFK",
      "alt_airport_id": null,
      "distance": {
          "mi": 2028,
          "nmi": 1762.283818574514,
          "km": 3263.749632
      },
      "route": "KAUS SID TNV J87 IAH J2 LCH J22 MEI J239 ATL J52 AJFEB J14 BYJAC Q60 JAXSN J14 COLIN J61 HUBBS J55 SIE STAR KJFK",
      "dpt_time": "6PM CST",
      "arr_time": "11PM EST",
      "flight_time": 360,
      "flight_type": "J",
      "notes": "",
      "active": true,
      "subfleet": [
        {
          "id": 1,
          "airline_id": 1,
          "name": "747-400 Winglets",
          "type": "744W",
          "fuel_type": null,
          "cargo_capacity": null,
          "fuel_capacity": null,
          "gross_weight": null,
          "aircraft": [
            {
              "id": 1,
              "subfleet_id": "1",
              "icao": null,
              "airport_id": null,
              "hex_code": null,
              "name": "Boeing 747-400",
              "registration": "NC17",
              "tail_number": "17",
              "active": true,
              "created_at": null,
              "updated_at": null
            }
          ],
          "fares": [
            {
              "id":1,
              "code":"code",
              "name":"Fare name",
              "capacity":74,
              "cost":421,
              "price":"50",
              "type":0,
              "notes":null,
              "active":true
            }
          ]
        }
      ]
    }
}
```

---

### `GET /api/flights/search`

Do a search for a flight

Query String Example:

`/api/flights/search?depicao=KJFK&arricao=KAUS`

- `airline_id` - ID of the airline
- `dep_icao` - Departure airport code
- `arr_icao` - Arrival airport code
- `flight_number` - Can be a partial match
- `route_code`

**Sample Response**:

See `GET /api/flights`

---

## PIREPs

### `GET /api/pireps/{PIREP ID}`

Retrieve the PIREP information

- `status` - See [PIREP Status](/rest-api/types#pirep-status) for possible values

**Sample Response:**

```json
{
  "data": {
    "id": "pirepid_1",
    "user_id": 1,
    "airline_id": 1,
    "aircraft_id": 1,
    "flight_id": "flightid_1",
    "flight_number": "100",
    "route_code": null,
    "route_leg": null,
    "dpt_airport_id": "KAUS",
    "arr_airport_id": "KJFK",
    "level": null,
    "distance": null,
    "planned_distance": null,
    "flight_time": 180,
    "planned_flight_time": null,
    "zfw": null,
    "block_fuel": null,
    "fuel_used": null,
    "landing_rate": null,
    "route": "KAUS SID TNV J87 IAH J2 LCH J22 MEI J239 ATL J52 AJFEB J14 BYJAC Q60 JAXSN J14 COLIN J61 HUBBS J55 SIE STAR KJFK",
    "notes": "just a pilot report",
    "source": 0,
    "source_name": null,
    "flight_type": 0,
    "state": 1,
    "status": "OFB",
    "raw_data": null,
    "created_at": "2018-02-10 23:45:33",
    "updated_at": "2018-02-10 23:45:33",
    "airline": {
      "id": 1,
      "icao": "VMS",
      "iata": "VM",
      "name": "phpvms airlines",
      "country": null,
      "logo": null
    },
    "dpt_airport": {
      "id": "KAUS",
      "iata": "AUS",
      "icao": "KAUS",
      "name": "Austin-Bergstrom",
      "location": "Austin, Texas, USA",
      "country": "United States",
      "timezone": "America\/Chicago",
      "hub": true,
      "fuel_100ll_cost": 0,
      "fuel_jeta_cost": 0,
      "fuel_mogas_cost": 0,
      "lat": 30.1945278,
      "lon": -97.6698889
    },
    "arr_airport": {
      "id": "KJFK",
      "iata": "JFK",
      "icao": "KJFK",
      "name": "John F Kennedy",
      "location": "New York, New York, USA",
      "country": "United States",
      "timezone": "America\/New_York",
      "hub": true,
      "fuel_100ll_cost": 0,
      "fuel_jeta_cost": 0,
      "fuel_mogas_cost": 0,
      "lat": 40.6399257,
      "lon": -73.778695
    },
    "position": null,
    "comments": [
      {
        "id": 1,
        "comment": "A comment",
        "created_at": {
          "date": "2018-02-10 23:45:33.000000",
          "timezone_type": 3,
          "timezone": "UTC"
        },
        "user": {
          "id": 1,
          "pilot_id": "VMS0001",
          "name": "Admin User"
        }
      },
      {
        "id": 2,
        "comment": "Another comment",
        "created_at": {
          "date": "2018-02-10 23:45:33.000000",
          "timezone_type": 3,
          "timezone": "UTC"
        },
        "user": {
          "id": 2,
          "pilot_id": "VMS0002",
          "name": "Carla Walters"
        }
      }
    ],
    "user": {
      "id": 1,
      "name": "Admin User",
      "home_airport_id": "KAUS",
      "curr_airport_id": "KJFK"
    },
    "fields": [
      {
        "id": 1,
        "pirep_id": "pirepid_1",
        "name": "arrival gate",
        "value": "B14",
        "source": "manual",
        "created_at": null,
        "updated_at": null
      }
    ]
  }
}
```

---

### `GET /api/pireps/{PIREP ID}/route`

Retrieve the route

**Sample Response:**

```json
{
  "data": [
    {
      "id": "7c283b60-0ebc-11e8-9954-998d93005a2e",
      "pirep_id": "pirepid_1",
      "type": 1,
      "nav_type": 2,
      "order": 0,
      "name": "TNV",
      "log": null,
      "lat": 30.28852,
      "lon": -96.058239,
      "heading": null,
      "altitude": null,
      "vs": null,
      "gs": null,
      "transponder": null,
      "autopilot": null,
      "fuel_flow": null,
      "sim_time": null,
      "created_at": "2018-02-10 23:45:33",
      "updated_at": "2018-02-10 23:45:33"
    },
    {
      "id": "7c28ab40-0ebc-11e8-a95a-a1c676a4a844",
      "pirep_id": "pirepid_1",
      "type": 1,
      "nav_type": 2,
      "order": 0,
      "name": "IAH",
      "log": null,
      "lat": 29.95691,
      "lon": -95.345719,
      "heading": null,
      "altitude": null,
      "vs": null,
      "gs": null,
      "transponder": null,
      "autopilot": null,
      "fuel_flow": null,
      "sim_time": null,
      "created_at": "2018-02-10 23:45:33",
      "updated_at": "2018-02-10 23:45:33"
    },
    {
      "id": "7c28f1b0-0ebc-11e8-b2d4-195e41d39544",
      "pirep_id": "pirepid_1",
      "type": 1,
      "nav_type": 2,
      "order": 0,
      "name": "LCH",
      "log": null,
      "lat": 30.14151,
      "lon": -93.105569,
      "heading": null,
      "altitude": null,
      "vs": null,
      "gs": null,
      "transponder": null,
      "autopilot": null,
      "fuel_flow": null,
      "sim_time": null,
      "created_at": "2018-02-10 23:45:33",
      "updated_at": "2018-02-10 23:45:33"
    },
    {
      "id": "7c293950-0ebc-11e8-89d4-9d8a74627a46",
      "pirep_id": "pirepid_1",
      "type": 1,
      "nav_type": 2,
      "order": 0,
      "name": "MEI",
      "log": null,
      "lat": 32.37843,
      "lon": -88.804267,
      "heading": null,
      "altitude": null,
      "vs": null,
      "gs": null,
      "transponder": null,
      "autopilot": null,
      "fuel_flow": null,
      "sim_time": null,
      "created_at": "2018-02-10 23:45:33",
      "updated_at": "2018-02-10 23:45:33"
    },
    {
      "id": "7c2978e0-0ebc-11e8-865e-ebe817db8cc0",
      "pirep_id": "pirepid_1",
      "type": 1,
      "nav_type": 2,
      "order": 0,
      "name": "ATL",
      "log": null,
      "lat": 33.62907,
      "lon": -84.435064,
      "heading": null,
      "altitude": null,
      "vs": null,
      "gs": null,
      "transponder": null,
      "autopilot": null,
      "fuel_flow": null,
      "sim_time": null,
      "created_at": "2018-02-10 23:45:33",
      "updated_at": "2018-02-10 23:45:33"
    },
    {
      "id": "7c29bb70-0ebc-11e8-857e-d9abb038b328",
      "pirep_id": "pirepid_1",
      "type": 1,
      "nav_type": 2,
      "order": 0,
      "name": "SIE",
      "log": null,
      "lat": 39.0955,
      "lon": -74.800344,
      "heading": null,
      "altitude": null,
      "vs": null,
      "gs": null,
      "transponder": null,
      "autopilot": null,
      "fuel_flow": null,
      "sim_time": null,
      "created_at": "2018-02-10 23:45:33",
      "updated_at": "2018-02-10 23:45:33"
    }
  ]
}
```

---

### `GET /api/pireps/{PIREP ID}/acars/positions`

Get the ACARS data in plain rows
