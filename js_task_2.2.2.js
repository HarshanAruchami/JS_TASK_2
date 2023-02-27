function checkage() {
  const fName = document.getElementById("f_name").value;
  const lName = document.getElementById("s_name").value;
  const dob = document.getElementById("dob").value;
  var rmale = document.getElementById("maler");
  var rfemale = document.getElementById("femaler");
  var gender = " ";

  if (rmale.checked) {
    gender = "male";
  } else if (rfemale.checked) {
    gender = "female";
  } else {
    gender = "others";
  }

  var dateform = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  if (!fName || !lName || !dob || !gender) {
    alert("Fields cannot be left empty..!");
    return false;
  } else if (!isNaN(fName) || !isNaN(lName)) {
    alert("Name should contain only letters..!");
    return false;
  } else if (!dob.match(dateform)) {
    alert("Please enter a valid date format (mm/dd/yyyy)");
    return false;
  } else {
    var dobDate = new Date(dob);
    var todayDate = new Date();
    var age = todayDate.getFullYear() - dobDate.getFullYear();
    var m = todayDate.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && todayDate.getDate() < dobDate.getDate())) {
      age--;
    }
    if (age >= 18) {
      alert(
        fName.toUpperCase() +
        " " +
        lName.toUpperCase() +
        "  age  " +
        age +
        " is able to vote this year"
      );
    } else {
      alert(
        fName.toUpperCase() +
        " " +
        lName.toUpperCase() +
        "  age  " +
        age +
        ", wait to reach 18 years"
      );
    }
    return true;
  }
}
