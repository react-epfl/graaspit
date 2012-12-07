GraaspIt! plugin
================
GraaspIt! is a bookmarklet application which can be invoked on any Web
page to scrape data and to send it to [Graasp](http://graasp.epfl.ch)
with a POST request. Everybody can create plugins for their own web
pages/platforms.  Your plugin should send the following information:

    { name : name             // name to be shown for this item in Graaasp
    , embed : embed           // html code for this item to be embeded in Graasp
                              // or url if this is an OpenSocial gadget
    , thumbnail: thumbnailUrl // url to the thumbnail picture of this item
    , i3a_type : "asset"      // type of of item in Graasp:
    }                         // "asset" for resources, "widget" - for apps
 
Create your GraaspIt! plugin
============================
0. Copy the plugin_mock.js file as the skeleton of you plugin and choose your plugin name.

1. Change "PluginMock" to your own plugin name everywhere in the code and rename the plugin file

2. Implement scraping functions *findName*, *findEmbedCode* and *findThumbnail*
  - you can use firebug to test them
  - JQuery is available as: "jQuery" is a namespace for "$"

3. Decide if you want to scrape resource or apps and change *i3a_type* in
   the code accordingly

4. Add the url part, your plugin will match in the comments on the top of the file.

5. Send us a pull request on github with your plugin.
