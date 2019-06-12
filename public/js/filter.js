$(document).ready(function () {
$.get("/api/category", function (dbcategory) {
  console.log(dbcategory);
  var options = "";

  dbcategory.forEach(function (option) {
    options += 'type="radio" value="' + option.id + '" name="' + option.categoryname + '">';
  });
  console.log(options)
  $("#radioFilter").html(options)
});
})

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
