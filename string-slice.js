const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(words);
// console.log(withoutA);

// slice 
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr 
const anotherPart = anthem.substr(11, 7);
console.log(anotherPart);

// substing 
const anotherAnotherPart = anthem.substring(11, 15);
console.log(anotherAnotherPart);

// concat
const first = 'Amader ';
const second = 'City ';
// const fullString = first + second;
const fullString = first.concat(second).concat('khulna');
console.log(fullString);

// join 
const words2 = ['Rahim', 'karim', 'Halim'];
// const allJoind = words2.join('');
// const allJoind = words2.join(' ');
// const allJoind = words2.join(',');
// const allJoind = words2.join(', ');
const allJoind = words2.join('WWW');
console.log(allJoind)