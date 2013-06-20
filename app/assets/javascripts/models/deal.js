/*
|--------------------------------------------------------------------------
| Deal Model
|--------------------------------------------------------------------------
*/
 App.Models.Deal = Backbone.Model.extend({
    urlRoot: '/deals',

    validate: function(attributes) {
      //not sure we need this validation, what if it is an in-store deal?
      if (!attributes.source) {
        return "You must provide a link to the deal"
      }
    }

  })
