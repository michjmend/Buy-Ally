$(document).ready(function() {
  $.get("/api/category", function(dbcategory) {
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
    console.log("Deez options, yo", options);
    $("#departmentCategory, #departmentCategories").html(options);
  });
});
