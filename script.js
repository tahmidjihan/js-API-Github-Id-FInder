const searchBtn = document.getElementById("searchBtn");
const username = document.querySelector(".input");

const user = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
xhr.open("GET", user);
xhr.onreadystatechange = function () {
  //   console.log(this.responseText);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data.login);
  }
};
xhr.send();

//search
searchBtn.addEventListener("click", (e) => {
  e.preventDefault(e);
});
