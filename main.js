const paragraph = document.querySelector('p');
paragraph.style.color = 'lightBlue';
paragraph.textContent = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

const heading = document.querySelector('h1');
heading.style.fontSize = '5em';

const halfTransparent = document.querySelector('#item-13');
halfTransparent.style.opacity = '0.5'

const thirdItem = document.querySelector('#item-3');
thirdItem.textContent = 'I say, "Hi!"';

const imgOne = document.querySelector('#img-1');
imgOne.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';
imgOne.style.height = '300px'

const imgTwo = document.querySelector('#img-2');
imgTwo.src = 'https://media.giphy.com/media/H76mLBIcNBho4/giphy.gif'
imgTwo.style.height = '300px'

var node = document.createElement('LI');
var textnode = document.createTextNode('Won\'t get fooled again.');
node.appendChild(textnode);
document.querySelector('ul').appendChild(node);

// const item16 = document.querySelector('li:last-child')
