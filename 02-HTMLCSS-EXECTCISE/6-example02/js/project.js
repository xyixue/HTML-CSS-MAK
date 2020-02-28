var index = 1;

// 隐藏所有的slider
function hideAll() {
  var sliders = document.getElementsByClassName("slider");
  for (var i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }
}

// 改变dots的选中状态
function changeActive(n) {
  var alldots = document.getElementsByClassName("dots");
  for (var i = 0; i < alldots.length; i++) {
    alldots[i].className = alldots[i].className.replace("active", "");
  }
  alldots[n - 1].className = alldots[n - 1].className + " active";
}

// 跳转到指定的索引位置
function go(n) {
  var sliders = document.getElementsByClassName("slider");
  hideAll();
  sliders[n - 1].style.display = "block";
  changeActive(n);
  index = n;
}
// 左右翻页
function gopage(num) {
  if (num == -1) {
    index--;
    if (index < 1) {
      index = 3;
    }
  }

  if (num == 1) {
    index++;
    if (index > 3) {
      index = 1;
    }
  }
  go(index);
}
