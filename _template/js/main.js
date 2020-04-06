window.onscroll = scrollFunction;
window.onload = function () {
  activateSearchBtn();
  scrollFunction;
};

function activateSearchBtn() {
  var searchBox = document.querySelector(".search-box");
  var searchInput = document.querySelector(".search-box .search-input");
  var searchButton = document.querySelector(".search-box .btn-search");
  searchBox.addEventListener("mouseover", function (ep) {
    searchInput.focus();
  });
  searchButton.addEventListener("click", function (e) {
    alert("Not implementeed yet!");
  });
  searchInput.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
      searchButton.click();
    }
  });
}

function scrollFunction() {
  var nav = document.querySelector("nav");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.classList.add("nav-shrunk");
  } else {
    nav.classList.remove("nav-shrunk");
  }
}
