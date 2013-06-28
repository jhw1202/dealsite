window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {},
  init: function() {
  	this.dealsCollection = new App.Collections.Deals()
    new App.Router
    new App.Views.AppView
    Backbone.history.start()
  },

  login: function() {

  },

  logout: function() {

  }

}

$(document).ready(function(){
  App.init()
})
