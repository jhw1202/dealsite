$(document).ready(function(){

  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  }

  var template = function(id, data){
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
      },

      render: function(){

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
            var data = {deals: dealsData.models}
            var output = template('frontpage-deals-template', data)
            _this.$el.html(output)
          }
        })
        return this
      }

    })

    App.Views.Deal = Backbone.View.extend({
      el: '.deals',

      render: function(options){
        var _this = this
        this.deal = new App.Models.Deal({id: options.id})
        this.deal.fetch({
          success: function(deal){
            var data = {deal: deal.attributes}
            _this.$el.html(template('single-deal-template', data))
          }
        })
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
