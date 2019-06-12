$(document).ready(function () {
  var postbutton = $("#formSubmit");
  var itemInput = $("#item");
  var reviewInput = $("#reviews");
  var priceInput = $("#price");
  var imageInput = $("#uploadFile");
  var brandInput = $("#brand");
  var urlInput = $("#url");
  var categoryInput = $("select#departmentCategory");

  // postbutton.on("click", function(event) {
  //   event.preventDefault();
  //   var userData = {
  //     picture: imageInput,
  //     item: itemInput.val(),
  //     review: reviewInput.val(),
  //     price: priceInput.val().trim(),
  //     brand: brandInput.val().trim(),
  //     url: urlInput.val().trim(),
  //     category: categoryInput.find(":selected").val()
  //   };
  //   // if (!userData.name || !userData.review || !userData.price) || (!userData.category) {
  //   //   return;
  //   // }
  //   console.log(userData);

  //   createNewPost(
  //     userData.item,
  //     userData.review,
  //     userData.price,
  //     userData.brand,
  //     userData.url,
  //     userData.category
  //   );

  $("#newPost").submit(function (e) {
    alert("Err");
    e.preventDefault();
    var formData = new FormData(this);
    console.log(formData)
    $.ajax({
      type: "POST",
      url: "/api/product",
      data: formData,
      processData: false,
      contentType: false,
      success: function (r) {
        window.location.replace(r)
      },
      error: function (e) {
        console.log("some error", e);
      }
    });
    return false;
  });
});

// function createNewPost(name, review, picture, price, brand, url, category) {
//   // ajax call to our API;
//   $.ajax({
//     type: "POST",
//     url: "/api/product",
//     // enctype: "multipart/form-data",
//     processData: false,
//     contentType: false,
//     cache: false,
//     data: {
//       name: name,
//       review: review,
//       picture: picture,
//       price: price,
//       brand: brand,
//       url: url,
//       CategoryId: category,
//       UserId: 1
//     }
//   }).done(data => {
//     window.location.replace(data);
//     console.log("hello");
//   });
// }