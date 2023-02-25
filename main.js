const apiManager = new APIManager();
const renderer = new Renderer();

Handlebars.registerHelper("properPokeName", function (pokmeonName) {
  pokmeonName = pokmeonName[0].toUpperCase() + pokmeonName.slice(1);
  return pokmeonName;
});

$("#loadUserData").on("click", function () {
  let initialDataPromise = apiManager.loadData();
  renderer.renderPagePromiseData(initialDataPromise);
});

$("#saveUser").on("click", function () {
  try {
    const userData = apiManager.getData();
    const userName = `${userData.user.name.first}  ${userData.user.name.last}`
    localStorage[userName] = JSON.stringify(userData);
    renderer.addUserToOptions(userName);
  } catch {}
});

$("#displayUser").on("click", function () {
  const selectedUserName = $(".userName-container").val();
  const userData = JSON.parse(localStorage[selectedUserName]);
  renderer.renderPageUserData(userData);
});
