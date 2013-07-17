App.Views.Deals = Backbone.View.extend({
  el: '.deals'

  ,events: {
    "mouseenter .item" : "toggleLinkIcon",
    "mouseleave .item" : "toggleLinkIcon"
  }

  ,initialize: function() {
    // this.render()

    $(".deals").isotope({
      itemSelector : '.item',
      layoutMode : 'masonry',
      sortBy: 'date',
      sortAscending: false,
      getSortData : {
        sortBy: function ($elem) {
          //we have a problem here when we add a new deal to the page.
          return App.dealsCollection.get( parseInt($elem.attr("product_id")) ).attributes
        },
        price : function ( $elem) {
          return this.sortBy($elem).cents
        },
        popularity : function ( $elem ) {
          return this.sortBy($elem).clicks
        },
        date : function( $elem ){
          return this.sortBy($elem).created_at
        }
      }
    })
  }

  ,addOne: function(deal) {
    deal.on('sync', function(savedDeal){
      var dealView = new App.Views.Deal()
      dealView.isotopeRender({deal: savedDeal.attributes})
    })
  }

  ,render: function(){
    var _this = this
    if ($('.item') > 0) {
    this.$el.isotope('remove', $('.item'))
    }
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
