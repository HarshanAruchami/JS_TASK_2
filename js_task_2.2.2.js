function votecheck() {
  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("second").value;
  const dob = document.getElementById("dob").value;
  var maleRadio = document.getElementById("flexRadioDefault1");
  var femaleRadio = document.getElementById("flexRadioDefault2");
  var othersRadio = document.getElementById("flexRadioDefault3");
  var gender = "";

  if (maleRadio.checked) {
    gender = "male";
  } else if (femaleRadio.checked) {
    gender = "female";
  } else {
    gender = "others";
  }

  var dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  if (!firstName || !lastName || !dob || !gender) {
    alert("Fields cannot be empty..!");
    return false;
  } else if (!isNaN(firstName) || !isNaN(lastName)) {
    alert("Name should contain only letters..!");
    return false;
  } else if (!dob.match(dateRegex)) {
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
        firstName.toUpperCase() +
          " " +
          lastName.toUpperCase() +
          "  age  " +
          age +
          " is able to vote this year"
      );
    } else {
      alert(
        firstName.toUpperCase() +
          " " +
          lastName.toUpperCase() +
          "  age  " +
          age +
          ", you have to wait to reach 18 years"
      );
    }
    return true;
  }
}
