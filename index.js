const form = document.querySelector('form');
// this use case will give you empty value when oy take the value outer of the form
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === ' ' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            alert('You are under weight');
        } else if (bmi > 18.6 && bmi < 24.9) {
            alert('You are in normal range');
        } else {
            alert('You are in the over weight');
        }

        // show the result
        results.innerHTML = `<span>${bmi} </span>`;
    }
});