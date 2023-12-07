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