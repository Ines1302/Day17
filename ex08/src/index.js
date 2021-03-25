const _ = require('lodash');

var users = [
    {firstName: "John", lastName: "Doe", age: 24, gender: "male"},
    {firstName: "Jane", lastName: "Doe", age: 5, gender: "female"},
    {firstName: "Jim", lastName: "Carrey", age: 54, gender: "male"},
    {firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"}
];

function getUsers() {
    var output = "";

for (let i = 0; i < users.length; i++) {
    output += users[i].firstName + " " + users[i].lastName + " is " + users[i].age + ", " + users[i].gender + "\n";
    
}
return output;
 
}
console.log(getUsers());
   

function findUser(lastName, gender) {
    try{
        var user = _.find(users, { lastName , gender });
        var iFindUser = user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender + "\n";

        return iFindUser;

    }catch (error) {
        return "Cannot read property \'firstName\' of undefined";
        
    }
}




getUsers();
findUser("Doe", "male");
findUser("Doe", "female");
findUser("Jackson", "male");
console.log(findUser("Doe", "male"));
console.log(findUser("Doe", "female"));
console.log(findUser("Jackson", "male"));

module.exports = findUser;