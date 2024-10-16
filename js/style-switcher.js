const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled","true"); 
        }
    }
    )
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) 
    {
        dayNight.querySelector("i").classList.add("fa-sun"); 
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('.section');

    // Function to add or remove 'active' class from nav links
    function setActiveLink(link) {
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });
      link.classList.add('active');
    }

    // Function to check which section is in view and update nav accordingly
    function updateNav() {
      let fromTop = window.scrollY;
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (fromTop >= sectionTop - sectionHeight / 3 && fromTop < sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          const activeLink = document.querySelector(`.nav a[href="#${id}"]`);
          setActiveLink(activeLink);
        }
      });
    }

    // Event listener for scroll to update nav on scroll
    window.addEventListener('scroll', updateNav);

    // Event listener for click to update nav on click
    navLinks.forEach(navLink => {
      navLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        setActiveLink(this);
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });