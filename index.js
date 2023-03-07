
$(document).ready(function(){
    $.ajax({
        url:'navigator.html',
    
        caches:false,
        success:function(data){
          $("#navContainer").html(data);
        }
      })
    $.ajax({
    url:'footer.html',

    caches:false,
    success:function(data){
      $("#footerContainer").html(data);
    }
  })
})