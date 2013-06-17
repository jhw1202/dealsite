window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    var router = new Router()
    var deal = new App.Models.Deal()
    var deals = new App.Collections.Deals()
    var dealsView = new App.Views.Deals({collection: deals})
    var dealView = new App.Views.Deal()

    router.on('route:home', function(){
      dealsView.render()
    })

    router.on('route:dealpage', function(id){
      dealView.render({id: id})
    })

    Backbone.history.start()
  }

}

$(document).ready(function(){
  App.init()
})
