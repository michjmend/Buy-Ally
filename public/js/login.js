$(document).ready(() => {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var usernameInput = $("input#username");
  var passwordInput = $("input#password");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    $.post("/api/login", {
      username: username,
      password: password
    })
      .then(route => {
        window.location.replace(route);
        // If there's an error, log the error
      })
      .catch(err => {
        // eslint-disable-next-line prettier/prettier
        $("#login-error").html('<span><h5 class="text-danger text-center text-inline"><i class="fas fa-exclamation-triangle text-danger"></i>    Something went wrong!</h5></span><h5 class="text-center text-danger">Username or password incorrect</h5><hr>');
      });
  }
});
