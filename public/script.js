const submitButton = document.getElementById("submitButton");
const passwordInput = document.getElementById("passwordInput");
const statusLabel = document.getElementById("status");

function updateStatus(isValid) {
    if (isValid === true){
        statusLabel.textContent = "CORRECT!"
        statusLabel.style.color = "green"
    } else {
        statusLabel.textContent = "INCORRECT!"
        statusLabel.style.color = "red"
    }
}

submitButton.addEventListener("click", function () {
    if (passwordInput.value !== "") {
        fetch('/check', {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Specify JSON format
            },
            body: JSON.stringify({ password: passwordInput.value }) // Send password as JSON
        })
        .then ((res) => res.json())
        .then((isValid) => {
            updateStatus(isValid);
        });
    }
});