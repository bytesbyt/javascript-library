function getFormDetails(event) {
    
    event.preventDefault();
    
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    
    document.getElementById('name-result').textContent = name.value;
    document.getElementById('email-result').textContent = email.value;
}

let newsletterForm = document.getElementById('newsletter-signup');
newsletterForm.addEventListener('submit', getFormDetails);