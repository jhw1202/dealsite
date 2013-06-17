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
        var data = {deal: deal.attributes}
        _this.$el.html(template('single-deal-template', data))
      }
    })
    return this
  },

  isotopeRender: function(deal){
    var singleDeal = template('single-deal-template', deal)
    this.$el.isotope('insert', $(singleDeal) )
  }

})

