;(function ( $, window, document, undefined ) {
    
    var socialIcons = 'socialIcons',
        defaults = {
        	imgDir: "images",
        	iconDir: "social",
        	fileType: "png",
        	linkClass: "links",
        	links: {
	        	facebook : "http://facebook.com/viewsource",
				twitter: "http://twitter.com/planetoftheweb",
				flickr: "http://flickr.com/planetotheweb",
				youtube: "http://youtube.com/planetoftheweb"
        	}
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;       
        this._defaults = defaults;
        this._name = socialIcons;  
        this.init();
    }

    Plugin.prototype.init = function () {
        
        var list = $('<ul>').appendTo(this.element);
        var link;
        
        for (link in this.options.links) {
	        if (this.options.links.hasOwnProperty(link)) {
		        console.log(link + " " + this.options.links[link]);
		        
		        var item = $('<li>', {
			        id: link,
			        class: this.options.linkClass
		        }).appendTo(list);
		        
		        var href = $('<a>', {
			        src: this.options.links[link]
		        }).appendTo(item);
		        
		        $('<img>', {
			        src: this.options.imgDir 
			        	+ "/" + this.options.iconDir 
			        	+ "/" 
			        	+ link 
			        	+ "." 
			        	+ this.options.fileType,
			        alt: link
		        }).appendTo(href);
	        }
        }
    };

    $.fn[socialIcons] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + socialIcons)) {
                $.data(this, 'plugin_' + socialIcons, 
                new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );

