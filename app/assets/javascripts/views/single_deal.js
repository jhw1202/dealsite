App.Views.Deal = Backbone.View.extend({
  el: '.deals',

  render: function(options){
    var _this = this
    this.model = new App.Models.Deal({id: options.id})
    this.model.fetch({
      success: function(deal){
        $('#ajax-loader').hide()
        var data = {deal: deal.attributes}
        _this.$el.html(template('single-deal-template', data))
        $('.deals').css({"visibility": "visible"})
      }
    })
    return this
  },

  isotopeRender: function(data){
    var singleDeal = template('single-deal-template', data)
    $('.deals').isotope( 'insert', $(singleDeal))
  }

})