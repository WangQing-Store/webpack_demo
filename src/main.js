var div = document.createElement("div");
div.innerHTML =
  '<b style="color: red">我是一个使用var来声明自己的div，因为我不知到自己现在是否支持es6所以不敢用let</b>';
document.body.appendChild(div);
