const path= require("path");
console.log(path.dirname('C:/Users/Prachi Katare/Desktop/Node/challnode.js/pathModule/pathModule/path.js'));
console.log(path.extname('C:/Users/Prachi Katare/Desktop/Node/challnode.js/pathModule/pathModule/path.js'));
console.log(path.basename('C:/Users/Prachi Katare/Desktop/Node/challnode.js/pathModule/pathModule/path.js'));

console.log(path.parse('C:/Users/Prachi Katare/Desktop/Node/challnode.js/pathModule/pathModule/path.js'));
const mypath= path.parse('C:/Users/Prachi Katare/Desktop/Node/challnode.js/pathModule/pathModule/path.js');
console.log(mypath.base);