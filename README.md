GraaspIt! plugin architecture
============================
GraaspIt! is a bookmarklet application which can be invoked on any Web
page to scrap data and to send it to [Graasp][http://graasp.epfl.ch]
with a POST request. Everybody can create plugins for your own web
pages/platforms.  Your plugin should send the following information:

    { name : name             // name to be shown for this item in Graaasp
    , embed : embed           // html code for this item to be embeded in Graasp
                              // or url if this is an OpenSocial gadget
    , thumbnail: thumbnailUrl // url to the thumbnail picture of this item
    , i3a_type : "asset"      // type of of item in Graasp:
    }                         // "asset" for resources, "widget" - for apps
 
Create your GraaspIt! plugin
============================
0. Check the plugin_mock.js file as an example.

1. Change "PluginMock" to your own plugin name ("Youtube") and rename this file

2. Implement two functions findName and findEmbedCode (you can use firebug for it)
  - findName (finds name for grasped page).
    **Example**: Page title, paragraph, everything that can be found in DOM with javascript

  - findEmbedCode (finds a code that will be shown to people in graasp).
    **Example**: html block, embed code, img element.

  - JQuery is available as: "jQuery" is a namespace for "$"

3. send us the url part that this plugin should match
   example: 'role-widgetstore.eu/content', 'www.google.com/*directory/*'