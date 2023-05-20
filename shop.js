let red = document.getElementById('red');
let black = document.getElementById('black');
let orange = document.getElementById('orange');
let productImage = document.getElementsByTagName('img')[1];
let btnColor = document.querySelector('.buy-btn');

red.addEventListener('click', () => {
  productImage.setAttribute('src', 'images/flower1.png');
  btnColor.style.backgroundColor = '#E6404D';
});

orange.addEventListener('click', () => {
  productImage.setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/023/556/960/large_2x/orange-lily-flowers-watercolor-clipart-ai-generated-free-png.png');
  btnColor.style.backgroundColor = '#FE7427';
});

black.addEventListener('click', () => {
  productImage.setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/023/840/227/large_2x/black-white-and-gold-flowers-ai-generative-free-png.png');
  btnColor.style.backgroundColor = 'black';
});

