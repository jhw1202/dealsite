/*
|--------------------------------------------------------------------------
| Deal Router
|--------------------------------------------------------------------------
*/
App.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'deals/:id': 'singleDeal',
    'deals/:id/edit': 'editDeal',
    'users/new': 'signup'

  },

  home: function() {
    new App.Views.Deals()
  },

  singleDeal: function(id) {
  	new App.Views.Deal().render({id: id})
  },

  editDeal: function(id) {
  	new App.Views.EditDealForm().render({id: id})
  },

  signup: function() {
    // new App.Views.SignUp()
  }

})
