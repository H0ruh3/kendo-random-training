var imgs = document.getElementsByClassName('card');

var num = Math.floor(Math.random() * 23 + 1);
imgs[0].src = 'Cards/card' + num + '.jpg';
imgs[0].alt = imgs[0].src;
