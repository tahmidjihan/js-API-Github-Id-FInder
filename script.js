const searchBtn = document.getElementById("searchBtn");
const username = document.querySelector(".input-username");

//search
let usernameVal;
searchBtn.addEventListener("click", (e) => {
  e.preventDefault(e);
  usernameVal = username.value;
  //main-function-search- API
  const user = `https://api.github.com/users/${usernameVal}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", user);
  xhr.onreadystatechange = function () {
    //   console.log(this.responseText);
    if (xhr.readyState === 4) {
      if (xhr.status === 404) {
        console.log("user not found");
      } else {
        const data = JSON.parse(this.responseText);
        console.log(data.login);
      }
    }
  };
  xhr.send();
});

//show
