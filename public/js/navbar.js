/* eslint-disable no-unused-vars */
let checkedUser = "";
// Check to see if user exists
$(document).ready(() => {
  $.ajax({
    url: "api/usercheck",
    success: result => {
      console.log("Successfully Hit User Route");
    }
  });
});
// User exists - navbar
