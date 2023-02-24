class Renderer {
  constructor() {}

  renderTemplate(containerName, data){
    $(`.${containerName}-container`).empty();
    const source = $(`#${containerName}-template`).html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    $(`.${containerName}-container`).append(newHTML);
  }

  renderPagePromiseData(dataPromise){
    dataPromise.then((data) => {
      this.renderTemplate("user" , data.user)
      this.renderTemplate("quote" , data.quote)
      this.renderTemplate("pokemon" , data.pokemon)
      this.renderTemplate("meat" , data.meat)
      this.renderTemplate("friends" , data.friends)
    })
  }

  renderPageUserData(userData){
    this.renderTemplate("user" , userData.user)
    this.renderTemplate("quote" , userData.quote)
    this.renderTemplate("pokemon" , userData.pokemon)
    this.renderTemplate("meat" , userData.meat)
    this.renderTemplate("friends" , userData.friends) 
  }

  addUserToOptions(userName){
    $(`.userName-container`).append(`<option value="${userName}"> ${userName} </option>` )
  }
}
