const card = document.querySelector(".card");
window.addEventListener("load", () => {
  card.style.display = "none";
});

const searchBtn = document.getElementById("searchBtn");
const username = document.querySelector(".input-username");
const result = document.querySelector(".status");
const resultNeg = document.querySelector(".statusNeg");

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
        resultNeg.innerHTML = "User Not Found";
        result.innerHTML = "";
      } else {
        resultNeg.innerHTML = "";
        result.innerHTML = "User Found";
        card.style.display = "block";
        const data = JSON.parse(this.responseText);
        processData(data);
      }
    }
  };
  xhr.send();
});

//show
const followers = document.querySelector("#info1");
const following = document.querySelector("#info2");
const userLocation = document.querySelector("#info3");
const repos = document.querySelector("#info4");
const idCreated = document.querySelector("#info5");
const twitter = document.querySelector("#info6");
const blog = document.querySelector("#info7");
const usernameOutput = document.querySelector("#username");
const nameOutput = document.querySelector("#name");
const cardImg = document.querySelector(".card-img");
const bio = document.querySelector(".bio");

function processData(data) {
  cardImg.src = data.avatar_url;
  nameOutput.innerHTML = data.name;
  usernameOutput.innerHTML = `<a href="${data.html_url}">${data.login}</a>`;
  followers.innerHTML = data.followers;
  following.innerHTML = data.following;
  userLocation.innerHTML = data.location;
  repos.innerHTML = data.public_repos;
  idCreated.innerHTML = data.created_at;
  twitter.innerHTML = `<a href="https://x.com/${data.twitter_username}">@${data.twitter_username}</a>`;
  blog.innerHTML = `<a href="${data.blog}">Blog</a>`;
  bio.innerHTML = data.bio;
}
// extra
