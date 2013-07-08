App.Views.AppView = Backbone.View.extend({
  el: '.App',

  events: {
    "click #submit_deal" : "toggleSubmit",
    "click #sign-up" : "toggleSignUp",
    "click #sign-in" : "signIn",
    "click #sign-out" : "signOut",
    "change .sort select" : "sort",
    "submit .search form" : "searchDeals"

  },

  initialize: function() {

  },

  searchDeals: function(event) {
    event.preventDefault()
    var searchQuery = $(event.currentTarget).serializeObject()
    if (searchQuery.query){
      App.dealsView.$el.isotope('remove', $('.deals').children(), function(){
        $('#ajax-loader').show()
        var search = new App.Collections.Results({})
        search.fetch({
          data: searchQuery,
          success: function(results) {
            if (results.length === 0) {
              App.appView.renderFlashMessage("Your Query sucks! " + searchQuery.query + " is stupid" )
              App.dealsView.render()
            }
            else {
              App.dealsView.addAllDeals(results).initLoad()
            }
          }
        })
      })
    }
    else {
      App.appView.renderFlashMessage("ID10T Error")
    }
  },

  sort: function(event) {
    var selector = $(event.currentTarget).val()
    if (selector === "price_low_high") {
      $('.deals').isotope({
        sortBy : 'price',
        sortAscending: true
      })
    }
    else if (selector === "price_high_low"){
      $('.deals').isotope({
        sortBy : 'price',
        sortAscending: false
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
        sortAscending: false
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

