/* eslint-disable no-unused-vars */
/* Get categories for post block */
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
    }
  });
});

$(document).ready(function() {
  $.get("/api/category", function(dbcategory) {
    console.log(dbcategory);
    var options = "<option value=''>Category</option>";

    dbcategory.forEach(function(option) {
      options +=
        "<option data-id='" +
        option.id +
        "' value='" +
        option.id +
        "'>" +
        option.categoryname +
        "</option>";
    });
    $("#departmentCategory").html(options);
  });
  // eslint-disable-next-line camelcase
});
$(document).ready(function() {
  var postbutton = $("#formSubmit");
  var itemInput = $("#item");
  var reviewInput = $("#reviews");
  var priceInput = $("#price");
  var imageInput = $("#uploadFile");
  var brandInput = $("#brand");
  var urlInput = $("#url");
  var categoryInput = $("select#departmentCategory");

  $("#newPost").submit(function(e) {
    // alert("Err");
    e.preventDefault();
    var formData = new FormData(this);
    console.log(formData);
    $.ajax({
      type: "POST",
      url: "/api/product",
      data: formData,
      processData: false,
      contentType: false,
      success: function(r) {
        window.location.replace(r);
      },
      error: function(e) {
        console.log("some error", e);
      }
    });
    return false;
  });
});
