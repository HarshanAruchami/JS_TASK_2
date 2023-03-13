const friends = ["Harshan", "Hemanth", "Shiva", "Surya", "Ram", "Nandha"];
document.write("a] " + friends + "<br>" + "<br>" + "<br>" + "<br>" + "<br>");
//unshift
let addfront = prompt("b] Enter your friend name to be added in front:");
document.write("b] UNSHIFT OPERATION " + "<br>");
friends.unshift(addfront);
document.write(friends + "<br>" + "<br>" + "<br>" + "<br>");
//push
let addend = prompt("c] Enter your friend name to be added at the end:");
document.write("c] PUSH OPERATION " + "<br>");
friends.push(addend);
document.write(friends + "<br>" + "<br>" + "<br>" + "<br>");
//splice
let addcen = prompt("Enter the word to add at center of the array")
document.write("e] SPLICE OPERATION " + "<br>");
friends.splice(2,0,addcen);
document.write(friends + "<br>" + "<br>" + "<br>");
//shift
document.write("d] SHIFT OPERATION " + "<br>");
friends.shift(friends);
document.write(friends + "<br>");
//pop
document.write("d] POP OPERATION " + "<br>");
friends.pop(friends);
document.write(friends + "<br>" + "<br>" + "<br>" + "<br>");
//sort
document.write("e] SORT OPERATION " + "<br>");
friends.sort();
document.write(friends + "<br>" + "<br>" + "<br>");
//for loop
document.write("f.1]" + "For loop" + "<br>" + "<br>");
for (var i = 0; i < friends.length; i++) {
  document.write("" + friends[i] + "<br>");
}
document.write("<br>");
//for of
document.write("f.2]" + "For OF" + "<br>" + "<br>");
for (let name of friends) {
  document.write(name + "<br>");
}
document.write("<br>");
//for in
document.write("f.3]" + "For IN" + "<br>" + "<br>");
for (let name in friends) {
  document.write(friends[name] + "<br>");
}
document.write("<br>");
//for each
document.write("f.4]" + "For Each" + "<br>" + "<br>");
friends.forEach(function (name) {
  document.write(name + "<br>");
});
document.write("<br>");
document.write(
  " g] Separated all the names by comma and printed it" +
  "<br>" +
  friends +
  "<br>" +
  "<br>"
);
//date and time
document.write("h] Date and Time" + "<br>" + "<br>");
const date = new Date();
document.write(date);
