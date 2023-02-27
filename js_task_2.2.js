  function login() {
   const username = document.getElementById("inputusername").value;
   const password = document.getElementById("inputPassword").value;
   const confirmPassword = document.getElementById("inputconfirmPassword").value;
   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,15}$/;

   if (!username || !password || !confirmPassword) {
    alert("Please enter values in all the fields");
    return false;
   } else if (!/^[a-zA-Z\s]+$/.test(username)) {
    alert("Username should only contain alphabets and blanks");
    return false;
   } else if (!passwordRegex.test(password)) {
    alert("Password must be 8 characters long and contain 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special character");
    return false;
   } else if (password !== confirmPassword) {
    alert("Password and confirm password do not match");
    return false;
   } else
    return true;
  }