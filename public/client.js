         // initializing socket, connection to server
         var socket = io.connect('http://project.devzt.me:8001');
         socket.on('connect', function(data) {
            socket.emit('join', 'Hello server from client');
         });

         // listener for 'thread' event, which updates messages
         socket.on('thread', function(data) { 
            obj = JSON.parse(data);          
            $('#thread').append('<li  class="history_rows even"> <span  class="bid_user  pro_user"> <div class="userValue">' 
               + obj.user 
               + '</div></span><span  class="bid_amount">' + obj.price               
               + '</span> <span  class="bid_time">' + obj.datetime +'</span></li>');
               
               
            $('#user').val(sessionStorage.getItem("lastname"));
            document.getElementById('lbluser').innerHTML = obj.user;
            document.getElementById('lblprice').innerHTML = obj.price;
            


            var list, i, switching, b, shouldSwitch;
            list = document.getElementById("thread");
            switching = true;
            /* Make a loop that will continue until
            no switching has been done: */
            while (switching) {
               // start by saying: no switching is done:
               switching = false;
               b = list.getElementsByTagName("LI");
               // Loop through all list-items:
               for (i = 0; i < (b.length - 1); i++) {
                  // start by saying there should be no switching:
                  shouldSwitch = false;
                  /* check if the next item should
                  switch place with the current item: */
                  var valueone = b[i].getElementsByClassName("bid_amount")[0].innerHTML;
                  var valuetwo = b[i + 1].getElementsByClassName("bid_amount")[0].innerHTML;
                  if (valueone < valuetwo) {
                     shouldSwitch = true;
                     break;
                  }
               }
               if (shouldSwitch) {
                  /* If a switch has been marked, make the switch
                  and mark the switch as done: */
                  b[i + 1].classList.add("mystyle")
                  b[i].parentNode.insertBefore(b[i + 1], b[i]);
                  switching = true;
               }
            }

         });
         // prevents form from submitting and sends a message to server
         $('form').submit(function(){
            var message = $('#user').val();      
            var message = $('#price').val();     
            var message = $('#datetime').val();     
            var $items = $('#user, #price, #datetime,#address ')
var obj = {}
$items.each(function() {
    obj[this.id] = $(this).val();
})

var json= JSON.stringify(obj);      

            socket.emit('messages', json);
            this.reset();
            return false;
         });