window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {},
  init: function() {
    new App.Router;
    Backbone.history.start()
  }
}

$(document).ready(function(){
  App.init()
})
