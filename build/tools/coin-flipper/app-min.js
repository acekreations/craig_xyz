window.onload = function() {
  flipCoin();
  document.addEventListener("touchstart", function() {}, true);
};

flipCoin = () => {
  var coin = document.querySelector(".coin");
  coin.addEventListener("click", function() {
    var randNum = Math.floor(Math.random() * 11);
    var i = 0;
    coinToggle(coin, randNum, i, coinToggle);
  });
};
coinToggle = (coin, randNum, i, cb) => {
  coin.classList.toggle("is-flipped");
  if (i < randNum) {
    i++;
    setTimeout(function() {
      cb(coin, randNum, i, cb);
    }, 200);
  }
};
