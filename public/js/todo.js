$(function() {
  $("#todo-box").on('click', '.todo-item', function(e) {
    var $this = $(this);
    if($this.hasClass('active')) {
      $.ajax({
        type: 'POST',
        url: '/todo/undone',
        data: {id: $this.data('id')},
        success: function(res) {
          var res = JSON.parse(res);
          if(!res.result) {
            alert(res.msg);
          } else {
            $this.toggleClass('active');
          }
        },
        error: function(err) {
          console.log(err)
        }
      })
    } else {
      $.ajax({
        type: 'POST',
        url: '/todo/done',
        data: {id: $this.data('id')},
        success: function(res) {
          var res = JSON.parse(res);
          if(!res.result) {
            alert(res.msg);
          } else {
            $this.toggleClass('active');
          }
        },
        error: function(err) {
          console.log(err)
        }
      })
    }
  }).on('click', '#clear', function(e) {
    var $items = $(".todo-item"), ids = [];
    $items.each(function(e) {
      var $this = $(this);
      if($this.hasClass('active')) {
        ids.push($this.data('id'));
      }
    })
    if(ids.length > 0) {
      $.ajax({
        type: 'POST',
        url: '/todo/deleteAll',
        data: {ids: ids.join(',')},
        success: function(res) {
          var res = JSON.parse(res);
          if(!res.result) {
            alert(res.msg);
          } else {
            $this.toggleClass('active');
          }
        },
        error: function(err) {
          console.log(err)
        }
      })
    }
  })
})