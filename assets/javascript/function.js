let students = ["Pebels", "BamBam", "Fred", "Will"];

function printArray(myHeading){
    document.write("<h1>", myHeading, "</h1>");
    document.write("<hr>");
    for (let i = 0; i < students.length ; i = i +1 ){
        document.write("<p>", students[i], "</p>");
    };
}

printArray("Oringinal Array");
students.push("Tes");
printArray("Updated Array");

printArray();