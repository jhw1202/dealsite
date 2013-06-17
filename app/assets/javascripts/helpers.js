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
  var colors = ["#3498db", "#1abc9c", "#9b59b6", "#34495e", "#27ae60", "#f1c40f", "#f39c12", "#95a5a6", "#d35400"]
  data.color = colors[Math.floor(Math.random()*colors.length)]
  return Mustache.render($("#" + id).html(), data)
}