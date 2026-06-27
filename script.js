document.addEventListener("DOMContentLoaded", function () {

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fullname = document.getElementById("exampleInputFullname").value.trim();
            const email = document.getElementById("exampleInputEmail1").value.trim();
            const password = document.getElementById("exampleInputPassword1").value;
            const confirmPassword = document.getElementById("exampleInputPassword2").value;

            if (fullname === "") {
                alert("Please enter your full name.");
                return;
            }

            if (fullname.length < 3) {
                alert("Full name must contain at least 3 characters.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (password.length < 6) {
                alert("Password must contain at least 6 characters.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            document.getElementById("successMessage").textContent ="Registration successful!";
            signupForm.reset();
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const message = document.getElementById("contactMessage").value.trim();

            if (name === "") {
                alert("Please enter your full name.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (message.length < 10) {
                alert("Your message must contain at least 10 characters.");
                return;
            }

            document.getElementById("successMessage").textContent ="Message sent successfully!";
            contactForm.reset();
        });
    }

});