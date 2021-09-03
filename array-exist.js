function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(1245);
// console.log(myBigBuddy);

if (friends.indexOf('fox') != -1) {
    console.log('fox exists');
}
else {
    console.log("Fox doesn't exists ")
}
// includes
if (friends.includes('Lion')) {
    console.log('Lion exists using includes')
}

// concate 
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);