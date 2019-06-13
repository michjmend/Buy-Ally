/*Mich post block code originally postBlock.js */
$(document).ready(function () {
  $.get("/api/category", function (dbcategory) {
    console.log(dbcategory);
    var options = "<option value=''>Category</option>";

    dbcategory.forEach(function (option) {
      options += "<option data-id='" + option.id + "' value='" + option.id + "'>" + option.categoryname + "</option>";
    });
    $("#departmentCategory").html(options)

  });

  function load_json_data(id) {
    var filter = '';
    $.getJSON(Category.json, function (data) {
      filter += '<option value="">Select ' + id + '</option>';
      $.each(data, function (key, value) {
        filter += '<option value="">Select ' + id + '> ' + value.categoryname + '</option>';
      });
      $('#Category').html(filter);

    });
  }
});

/*Mike's post block code originally postblock.js*/
$(document).ready(function () {
  $.get("/api/category", function (dbcategory) {
    console.log(dbcategory);
    var options = "<option value=''>Category</option>";

    dbcategory.forEach(function (option) {
      options += "<option data-id='" + option.id + "' value='" + option.id + "'>" + option.categoryname + "</option>";
    });
    $("#departmentCategory").html(options)
  });

  function load_json_data(id) {
    var filter = '';
    $.getJSON(Category.json, function (data) {
      filter += '<option value="">Select ' + id + '</option>';
      $.each(data, function (key, value) {
        filter += '<option value="">Select ' + id + '> ' + value.categoryname + '</option>';
      });
      $('#Category').html(filter);

    });
  }
});
