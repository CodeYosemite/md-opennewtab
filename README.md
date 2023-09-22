# MD - Open in a new tab
Hello there! Today I will teach you how to make your README.md hyperlinks open in a new tab, it has been very hard to figure this out. This is the only method out there.<br>
This project is open-source, so fork and do whatever you want!<br>
I just want to let you know, this does not work on Safari due to the security of the browser, **this requires pop-ups to be enabled!**
<br>
First the link for this is ``` https://attatechykid.github.io/md-opennewtab/ ```. Now we need to add a ``` ? ``` to identify a JavaScript argument, then, ``` link= ``` and add the link you want to open in a new tab. Together, that would be the link that would open in a new tab. Now the original link is the link it will redirect back to after opening the link in a new tab, you will need to add a ``` & ``` in the URL and then a ``` current= ``` which is the current link that you clicked the hyperlink from. This will result with: ``` https://attatechykid.github.io/md-opennewtab/?link=https://attatechykid.github.io/&current=https://github.com/AttaTechyKid ```.

