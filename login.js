document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;

  let getData = JSON.parse(localStorage.getItem("userData"));

  let check = getData.filter(function (e) {
    return e.email === email;
  });

  if (check.length === 0) {
    alert("Invalid email");
  } else if (check[0].pwd === pwd) {
    let filter = getData.filter((x) => x.email === email);
    // console.log(filter)
    localStorage.setItem("uname",JSON.stringify(filter))
    window.location.replace("post.html");
  } else {
    alert("Invalid password");
  }
});
