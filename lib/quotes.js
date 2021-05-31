const axios = require("axios");

const getRandomIndex = () => {
  console.log(Math.floor(Math.random()*10));
    return Math.floor(Math.random()*10)
}

async function getQuote(topic) {

  // quote api
  const url = "https://bhagavad-gita-quote-api.herokuapp.com/quotes"
  
  try {
    res = await axios.get(url);

    var i = getRandomIndex()

    var category = topic.toLowerCase();

    switch(category){
        case 'love':
           return res.data.love[i];
        case 'wisdom':
            return res.data.wisdom[i];
        case 'truth':
            return res.data.truth[i];
        case 'death':
            return res.data.death[i];
        case 'peaceHappiness':
            return res.data.peaceHappiness[i];
        case 'lifeDecisions':
            return res.data.lifeDecisions[i];
    }
  } 
  
  catch (error) {
    console.error(error);
  }
}

module.exports = { getQuote };
