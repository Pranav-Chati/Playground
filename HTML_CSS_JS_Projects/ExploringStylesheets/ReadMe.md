**Project Name: Stylesheet Toggle**
**Frameork: HTML/CSS/JS**
**Author: Pranav Chati**

### Inspiration: https://www.w3schools.com/css/css_intro.asp

I'm interested in trying to figure out how this CSS Demo was created using only one HTML page, but the styles change everytime. I wonder how the styles are able to switch or toggle around with the links being sent to another page.

**First Stylesheet**
The first stylesheet was really helpful to get more into the weeds of css. Rather than trying to search up how to do everything, I tried to force myself to either a) go through the w3schools list of CSS or b) tried to just mess around and see what would happen. I think these solutions are better because then I get to think more about how I am coding, rather than copying-pasting from stackoverflow.

Initially, it was daunting to do everything alone; however, once I started getting a certain understanding of everything (after reading a few of the documnets), it definitely got a bit easier.

The two biggest challenges that I will definitely encounter and have not yet figured out is a) how to style the lists without the space and b) how to make the list toggable between styles

**Second Stylesheet**
The second stylesheet was definitely easier to change some things around. Instead of playing around with flex containers though, I was using a grid approach to move around the div's. It was frustrating and interesting to make everything out.

The biggest challenge that remains is to style the lists. This will continue to be repeated. I will address the CSS with the lists once I have completed the stylesheets and begin to learn how to toggle between them.

**Third Stylesheet**
The third stylesheet was pretty easy. It was very similar to the no-styles stylesheet; with a few different color options. My stylesheets will definitely change once I begin adding toggles; although, I'm not sure how it will change. I used the same principles from above about not searching up stuff I don't know, but rather finding it.

**Fourth Stylesheet**
The fourth stylesheet was also very similar to the second and third. I used a grid display; however, I think there might be a better approach to mimic the behavior of the W3Schools Stylesheet 4 that is listed. I'm going to invest this a bit further, but first, I plan to learn how to toggle between stylesheets.

**Styling Lists**
_Stylesheet 1_: The lists were by far the most annoying aspect of this. The reason being was because there were times when the list were not big enough vs too big, and etc. I solved the width issue by making the width auto in smaller screens but set it to a fixed 130% on larger screens. This helps the list stretch out more than it needs.

_Stylesheet 2_: The trickiest part of the second stylesheet was the rounding. However, everything else was very similar to the previous stylesheet.

_Stylesheet 3_: The most challenging part of doing the third stylesheet was trying to get the padding / margin as similar as possible. I kind of eye-balled it, but I think there might be a better way.

_Stylesheet 4_: The last one was using the concepts I've already learned, so it was easy.

**List Functionality**
I'm thinking in order to toggle the lists, I need to: a) Make the lists clickable, b) write JS code that switches which list is active, and c) write JS code that simultaneously switches the linked stylesheet.

The initial script that I had was:
`
const styleSheet = [
"stylesheet1.css",
"stylesheet2.css",
"stylesheet3.css",
"stylesheet4.css",
"",
];

      let styleSheetLink = document.getElementById("style");
      document.addEventListener("DOMContentLoaded", function() {
        let listElements = document.getElementsByClassName("li");
        console.log(listElements.length);

        for (let i = 0; i < listElements.length; i++) {
        console.log(i);
          listElements[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += "active";
            styleSheetLink.href = styleSheet[i];
          });
        }
      })

`

I was able to change the styling of the page by changing the href in the link tag within the head by using an array with all the stylehseet files. I figured this was a bit better than trying to uncomment all the link tags and try to activate one while deactivating the others. Changing the listElements took a while to understand. I read something online about using a DOMContentLoaded event listener to help make sure the DOM is fully loaded before running the javascript fully. I think this solution is temporary until I can think of a better fix.

*The main issue was that when I was adding "active" back to the classname, there needed to be a space in front of active. This can be fixed like this where the 0 means a single space: `this.className += "0active"; 

Adding the links to the <a> was a lot easier, especially since the code for the listElements was very similar. I also saw this as an opportunity to explore the DRY programming practice, since both listener events are very similar to each other. The only problem that I noticed when I was implementing the DRY Practice, is that one array is alays used, and the other is not. This means there is a semi-redundant parameter to make sure the variables are not global.