##Project Title: Todo App
##Framework: HTML/CSS/JS
##Author: Pranav Chati

Features:
[x] Input a Task Name
[x] Enter a Due Date for the task
[ ] Add CSS to the webpage
[ ] Allow deletion of a task
[ ] Create a database to store the task information

First Push:
In the first push, I tried to just create a very simple todo app using Html & js. I wanted to primarily play around with the various js methods that `document` provides. These methods include like understanding the differences between .getElementById, .querySelector, and etc. I got to play around/read about the various methods and how they change the behavior. 

Second Push:
-> Added an element in Javascript that added the date at the top, to indicate the date for the task list
-> Added a Due Date Input
-> Read about ID/Class Name conventions and made fixes to files
-> Replaced Task list with a Table
-> Created the initial function that checks to see if the name of a task is valid or not
-> Add conditional to make sure date entered is correct
    - a challenge that I was running into was trying to figure out how to create a valid date. The string that I entered into my Date constructor was not working well. I ended up splitting the date format string to then check each of the entries (mm, dd, yyyy) to see if it was valid or not. One thing that was interesting when playing around with the Date constructor was that when a string was entered, i.e. "2015-03-23", the date printed to the console would be Sun Mar 22 2015 20:00:00 GMT-0400 (Eastern Daylight Time). The reason it shows Mar 22nd instead of 23rd is because I entered my date on UTC time, but I'm in EST time. When the console prints the date, it prints on EST time which is slightly delayed from the UTC time. Again, this is only because EST is UTC-4.
-> Cleared the values in the HTML after usage

Third Push:
https://getbootstrap.com/docs/4.3/getting-started/introduction/


Questions that I have:
-> While I was adding the CSS for the header, I was wondering. Is it bad html practice to not wrap your html tags in overarching <div> tags for better styling? My index.html file currently has not many wrappers or containers... is that a bad thing?

-> I have observered that the effect of padding and margin on objects varies based on the size of the object. i.e A large title with a big parameter sometimes has a large effect of 1% or 10% when it comes to padding. However, other times (smaller items), the 100% isn't even that effective. I exaggerated a bit, but I still feel like the size of the object correlates to the padding and margin of the object.


Feature Questions:
*This section is about questions I am having while coding. They are about the website and its features*

-> I wonder how to shift the input type textbox to be centeralized with the text. Right now it does not look even. I feel as if it might be connected to the align-items or align-self. I tried to center it with align-self and it did not work.

-> i wonder how to manipulate the css of the table. I wonder if there has to be something that allows me to move it around and change the text and spacing.


Annoyances:
The biggest annoyance I feel with javascript right now, is when it comes to making sure my id's or my class names match up with the todo.js for querySelectors and etc. I feel as if i don't have a proper idea in place.