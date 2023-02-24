const apiManager = new APIManager();
const renderer = new Renderer();

const userData = {};

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
    const newUserData = apiManager.getData();
    const userName = `${newUserData.user.name.first}  ${newUserData.user.name.last}`
    userData[userName] = newUserData
    console.log(userData[userName]);
    console.log(userData);
    renderer.addUserToOptions(userName);
    localStorage.userData = JSON.stringify(userData);
  } catch {}
});

$("#displayUser").on("click", function () {
  const userData = JSON.parse(localStorage.userData);
  const selectedUserName = $(".userName-container").val();
  renderer.renderPageUserData(userData[selectedUserName]);
});
