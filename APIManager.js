class APIManager {
  constructor() {
    this._data = {};
  }

  getData(){
    return this._data
  }
  
  loadData() {
  
    const POKEMONNUMBER = 949;

    return $.get("https://randomuser.me/api/?results=7&inc=name,location,picture")
      .then((personArr) => {
        this._data["user"] = personArr.results.shift();
        this._data["friends"] = personArr.results;

        const randNum = Math.floor(Math.random() * POKEMONNUMBER);

        let quoteObj = $.get("https://api.kanye.rest")
        let pokemon = $.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
        let meatText = $.get("https://baconipsum.com/api/?type=meat-and-filler")

        return Promise.all([quoteObj ,pokemon ,meatText]);
      })

      .then((promiseResults) => {
        this._data["quote"] = promiseResults[0].quote;
        this._data["pokemon"] = promiseResults[1];
        this._data["meat"] = promiseResults[2];

        return this._data
      })
  }
}
