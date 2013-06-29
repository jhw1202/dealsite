window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {},
  init: function() {
  	this.dealsCollection = new App.Collections.Deals()
    new App.Router
    this.appView = new App.Views.AppView()
    Backbone.history.start()
  }

}

$(document).ready(function(){
  App.init()
})

