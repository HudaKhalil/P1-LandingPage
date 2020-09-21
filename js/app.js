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
  const upButton = document.getElementById("upBtn");
  // Add global var for nav bar menu
  const navbarMnu = document.getElementsByClassName('page__header');

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
        navItms += `<li class= "links"><a class = "menu__link" href="#${sectionID}"> ${sectionDataNav}</a></li>`;
    });
    //Add to naviation bar
    navigations.innerHTML = navItms;

  };
  navBuild ();

// Add class 'active' to section when near top of viewport
  // Get the section top position
  const offset = (section) => {
        //returns the element position relative to the viewport.
        return section.getBoundingClientRect().top;

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
//Select all anchor links
const links = document.querySelectorAll('.page__header ul a');
//When click
for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  //invoke the slid function
  navSlideOut();
  //prevent click while getting the section topoffset
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;
  // Then scroll
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

//Display navbar after scrolling has stopped
//MIT License, https://gomakethings.com
var scrollStop = function (callback) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Setup scrolling variable
	var isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			// Run the callback
			callback();

		}, 150);

	}, false);

};

scrollStop(function () {
    //Display menu while reach Top
    for (var i=0;i<navbarMnu.length;i+=1){
           navbarMnu[i].style.display = 'block';
         };
});

// When the user scrolls down 60px from the top of the document, show the button
window.onscroll = function() {
  //Hide menu while scroll down
  for (var i=0;i<navbarMnu.length;i+=1){
         navbarMnu[i].style.display = 'none';
       };
      scrollFunction();
    };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {

        upButton.style.display = 'Block';
    } else {
       upButton.style.display = 'none';
     }

}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const navSlideIn = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.Topnav');
    //Select all links to display in the slide bar
    const navLinks = document.querySelectorAll('.Topnav li');
    // When we click on the burger we want the nav-links to get class nav-active
    burger.addEventListener('click', () => {
            // burger.addEventListener('mouseover', ()=>{ if I want to make it hover
            //Toggle Nav
            nav.classList.remove('nav-deactive');
            nav.classList.toggle('nav-active');

             //Animate Links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        }
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5 }s`;
        });
        //Burger Animation
       burger.classList.toggle('toggle');
     });
}
//invoke the slid function
navSlideIn();
const navSlideOut = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.Topnav');
    const navLinks = document.querySelectorAll('.Topnav li');

    //Toggle Nav
    nav.classList.remove('nav-active');
      nav.classList.toggle('nav-deactive');
      navLinks.forEach((link, index) => {
              console.log(index);
              link.style.animation = '';
          });

    burger.classList.toggle('toggle');


}
