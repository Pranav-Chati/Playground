## Blog
09/10 : First roadblock I have run into. While trying to use Microsoft's API's on my student OSU email, I unfortunately do not have permissions("authorization") to use the API. Instead of using microsoft, I plan to switch over to Gmail API's to see how my POC can still be made.
    > 7:20 PM: A continued update; the GMail API, specifically https://gmail.googleapis.com/gmail/v1/users/{userId}/messages, only gets me the ID of the email; and not the entire body of the email; which might make it more difficult to figure out which emails have which subjects. It may be easier to make a dummy gmail account specific to newsletters to then call that (will continue investigating). ISSUE WAS RESOLVED BY USING Q PARAMETERS AND 'FROM:' TAG
    > : The second aspect of this update; using OAuth 2.0 seems a bit difficult atm.