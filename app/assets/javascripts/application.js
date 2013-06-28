// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui.min
//= require jquery.isotope.min
//= require underscore
//= require backbone
//= require mustache
//
//= require deals
//= require helpers
//
//= require_tree .//models
//= require_tree .//collections
//= require_tree .//views
//= require_tree .//routers
//= require_tree .


// Rails CSRF Protection
$(document).ajaxSend(function (e, xhr, options) {
  var token = $("meta[name='csrf-token']").attr("content");
  xhr.setRequestHeader("X-CSRF-Token", token);
});

$(document).ajaxComplete(function (e, xhr, options) {

	if (xhr.getResponseHeader('X-Flash-Notice')){
    App.appView.renderFlashMessage(xhr.getResponseHeader('X-Flash-Notice'))
  }
});
