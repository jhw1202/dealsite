App.Views.Signin = Backbone.View.extend({
  el: '.slider',

  events: {
  	'submit .user-signin-form': 'createUser'
  },

  render: function() {
  	this.$el.html(Mustache.render($("#user-signin-template").html(), {}))
  	$('.slider').slideDown('slow')
  },

  initialize: function() {
  },

  createUser: function(event) {
  	event.preventDefault()
    var userData = $(event.currentTarget).serializeObject()
   	return this
  }


});