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
````
    // ['role-widgetstore.eu/tool', 'widget_store.js'],
    // or
    // ['www.google.com/ig/*/directory/*', 'google_gadget.js']
````
5. Send us a pull request on github with your plugin.

License - MIT
=============

Copyright (C) 2012 EPFL

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


