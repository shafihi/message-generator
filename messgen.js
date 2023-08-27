const messagePool1 = ['love', 'like', 'hate', 'ate', 'don\'t mind'];
const messagePool2 = ['lasagna', 'spicy rice', 'Pasta', 'Nigerian food', 'Cereal']

const getRandomNumber = () => Math.floor(Math.random() * 5);


const messageGenerator = () => `I ${messagePool1[getRandomNumber()]} ${messagePool2[getRandomNumber()]}`;

console.log(messageGenerator());

