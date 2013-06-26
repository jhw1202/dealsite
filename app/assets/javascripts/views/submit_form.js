App.Views.SubmitDealForm = Backbone.View.extend({
    el: '.slider',
    events: {
      'submit .deal-submit-form' : "submit",
      'click #cancel' : "cancel"
    },

    initialize: function() {
      this.template = Mustache.render($("#submit-deal-form").html(), {})
    },

    submit: function(event) {
      var _this = this
      event.stopImmediatePropagation()
      event.preventDefault()
      var dealData = $(event.currentTarget).serializeObject()
      var deal = new App.Models.Deal()
      App.dealsCollection.create(dealData, {
        success: function(savedDeal) {
          $('.slider').hide('slow')
        }
      })
    },

    cancel: function(event) {
      _this = this
      this.$el.slideUp("slow", function(){
        _this.$el.html('')
      })
    },

    render: function() {
      this.$el.html(this.template)
      this.$el.slideDown("slow")
    }
  })
