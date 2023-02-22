class Renderer {
  constructor() {}

  renderTemplate(containerName, data){
    $(`.${containerName}-container`).empty();
    const source = $(`#${containerName}-template`).html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $(`.${containerName}-container`).append(newHTML);
  }

  renderUserContainer(data) {
    this.renderTemplate("user" , data)
  }

  renderQuoteContainer(data) {
    this.renderTemplate("quote" , data)
  }

  renderPokemonContainer(data) {
    this.renderTemplate("pokemon" , data)
  }

  renderMeatContainer(data) {
    this.renderTemplate("meat" , data)
  }

  renderFriendsContainer(data) {
    this.renderTemplate("friends" , data)
  }

  main(dataPromise){
    dataPromise.then((data) => {
        this.renderUserContainer(data.user)
        this.renderQuoteContainer(data.quote)
        this.renderPokemonContainer(data.pokemon)
        this.renderMeatContainer(data.meat)
        this.renderFriendsContainer(data.friends)
    })

  }
}
