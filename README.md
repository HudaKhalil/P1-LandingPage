# Landing Page Project

## Table of Contents

* [About The Project](#About The Project)
* [Core Features](#Core Features)
* [Stand Out Features](#Stand Out Features)
* [Limitstions](Limitations)

## About The Project

In the simplest terms, a landing page is a place a user ends up after clicking on a link on social media, in your email or on an ad. It can also be your website’s home page.
I choose to create My personal blog landing page for Udacity Web Professional Nano Degree. Hope you all enjoy it.

## Core Features

- ***Navigation Built Dynamically***
    I've created a function which is looped through sections to create list items dynamically then build the navigation bar.
    
    
- ***Link Scroll to Appropriate Section***
Create a variable for all links in the nav bar, then prevent click handler until getting the section's top offset then scroll lightly.


- ***Section Scrolled Clearly Viewed***
    As explained before, after calculationg the section top offset using the `HTMLElement.offsetTop` read-only property, then scroll to this location.
    
## Stand Out Features

- ***Active State***
 Added active state to section while navigation in the viewport. 

    1. Get the section top position.
    2. Create setActive State and deActive State
    3. Loop throug each section and check the section top less than 150 or not from the viewport.
    4. Add Active or not.

- ***Hide fixed navBar While not Scroll***
    This feature I searched for it in google and I found this site [MIT License](https://gomakethings.com)
    and I implemented in my landing page.
    
-***Scroll To Top Button ***
    I created a button in the layout with display none. When the user scrolls down 60px from the top of the document, show the button (display block) and hide the navBar while scrolling.
    
-***Design and Layout***
I've changed in the layout design by adding some pictures and css enhancemnts. Also I added content rather than the layout start test written.


-**Responsive Enhancement**
Created some media queries for basic checkpoints in the desgin.

## Limitations

I tried to create the hamburger menu but didn't work correct in with me.