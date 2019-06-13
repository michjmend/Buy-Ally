$(document).ready(function() {
  $.get("/api/category", function(dbcategory) {
    let options = "";
    dbcategory.forEach(function(option) {
      options +=
        "<input class=\"dropdown-item\" type=\"checkbox\" value=\"" +
        option.id +
        "\" name=\"" +
        option.categoryname +
        "\">" + option.categoryname + "<br>";
    });
    $("#radioFilter").html(options);
  });
});

$("#thisSubmit").on("click", function(e){
  console.log(this);
});

// $("#radioFilter").on("click", function (id) {
//   console.log('yo doin it')
//   var filter = '';
//   $.getJSON(Category.json, function (data) {
//     filter += '<option value="">Select ' + id + '</option>';
//     $.each(data, function (key, value) {
//       filter += '<input type="radio" value="' + id + '" name="' + value.categoryname + '">';
//     });
//     $('#radioFilter').html(filter);
//   });
// })
