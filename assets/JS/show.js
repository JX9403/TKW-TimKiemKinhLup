
var show = function (item , list, cnt) {
  
  item.addEventListener("click", function () {
    cnt++;
    if (cnt % 2 != 0) {
      list.classList.add("show");
    } else {
      list.classList.remove("show");
    }
  });
};

