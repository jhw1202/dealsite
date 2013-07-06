App.Views.Deals = Backbone.View.extend({
  el: '.deals'

  ,events: {
    "mouseenter .item" : "toggleLinkIcon",
    "mouseleave .item" : "toggleLinkIcon"
  }

  ,initialize: function() {
    this.render()

    $(".deals").isotope({
      itemSelector : '.item',
      layoutMode : 'masonry'
    });
  }

  ,addOne: function(deal) {
    var dealView = new App.Views.Deal()
    dealView.isotopeRender({deal: deal.attributes})
  }

  ,render: function(){
    var _this = this
    this.$el.empty()
    App.dealsCollection.fetch({
      success: function(dealsData){
        _this.addAllDeals(dealsData).initLoad()
        _this.listenTo(App.dealsCollection, 'add', _this.addOne )
        jQuery("time.timeago").timeago();
      }
    })

  }

  ,addAllDeals: function(data){
    data.each(function(deal){
      var dealView = new App.Views.Deal()
      var data = {deal: deal.attributes}
      dealView.isotopeRender(data)
    })
    return this
  }

  ,initLoad: function() {
    this.$el.imagesLoaded( function(){
      $('#ajax-loader').hide()
      $('.deals').isotope('reLayout')
      $('.deals').css({"visibility": "visible"})
    })
  }

  ,toggleLinkIcon: function(event){
    $(event.currentTarget).find(".external_link")
                          .css({"visibility" : event.type === "mouseenter" ? "visible": "hidden"})
  }
})
