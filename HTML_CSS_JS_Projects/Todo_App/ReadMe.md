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