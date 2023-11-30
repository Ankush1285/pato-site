




// function loadNavbar() {
//     // Create a new XMLHttpRequest object
//     let xhr = new XMLHttpRequest();

//     // Define the path to the navbar HTML file
//     let navbarPath = 'nav.html'; // Adjust the path as needed

//     // Configure the XMLHttpRequest
//     xhr.open('GET', navbarPath, true);

//     // Define a callback function to handle the response
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // Insert the loaded navbar content into the container
//             document.getElementById('nav-list').innerHTML = xhr.responseText;
//         }
//     };

//     // Send the GET request
//     xhr.send();
// }
// loadNavbar();

// {
// const toggleBtn = document.getElementById('toggleBtn');
// const asideMenu = document.getElementById('asideMenu');
// const closeButton = document.getElementById('closeButton');

// toggleBtn.addEventListener('click', () => {
// asideMenu.classList.toggle('menu');
// });

// closeButton.addEventListener('click', () => {
// asideMenu.classList.remove('menu');
// });
// }
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleBtn');
  const asideMenu = document.getElementById('asideMenu');
  const closeButton = document.getElementById('closeButton');

  toggleBtn.addEventListener('click', () => {
    asideMenu.classList.toggle('menu');
  });
  closeButton.addEventListener('click', () => {
    asideMenu.classList.remove('menu')
  });
});


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    pagination: {
      el: ".swiper-pagination",
    },
  },
});


var swiper2 = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    pagination: {
      el: ".swiper-pagination",
    },
  },
});
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Add a scroll event listener to show/hide the button
window.addEventListener('scroll', () => {
  if (window.scrollY >= 500) {
    scrollToTopBtn.style.display = 'block';

  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Add a click event listener to scroll to the top
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});






function restartAnimation() {
  const elements = document.querySelectorAll('.rotate-in-left');
  elements.forEach(element => {
    element.style.animation = 'none';
    element.offsetHeight; /* Trigger a reflow, flush CSS changes */
    element.style.animation = null;
  });
}

// Set up an interval to restart the animation every 2 seconds (2000 milliseconds)
// setInterval(restartAnimation, 3000);
document.addEventListener('DOMContentLoaded', function () {
  const roundVideo = document.getElementById('roundVideo');
  const video = document.getElementById('videoItem');
  let videoVisible = false;

  roundVideo.addEventListener('click', function () {
    if (!videoVisible) {
      // Show the video and play it
      video.style.display = 'block';
      video.play();
      videoVisible = true;
    } else {
      // Hide the video
      video.style.display = 'none';
      videoVisible = false;
    }
  });

  const openButton = document.getElementById('openButton')
  openButton.addEventListener('click', function () {
    
    video.style.display = 'none';
    videoVisible = false;
  });
});






function clock() {
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('mintues');
  let seconds = document.getElementById('seconds');

  let day = document.getElementById('day');


  let d = new Date().getDay();
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();




  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  day.innerHTML = d


}
setInterval(clock, 1000);

