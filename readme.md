:sunflower: Attempt to create an NPM package to fetch inspiring quotes from 'Bhagawad Gita' : Holy scripture which includes dialogues between Arjuna and Lord Krishna.

### [View on NPM Registry](https://www.npmjs.com/package/epic-quotes)

## Installation

``` $ npm i --save epic-quotes  ```

## Parameters

Note: All parameters are _'case in-sensitive'_
||Type|Parameters (categories)|
|---|---|---|
|1.| string |wisdom|
|2.| string |truth|
|3.| string |love|
|4.| string |peaceHappiness|
|5.| string |death|
|6.| string |lifeDecisions|

||Methods|
|---|---|
|1.|getQuote( '_category_' )|

---  

## Usage

```

// including the package
const gita = require('epic-quotes');

const getMessage = async() => {

// storing fetched data
var messageFetched = await gita.getQuote('wisdom');

console.log(messageFetched);
}  
getMessage();

```

---

 :sunflower: STAY MOTIVATED !
