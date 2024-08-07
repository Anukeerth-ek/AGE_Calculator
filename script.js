document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdateInput = document.getElementById('birthdate').value;
    const resultElement = document.getElementById('result');
    
    if (!birthdateInput) {
        resultElement.textContent = 'Please enter a valid birthdate.';
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    // Adjust age if birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    resultElement.textContent = `You are ${age} years old.`;
});
