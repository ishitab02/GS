function generateCertificate() {
    // Get the user's name from the input field
    const recipientName = document.getElementById("userName").value.trim();

    // Check if the user entered a name
    if (recipientName === "") {
        alert("Please enter your name.");
        return;
    }

    // Hide the input field and button
    const userInput = document.querySelector(".user-input");
    userInput.style.display = "none";

    // Display the certificate
    const certificate = document.getElementById("certificate");
    certificate.classList.remove("hidden");

    // Replace the name on the certificate with the user's input
    document.getElementById("recipientName").textContent = recipientName;
}

// Initially, the certificate is hidden
document.addEventListener("DOMContentLoaded", function () {
    const certificate = document.getElementById("certificate");
    certificate.classList.add("hidden");
});

