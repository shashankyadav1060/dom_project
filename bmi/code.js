console.log("Hello World");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please enter a valid height";
}
else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please enter a valid weight";
}
else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    let message = "";

if (bmi < 18.6) {
    message = "Under Weight";
} else if (bmi >= 18.6 && bmi <= 24.9) {
    message = "Normal Range";
} else {
    message = "Overweight";
}
results.innerHTML += `<p>${message}</p>`;
}
});