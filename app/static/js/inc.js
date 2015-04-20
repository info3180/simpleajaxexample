$(document).ready(function() {

   $("#inc").on("click",function(){
        $.ajax({
          method: "POST",
          url: "/increment/"
       }).done(function( score ) {
             alert("the new score is" + score );
           });
    });
});
