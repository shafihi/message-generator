const messagePool1 = ['hot', 'spicy', 'mild', 'left over', 'bit'];
const messagePool2 = ['lasagna', 'rice', 'biscuits', 'Nigerian food', 'Sushi'];
const messagePool3 = ['milkshake' , 'glass of water', 'cola' , 'slushie' , 'smoothie'];

const getRandomNumber = () => Math.floor(Math.random() * 5);


const messageGenerator = () => `Care for some ${messagePool1[getRandomNumber()]} ${messagePool2[getRandomNumber()]} to go with that ${messagePool3[getRandomNumber()]}`;

console.log(messageGenerator());

