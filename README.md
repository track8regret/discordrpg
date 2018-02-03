# discordrpg #
## A Node package to make use of the DiscordRPG API easier. ##

[![NPM](https://nodei.co/npm/discordrpg.png)](https://nodei.co/npm/discordrpg/)

Please note that documentation for all of the function responses can be found by looking at the [DiscordRPG API documentation page.](http://api.discorddungeons.me/docs)

Functions:

`getGuild(id)`
Returns with a guild object.

```javascript
var DiscordRPG = require('discordrpg');
var drpg = new DiscordRPG('Your API key here');

drpg.getGuild("82a13e23-68fa-8884-dd99-334c0f9f3e6f").then(r => {
    console.log(r.name); //"MadHouse"
});
```

`getGuildItem(id)`
Returns with a guild item object.

```javascript
var DiscordRPG = require('discordrpg');
var drpg = new DiscordRPG('Your API key here');

drpg.getGuildItem("1").then(r => {
    console.log(r.name); //"Guild Sign"
});
```

`getAllItems()`
Returns with an array of all item objects. May take a second to return results.

```javascript
var DiscordRPG = require('discordrpg');
var drpg = new DiscordRPG('Your API key here');

drpg.getAllItems().then(r => {
    console.log(r[1].name); //"Health Potion"
});
```

`getItem(id)`
Returns with an item object.

```javascript
var DiscordRPG = require('discordrpg');
var drpg = new DiscordRPG('Your API key here');

drpg.getItem("1").then(r => {
    console.log(r.name); //"Health Potion"
});
```

`getBotStats()`
Returns with simple object of bot stats.

```javascript
var DiscordRPG = require('discordrpg');
var drpg = new DiscordRPG('Your API key here');

drpg.getBotStats().then(r => {
    console.log(r.servers); //58810
});
```

`getTrade(id)`
Returns with a trade object.

```javascript
var DiscordRPG = require('discordrpg');
var drpg = new DiscordRPG('Your API key here');

drpg.getTrade("jce5jh30").then(r => {
    console.log(r.type); //"sell"
});
```

`getItemBuyingTrades(id)`
Returns with array of all trade objects selling `id` item with `buy` as their type. May take a second to return results.

```javascript
var DiscordRPG = require('discordrpg');
var drpg = new DiscordRPG('Your API key here');

drpg.getItemBuyingTrades("110").then(r => {
    console.log(r.trades[1].buy.price); //45
});
```

`getItemSellingTrades(id)`
Returns with array of all trade objects selling `id` item with `sell` as their type. May take a second to return results.

```javascript
var DiscordRPG = require('discordrpg');
var drpg = new DiscordRPG('Your API key here');

drpg.getItemSellingTrades("110").then(r => {
    console.log(r.trades[1].buy.price); //45
});
```

`getAllTrades()`
Returns with an array of all trade objects. Will take a few seconds to return results.

```javascript
var DiscordRPG = require('discordrpg');
var drpg = new DiscordRPG('Your API key here');

drpg.getAllTrades().then(r => {
    console.log(r); //lots of objects
});
```

`getUser(id)`
Returns with a user object.

```javascript
var DiscordRPG = require('discordrpg');
var drpg = new DiscordRPG('Your API key here');

drpg.getUser("120627061214806016").then(r => {
    console.log(r.name); //"The Conceptionist"
});
```
