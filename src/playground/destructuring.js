// Object destructuring

// const person = {
// 	name: 'Taichi',
// 	age: 28,
// 	location: {
// 		city: 'Suita',
// 		temp: 30
// 	}
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// Array Destructuring

// const address = ['605 Senriyama', 'Suita', 'Osaka', '5656565'];
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [merchandise, , medium] = item;
console.log(`A medium ${merchandise} costs ${medium}`);
