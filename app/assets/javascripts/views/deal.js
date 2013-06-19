App.Views.Deals = Backbone.View.extend({
  el: '.deals',

  render: function(){
    var _this = this
    this.$el.empty()
    this.collection.fetch({
      success: function(dealsData){
        dealsData.each(function(deal){
          var dealView = new App.Views.Deal()
          var data = {deal: deal.attributes}
          dealView.isotopeRender(data)
        })
        $(".deals").imagesLoaded( function(){
          $('#ajax-loader').css({"visibility": "hidden"})
          $(".deals").isotope({
            itemSelector : '.item',
           layoutMode : 'masonry'
          });
          $('.deals').css({"visibility": "visible"})
        })
      }
    })
    return this
  }

})


App.Views.Deal = Backbone.View.extend({
  el: '.deals',

  render: function(options){
    var _this = this
    this.model = new App.Models.Deal({id: options.id})
    this.model.fetch({
      success: function(deal){
        $('#ajax-loader').css({"visibility": "hidden"})
        var data = {deal: deal.attributes}
        _this.$el.html(template('single-deal-template', data))
        $('.deals').css({"visibility": "visible"})
      }
    })
    return this
  },

  isotopeRender: function(deal){
    var singleDeal = template('single-deal-template', deal)
    this.$el.append($(singleDeal))
  }

})

App.Views.SubmitDealForm = Backbone.View.extend({
    el: "#dialog-form",

    events: {
      'submit .deal-submit-form' : 'submitDeal',
    },
    //try to use this for create and update
    submitDeal: function(event){
      event.preventDefault()
      var data = $(event.currentTarget).serializeObject()
      var dealData = {
        title: data["deal[title]"],
        body: data["deal[body]"],
        source: data["deal[source]"]
      }
      var deal = new App.Models.Deal()
      deal.save(dealData, {
        success: function(deal){
          console.log(deal)
          alert("Deal submitted!")
          $("#dialog-form").dialog('close')
        }
      })
    }


  })

App.Views.EditDealForm = Backbone.View.extend({
  el: '.dummy-div'

  ,events: {
    'submit .deal-edit-form' : 'updateDeal'
    ,'click .delete-deal-button' : 'deleteDeal'
  }

  ,render: function(options){
    var _this = this
    this.deal = new App.Models.Deal({id: options.id})
    this.deal.fetch({
      success: function(deal){
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
        console.log(deal.attributes)
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
          var router = new Router()
          router.navigate('', {trigger: true})
        }
      })
    }
  }

})
