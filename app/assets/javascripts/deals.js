window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    var deal = new App.Models.Deal()
    var deals = new App.Collections.Deals()
    var dealsView = new App.Views.Deals({collection: deals})
    var dealView = new App.Views.Deal()
    var submitForm = new App.Views.SubmitDealForm()

    var router = new Router()

    router.on('route:home', function(){
      dealsView.render()
    })

    router.on('route:dealpage', function(id){
      dealView.render({id: id})
    })

    router.on('route:editDeal', function(id){
      submitForm.editFormRender({id: id})
    })

    Backbone.history.start()

  }

}

$(document).ready(function(){
  App.init()
})
