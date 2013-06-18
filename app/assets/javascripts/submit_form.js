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

    $( "#submit_deal" ).on('click', function() {
        $( "#dialog-form" ).dialog( "open" );
    });




})
