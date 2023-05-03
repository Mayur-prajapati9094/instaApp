let userData = [];

let localUserData = localStorage.getItem("userData");
let data = JSON.parse(localUserData);
document.getElementById("submit").addEventListener("submit", function (event) {
  //  event.preventDefault();
  let uname = document.getElementById("uname").value;
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;

  let userObj = {
    uname : uname,
    email: email,
    pwd: pwd,
  };

  if (!localUserData) {
    userData.push(userObj);
    localStorage.setItem("userData", JSON.stringify(userData));
  } else {
    let filter = data.filter((x) => x.email === userObj.email);
    if (filter.length > 0) {
      // document.getElementById("emailCheck").textContent = "Email Already Exist";
      alert("Email Already Exist");
    } else {
      data.push(userObj);
      localStorage.setItem("userData", JSON.stringify(data));
    }
  }
});

// let userData = [];
// let localUserData = localStorage.getItem("userData");
// getStore();

// document.getElementById("submit").addEventListener("submit", function (event) {
//   event.preventDefault();
//   let pwd = document.getElementById("pwd").value;
//   let email = document.getElementById("email").value;

//   let userObj = {
//     email: email,
//     pwd: pwd,
//   };

//   // setStore();

//   // window.location.replace('test.html')
// });

// function setStore() {
//   localStorage.setItem("userData", JSON.stringify(userData));
// }
// function getStore() {
//   let data = localStorage.getItem("userData");

//   data ? (userData = JSON.parse(data)) : [];
//   // userData = JSON.parse(localStorage.getItem("userData")) ? JSON.parse(localStorage.getItem("userData")) : []
// }
