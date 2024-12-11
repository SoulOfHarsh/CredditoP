document.addEventListener("DOMContentLoaded", function () {

    // Handle showing the phone number form after clicking Register button
    document.getElementById("register-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Get values from the registration form
        var firstName = document.getElementById("first-name").value;
        var lastName = document.getElementById("last-name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
        
        // Check if all required fields are filled
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("Please fill all the fields.");
            return;  // Stop further execution if any field is empty
        }
        
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match! Please try again.");
            return;  // Stop further execution if passwords don't match
        }

        // If all fields are filled and passwords match, hide the registration form and show the phone number form
        document.getElementById("user-info-form").style.display = "none";
        document.getElementById("phone-form").style.display = "block";
    });

});
