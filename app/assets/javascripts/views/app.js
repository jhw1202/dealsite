App.Views.AppView = Backbone.View.extend({
  el: '.App',

  events: {
    "click #submit_deal" : "toggleSubmit",
    "click #sign-up" : "toggleSignUp",
    "click #sign-in" : "signIn",
    "click #sign-out" : "signOut",
    "change .sort select" : "sort",

  },

  initialize: function() {

  },

  sort: function(event) {
    var selector = $(event.currentTarget).val()
    if (selector === "price_high_low") {
      $('.deals').isotope({
        sortAscending: false,
        sortBy : 'price'
      });
    }
    else if (selector === "price_low_high"){
      $('.deals').isotope({
        sortBy : 'price',
        sortAscending: true
      })
    }
    else if (selector === 'popularity') {
      $('.deals').isotope({
        sortBy: 'popularity',
        sortAscending: false
      })
    }
    else if (selector === 'date') {
      $('.deals').isotope({
        sortBy:'date',
        sortAscending: true
      })
    }
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

