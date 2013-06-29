App.Views.AppView = Backbone.View.extend({
  el: '.App',

  events: {
    "click #submit_deal" : "toggleSubmit",
    "click #sign-up" : "toggleSignUp",
    "click #sign-in" : "signIn",
    "click #sign-out" : "signOut"

  },

  initialize: function() {

  },

  signIn: function() {
    $('#sign-up').fadeToggle('fast')
    $('#sign-in').fadeToggle('fast', function() {
      $('#sign-out').fadeToggle('fast')
    })

  },

  signOut: function() {
    $('#sign-out').fadeToggle('fast', function() {
      $('#sign-up').fadeToggle('fast')
      $('#sign-in').fadeToggle('fast')
    })
  },

  toggleSignin: function() {
    event.preventDefault()
    if ($('.slider').css("display") === "none") {
      new App.Views.Signin().render()
    }
    else {
      $('.slider').slideUp("slow")
    }
  },

  renderFlashMessage: function(message){
    $('.flash-message').html(message)
    $('.flash-container').fadeIn('slow', function(){
      setTimeout(function() {
        $('.flash-container').fadeOut('slow')
      }, 2798)
    } )

  },

  toggleSignUp: function(event) {
    event.preventDefault()
    if ($('.slider').css("display") === "none") {
      new App.Views.SignUp().render()
    }
    else {
      $('.slider').slideUp("slow")
    }
  },

  toggleSubmit: function(e) {
    e.preventDefault()
    if ($('.slider').css("display") === "none")
    {
      new App.Views.SubmitDealForm().render()
    }
    else
    {
      $('.slider').slideUp("slow")
    }
  }
})

