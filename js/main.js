gotoTopBtn = document.getElementById("goBack");
video = document.getElementsByClassName("display__video")[0];
navbarToggleBtn = document.getElementById("navbarToggle");
navbarIcon = document.querySelector("#navbarToggle i");
navbarDropdown = document.getElementById("dropdown");
navLinks = document.getElementsByClassName("nav__link");
youtubeVideo = document.getElementById("ytvideo");

window.onscroll = () => {
  ScrollFunction();
};

const ScrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    gotoTopBtn.style.display = "block";
  else gotoTopBtn.style.display = "none";
};

const gotoTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const playVideo = () => {
  video.classList.add("active");
};

navbarToggleBtn.onclick = () => {
  navbarDropdown.classList.toggle("active");
  toggleNavBar();
};

video.onclick = () => {
  video.classList.remove("active");
  var src = youtubeVideo.getAttribute("src");
  youtubeVideo.setAttribute("src", src);
};

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = () => {
    navbarDropdown.classList.remove("active");
    toggleNavBar();
  };
}

const toggleNavBar = () => {
  if (navbarDropdown.classList.contains("active")) {
    navbarIcon.classList.add("fa-times");
    navbarIcon.classList.remove("fa-bars");
  } else {
    navbarIcon.classList.add("fa-bars");
    navbarIcon.classList.remove("fa-times");
  }
};
