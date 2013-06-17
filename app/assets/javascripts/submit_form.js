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
      var data = $(event.currentTarget).serializeObject()
      console.log("HERE!!!!")
      console.log(data)
    }
  })

  var submitForm = new App.Views.SubmitDealForm()

})
