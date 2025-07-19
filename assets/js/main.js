document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    var isValid = true;

    let fullName = document.getElementById("fName");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let dateOfBirth = document.getElementById("dateOfBirth");
    let genderRadios = document.getElementsByName("gender");
    let position = document.getElementById("position");

    document.querySelectorAll(".err-msg").forEach(el => el.remove());

    function showError(input, message) {
        isValid = false;
        let error = document.createElement("p");
        error.className = "err-msg";
        error.textContent = message;
        input.parentElement.appendChild(error);
    }

    if (fullName.value.length < 3) {
        showError(fullName, "Name must be more than 3 characters");
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Please enter a valid email address");
    }

    if (!/^\d{11}$/.test(phone.value.trim())) {
        showError(phone, "Phone number must be 11 digits");
    }

    if (dateOfBirth.value === "") {
        showError(dateOfBirth, "Date of birth is required.");
    }

    var genderSelected = false;
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            genderSelected = true;
            break;
        }
    }

    if (!genderSelected) {
        showError(document.querySelector(".genderOptions"), "Please select a gender.");
    }

    if (position.value === "") {
        showError(position, "Please select a job position.");
    }
    if (isValid) {
        alert("Application submitted successfully ✅");
    }

});