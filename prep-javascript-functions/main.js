function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

var greeting = getGreeting('World');
console.log('Greeting:', greeting);

function addAndMultiplyByFive(a, b) {
  return (a + b) * 5;
}

var total = addAndMultiplyByFive(10, 5);
console.log('Add and Multiply by 5 exercise:', total);

function multiplyAndDivideByFive(a, b) {
  return (a * b) / 5;
}

var multiplyAndDivideByFivetotal = multiplyAndDivideByFive(35, 10);
console.log('Multiply and divide by 5 exercise', multiplyAndDivideByFivetotal);

function subtractTwoNumbers(a, b) {
  return a - b;
}

var difference = subtractTwoNumbers(22, 7);
console.log('Difference', difference);

function getCircleCircumference(radius) {
  return 2 * radius * 3.1415926535897;
}

var circumference = getCircleCircumference(5);
console.log('Circumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('Full Name', fullName);

function cube(number) {
  return number * number * number;
}

var cubed = cube(5);
console.log('5 cubed', cubed);
