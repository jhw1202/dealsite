App.Views.AppView = Backbone.View.extend({
  el: '.App',

  events: {
    "click #submit_deal" : "toggleSubmit",
    "click #sign-up" : "toggleSignUp"

  },

  initialize: function() {

  },

  login: function() {
    console.log("Logging In!!!")
  },

  renderFlashMessage: function(message){
    $('.flash-message').html(message)
    $('.flash-container').slideDown('slow', function(){
      setTimeout(function() {
        $('.flash-container').slideUp('slow')
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

