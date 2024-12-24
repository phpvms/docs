---
id: awards
title: Awards
---

Awards have been improved from the previous version. Awards are created in the admin panel, but are associated with an `Award` plugin. This class allows you to check any conditions to see if the award should be given. These award classes can also be passed a parameter (a number, string or JSON string), so you can use the same `Award` class for multiple awards.

All of the awards are run and scanned on the `UserStatsChanged` event, so when a PIREP is accepted, or other properties for the user are changed (e.g, the number of flights, flight hours, etc). The user being scanned is passed in as the `$user` property.

---

## Adding an Award

An award consists of two parts:

1. An award plugin
2. The award link

The award link is created in the admin panel, linking an award to a plugin. The plugin allows for advanced, reusable plugins and can be as complex or as simple as you like. To create an award from a plugin, view the awards page:

![](img/admin-awards.png)

---

## Award Plugin Structure

The award class needs to be placed in either the main Awards directory, or in a module, which can then be distributed as a full package.

- `modules/Awards`
- `modules/{YOUR_MODULE}/Awards`

### Award Class

:::info
The `modules/Awards/PilotFlightAwards.php` is a fully-commented example
:::

The Award class basically looks like this:

```php
<?php

namespace Modules\Awards;

use App\Contracts\Award;

/**
 * The Award needs to extend the AwardInterface class. It's abstract
 * so if check() isn't implemented, it'll throw an error
 */
class MyAward extends Award
{
    // The name of this award that shows in the Award class dropdown
    public $name = 'My Award';
    
    // If this award is selected in the dropdown, this description is shown
    // to the user to tell them what the parameter is
    public $param_description = 'Describe what the parameter is';
    
    /**
     * This method needs to be implemented
     * @param null $parameter Optional parameters that are passed in from the UI
     */
    public function check($parameter = null): bool
    {        
        if(!$parameter) {
            // Set $parameter to some good default
        }
        
        // Return true if the award should be awarded
        return true;
    }
}
```

#### Parameter passed

The `$parameter` is the value that is set in the Award row in the admin panel. It's optional, so it might be good for you to set a default if it's null. An example could be the number of flights, so you can use the same `Award` class for different types of awards.

#### Accessing information

Your Award class, in the `check($parameter)` function, has access the class property called `$this->user`. For example, if you want to see the user's flights, or if you wanted to have an award for a low landing rate:

```php
// ...
// In the Award row in the admin, $landing_rate might be set to 100
// This check will get called when a PIREP is accepted, so you can 
// have access to the user's last PIREP
public function check($landing_rate = null): bool
{
    // Have the default landing rate if it hasn't been set in the admin
    // It's best to make sure you set a default value if you're using it
    $landing_rate ??= -200;    
    
    if($this->user->last_pirep->landing_rate >= (int) $landing_rate) {
        return true;
    }
    
    return false;
}
// ...
```
