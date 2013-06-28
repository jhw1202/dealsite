App.Views.SignUp = Backbone.View.extend({
  el: '.slider',

  events: {
  	'submit .user-signup-form': 'createUser'
  },

  render: function() {
    console.log(this)
  	this.$el.html(Mustache.render($("#user-signup-template").html(), {}))
  	$('.slider').slideDown('slow')
  },

  initialize: function() {
  },

  createUser: function(event) {
  	event.preventDefault()
    var userData = $(event.currentTarget).serializeObject()
  	var user = new App.Models.User
  	user.save({user: userData}, {
  		error: function (originalModel, resp, options) {
        console.log("Fuck! There was an error Motherfucker!")
  		},
  		success: function (model,data,options) {
        console.log("options")
        console.log(options)
        console.log("model")
        console.log(model)
        console.log("data")
        console.log(data)
        if (options.xhr.getResponseHeader('X-Message')){
            alert(options.xhr.getResponseHeader('X-Message'))
        }
        $('.slider').slideUp('slow')
  		}
  	});

  	return this
  },


});