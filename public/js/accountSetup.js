// check if logged in
var checkedUser = [];

$(document).ready(() => {
  $.ajax({
    url: "api/usercheck",
    success: result => {
      console.log("Successfully Hit User Route");
      checkedUser = result;
      if (!checkedUser) {
        window.location.replace("/login");
      }
      if (checkedUser) {
        if (checkedUser.username) {
          $("#dab").removeAttr("placeholder");
          $("#dab").attr("placeholder", checkedUser.username);
        }
      }
    }
  });
});

// eslint-disable-next-line no-unused-vars
$("#delete-account").click(function(e) {
  event.preventDefault();
  console.log("we hate to see you go!");
  $.ajax({
    method: "DELETE",
    url: "/accountdelete"
  }).then(() => {
    console.log("Account Deletion Successful");
  });
  window.location.replace("/");
});

$("#account-info").submit(function(e) {
  // alert("Err");
  e.preventDefault();
  var formData = new FormData(this);
  console.log(formData);
  // $.ajax({
  //   method: "PUT",
  //   url: "api/update",
  //   data: formData,
  //   processData: false,
  //   contentType: false,
  //   success: function(r) {
  //     window.location.replace(r);
  //   },
  //   error: function(e) {
  //     console.log("some error", e);
  //   }
  // });
  // return false;
});
