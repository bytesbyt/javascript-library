
 /* Prompt the user to enter a name */
newName= prompt("Please enter a new student name: ");

/* Ask the user for new names, stop if the name is blank */

while (newName != "") {
    document.write("<p>", newName, "</p>");
}else{
document.write("<p> No more students. </p>");
}