/**
 * PluginMock
 *
 * matches urls: 'www.plugin-mock.com/*item.html'
 */

function GraaspItScriptInit() {
  if (! graaspit.plugin) {
    alert('Graaspit plugin store missing, cannot create plugin "PluginMock" : operation aborted !');
  } else {
    new graaspit.plugin.GoogleGadget();
  }
}

graaspit.plugin.PluginMock = function () {
  this.manager = graaspit.instance; // Graaspit object that loaded the plugin
  this.manager.registerPlugin (this);
}

graaspit.plugin.PluginMock.prototype = {

  doRun : function () {
    var name, thumbnailUrl;
    var embed = this.findEmbedCode();
    if (embed != -1)  {
      name = this.findName();
      thumbnailUrl = this.findThumbnail();
      // will prompt std dialog
      this.manager.saveData(
        { name : name             // name to be shown for this item in Graaasp
        , embed : embed           // html code for this item to be embeded in Graasp
                                  // or url if this is an OpenSocial gadget
        , thumbnail: thumbnailUrl // url to the thumbnail picture of this item
        , i3a_type : "asset"      // type of of item in Graasp:
                                 // "asset" for resources, "widget" - for apps
        });
    } else {
      this.manager.displayError('Unable to find content, sorry');
    }
  },

  /**
   * Searches and returns the name of item to be grasped
   */
  findName: function(){
    // You have to implement your own DOM query here
    // Example:
    // if (document.title) {
    //   return document.title;
    // }
    return "";
  },

  /**
   * Searches and returns the thumbnail of item to be grasped
   */
  findThumbnail: function(){
    // You have to implement your own function here
    // Example:
    // return jQuery("#thumbnail");
    return "";
  },

  /**
   * Searches and returns the embed content of item to be grasped
   */
  findEmbedCode: function(){
    // You have to implement your own DOM query here
    // Example:
    // if (var embed = jQuery("#video_embed")) {
    //   return embed.innerHTML;
    // }
    return -1;
  }

}

// starts scrapper on load
setTimeout(GraaspItScriptInit, 100);

