### :sunflower: Attempt to create an NPM package to fetch quotes based on the _various categories_ , explained in 'Bhagawad Gita' : Holy scripture which includes dialogues between Arjuna and Lord Krishna. 

<img src="https://socialify.git.ci/WaderManasi/epic-quotes/image?issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Light" alt="epic-quotes" width="540" height="220" />

### ⏩ [View on NPM Registry](https://www.npmjs.com/package/epic-quotes)

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

##  🌼 STAY MOTIVATED ! 🌼
