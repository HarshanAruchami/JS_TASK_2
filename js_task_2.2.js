  function login() 
  {
   const uname = document.getElementById("inputusername").value;
   const password = document.getElementById("inputPassword").value;
   const CPassword = document.getElementById("inputconfirmPassword").value;
   const passwordform = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,15}$/;

   if (!uname || !password || !CPassword) {
    alert("Please enter or fill values in all the fields");
    return false;
   } else if (!/^[a-zA-Z\s]+$/.test(uname)) {
    alert("Username should only contain alphabets & blanks");
    return false;
   } else if (!passwordform.test(password)) {
    alert("Password must be 8 characters long and contain 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special character");
    return false;
   } else if (password !== CPassword) {
    alert("Password and confirm password do not match");
    return false;
   } else
    return true;
  }