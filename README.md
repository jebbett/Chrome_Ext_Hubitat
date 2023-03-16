# Chrome Extension to Hubitat Example
A sample chrome extension which sends an hubitat Maker API on command when sound is detected in Chrome.

1. Open the Chrome extensions tab and turn on developer mode. 
2. Upload the files in this repository
3. Right click on the extension and go to options
4. Paste in your maker API "on" command for your device e.g.

http://192.168.25.111/apps/api/[app id/devices/[device id]/on?access_token=[token]

5. Save and any sound playing shoudl trigger an on action, you can also toggle on and off by clicking the extension at the top of your browser

This is just meant as a template to give you an idea, there is no error handling, adding a "try" command would work to stop triggering before the API info has been added, you can debug errors from the extensions screen.

> **Main Extension Specs:** manifest.json

> **Main script that is running in the background:** background.js

> **Options screen:**  options.html/js

> **Pop-up screen:**  popup.html/js 

> **Options screen:**  options.html/js 
