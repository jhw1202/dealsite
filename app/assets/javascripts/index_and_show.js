$(document).ready(function(){

  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  }

  var template = function(id, data){
    var colors = ["#3498db", "#1abc9c", "#9b59b6", "#34495e", "#27ae60", "#f1c40f", "#f39c12", "#95a5a6", "#d35400"]
    data.color = colors[Math.floor(Math.random()*colors.length)]
    return Mustache.render($("#" + id).html(), data)
  }
// $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
//       options.url = (<%= raw root_url %>).toString() + options.url
//     })

  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
      o[this.name].push(this.value || '');
      }
      else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };


  App.Models.Deal = Backbone.Model.extend({
    urlRoot: '/deals',

    validate: function(attributes) {
      if (!attributes.source) {
        return "You must provide a link to the deal"
      }
    }

  })

  App.Collections.Deals = Backbone.Collection.extend({
    url: '/deals',
    model: App.Models.Deal
  })

  App.Views.Deals = Backbone.View.extend({
    el: '.deals',

    render: function(){
      var _this = this
      this.collection.fetch({
        success: function(dealsData){
          dealsData.each(function(deal){
            var dealView = new App.Views.Deal()
            var data = {deal: deal.attributes}
            dealView.isotopeRender(data)
          })
          // var data = {deals: dealsData.models}
          // var output = template('frontpage-deals-template', data)
          // _this.$el.html(output)
          // // _this.$el
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
    },

    isotopeRender: function(deal){
      var singleDeal = template('single-deal-template', deal)
      // console.log($(singleDeal))
      
      console.log($(singleDeal))
      this.$el.isotope('insert', $(singleDeal) )
    }

  })

  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'deals/:id': 'dealpage'
    }
  })

  var router = new Router()

  var deal = new App.Models.Deal()
  var deals = new App.Collections.Deals()
  var dealsView = new App.Views.Deals({collection: deals})
  var dealView = new App.Views.Deal()

  router.on('route:home', function(){
    dealsView.render()
  })

  router.on('route:dealpage', function(id){
    dealView.render({id: id})
  })

  Backbone.history.start()


})
