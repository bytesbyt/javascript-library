//Define array
let students = ["Pebbles", "Bam-Bam", "Wednesday", "Tes", "Beth"]
//Index
document.write("<p>", students[0], "</p>");
document.write("<p>", students[3], "</p>");
//How manny students are there?
let studentsCount = students.length;
document.write("<p> Number of students= ", studentsCount, "</p>");

//Loop through the array, printing the student name
for (let i = 0; i < students.length; i= i + 1 ){
    document.write("<p>", i, " : ", students[i], "</p>");
}
//Sort the array in ascending order
document.write(students.sort());

//Search for, and get the position of an element.
document.write("<p> Index of Tes is ", students.indexOf("Tes"), "</p>");

//Add elements to the end of the array?
students.push("Tom");
document.write("<p>", students, "</p>");

//Remove elements from the end of the array
students.pop();
document.write("<p>", students, "</p>");

//Remove from the first element of the array
students.shift();
document.write("<p>", students, "</p>");

//Arrays within Arrays
scores = [
    [23,5,5435,345,65,57],
    [24,656,344,45,7,5],
    [23,5,3,45,],
    [3,4,56,75,45],
    [34,44,53,56,45]
]
document.write("<p> Score is ", scores[0][1], "</p>");


