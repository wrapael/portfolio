function toggleButton() {
    const termsChecked = document.getElementById("terms").checked;
    document.getElementById("registerBtn").disabled = !termsChecked;
}

function MyFunction() {
	const form = document.getElementById("regForm");
    const fullName = form.fullname.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const phone = form.phone.value.trim();
    const dob = form.dob.value.trim();
    const course = form.course.value;
    const gender = form.querySelector('input[name="gender"]:checked');
    const termsChecked = form.terms.checked;
	if (!fullName || !email || !password || !phone || !dob || !course || !gender || !termsChecked) {
        alert("Please fill out all required fields and accept the terms.");
        return;
    }
    alert(`Registration Successful!\n\nName: ${fullName}\nEmail: ${email}\nCourse: ${course}`);
}