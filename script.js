// Task A: Student Information and Variables (5 marks)

let studentFullName = "Raphael Itodo Atumeyi";

let studentAge = 24;

let registered = "true";
let notRegistered = "false";
let studentStatus = (registered) => (registered === "true");

let department = "Computer Science";

let scores = [
    { subject: "html", score: 67 },
    { subject: "css", score: 91 },
    { subject: "javaScript", score: 73 }
];

let totalFee = 175000;
let feePaid = 65000;
let outstandingFee = (totalFee - feePaid);

let totalDays = 40;
let attendedDays = 33;
let attendancePercentage = (attendedDays / totalDays) * 100;

console.log(studentFullName);
console.log(studentAge);
console.log(studentStatus(registered));
console.log(department);
console.log(scores);
console.log(attendancePercentage + "%");
console.log(outstandingFee);

scores.forEach(function (Item) {
    console.log(Item.subject + ": " + Item.score);
});

// Task B: Data Type Investigation (8 marks)

console.log("42" + 7);
console.log("42" * 3);
console.log(7 + true);
console.log("7" === 7);
console.log(typeof NaN);
console.log(Boolean(""));
console.log("42" - 7);
console.log("42" / 6);
console.log("7" == 7);
console.log(typeof null);
console.log(Boolean("false"));

// Task C: Data Validation and Type Coercion (8 marks)

let age = "24";
let result = Number(age);
let htmlScore = "68";
let cssScore = "seventy";
let javascriptScore = 77;

console.log(result);

let outcome = Number(htmlScore);
console.log(outcome);

let answer = Number(cssScore);
console.log(answer);

let effect = Number(javascriptScore);
console.log(effect);

// Task D: Examination Eligibility (8 marks)

console.log(result >= 18);
console.log(studentStatus(registered) == true);
console.log(feePaid <= totalFee);
console.log(attendancePercentage >= 75);