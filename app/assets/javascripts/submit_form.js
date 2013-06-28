$(document).ready(function(){
 $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 600,
      width: 650,
      modal: true,
      draggable: false,
      title: "Share a deal",
      buttons: {
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });

    $( "#submit_deal" ).on('click', function(e) {
        e.preventDefault()
        //$( "#dialog-form" ).dialog( "open" );
        if ($('.slider').css("display") === "none")
        {
          new App.Views.SubmitDealForm().render()
        }
        else
        {
          $('.slider').slideUp("slow")
        }
    });
})
