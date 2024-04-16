window.onload = function() {
    $('.xxxxLink').each(function(index, element){
      $(element).on("mouseover", function() {
          alert(element.href);
      });
   })
};
