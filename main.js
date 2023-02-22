const apiManager = new APIManager()
const renderer = new Renderer()


$('#loadUserData').on('click' , function(){
    let initialDataPromise = apiManager.loadData()
    renderer.main(initialDataPromise)

})