var Board = function($el) {
  this.$el = $el;
  this.$el.on('click', this.newPostIt.bind(this));
}

Board.prototype.newPostIt = function(e) {
  var postIt = new PostIt({top: e.clientY, left: e.clientX});
  this.$el.append(postIt.$el)
}

var PostIt = function(position){
  this.$el = $("#templates > .post-it").clone().css(position);
  this.$el.on('click', function($event){
    $event.stopPropagation()
  })
  this.$el.find('a.delete').on('click', this.remove.bind(this));
  this.$el.draggable({ handle: '.header'});
}

PostIt.prototype.remove = function(e) {
  e.stopPropagation();
  this.$el.remove();
}

$(document).ready(function() {
  var board = new Board($('#board'));
});
