//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }

//   loadData() {
//     const POKEMONNUMBER = 949;
//     $.get("https://randomuser.me/api/?results=7&inc=name,location,picture")
//       .then((personArr) => {
//         this.data["user"] = personArr.results.shift();
//         this.data["friends"] = personArr.results;

//         return $.get("https://api.kanye.rest");
//       })

//       .then((quoteObj) => {
//         this.data["quote"] = quoteObj.quote;
//         const randNum = Math.floor(Math.random() * POKEMONNUMBER);
//         return $.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`);
//       })
//       .then((pokemon) => {
//         this.data["pokemon"] = pokemon;
//         return $.get("https://baconipsum.com/api/?type=meat-and-filler");
//       })
//       .then((meatText) => {
//         this.data["meat"] = meatText;
//       });

//     return new Promise((resolve, reject) => {
//       resolve(this.data);
//     });
//   }
loadData() {
    const POKEMONNUMBER = 949;
    return $.get("https://randomuser.me/api/?results=7&inc=name,location,picture")
      .then((personArr) => {
        this.data["user"] = personArr.results.shift();
        this.data["friends"] = personArr.results;

        const randNum = Math.floor(Math.random() * POKEMONNUMBER);

        let quoteObj = $.get("https://api.kanye.rest")
        let pokemon = $.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
        let meatText = $.get("https://baconipsum.com/api/?type=meat-and-filler")

        return Promise.all([quoteObj ,pokemon ,meatText]);
      })

      .then((promiseResults) => {
        this.data["quote"] = promiseResults[0].quote;
        this.data["pokemon"] = promiseResults[1];
        this.data["meat"] = promiseResults[2];

        return this.data
      })
  }
}
