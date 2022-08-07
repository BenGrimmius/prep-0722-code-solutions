var person = {
  firstName: 'Ben',
  lastName: 'Grimmius',
  hobby: 'Singing'
};

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is: ", fullName);
console.log('Value of Person', person);

person.job = 'Operations';
console.log("The person's current job is:", person.job);

person.previousJob = 'On sight Audio Engineer';
console.log("The person's previous job was:", person.previousJob);

console.log('Value of Person:', person);
