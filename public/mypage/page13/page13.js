$.fn.slideFadeToggle = function(speed, easing, callback) {
  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
}

$('.deleteList li').each(function() {
  var text = $(this).children('span').text();
  $(this).children('span').after($('<span />').text(text));
});

$('.deleteList li .delete').on('click', function(e) {
  $(this).addClass('active hover');
  var line = $("<div />").addClass('line');
  var li = $(this).parent();
  setTimeout(function() {
    li.append(line);
    line.animate({
      width: li.width() - 6
    }, 400, function() {
      li.addClass('beforeSlice');
      line.css({
        left: 0,
        right: 'auto'
      }).animate({
        width: 0
      }, 200, function() {
        li.addClass('slice');
        setTimeout(function() {
          li.slideFadeToggle(300, function() {
            li.remove();
          });
        }, 500);
      });
    });
  }, 200);
});