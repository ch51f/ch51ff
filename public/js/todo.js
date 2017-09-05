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
            $items.each(function(e) {
              var $this = $(this);
              if($this.hasClass('active')) {
                $this.remove();
              }
            });
          }
        },
        error: function(err) {
          console.log(err)
        }
      })
    } else {
      alert("没有已完成的todo");
    }
  }).on('blur', '#todo', function(e) {
    var $this = $(this);
    var val = e.target.value;
    if(val != "") {
      $.ajax({
        type: 'POST',
        url: '/todo/add',
        data: {todo: val},
        success: function(res) {
          var res = JSON.parse(res);
          if(!res.result) {
            alert(res.msg);
          } else {
            e.target.value = "";
            $("#list").append("<div class='todo-item' data-id='"+res.data.insertId+"'>"+val+"<div class='check'></div></div>")
            // insertId
          }
        },
        error: function(err) {
          console.log(err);
        }
      })
    }
  })
})