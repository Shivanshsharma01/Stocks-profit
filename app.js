var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var outputBox = document.querySelector("#output");
var body = document.querySelector(".body");
var image = document.querySelector(".bg");
var containerColor = document.querySelector(".container");
var footerColor = document.querySelector("#footer");

checkBtn.addEventListener('click', submitHandler);

function submitHandler() {
     var ip = Number(initialPrice.value);
     var qty = Number(stocksQuantity.value);
     var curr = Number(currentPrice.value);
     if (ip && qty && curr) {
          calculateProfitAndLoss(ip, qty, curr);
     } else {
          showOutput(`Please enter all three fields`);
     }
}



function calculateProfitAndLoss(initial, quantity, current) {

     if (initial > current) {
          var loss = (initial - current) * quantity;
          var lossPercentage = (loss / (initial * quantity)) * 100;
          image.style.backgroundImage = 'url(loss.jpg)';
          containerColor.style.backgroundColor = 'red';
          footerColor.style.backgroundColor = 'red';
          showOutput(`Whoops!😥  Your loss is ${loss} and the loss percentage is ${lossPercentage.toFixed(2)} %`);

     } else if (current > initial) {
          var profit = (current - initial) * quantity;
          var profitPercentage = (profit / (initial * quantity)) * 100;
          image.style.backgroundImage = 'url(profit.jpg)';
          containerColor.style.backgroundColor = 'green';
          footerColor.style.backgroundColor = 'green';
          showOutput(`Yayy! 🎉🥳 Your Profit is ${profit} and the profit percentage is ${profitPercentage.toFixed(2)} %`);


     } else {
          containerColor.style.backgroundColor = '#FF9933';
          footerColor.style.backgroundColor = '#FF9933';
          image.style.backgroundImage = 'url(shares.jpg)';
          showOutput(`No pain no gain 🤓, No gain no pain 😎`);
     }

}

function showOutput(message) {
     outputBox.innerHTML = message;
}