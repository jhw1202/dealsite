/*
|--------------------------------------------------------------------------
| Deal Router
|--------------------------------------------------------------------------
*/
App.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'deals/:id': 'singleDeal',
    'edit/deals/:id': 'editDeal'
  },

  home: function() {
  	new App.Views.Deals({collection: new App.Collections.Deals()}).render()
  },

  singleDeal: function(id) {
  	new App.Views.Deal().render({id: id})
  },

  editDeal: function(id) {
  	new App.Views.EditDealForm().render({id: id})
  }
})
