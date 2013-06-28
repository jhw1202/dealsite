App.Views.EditDealForm = Backbone.View.extend({
  el: '.dummy-div'

  ,events: {
    'submit .deal-edit-form' : 'updateDeal',
    'click .delete-deal-button' : 'deleteDeal'
  }

  ,render: function(options){
    var _this = this
    this.deal = new App.Models.Deal({id: options.id})
    this.deal.fetch({
      success: function(deal){
         $('#ajax-loader').hide()
        var dealData = deal.attributes
        _this.$el.html(template("edit-deal-form", {deal: dealData}))
      }
    })
  }

  ,updateDeal: function(event){
    event.preventDefault()
    var _this = this
    var dealData = $(event.currentTarget).serializeObject()
    this.deal.set(dealData)
    this.deal.save(dealData, {
      success: function(deal){
        _this.$el.append("<h1>Your deal has been edited brah</h1>")
      }
    })
  }

  ,deleteDeal: function(){
    event.preventDefault()
    var confirmDelete = confirm("Are you sure you want to delete your deal?")

    if(confirmDelete){
      this.deal.destroy({
        success: function(deletedDeal){
          alert("Deal " + deletedDeal.attributes.title + "has been deleted. Happy megemegadealing!")
          App.router.navigate('', {trigger: true})
        }
      })
    }
  }

})
