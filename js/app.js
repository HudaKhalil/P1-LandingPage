/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
  //Add global var to get navigation list by ID
  const navigations = document.getElementById('navbar__list');
  // Add global var for sections ( dynamically created Items of navigation bar)
  const sections = document.querySelectorAll('section');
  //Get the button
  const mybutton = document.getElementById("myBtn");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
  //function to loop over all sections in the main to create nav item for it
  const navBuild = () => {
    //Container for Navigation Items
    let navItms = '';
    // loop through each section to add nav items
    sections.forEach( section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
        navItms += `<li class= "links"><a class = "menu__link" href="#${sectionID}"> ${sectionDataNav}`+ ` |</a></li>`;
    });
    //Add to naviation bar
    navigations.innerHTML = navItms.slice(0, -11);;

  };
  navBuild ();
// Add class 'active' to section when near top of viewport
  // Get the section top position
  const offset = (section) => {
        //returns the element position relative to the viewport.
        return Math.floor(section.getBoundingClientRect().top);

  };
  // remove section active status
  const deActive = (section) => {
    section.classList.remove('your-active-class');
  };
  // add section active status
  const secActive = (conditional, section) => {
    if(conditional){
      section.classList.add('your-active-class');
    };
  };

// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll(".page__header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
// Apply the section activation/deactivation
const setSectionActive = () => {
      sections.forEach(section => {
        const elemeOffset = offset(section);

        inviewport = () => elemeOffset < 150 && elemeOffset >= -150;
        deActive(section);
        secActive(inviewport(),section);
      });
};

window.addEventListener('scroll',setSectionActive);


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()
  };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
