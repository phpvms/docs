---
id: finances
title: Finances
---

## Journals

Journals are created, which then hold transactions against those journals. A
journal is assigned for:

- Every airline
- Every user

The balance of any journal are the sum of its credits, which are then subtracted
from those debits. The transactions also have "groups", which are used in the
financial reports. With the journaling system, user's or airlines can be paid or
charged, with historical records being kept, and reports run on them.

---

## Fares and Fare classes

Fares are the different prices for seats paid for, by passengers. When a PIREP
is filed, 3 places are checked for the price for a certain fare class:

How the parameters for a fare are determined:

1. The fares that can be assigned are retrieved from the subfleet of the
   aircraft that was flown
2. The flight is checked if it has an entry for that fare, and takes any
   parameters that were changed
3. The fare and values from the subfleet
4. Finally, from the fare itself

When the fare is added for a subfleet or on a flight, the values can be set to a
number, or a percentage. The percentage will be from the base fare, and the
"base" is `100%` - so if you want to increase the fare price for a subfleet to
be 10% higher than the base fare for that class, set it to `110%`. The
percent-sign needs to be included for it to detect that you want to add a
percentage.

The percentage override has an advantage - so you can add a base fare called
"Economy" for $100, and on a certain flight, you can add that fare, and set it
to "200%", so the price for that fare, on that flight, would be $200.

### Subfleet Fares

Subfleets need to be assigned fares - these fares are shared across all the
aircraft in that subfleet. The different attributes of a fare - the cost, price
and capacity, can be edited on a per-subfleet basis. One subfleet might have a
larger economy class than another, but they can share the same Economy fare
that's created.

### Flight Fares

If a fare is added to a flight, it will take precedence over the fares assigned
to the subfleet.

When a fare is assigned to a flight, the value it can be given is either a
monetary amount, or a multiplier. (e.g, 100, or 100%). The multiplier is applied
from the subfleet amount, or the fare amount, if one isn't specified on the
subfleet. By default, if there is no value, it is assumed at 100% of the amount.

If there are expected to be aircraft substitutions, you can add only the fares
that may apply. For example, on a normal route, you may only have an Economy and
First Class fare. But perhaps an aircraft with an additional fare, Premium
Economy may be used. You can add Premium Economy to the flight, and set it to
either a monetary amount, or to the multiplier, e.g, it might be set to 120%.
When the PIREP is filed, for that flight, the seat prices for that flight, on
that aircraft, will be set to 120% of the base premium economy price.

---

## Expenses

Expenses are arbitrary charges, against either the airline or user. Expenses are
a debit line in the journal. There are multiple ways to define them, and can
derived from multiple parts of the system. There are 3 types of expenses:

1. Flight - these are charged whenever a flight is flown. These also have an
   option to charge the user/pilot
2. Daily - these expenses are charged daily
3. Monthly - these are charged monthly

:::note The daily and monthly charges depend on the cron being setup properly
:::

Aside from the general expenses (the "Expenses" navigation option in the admin
panel), expenses can also be added on different objects, allowing you to be as
in-depth as you want.

1. Aircraft
   1. Flight - when this aircraft is used on a flight (e.g, a "Rental" expense
      that's charged to a user, or a catering charge)
   2. Daily - charged daily, regardless of use (e.g, "Cleaning")
   3. Monthly - lease costs, MRO costs
2. Airports
   1. Flight - only applied on the arrival airport (e.g, landing fees). Can also
      be charged to a user
   2. Daily - charged daily, regardless of use
   3. Monthly - gate charges, other fees
3. Subfleets
   1. Flight - when an aircraft in this subfleet is used on a flight, can also
      be charged to a user
   2. Daily - charged, regardless of use
   3. Monthly

In addition to being able to add expenses to these objects, you can also create
custom expenses by adding a `Listener` for the `Expenses` event.
`app/Listeners/ExpenseListener` has an example - this allows you to have extra
flexibility, for example, if you want to charge a user for excessive landing
rates or if the flight time is longer than the planned flight time. These custom
`Expenses` events can also be used for monthly and daily expenses.
