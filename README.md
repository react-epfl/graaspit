GraaspIt! plugin architecture
============================
GraaspIt! is a bookmarklet application which can be invoked on any Web page to scrap data and to send it to a Web application with a POST request.


Create your GraaspIt! plugin
============================
1. Change "PluginMock" to your own plugin name ("Youtube") and rename this file
2. Implement two functions findName and findEmbedCode (you can use firebug for it)
   a. findName - finds name for grasped page
     example: Page title, paragraph, everything that can be found in DOM with javascript
   b. findEmbedCode - finds a code that will be shown to people in graaasp
     example: html block, embed code, img element.
   c. JQuery is available as: "jQuery" is a namespace for "$"
3. send us the url part that this plugin should match
   example: 'role-widgetstore.eu/content', 'www.google.com/*directory/*'
