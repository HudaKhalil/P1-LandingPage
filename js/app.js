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
  const nav = document.getElementById('navbar__list');
  // Add global var for sections ( dynamically created Items of navigation bar)
  const secs = document.querySelectorAll('section');


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
    secs.forEach( section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
        navItms += `<li><a class = "menu__link" href="#${sectionID}"> ${sectionDataNav}`+ ` |</a></li>`;
    });
    //Add to naviation bar
    nav.innerHTML = navItms.slice(0, -11);;

  };
  navBuild ();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
