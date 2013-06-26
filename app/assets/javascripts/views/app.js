App.Views.AppView = Backbone.View.extend({
  el: '.App',

  events: {
    "click #submit_deal" : "toggleSubmit"

  },

  initialize: function() {

  },

  login: function() {
    console.log("Logging In!!!")
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

