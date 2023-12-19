
var exit = function(item, list){

  item.forEach(element => {
     element.addEventListener("click", function(){
    list.classList.remove("show");
  });
  });

 
}