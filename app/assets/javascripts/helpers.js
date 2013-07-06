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

var template = function(id, data){
  var product_photos =  ["drill.jpg", "htc_one.jpg", "ipad.jpg", "pasta.jpg", "ps4.jpg", "wayfarers.jpg", "xbone.jpg"]
  data.product_image = "/images/" + product_photos[Math.floor(Math.random()*product_photos.length)]
  data.deal.price = (parseInt(data.deal.cents)/100).toFixed(2)
  return Mustache.render($("#" + id).html(), data)
}
