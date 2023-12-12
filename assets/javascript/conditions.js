let students = [ "Pebbles", "Tes", "John", "Mark", "Chris", "Elizabeth" ];

function findStudent (searchForName){
    let position = students.indexOf(searchForName);
    if ( position == -1 ){
        document.write(searchForName, " NOT found");
    }else{
        document.write(searchForName, " found");
    }
}

findStudent ("Tes"); //Tes found

findStudent ("Heidi"); //Heidi NOT found
