// variables
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Jun',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const year = new Date().getFullYear();
const month = months[new Date().getMonth()];
const day = days[new Date().getDay()];
const footerDate = document.getElementById('date');
const navToggleBtn = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navIcons = document.querySelector('.nav-icon');
const linksContainer = document.querySelector('.linksContainer');
const header = document.getElementById('home');
const navBar = document.querySelector('#navbar');
const links = document.querySelectorAll('.scroll-link');

//set up date
footerDate.innerHTML = `${day}/${month}/${year}`;

// set up navToggleBtn
navToggleBtn.addEventListener('click', function () {
  // Set up container height equal to Dynamic Links Height
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = navLinks.getBoundingClientRect().height;
  const iconHeight = navIcons.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight + iconHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// fixed navBar
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navBar.classList.add('fixedNavbar');
  } else {
    navBar.classList.remove('fixedNavbar');
  }
});

// smooth Scroll behavior

links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // prevent default behavior
    e.preventDefault();
    // navigate to specific spot
    const getId = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(getId);
    // calc height
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navHeight = navBar.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains('fixedNavbar');

    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 83.2) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
