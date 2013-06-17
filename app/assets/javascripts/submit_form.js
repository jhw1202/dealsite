$(document).ready(function(){
 $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      draggable: false,
      buttons: {
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      },
      close: function() {

      }
    });

    $( "#submit_deal" ).on('click', function() {
        $( "#dialog-form" ).dialog( "open" );
    });

  App.Views.SubmitDealForm = Backbone.View.extend({
    el: "#dialog-form",

    events: {
      'submit .deal-submit-form' : 'submitDeal'
    },

    submitDeal: function(event){
      event.preventDefault()
      // console.log("caught")
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

  var submitForm = new App.Views.SubmitDealForm()

})
