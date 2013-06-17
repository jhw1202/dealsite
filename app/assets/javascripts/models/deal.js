 App.Models.Deal = Backbone.Model.extend({
    urlRoot: '/deals',

    validate: function(attributes) {
      if (!attributes.source) {
        return "You must provide a link to the deal"
      }
    }

  })
