let names=[];
names.push("dhaneesh");
names.push("Sonu");
names.push("bhadran");
console.log(names);
function insertName(Array, name) {
    if (Array.includes(name)) {
        console.log(name + " is already in the array.");
    } else {
        namesArray.push(name);
        console.log(name + " has been added to the array.");
    }
}




insertName(names, "David"); 
insertName(names, "Alice"); 

console.log("Updated names array:", names);

names.pop();
console.log("after pop",names)
